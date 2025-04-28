import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ai-town',
  plugins: [react()],
  server: {
    allowedHosts: ['ai-town-your-app-name.fly.dev',
       'localhost', 
       '127.0.0.1',
       'vgjmme-ip-183-157-189-199.tunnelmole.net'
      ],

  },
});
