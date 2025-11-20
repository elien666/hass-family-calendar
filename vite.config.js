import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    base: './',
    build: {
      outDir: 'add-on/dist',
    },
    plugins: [react()],
    server: {
        proxy: {
            '/forecast': 'https://api.pirateweather.net',
            '/gti': 'http://gti.geofox.de'
        }
    },
  };
});