import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'

vi.mock('../../utils/logger', () => ({
  default: { log: vi.fn(), debug: vi.fn(), warn: vi.fn(), error: vi.fn() },
}))
vi.mock('../../utils/mdi-icon', () => ({ default: () => null }))

const webrtcState = { stream: null, status: 'idle', error: null, transport: null }
vi.mock('../../utils/use-webrtc-stream', () => ({
  useWebRtcStream: vi.fn(() => webrtcState),
}))

import { useWebRtcStream } from '../../utils/use-webrtc-stream'
import CameraGrid from '../../components/camera-grid'

const cameras = [{ entity_id: 'camera.front', orientation: 'landscape' }]
const baseProps = {
  cameras,
  showDoorCams: true,
  cameraImgRefs: { current: new Map() },
  openDoor: vi.fn(),
  config: { HASS_HOST: 'https://ha.test' },
}

// Tests are plain .js (no JSX transform) — build elements by hand
const renderGrid = (overrides) => React.createElement(CameraGrid, { ...baseProps, ...overrides })

describe('CameraGrid', () => {
  beforeEach(() => {
    Object.assign(webrtcState, { stream: null, status: 'idle', error: null, transport: null })
    baseProps.cameraImgRefs.current.clear()
    // jsdom has no video.play()
    window.HTMLMediaElement.prototype.play = vi.fn(() => Promise.resolve())
  })

  it('renders the MJPEG <img> without a token when streamMode is mjpeg', () => {
    const { container } = render(renderGrid({ streamMode: 'mjpeg', signaling: null }))
    const img = container.querySelector('img:not(.snapshot)')
    expect(img).not.toBeNull()
    expect(img.getAttribute('src')).toMatch(/\/api\/camera_proxy_stream\/camera\.front$/)
    expect(container.querySelector('video')).toBeNull()
    expect(screen.getByText('MJPEG')).toBeInTheDocument()
    expect(useWebRtcStream).toHaveBeenCalledWith(expect.objectContaining({ enabled: false }))
    expect(baseProps.cameraImgRefs.current.size).toBe(1)
  })

  it('shows the snapshot immediately while WebRTC connects, no MJPEG stream', () => {
    Object.assign(webrtcState, { status: 'connecting' })
    const signaling = { id: 'sig' }
    const { container } = render(renderGrid({ streamMode: 'webrtc', signaling }))
    expect(useWebRtcStream).toHaveBeenCalledWith({
      entityId: 'camera.front', enabled: true, signaling, transport: 'auto', retryKey: 0,
    })
    expect(container.querySelector('video')).not.toBeNull()
    const snapshot = container.querySelector('img.snapshot')
    expect(snapshot).not.toBeNull()
    expect(snapshot.getAttribute('src')).toMatch(/\/api\/camera_proxy\/camera\.front\?t=\d+$/)
    expect(container.querySelectorAll('img')).toHaveLength(1)
    expect(screen.queryByText('Verbinde…')).toBeNull()
    expect(container.querySelector('.stream-status.with-snapshot')).not.toBeNull()
    // transport not known yet → no badge
    expect(container.querySelector('.stream-badge')).toBeNull()
  })

  it('does not open an MJPEG stream while the signaling client is still pending', () => {
    // first render after the overlay opens: WebRTC mode, but signaling not created yet
    const { container } = render(renderGrid({ streamMode: 'webrtc', signaling: null }))
    expect(container.querySelector('img:not(.snapshot)')).toBeNull()
    expect(container.querySelector('img.snapshot')).not.toBeNull()
    expect(container.querySelector('.stream-badge')).toBeNull()
    expect(useWebRtcStream).toHaveBeenCalledWith(expect.objectContaining({ enabled: false }))
  })

  it('falls back to the spinner text when the snapshot itself fails to load', () => {
    Object.assign(webrtcState, { status: 'connecting' })
    const { container } = render(renderGrid({ streamMode: 'webrtc', signaling: {} }))
    fireEvent.error(container.querySelector('img.snapshot'))
    expect(container.querySelector('img.snapshot')).toBeNull()
    expect(screen.getByText('Verbinde…')).toBeInTheDocument()
  })

  it('binds the MediaStream to the video element once playing and drops the snapshot', () => {
    const stream = { id: 'remote' }
    Object.assign(webrtcState, { status: 'playing', stream, transport: 'tcp' })
    const { container } = render(renderGrid({ streamMode: 'webrtc', signaling: {}, webrtcTransport: 'tcp' }))
    const video = container.querySelector('video')
    expect(video.srcObject).toBe(stream)
    expect(video.muted).toBe(true)
    expect(container.querySelector('img.snapshot')).toBeNull()
    expect(screen.getByText('TCP')).toBeInTheDocument()
    expect(useWebRtcStream).toHaveBeenLastCalledWith(expect.objectContaining({ transport: 'tcp' }))
  })

  it('falls back to MJPEG when WebRTC failed', () => {
    Object.assign(webrtcState, { status: 'failed', error: 'Zeitüberschreitung' })
    const { container } = render(renderGrid({ streamMode: 'webrtc', signaling: {} }))
    expect(container.querySelector('video')).toBeNull()
    expect(container.querySelector('img:not(.snapshot)')).not.toBeNull()
    expect(screen.getByText('MJPEG')).toBeInTheDocument()
  })

  it('skips WebRTC and MJPEG for an unavailable camera and shows the snapshot with a hint', () => {
    const { container } = render(renderGrid({
      streamMode: 'webrtc', signaling: {}, cameraStates: { 'camera.front': 'unavailable' },
    }))
    expect(useWebRtcStream).toHaveBeenCalledWith(expect.objectContaining({ enabled: false }))
    expect(container.querySelector('video')).toBeNull()
    expect(container.querySelector('img:not(.snapshot)')).toBeNull()
    expect(container.querySelector('img.snapshot')).not.toBeNull()
    expect(container.querySelector('.video-container.broken')).not.toBeNull()
    expect(screen.getByText('Kamera nicht erreichbar')).toBeInTheDocument()
  })

  it('re-enables the stream when the camera comes back', () => {
    const { rerender } = render(renderGrid({
      streamMode: 'webrtc', signaling: {}, cameraStates: { 'camera.front': 'unavailable' },
    }))
    rerender(renderGrid({ streamMode: 'webrtc', signaling: {}, cameraStates: { 'camera.front': 'recording' } }))
    expect(useWebRtcStream).toHaveBeenLastCalledWith(expect.objectContaining({ enabled: true }))
  })

  it('shows snapshot + hint when the MJPEG stream errors, and retries after the interval', () => {
    vi.useFakeTimers()
    try {
      const { container } = render(renderGrid({ streamMode: 'mjpeg', signaling: null }))
      fireEvent.error(container.querySelector('img:not(.snapshot)'))
      expect(container.querySelector('img:not(.snapshot)')).toBeNull()
      expect(container.querySelector('img.snapshot')).not.toBeNull()
      expect(screen.getByText('Stream nicht verfügbar')).toBeInTheDocument()

      act(() => { vi.advanceTimersByTime(31000) })
      expect(container.querySelector('img:not(.snapshot)')).not.toBeNull()
      expect(screen.getByText('MJPEG')).toBeInTheDocument()
    } finally {
      vi.useRealTimers()
    }
  })

  it('bumps retryKey for a failed WebRTC tile that has no MJPEG left', () => {
    vi.useFakeTimers()
    try {
      Object.assign(webrtcState, { status: 'failed', error: 'x' })
      const { container } = render(renderGrid({ streamMode: 'webrtc', signaling: {} }))
      fireEvent.error(container.querySelector('img:not(.snapshot)'))
      act(() => { vi.advanceTimersByTime(31000) })
      expect(useWebRtcStream).toHaveBeenLastCalledWith(expect.objectContaining({ retryKey: 1 }))
    } finally {
      vi.useRealTimers()
    }
  })
})
