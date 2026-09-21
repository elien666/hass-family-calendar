import { describe, it, expect } from 'vitest'
import { buildCameraStreamUrl, buildCameraSnapshotUrl } from '../../utils/camera-urls'
import { buildHaUrl } from '../../utils/config'

describe('camera proxy URLs', () => {
  const config = { HASS_HOST: 'https://ha.test/' }

  it('builds the MJPEG stream URL via the backend/ingress proxy without a camera token', () => {
    const url = buildCameraStreamUrl('camera.front', config)
    expect(url).toBe(buildHaUrl('/api/camera_proxy_stream/camera.front', config))
    expect(url).not.toContain('token=')
    expect(buildCameraStreamUrl(null, config)).toBeNull()
  })

  it('builds the snapshot URL with an optional cache key', () => {
    const base = buildHaUrl('/api/camera_proxy/camera.front', config)
    expect(buildCameraSnapshotUrl('camera.front', config, 42)).toBe(`${base}?t=42`)
    expect(buildCameraSnapshotUrl('camera.front', config)).toBe(base)
    expect(buildCameraSnapshotUrl(null, config)).toBeNull()
  })
})
