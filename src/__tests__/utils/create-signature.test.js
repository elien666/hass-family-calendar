import { describe, it, expect } from 'vitest'
import createSignature from '../../utils/create-signature'

describe('createSignature()', () => {
  const SECRET = 'test-secret-key'

  it('should return a base64 string', async () => {
    const sig = await createSignature({ test: 'data' }, SECRET)
    expect(sig).toMatch(/^[A-Za-z0-9+/=]+$/)
  })

  it('should be deterministic', async () => {
    const body = { action: 'getStops', id: '20008115' }
    const sig1 = await createSignature(body, SECRET)
    const sig2 = await createSignature(body, SECRET)
    expect(sig1).toBe(sig2)
  })

  it('should produce different signatures for different secrets', async () => {
    const body = { action: 'test' }
    const sig1 = await createSignature(body, 'secret-a')
    const sig2 = await createSignature(body, 'secret-b')
    expect(sig1).not.toBe(sig2)
  })

  it('should produce different signatures for different bodies', async () => {
    const sig1 = await createSignature({ id: '1' }, SECRET)
    const sig2 = await createSignature({ id: '2' }, SECRET)
    expect(sig1).not.toBe(sig2)
  })

  it('should preserve key insertion order (not sort)', async () => {
    const sig1 = await createSignature({ b: 1, a: 2 }, SECRET)
    const sig2 = await createSignature({ a: 2, b: 1 }, SECRET)
    // Different key order = different JSON.stringify = different signature
    expect(sig1).not.toBe(sig2)
  })

  it('should throw if secret is null', async () => {
    await expect(createSignature({ data: 'test' }, null))
      .rejects.toThrow('GEOFOX_SECRET')
  })

  it('should throw if secret is undefined', async () => {
    await expect(createSignature({ data: 'test' }, undefined))
      .rejects.toThrow('GEOFOX_SECRET')
  })

  it('should throw if secret is empty string', async () => {
    await expect(createSignature({ data: 'test' }, ''))
      .rejects.toThrow('GEOFOX_SECRET')
  })

  it('should handle unicode characters', async () => {
    const body = { station: 'Jungfernstieg', name: 'Björn' }
    const sig = await createSignature(body, SECRET)
    expect(sig).toBeDefined()
    expect(sig.length).toBeGreaterThan(0)
  })

  it('should handle nested objects', async () => {
    const body = {
      version: 55,
      station: { name: 'Wandsbek Markt', id: 'Master:20008115' },
      time: { date: '01.01.2024', time: '12:00' },
    }
    const sig = await createSignature(body, SECRET)
    expect(sig).toBeDefined()
  })

  it('should handle empty object', async () => {
    const sig = await createSignature({}, SECRET)
    expect(sig).toBeDefined()
    expect(sig.length).toBeGreaterThan(0)
  })
})
