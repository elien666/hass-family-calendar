import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env vars
  const env = loadEnv(mode, process.cwd(), '');
  
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
            // Note: These proxies are only used when running Vite dev server directly
            // When using the FastAPI backend (recommended), the backend handles all proxying
            // In development mode with credentials, frontend generates signatures directly
            '/forecast': 'https://api.pirateweather.net',
            '/gti': {
                target: 'https://gti.geofox.de',
                changeOrigin: true,
                secure: true,
                configure: (proxy, _options) => {
                    // Forward custom Geofox authentication headers from frontend request
                    proxy.on('proxyReq', (proxyReq, req, res) => {
                        // Forward geofox-auth-user header if present
                        if (req.headers['geofox-auth-user']) {
                            proxyReq.setHeader('geofox-auth-user', req.headers['geofox-auth-user'])
                        }
                        // Forward geofox-auth-signature header if present
                        if (req.headers['geofox-auth-signature']) {
                            proxyReq.setHeader('geofox-auth-signature', req.headers['geofox-auth-signature'])
                        }
                    })
                }
            },
            // Proxy Home Assistant API requests (optional - only if VITE_HASS_HOST is set)
            // This is only needed if you're NOT using the FastAPI backend
            // The FastAPI backend handles all API proxying, so this is optional
            ...(env.VITE_HASS_HOST ? {
                '/api': {
                    target: env.VITE_HASS_HOST,
                    changeOrigin: true,
                    secure: env.VITE_HASS_HOST.startsWith('https'),
                    rewrite: (path) => path, // Don't rewrite the path
                    configure: (proxy, _options) => {
                        proxy.on('proxyReq', (proxyReq, req, res) => {
                            // Add Authorization header if token is available
                            const token = env.VITE_HASS_ACCESS_TOKEN;
                            if (token) {
                                proxyReq.setHeader('Authorization', `Bearer ${token}`);
                            }
                        });
                    }
                }
            } : {})
        }
    },
  };
});