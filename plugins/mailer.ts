import type { Plugin } from 'vite';
import nodemailer from 'nodemailer';

const RECIPIENT = process.env.CONTACT_EMAIL ?? 'info@aacec.sa';

function mailRecipient() {
  return RECIPIENT;
}

function json(res: any, status: number, body: unknown) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
}

async function readBody(req: any): Promise<any> {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk: Buffer) => (data += chunk));
    req.on('end', () => {
      try {
        resolve(JSON.parse(data || '{}'));
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

export function mailerPlugin(): Plugin {
  return {
    name: 'aacec-contact-mailer',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req: any, res: any) => {
        if (req.method !== 'POST') {
          return json(res, 405, { error: 'Method not allowed' });
        }

        const { name, phone, email, message } = await readBody(req);

        if (!name || !email || !message) {
          return json(res, 400, { error: 'Missing required fields' });
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
            from: `"Contact Form" <${process.env.SMTP_USER ?? 'noreply@aacec.sa'}>`,
            to: mailRecipient(),
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
        } catch (e: any) {
          console.error('Mailer error:', e);
          return json(res, 500, { error: e.message });
        }
      });
    },
  };
}