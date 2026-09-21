import { describe, it, expect } from 'vitest'
import { buildCameraStreamUrl, buildCameraSnapshotUrl } from '../../utils/use-camera-access-tokens'

describe('camera proxy URLs', () => {
  const config = { HASS_HOST: 'https://ha.test/' }

  it('builds the MJPEG stream URL with the token as query parameter', () => {
    expect(buildCameraStreamUrl('camera.front', 'abc', config))
      .toBe('https://ha.test/api/camera_proxy_stream/camera.front?token=abc')
    expect(buildCameraStreamUrl('camera.front', null, config))
      .toBe('https://ha.test/api/camera_proxy_stream/camera.front')
    expect(buildCameraStreamUrl(null, 'abc', config)).toBeNull()
  })

  it('builds the snapshot URL with token and cache key', () => {
    expect(buildCameraSnapshotUrl('camera.front', 'a b', config, 42))
      .toBe('https://ha.test/api/camera_proxy/camera.front?token=a+b&t=42')
    expect(buildCameraSnapshotUrl('camera.front', 'abc', config))
      .toBe('https://ha.test/api/camera_proxy/camera.front?token=abc')
  })

  it('falls back to the current origin without HASS_HOST', () => {
    expect(buildCameraSnapshotUrl('camera.front', 'abc', {}))
      .toBe(`${window.location.origin}/api/camera_proxy/camera.front?token=abc`)
  })
})
