import { isDevelopment, buildWebSocketUrl } from './config'

/**
 * URL of the backend's client WebSocket endpoint (/api/websocket).
 *
 * In development the Vite dev server talks to the local FastAPI backend;
 * in production the URL is derived from the ingress path.
 */
export const getBackendWebSocketUrl = (config = {}) => {
  if (isDevelopment) {
    return 'ws://localhost:8000/api/websocket'
  }

  const url = buildWebSocketUrl(config)
  if (url) {
    return url
  }

  // Fallback if buildWebSocketUrl returns empty (shouldn't happen, but be safe)
  if (typeof window !== 'undefined' && window.location) {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
    return `${protocol}//${window.location.host}/api/websocket`
  }
  return ''
}
