import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { mailerPlugin } from './plugins/mailer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
  plugins: [react(), mailerPlugin()],
  define: {
    'import.meta.env.VITE_CONTACT_EMAIL': JSON.stringify(
      env.VITE_CONTACT_EMAIL ?? 'info@aacec.sa'
    ),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  };
});
