import { buildHaUrl } from './config'

/**
 * Camera media URLs. Both go through the backend (ingress session in the
 * add-on, Bearer token locally), so the frontend never needs the camera's
 * rotating access_token and the requests can start the moment the overlay opens.
 */

/** MJPEG stream (HA /api/camera_proxy_stream) — the fallback when WebRTC fails. */
export const buildCameraStreamUrl = (entityId, config = {}) =>
  entityId ? buildHaUrl(`/api/camera_proxy_stream/${entityId}`, config) : null

/**
 * Single JPEG snapshot (HA /api/camera_proxy, for Frigate cameras latest.jpg),
 * shown as poster while WebRTC negotiates and when a camera is down.
 * `cacheKey` busts the browser cache so a re-opened overlay shows a fresh frame.
 */
export const buildCameraSnapshotUrl = (entityId, config = {}, cacheKey = null) => {
  if (!entityId) {
    return null
  }
  const url = buildHaUrl(`/api/camera_proxy/${entityId}`, config)
  return cacheKey ? `${url}?t=${encodeURIComponent(cacheKey)}` : url
}
