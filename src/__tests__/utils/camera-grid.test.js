import { describe, it, expect, vi, beforeEach } from 'vitest'
import React from 'react'
import { render, screen } from '@testing-library/react'

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
  accessTokens: { 'camera.front': 'tok123' },
  tokensLoading: false,
  tokensError: null,
  refreshTokens: vi.fn(),
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

  it('renders the MJPEG <img> when streamMode is mjpeg', () => {
    const { container } = render(renderGrid({ streamMode: "mjpeg", signaling: null }))
    const img = container.querySelector('img')
    expect(img).not.toBeNull()
    expect(img.getAttribute('src')).toBe('https://ha.test/api/camera_proxy_stream/camera.front?token=tok123')
    expect(container.querySelector('video')).toBeNull()
    expect(screen.getByText('MJPEG')).toBeInTheDocument()
    expect(useWebRtcStream).toHaveBeenCalledWith(expect.objectContaining({ enabled: false }))
    expect(baseProps.cameraImgRefs.current.size).toBe(1)
  })

  it('renders a <video> with spinner while WebRTC connects and no MJPEG stream', () => {
    Object.assign(webrtcState, { status: 'connecting' })
    const signaling = { id: 'sig' }
    const { container } = render(renderGrid({ streamMode: "webrtc", signaling }))
    expect(useWebRtcStream).toHaveBeenCalledWith({ entityId: 'camera.front', enabled: true, signaling, transport: 'auto' })
    expect(container.querySelector('video')).not.toBeNull()
    expect(container.querySelector('img.snapshot')).not.toBeNull()
    const src = container.querySelector('img.snapshot').getAttribute('src')
    expect(src).toMatch(/\/api\/camera_proxy\/camera\.front\?t=\d+$/)
    expect(src).not.toContain('token=')
    // no MJPEG stream and no "Verbinde…" text while the snapshot is showing
    expect(container.querySelectorAll('img')).toHaveLength(1)
    expect(screen.queryByText('Verbinde…')).toBeNull()
    expect(container.querySelector('.stream-status.with-snapshot')).not.toBeNull()
    expect(screen.getByText('WebRTC')).toBeInTheDocument()
  })

  it('shows the snapshot even before the camera token has arrived', () => {
    Object.assign(webrtcState, { status: 'connecting' })
    const { container } = render(renderGrid({ streamMode: "webrtc", signaling: {}, accessTokens: {}, tokensLoading: true }))
    expect(container.querySelector('img.snapshot')).not.toBeNull()
    expect(screen.queryByText('Verbinde…')).toBeNull()
  })

  it('binds the MediaStream to the video element once playing', () => {
    const stream = { id: 'remote' }
    Object.assign(webrtcState, { status: 'playing', stream, transport: 'tcp' })
    const { container } = render(renderGrid({ streamMode: "webrtc", signaling: {}, webrtcTransport: 'tcp' }))
    const video = container.querySelector('video')
    expect(video.srcObject).toBe(stream)
    expect(video.muted).toBe(true)
    expect(container.querySelector('img.snapshot')).toBeNull()
    expect(screen.queryByText('Verbinde…')).toBeNull()
    expect(screen.getByText('WebRTC (TCP)')).toBeInTheDocument()
    expect(useWebRtcStream).toHaveBeenLastCalledWith(expect.objectContaining({ transport: 'tcp' }))
  })

  it('falls back to MJPEG when WebRTC failed', () => {
    Object.assign(webrtcState, { status: 'failed', error: 'Zeitüberschreitung' })
    const { container } = render(renderGrid({ streamMode: "webrtc", signaling: {} }))
    expect(container.querySelector('video')).toBeNull()
    expect(container.querySelector('img')).not.toBeNull()
    expect(screen.getByText('MJPEG (Fallback)')).toBeInTheDocument()
  })

  it('shows the token error in the MJPEG path when no token is available', () => {
    Object.assign(webrtcState, { status: 'failed' })
    render(renderGrid({ accessTokens: {}, tokensError: "Kein Token", streamMode: "webrtc", signaling: {} }))
    expect(screen.getByText('Kein Token')).toBeInTheDocument()
  })
})
