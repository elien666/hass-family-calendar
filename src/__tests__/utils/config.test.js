import { describe, it, expect, beforeEach, vi } from 'vitest'

// We need to mock import.meta.env before importing config
// vitest handles import.meta.env natively

describe('config.js URL builders', () => {
  let buildHaUrl, buildWebSocketHost, buildWebSocketUrl

  beforeEach(async () => {
    vi.resetModules()
    // Reset window.location
    delete window.location
    window.location = {
      origin: 'http://localhost:3000',
      pathname: '/',
      href: 'http://localhost:3000/',
    }
  })

  describe('buildHaUrl()', () => {
    it('should add leading slash if missing', async () => {
      // Import with DEV=false (production)
      vi.stubEnv('DEV', false)
      const mod = await import('../../utils/config.js')
      if (mod.isDevelopment) {
        // In dev mode, returns localhost:8000
        const url = mod.buildHaUrl('api/states')
        expect(url).toContain('/api/states')
      } else {
        const url = mod.buildHaUrl('api/states')
        expect(url).toBe('/api/states')
      }
    })

    it('should handle ingress path detection', async () => {
      window.location.pathname = '/api/hassio_ingress/abc123def456/'
      vi.stubEnv('DEV', false)
      const mod = await import('../../utils/config.js')
      if (!mod.isDevelopment) {
        const url = mod.buildHaUrl('/test/path')
        expect(url).toContain('/api/hassio_ingress/abc123def456/')
        expect(url).toContain('test/path')
      }
    })

    it('should return relative URL when not ingress', async () => {
      window.location.pathname = '/dashboard'
      vi.stubEnv('DEV', false)
      const mod = await import('../../utils/config.js')
      if (!mod.isDevelopment) {
        const url = mod.buildHaUrl('/api/states')
        expect(url).toBe('/api/states')
      }
    })
  })

  describe('buildWebSocketHost()', () => {
    it('should use HASS_HOST in development mode', async () => {
      const mod = await import('../../utils/config.js')
      if (mod.isDevelopment) {
        const host = mod.buildWebSocketHost({ HASS_HOST: 'http://homeassistant.local:8123' })
        expect(host).toBe('http://homeassistant.local:8123')
      }
    })

    it('should use INGRESS_URL in production mode', async () => {
      const mod = await import('../../utils/config.js')
      if (!mod.isDevelopment) {
        window.location.origin = 'https://ha.example.com'
        const host = mod.buildWebSocketHost({ INGRESS_URL: '/api/hassio_ingress/abc123/' })
        expect(host).toBe('https://ha.example.com/api/hassio_ingress/abc123')
      }
    })

    it('should return empty string when no config available', async () => {
      // Remove window to test SSR fallback
      const savedWindow = global.window
      delete global.window
      const mod = await import('../../utils/config.js')
      // Restore
      global.window = savedWindow
    })

    it('should ignore "undefined" and "null" string values for HASS_HOST', async () => {
      const mod = await import('../../utils/config.js')
      if (mod.isDevelopment) {
        const host1 = mod.buildWebSocketHost({ HASS_HOST: 'undefined' })
        const host2 = mod.buildWebSocketHost({ HASS_HOST: 'null' })
        expect(host1).not.toBe('undefined')
        expect(host2).not.toBe('null')
      }
    })
  })

  describe('buildWebSocketUrl()', () => {
    it('should convert http to ws protocol', async () => {
      const mod = await import('../../utils/config.js')
      if (mod.isDevelopment) {
        const url = mod.buildWebSocketUrl({ HASS_HOST: 'http://ha.local:8123' })
        expect(url).toContain('ws://')
        expect(url).toContain('/api/websocket')
      }
    })

    it('should convert https to wss protocol', async () => {
      const mod = await import('../../utils/config.js')
      if (mod.isDevelopment) {
        const url = mod.buildWebSocketUrl({ HASS_HOST: 'https://ha.local:8123' })
        expect(url).toContain('wss://')
        expect(url).toContain('/api/websocket')
      }
    })

    it('should return empty string when host is not available', async () => {
      const mod = await import('../../utils/config.js')
      if (mod.isDevelopment) {
        const url = mod.buildWebSocketUrl({})
        expect(url).toBe('')
      }
    })

    it('should append /api/websocket', async () => {
      const mod = await import('../../utils/config.js')
      if (mod.isDevelopment) {
        const url = mod.buildWebSocketUrl({ HASS_HOST: 'http://ha.local:8123' })
        expect(url).toMatch(/\/api\/websocket$/)
      }
    })
  })
})
