import React from 'react'
import { calculateOptimalTiling } from '../utils/video-tiling'
import { buildCameraStreamUrl, buildCameraSnapshotUrl } from '../utils/use-camera-access-tokens'
import { useWebRtcStream } from '../utils/use-webrtc-stream'
import Icon from '../utils/mdi-icon'
import { mdiLoading } from '@mdi/js'

const TokenError = ({ tokensLoading, tokensError, refreshTokens }) => (
  <div className="token-error">
    {tokensLoading ? (
      <>
        <Icon
          path={mdiLoading}
          size="48px"
          color="#ffffff"
          className="loading-spinner"
        />
        <div>Lade Token...</div>
      </>
    ) : (
      <>
        <div>{tokensError || 'Kamera-Token nicht verfügbar'}</div>
        <button onClick={(e) => { e.stopPropagation(); refreshTokens() }}>
          Token neu laden
        </button>
      </>
    )}
  </div>
)

/**
 * Legacy MJPEG path: <img> on HA's /api/camera_proxy_stream (needs the
 * camera's access_token). Capped at 2 fps for Frigate cameras — used when
 * WebRTC is disabled or failed.
 */
const MjpegStream = ({
  camera,
  orientation,
  index,
  accessToken,
  tokensLoading,
  tokensError,
  refreshTokens,
  showDoorCams,
  cameraImgRefs,
  config,
}) => {
  const hasToken = !!accessToken
  const streamUrl = buildCameraStreamUrl(camera.entity_id, accessToken, config)

  if (!hasToken || !streamUrl) {
    return (
      <TokenError
        tokensLoading={tokensLoading}
        tokensError={tokensError}
        refreshTokens={refreshTokens}
      />
    )
  }

  if (!showDoorCams) {
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
      crossOrigin="anonymous"
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
 * One camera tile. Tries WebRTC first (unless streamMode === 'mjpeg') and
 * falls back to the MJPEG <img> when the WebRTC connection fails.
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
  ...mjpegProps
}) => {
  const webrtcWanted = streamMode !== 'mjpeg' && !!signaling
  const { stream, status, error, transport } = useWebRtcStream({
    entityId: camera.entity_id,
    enabled: webrtcWanted && showDoorCams,
    signaling,
    transport: webrtcTransport,
  })

  const webrtcActive = webrtcWanted && (status === 'connecting' || status === 'playing')
  const useMjpeg = !webrtcWanted || status === 'failed'

  // Poster while WebRTC negotiates: HA's snapshot (Frigate latest.jpg) is there in
  // a few hundred ms and, unlike the MJPEG stream, needs no camera token — so it
  // is requested the moment the overlay opens. The cache key is fixed per overlay
  // session so the browser doesn't re-request it on every render, but does on the
  // next opening.
  const snapshotKeyRef = React.useRef(null)
  if (showDoorCams && snapshotKeyRef.current === null) snapshotKeyRef.current = Date.now()
  if (!showDoorCams) snapshotKeyRef.current = null
  const snapshotUrl = status === 'connecting'
    ? buildCameraSnapshotUrl(camera.entity_id, mjpegProps.config, snapshotKeyRef.current)
    : null

  return (
    <div className="video-container" style={style} data-stream={webrtcActive ? 'webrtc' : 'mjpeg'}>
      {webrtcActive && (
        <>
          <WebRtcVideo stream={stream} orientation={orientation} />
          {snapshotUrl && (
            <img
              className={`snapshot ${orientation}`}
              src={snapshotUrl}
              alt="Letztes Kamerabild"
            />
          )}
          {status === 'connecting' && (
            <div className={`stream-status ${snapshotUrl ? 'with-snapshot' : ''}`}>
              <Icon path={mdiLoading} size="40px" color="#ffffff" className="loading-spinner" />
              {!snapshotUrl && <div>Verbinde…</div>}
            </div>
          )}
        </>
      )}
      {useMjpeg && (
        <MjpegStream
          camera={camera}
          orientation={orientation}
          index={index}
          showDoorCams={showDoorCams}
          {...mjpegProps}
        />
      )}
      <div className="stream-badge" title={error || undefined}>
        {webrtcActive
          ? (transport ? `WebRTC (${transport.toUpperCase()})` : 'WebRTC')
          : (webrtcWanted ? 'MJPEG (Fallback)' : 'MJPEG')}
      </div>
      <div
        className="video-overlay"
        onClick={() => openDoor()}
      />
    </div>
  )
}

const CameraGrid = ({
  cameras,
  accessTokens,
  tokensLoading,
  tokensError,
  refreshTokens,
  showDoorCams,
  cameraImgRefs,
  openDoor,
  config,
  signaling = null,
  streamMode = 'webrtc',
  webrtcTransport = 'auto',
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
        accessToken={accessTokens[camera.entity_id] || null}
        tokensLoading={tokensLoading}
        tokensError={tokensError}
        refreshTokens={refreshTokens}
        cameraImgRefs={cameraImgRefs}
        config={config}
      />
    )
  })
}

export default CameraGrid
