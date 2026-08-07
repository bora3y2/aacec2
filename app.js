import { execSync } from 'node:child_process';
import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import nodemailer from 'nodemailer';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PORT = Number(process.env.PORT ?? 3000);
const RECIPIENT = process.env.CONTACT_EMAIL ?? 'info@aacec.sa';

const DIST_CANDIDATES = [
  join(__dirname, 'dist'),
  join(process.cwd(), 'dist'),
];

async function findDistDir() {
  for (const dir of DIST_CANDIDATES) {
    try {
      await stat(join(dir, 'index.html'));
      return dir;
    } catch {
      /* keep looking */
    }
  }
  return DIST_CANDIDATES[0];
}

async function ensureFrontend() {
  const distDir = await findDistDir();
  try {
    await stat(join(distDir, 'index.html'));
    return distDir;
  } catch {
    console.error(`dist/index.html missing. Attempting npm run build…`);
    execSync('npm run build', { stdio: 'inherit', cwd: __dirname });
    const rebuilt = await findDistDir();
    try {
      await stat(join(rebuilt, 'index.html'));
      return rebuilt;
    } catch {
      throw new Error(`Build ran but dist/index.html still missing in ${rebuilt}`);
    }
  }
}

function json(res, status, body) {
  res.status(status).json(body);
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

async function main() {
  const distDir = await ensureFrontend();
  const indexFile = join(distDir, 'index.html');

  const app = express();
  app.use(express.json());
  app.post('/api/contact', handleContact);
  app.use(express.static(distDir, { extensions: ['html'] }));
  app.get('*', async (req, res) => {
    try {
      const content = await readFile(indexFile);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.status(200).send(content);
    } catch {
      return json(res, 500, {
        error: 'Frontend build not found on server. Run npm run build before starting.',
      });
    }
  });

  app.listen(PORT, () => {
    console.log(`AACEC server running on port ${PORT}`);
    console.log(`Serving static files from ${distDir}`);
    console.log(`Contact form enabled via SMTP: ${Boolean(process.env.SMTP_HOST)}`);
  });
}

main().catch((err) => {
  console.error('Failed to start:', err);
  process.exit(1);
});