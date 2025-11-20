import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    base: './',
    build: {
      outDir: 'add-on/dist',
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Split vendor dependencies into separate chunks
            if (id.includes('node_modules')) {
              // React and ReactDOM
              if (id.includes('react') || id.includes('react-dom')) {
                return 'react-vendor';
              }
              
              // UI libraries
              if (id.includes('styled-components') || 
                  id.includes('react-toastify') || 
                  id.includes('react-loader-spinner') ||
                  id.includes('@mdi/')) {
                return 'ui-vendor';
              }
              
              // Date/time library
              if (id.includes('luxon')) {
                return 'date-vendor';
              }
              
              // Home Assistant library
              if (id.includes('home-assistant-js-websocket')) {
                return 'ha-vendor';
              }
              
              // Utility libraries
              if (id.includes('axios') || 
                  id.includes('qs') || 
                  id.includes('crypto-js')) {
                return 'utils-vendor';
              }
              
              // Chart/timeline library
              if (id.includes('merry-timeline')) {
                return 'chart-vendor';
              }
              
              // Other vendor dependencies
              return 'vendor';
            }
          }
        }
      }
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