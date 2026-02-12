import { describe, it, expect, beforeEach, vi } from 'vitest'

// Mock logger to prevent actual logging
vi.mock('../../utils/logger', () => ({
  default: {
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
    debug: vi.fn(),
  },
}))

import { extractErrorDetails, formatErrorForUI } from '../../utils/axios-error-handler'

describe('extractErrorDetails()', () => {
  it('should extract HTTP error with response', () => {
    const error = {
      message: 'Request failed',
      response: {
        status: 404,
        statusText: 'Not Found',
        data: { message: 'Entity not found' },
      },
      config: { url: '/api/states/sensor.test', method: 'get' },
    }
    const details = extractErrorDetails(error)
    expect(details.status).toBe(404)
    expect(details.message).toBe('Entity not found')
    expect(details.url).toBe('/api/states/sensor.test')
    expect(details.responseData).toEqual({ message: 'Entity not found' })
    expect(details.isNetworkError).toBe(false)
  })

  it('should detect network errors (no response)', () => {
    const error = {
      message: 'Network error',
      request: { readyState: 0 },
      config: { url: '/api/test' },
    }
    const details = extractErrorDetails(error)
    expect(details.isNetworkError).toBe(true)
    expect(details.message).toContain('Network error')
    expect(details.readyState).toBe(0)
  })

  it('should detect timeout errors', () => {
    const error = {
      code: 'ECONNABORTED',
      message: 'timeout of 5000ms exceeded',
      config: { url: '/api/slow' },
    }
    const details = extractErrorDetails(error)
    expect(details.isTimeoutError).toBe(true)
    expect(details.message).toContain('timeout')
  })

  it('should also detect timeout from message', () => {
    const error = {
      code: 'OTHER',
      message: 'Request timeout after 10s',
      config: { url: '/api/test' },
    }
    const details = extractErrorDetails(error)
    expect(details.isTimeoutError).toBe(true)
  })

  it('should redact Authorization header', () => {
    const error = {
      message: 'Unauthorized',
      response: { status: 401, data: {} },
      config: {
        url: '/api/test',
        method: 'get',
        headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.secret-token' },
      },
    }
    const details = extractErrorDetails(error)
    expect(details.config.headers.Authorization).toBe('[REDACTED]')
    expect(details.config.hasAuthHeader).toBe(true)
    // Original token should not appear anywhere in details
    expect(JSON.stringify(details)).not.toContain('secret-token')
  })

  it('should handle errors without config', () => {
    const error = { message: 'Something went wrong' }
    const details = extractErrorDetails(error)
    expect(details.message).toBe('Something went wrong')
    expect(details.config).toBeNull()
  })

  it('should handle errors without any properties', () => {
    const error = {}
    const details = extractErrorDetails(error)
    expect(details.message).toBe('Request setup error')
    expect(details.status).toBeNull()
  })

  it('should capture request method', () => {
    const error = {
      response: { status: 500, data: {} },
      config: { url: '/api/test', method: 'post', headers: {} },
    }
    const details = extractErrorDetails(error)
    expect(details.config.method).toBe('post')
  })

  it('should use statusText as fallback message', () => {
    const error = {
      response: { status: 503, statusText: 'Service Unavailable', data: {} },
      config: { url: '/api/test' },
    }
    const details = extractErrorDetails(error)
    expect(details.message).toBe('Service Unavailable')
  })

  it('should use generic HTTP message as final fallback', () => {
    const error = {
      response: { status: 502, statusText: '', data: {} },
      config: { url: '/api/test' },
    }
    const details = extractErrorDetails(error)
    expect(details.message).toContain('502')
  })
})

describe('formatErrorForUI()', () => {
  it('should return empty string for network errors', () => {
    const error = {
      request: { readyState: 0 },
      config: { url: '/api/test' },
      message: 'Network error',
    }
    const msg = formatErrorForUI(error)
    expect(msg).toBe('')
  })

  it('should return German timeout message', () => {
    const error = {
      code: 'ECONNABORTED',
      message: 'timeout',
      config: { url: '/api/test' },
    }
    const msg = formatErrorForUI(error)
    expect(msg).toContain('Zeitüberschreitung')
  })

  it('should return auth error message for 401', () => {
    const error = {
      response: { status: 401, data: {} },
      config: { url: '/api/test', headers: {} },
    }
    const msg = formatErrorForUI(error)
    expect(msg).toContain('Authentifizierungsfehler')
  })

  it('should return permission error for 403', () => {
    const error = {
      response: { status: 403, data: {} },
      config: { url: '/api/test', headers: {} },
    }
    const msg = formatErrorForUI(error)
    expect(msg).toContain('Berechtigungsfehler')
  })

  it('should return not-found message for 404', () => {
    const error = {
      response: { status: 404, data: {} },
      config: { url: '/api/test', headers: {} },
    }
    const msg = formatErrorForUI(error)
    expect(msg).toContain('Nicht gefunden')
  })

  it('should return server error for 500+', () => {
    const error = {
      response: { status: 500, data: {} },
      config: { url: '/api/test', headers: {} },
    }
    const msg = formatErrorForUI(error)
    expect(msg).toContain('Serverfehler')
  })

  it('should return generic message for unknown errors', () => {
    const error = { message: 'Something weird happened' }
    const msg = formatErrorForUI(error)
    expect(msg).toBeTruthy()
    expect(typeof msg).toBe('string')
  })
})
