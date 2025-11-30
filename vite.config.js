// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
    
      '/user': {
        target: 'https://deployment-dkf0.onrender.com',
        changeOrigin: true, // Needed for virtual hosting sites
        secure: true, // Only if your target is HTTPS
       
      },
    }
  }
});