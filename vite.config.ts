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
    'import.meta.env.VITE_MAP_ADDRESS': JSON.stringify(
      env.VITE_MAP_ADDRESS ?? 'Riyadh, Saudi Arabia'
    ),
    'import.meta.env.VITE_CONTACT_PHONE': JSON.stringify(
      env.VITE_CONTACT_PHONE ?? '+9660532755899'
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
