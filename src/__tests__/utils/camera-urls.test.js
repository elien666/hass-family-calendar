import { describe, it, expect } from 'vitest'
import { buildCameraStreamUrl, buildCameraSnapshotUrl } from '../../utils/use-camera-access-tokens'
import { buildHaUrl } from '../../utils/config'

describe('camera proxy URLs', () => {
  const config = { HASS_HOST: 'https://ha.test/' }

  it('builds the MJPEG stream URL with the token as query parameter', () => {
    expect(buildCameraStreamUrl('camera.front', 'abc', config))
      .toBe('https://ha.test/api/camera_proxy_stream/camera.front?token=abc')
    expect(buildCameraStreamUrl('camera.front', null, config))
      .toBe('https://ha.test/api/camera_proxy_stream/camera.front')
    expect(buildCameraStreamUrl(null, 'abc', config)).toBeNull()
  })

  it('builds the snapshot URL via the backend/ingress proxy without a camera token', () => {
    const base = buildHaUrl('/api/camera_proxy/camera.front', config)
    expect(buildCameraSnapshotUrl('camera.front', config, 42)).toBe(`${base}?t=42`)
    expect(buildCameraSnapshotUrl('camera.front', config)).toBe(base)
    expect(buildCameraSnapshotUrl(null, config)).toBeNull()
    expect(base).not.toContain('token=')
  })
})
