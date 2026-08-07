import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import nodemailer from 'nodemailer';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST_DIR = join(__dirname, 'dist');
const PORT = Number(process.env.PORT ?? 3000);
const RECIPIENT = process.env.CONTACT_EMAIL ?? 'info@aacec.sa';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.map': 'application/json',
  '.xml': 'application/xml',
  '.webmanifest': 'application/manifest+json',
};

function json(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => {
      try {
        resolve(JSON.parse(data || '{}'));
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

async function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const requested = normalize(url.pathname).replace(/^(\.\.[/\\])+/, '');
  let filePath = join(DIST_DIR, requested === '/' ? 'index.html' : requested);

  try {
    const info = await stat(filePath);
    if (info.isDirectory()) {
      filePath = join(filePath, 'index.html');
    }
  } catch {
    if (url.pathname.includes('.')) {
      json(res, 404, { error: 'Not found' });
      return;
    }
    filePath = join(DIST_DIR, 'index.html');
  }

  try {
    const content = await readFile(filePath);
    const type = MIME[extname(filePath).toLowerCase()] ?? 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(content);
  } catch {
    json(res, 404, { error: 'Not found' });
  }
}

async function handleContact(req, res) {
  if (req.method !== 'POST') {
    return json(res, 405, { error: 'Method not allowed' });
  }

  let body;
  try {
    body = await readBody(req);
  } catch {
    return json(res, 400, { error: 'Invalid JSON body' });
  }

  const { name, phone, email, message } = body;

  if (!name || !email || !message) {
    return json(res, 400, { error: 'Missing required fields' });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('SMTP env vars (SMTP_HOST, SMTP_USER, SMTP_PASS) are not set');
    return json(res, 500, { error: 'SMTP is not configured on the server' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nPhone: ${phone ?? '-'}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone ?? '-'}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <p>${message}</p>
      `,
    });
    return json(res, 200, { ok: true });
  } catch (err) {
    console.error('Mailer error:', err);
    return json(res, 500, { error: err.message });
  }
}

createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === '/api/contact') {
    return handleContact(req, res);
  }
  return serveStatic(req, res);
}).listen(PORT, () => {
  console.log(`AACEC server running on port ${PORT}`);
  console.log(`Serving static files from ${DIST_DIR}`);
  console.log(`Contact form enabled via SMTP: ${Boolean(process.env.SMTP_HOST)}`);
});