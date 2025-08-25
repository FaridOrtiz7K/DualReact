import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//import php from 'vite-plugin-php'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});