import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import nodemailer from 'nodemailer';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST_DIR = join(__dirname, 'dist');
const PORT = Number(process.env.PORT ?? 3000);
const RECIPIENT = process.env.CONTACT_EMAIL ?? 'info@aacec.sa';

function json(res, status, body) {
  res.status(status).json(body);
}

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

async function serveIndex(req, res, next) {
  try {
    const content = await readFile(join(DIST_DIR, 'index.html'));
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(200).send(content);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error(`Missing ${join(DIST_DIR, 'index.html')} — did the build run?`);
      return json(res, 500, {
        error: 'Frontend build not found on server. Run npm run build before starting.',
      });
    }
    return next(err);
  }
}

async function handleContact(req, res) {
  const { name, phone, email, message } = req.body ?? {};

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

const app = express();
app.use(express.json());
app.post('/api/contact', handleContact);
app.use(express.static(DIST_DIR, { extensions: ['html'] }));
app.use(serveIndex);

app.listen(PORT, () => {
  console.log(`AACEC server running on port ${PORT}`);
  console.log(`Serving static files from ${DIST_DIR}`);
  console.log(`Contact form enabled via SMTP: ${Boolean(process.env.SMTP_HOST)}`);
});