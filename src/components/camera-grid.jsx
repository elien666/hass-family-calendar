import React from 'react'
import { calculateOptimalTiling } from '../utils/video-tiling'
import { buildCameraStreamUrl, buildCameraSnapshotUrl } from '../utils/camera-urls'
import { useWebRtcStream } from '../utils/use-webrtc-stream'
import { CAMERA_RETRY_INTERVAL } from '../utils/constants'
import Icon from '../utils/mdi-icon'
import { mdiLoading } from '@mdi/js'

/**
 * Legacy MJPEG path: <img> on HA's /api/camera_proxy_stream via the backend
 * (no camera token needed). Capped at 2 fps for Frigate cameras — used when
 * WebRTC is disabled or failed. `onFailed` fires when HA refuses the stream.
 */
const MjpegStream = ({ camera, orientation, index, cameraImgRefs, config, onFailed }) => {
  const streamUrl = buildCameraStreamUrl(camera.entity_id, config)
  if (!streamUrl) {
    return null
  }
  return (
    <img
      ref={(el) => {
        const refKey = `${camera.entity_id}-${index}`
        if (el) {
          cameraImgRefs.current.set(refKey, el)
        } else {
          cameraImgRefs.current.delete(refKey)
        }
      }}
      src={streamUrl}
      className={orientation}
      alt="Camera stream"
      onError={onFailed}
      key={`${camera.entity_id}-${index}`}
    />
  )
}

/** <video> bound to a MediaStream (WebRTC). */
const WebRtcVideo = ({ stream, orientation }) => {
  const videoRef = React.useRef(null)

  React.useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined
    video.srcObject = stream || null
    if (stream) {
      const playPromise = video.play()
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => { /* autoplay is muted, so this is rare — ignore */ })
      }
    }
    return () => {
      video.srcObject = null
    }
  }, [stream])

  return (
    <video
      ref={videoRef}
      className={orientation}
      autoPlay
      muted
      playsInline
      disablePictureInPicture
    />
  )
}

/**
 * One camera tile.
 *
 * - shows HA's snapshot immediately as poster
 * - tries WebRTC first (unless streamMode === 'mjpeg'), falls back to MJPEG
 * - a camera whose HA state is "unavailable" gets neither: snapshot + hint,
 *   and the stream starts by itself once the state changes
 * - failed tiles retry every CAMERA_RETRY_INTERVAL while the overlay is open
 */
const CameraTile = ({
  camera,
  orientation,
  index,
  style,
  streamMode,
  webrtcTransport,
  signaling,
  showDoorCams,
  openDoor,
  cameraImgRefs,
  config,
  cameraState,
}) => {
  const unavailable = cameraState === 'unavailable'
  // Mode intent vs. readiness: the signaling client is created in an effect after
  // the overlay opens, so it is null on the first render. Deciding "no WebRTC →
  // MJPEG" on that render would open MJPEG streams that get dropped a moment
  // later. Treat "WebRTC mode, signaling pending" as connecting instead.
  const webrtcMode = streamMode !== 'mjpeg'
  const webrtcWanted = webrtcMode && !!signaling
  const [retryKey, setRetryKey] = React.useState(0)
  const [mjpegFailed, setMjpegFailed] = React.useState(false)
  const [snapshotFailed, setSnapshotFailed] = React.useState(false)

  const { stream, status, error, transport } = useWebRtcStream({
    entityId: camera.entity_id,
    enabled: webrtcWanted && showDoorCams && !unavailable,
    signaling,
    transport: webrtcTransport,
    retryKey,
  })

  const webrtcPending = !unavailable && webrtcMode && (!signaling || status === 'idle' || status === 'connecting')
  const webrtcActive = !unavailable && webrtcWanted && (status === 'connecting' || status === 'playing')
  const useMjpeg = !unavailable && !mjpegFailed && (!webrtcMode || status === 'failed')
  const broken = unavailable || mjpegFailed

  // Fresh start when the overlay re-opens or the camera comes back
  React.useEffect(() => {
    setMjpegFailed(false)
    setSnapshotFailed(false)
  }, [showDoorCams, unavailable])

  // Periodic retry for tiles that failed (an unavailable camera is instead
  // restarted by its state change, see `enabled` above)
  const failed = showDoorCams && !unavailable && (mjpegFailed || (webrtcWanted && status === 'failed' && !useMjpeg))
  React.useEffect(() => {
    if (!failed) return undefined
    const timer = setTimeout(() => {
      setMjpegFailed(false)
      setRetryKey((key) => key + 1)
    }, CAMERA_RETRY_INTERVAL)
    return () => clearTimeout(timer)
  }, [failed, retryKey])

  // Poster: HA's snapshot (Frigate latest.jpg) needs no token and is there in a
  // few hundred ms. The cache key is fixed per overlay session so the browser
  // doesn't re-request it on every render, but does on the next opening.
  const snapshotKeyRef = React.useRef(null)
  if (showDoorCams && snapshotKeyRef.current === null) snapshotKeyRef.current = Date.now()
  if (!showDoorCams) snapshotKeyRef.current = null
  const showSnapshot = !snapshotFailed && (webrtcPending || broken)
  const snapshotUrl = showSnapshot
    ? buildCameraSnapshotUrl(camera.entity_id, config, snapshotKeyRef.current)
    : null

  // Badge: just the transport in use (TCP / UDP / MJPEG), nothing while the
  // transport is still being negotiated; a broken tile shows why instead.
  let badge = null
  let badgeTitle = error || undefined
  if (unavailable) {
    badge = 'Kamera nicht erreichbar'
    badgeTitle = `${camera.entity_id} ist in Home Assistant "unavailable"`
  } else if (mjpegFailed) {
    badge = 'Stream nicht verfügbar'
  } else if (webrtcActive && transport) {
    badge = transport.toUpperCase()
  } else if (useMjpeg) {
    badge = 'MJPEG'
  }

  return (
    <div
      className={`video-container${broken ? ' broken' : ''}`}
      style={style}
      data-stream={unavailable ? 'unavailable' : (webrtcActive ? 'webrtc' : 'mjpeg')}
    >
      {webrtcActive && <WebRtcVideo stream={stream} orientation={orientation} />}
      {snapshotUrl && (
        <img
          className={`snapshot ${orientation}`}
          src={snapshotUrl}
          alt="Letztes Kamerabild"
          onError={() => setSnapshotFailed(true)}
        />
      )}
      {webrtcPending && (
        <div className={`stream-status ${snapshotUrl ? 'with-snapshot' : ''}`}>
          <Icon path={mdiLoading} size="40px" color="#ffffff" className="loading-spinner" />
          {!snapshotUrl && <div>Verbinde…</div>}
        </div>
      )}
      {broken && !snapshotUrl && (
        <div className="stream-status">
          <div>{badge}</div>
        </div>
      )}
      {useMjpeg && (
        <MjpegStream
          camera={camera}
          orientation={orientation}
          index={index}
          cameraImgRefs={cameraImgRefs}
          config={config}
          onFailed={() => setMjpegFailed(true)}
        />
      )}
      {badge && <div className="stream-badge" title={badgeTitle}>{badge}</div>}
      <div
        className="video-overlay"
        onClick={() => openDoor()}
      />
    </div>
  )
}

const CameraGrid = ({
  cameras,
  showDoorCams,
  cameraImgRefs,
  openDoor,
  config,
  signaling = null,
  streamMode = 'webrtc',
  webrtcTransport = 'auto',
  cameraStates = {},
}) => {
  if (cameras.length === 0) {
    return null
  }

  const videos = cameras.map(cam => ({
    orientation: cam.orientation || 'landscape'
  }))

  const canvasWidth = window.innerWidth
  const canvasHeight = window.innerHeight - 10
  const layout = calculateOptimalTiling(videos, canvasWidth, canvasHeight)

  const camerasByOrientation = {
    portrait: cameras.filter(cam => (cam.orientation || 'landscape') === 'portrait'),
    landscape: cameras.filter(cam => (cam.orientation || 'landscape') === 'landscape'),
    wide: cameras.filter(cam => cam.orientation === 'wide'),
  }

  const usedIndices = { portrait: 0, landscape: 0, wide: 0 }

  return layout.videos.map((videoLayout, index) => {
    const orientation = videoLayout.orientation
    const cameraIndex = usedIndices[orientation]
    const camera = camerasByOrientation[orientation][cameraIndex]

    if (!camera) {
      return null
    }

    usedIndices[orientation]++

    const style = {
      left: `${videoLayout.x}px`,
      top: `${videoLayout.y}px`,
      width: `${videoLayout.width}px`,
      height: `${videoLayout.height}px`,
    }

    return (
      <CameraTile
        key={`${camera.entity_id}-${orientation}-${cameraIndex}-${index}`}
        camera={camera}
        orientation={orientation}
        index={index}
        style={style}
        streamMode={streamMode}
        webrtcTransport={webrtcTransport}
        signaling={signaling}
        showDoorCams={showDoorCams}
        openDoor={openDoor}
        cameraImgRefs={cameraImgRefs}
        config={config}
        cameraState={cameraStates[camera.entity_id]}
      />
    )
  })
}

export default CameraGrid
