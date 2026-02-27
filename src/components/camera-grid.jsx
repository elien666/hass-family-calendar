import React from 'react'
import { calculateOptimalTiling } from '../utils/video-tiling'
import { buildCameraStreamUrl } from '../utils/use-camera-access-tokens'
import Icon from '@mdi/react'
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
        <button onClick={refreshTokens}>
          Token neu laden
        </button>
      </>
    )}
  </div>
)

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

    const accessToken = accessTokens[camera.entity_id] || null
    const hasToken = !!accessToken
    const streamUrl = buildCameraStreamUrl(camera.entity_id, accessToken, config)
    const key = `${orientation}-${cameraIndex}-${index}`
    const style = {
      left: `${videoLayout.x}px`,
      top: `${videoLayout.y}px`,
      width: `${videoLayout.width}px`,
      height: `${videoLayout.height}px`,
    }

    if (!streamUrl && !hasToken) {
      return (
        <div key={key} className="video-container" style={style}>
          <TokenError
            tokensLoading={tokensLoading}
            tokensError={tokensError}
            refreshTokens={refreshTokens}
          />
        </div>
      )
    }

    if (!streamUrl) {
      return null
    }

    return (
      <div key={key} className="video-container" style={style}>
        {hasToken && showDoorCams && (
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
        )}
        {!hasToken && (
          <TokenError
            tokensLoading={tokensLoading}
            tokensError={tokensError}
            refreshTokens={refreshTokens}
          />
        )}
        <div
          className="video-overlay"
          onClick={() => openDoor()}
        />
      </div>
    )
  })
}

export default CameraGrid
