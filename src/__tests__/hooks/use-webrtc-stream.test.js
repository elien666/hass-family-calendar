import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'

vi.mock('../../utils/logger', () => ({
  default: { log: vi.fn(), debug: vi.fn(), warn: vi.fn(), error: vi.fn() },
}))

import { useWebRtcStream } from '../../utils/use-webrtc-stream'

/** Minimal RTCPeerConnection double driven by the tests. */
class FakePeerConnection {
  static instances = []
  constructor(configuration) {
    this.configuration = configuration
    this.connectionState = 'new'
    this.iceGatheringState = 'complete'
    this.localDescription = null
    this.remoteDescriptions = []
    this.addedCandidates = []
    this.transceivers = []
    this.closed = false
    this.listeners = {}
    this.ontrack = null
    this.onicecandidate = null
    this.onconnectionstatechange = null
    FakePeerConnection.instances.push(this)
  }
  addTransceiver(kind, init) { this.transceivers.push({ kind, init }) }
  addEventListener(name, fn) { (this.listeners[name] = this.listeners[name] || []).push(fn) }
  removeEventListener(name, fn) { this.listeners[name] = (this.listeners[name] || []).filter((f) => f !== fn) }
  async createOffer() { return { type: 'offer', sdp: 'v=0 offer' } }
  async setLocalDescription(desc) { this.localDescription = desc }
  async setRemoteDescription(desc) { this.remoteDescriptions.push(desc) }
  async addIceCandidate(c) { this.addedCandidates.push(c) }
  close() { this.closed = true }
  // test helpers
  setConnectionState(state) {
    this.connectionState = state
    this.onconnectionstatechange && this.onconnectionstatechange()
  }
}

const makeSignaling = ({ clientConfig } = {}) => {
  const signaling = {
    handlers: new Map(),
    createRequestId: vi.fn(() => 'req-1'),
    getClientConfig: vi.fn(async () => clientConfig || { configuration: { iceServers: [] }, getCandidatesUpfront: false }),
    sendOffer: vi.fn(async (entityId, requestId, sdp, onEvent) => { signaling.handlers.set(requestId, onEvent) }),
    sendCandidate: vi.fn(async () => {}),
    closeSession: vi.fn((requestId) => signaling.handlers.delete(requestId)),
  }
  signaling.emit = (event) => signaling.handlers.get('req-1')?.(event)
  return signaling
}

describe('useWebRtcStream()', () => {
  let originalPC

  beforeEach(() => {
    originalPC = global.RTCPeerConnection
    FakePeerConnection.instances = []
    global.RTCPeerConnection = FakePeerConnection
    global.MediaStream = class { constructor() { this.tracks = [] } addTrack(t) { this.tracks.push(t) } }
  })

  afterEach(() => {
    global.RTCPeerConnection = originalPC
    delete global.MediaStream
  })

  const flush = () => act(async () => { await Promise.resolve(); await Promise.resolve(); await Promise.resolve() })

  it('stays idle when disabled or without signaling', () => {
    const { result } = renderHook(() => useWebRtcStream({ entityId: 'camera.a', enabled: false, signaling: null }))
    expect(result.current).toEqual({ stream: null, status: 'idle', error: null })
    expect(FakePeerConnection.instances).toHaveLength(0)
  })

  it('negotiates: client config → offer → answer → playing with the remote stream', async () => {
    const signaling = makeSignaling({ clientConfig: { configuration: { iceServers: [{ urls: 'stun:x' }] }, getCandidatesUpfront: false } })
    const { result } = renderHook(() => useWebRtcStream({ entityId: 'camera.a', enabled: true, signaling }))
    expect(result.current.status).toBe('connecting')

    await flush()
    const pc = FakePeerConnection.instances[0]
    expect(pc.configuration).toEqual({ iceServers: [{ urls: 'stun:x' }] })
    expect(pc.transceivers.map((t) => t.kind)).toEqual(['video', 'audio'])
    expect(signaling.sendOffer).toHaveBeenCalledWith('camera.a', 'req-1', 'v=0 offer', expect.any(Function))

    // Local candidate before the session id is known is queued, then flushed
    act(() => { pc.onicecandidate({ candidate: { toJSON: () => ({ candidate: 'c1', sdpMLineIndex: 0 }) } }) })
    expect(signaling.sendCandidate).not.toHaveBeenCalled()
    act(() => { signaling.emit({ type: 'session', session_id: 'sess' }) })
    expect(signaling.sendCandidate).toHaveBeenCalledWith('camera.a', 'req-1', 'sess', { candidate: 'c1', sdpMLineIndex: 0 })

    await act(async () => { signaling.emit({ type: 'answer', answer: 'v=0 answer' }) })
    expect(pc.remoteDescriptions).toEqual([{ type: 'answer', sdp: 'v=0 answer' }])

    await act(async () => { signaling.emit({ type: 'candidate', candidate: { candidate: 'r1', sdpMLineIndex: 0 } }) })
    expect(pc.addedCandidates).toEqual([{ candidate: 'r1', sdpMLineIndex: 0 }])

    const remoteStream = { id: 'remote' }
    act(() => { pc.ontrack({ streams: [remoteStream], track: {} }) })
    act(() => { pc.setConnectionState('connected') })
    expect(result.current.status).toBe('playing')
    expect(result.current.stream).toBe(remoteStream)
    expect(result.current.error).toBeNull()
  })

  it('does not trickle candidates when HA wants them upfront', async () => {
    const signaling = makeSignaling({ clientConfig: { configuration: {}, getCandidatesUpfront: true } })
    renderHook(() => useWebRtcStream({ entityId: 'camera.a', enabled: true, signaling }))
    await flush()
    const pc = FakePeerConnection.instances[0]
    act(() => { pc.onicecandidate({ candidate: { toJSON: () => ({ candidate: 'c1' }) } }) })
    act(() => { signaling.emit({ type: 'session', session_id: 'sess' }) })
    expect(signaling.sendCandidate).not.toHaveBeenCalled()
  })

  it('falls back to default configuration when client config fails', async () => {
    const signaling = makeSignaling()
    signaling.getClientConfig.mockRejectedValue(new Error('relay down'))
    const { result } = renderHook(() => useWebRtcStream({ entityId: 'camera.a', enabled: true, signaling }))
    await flush()
    expect(FakePeerConnection.instances[0].configuration).toEqual({})
    expect(signaling.sendOffer).toHaveBeenCalled()
    expect(result.current.status).toBe('connecting')
  })

  it('reports failure on error events and closes the peer connection', async () => {
    const signaling = makeSignaling()
    const { result } = renderHook(() => useWebRtcStream({ entityId: 'camera.a', enabled: true, signaling }))
    await flush()
    const pc = FakePeerConnection.instances[0]
    act(() => { signaling.emit({ type: 'error', code: 'webrtc_offer_failed', message: 'Kamera kann kein WebRTC' }) })
    expect(result.current.status).toBe('failed')
    expect(result.current.error).toBe('Kamera kann kein WebRTC')
    expect(pc.closed).toBe(true)
    expect(signaling.closeSession).toHaveBeenCalledWith('req-1')
  })

  it('fails when the connection state becomes failed or the offer cannot be sent', async () => {
    const signaling = makeSignaling()
    const { result } = renderHook(() => useWebRtcStream({ entityId: 'camera.a', enabled: true, signaling }))
    await flush()
    act(() => { FakePeerConnection.instances[0].setConnectionState('failed') })
    expect(result.current.status).toBe('failed')

    const broken = makeSignaling()
    broken.sendOffer.mockRejectedValue(new Error('socket closed'))
    const second = renderHook(() => useWebRtcStream({ entityId: 'camera.b', enabled: true, signaling: broken }))
    await flush()
    expect(second.result.current.status).toBe('failed')
    expect(second.result.current.error).toMatch(/socket closed/)
  })

  it('times out when no connection is established', async () => {
    vi.useFakeTimers()
    try {
      const signaling = makeSignaling()
      const { result } = renderHook(() => useWebRtcStream({ entityId: 'camera.a', enabled: true, signaling }))
      await act(async () => { await vi.advanceTimersByTimeAsync(20) })
      expect(signaling.sendOffer).toHaveBeenCalled()
      await act(async () => { await vi.advanceTimersByTimeAsync(15000) })
      expect(result.current.status).toBe('failed')
      expect(result.current.error).toMatch(/Zeitüberschreitung/)
    } finally {
      vi.useRealTimers()
    }
  })

  it('tears down on disable and unmount', async () => {
    const signaling = makeSignaling()
    const { result, rerender, unmount } = renderHook(
      ({ enabled }) => useWebRtcStream({ entityId: 'camera.a', enabled, signaling }),
      { initialProps: { enabled: true } },
    )
    await flush()
    const pc = FakePeerConnection.instances[0]
    rerender({ enabled: false })
    expect(pc.closed).toBe(true)
    expect(signaling.closeSession).toHaveBeenCalledWith('req-1')
    expect(result.current.status).toBe('idle')

    rerender({ enabled: true })
    await flush()
    expect(FakePeerConnection.instances).toHaveLength(2)
    unmount()
    expect(FakePeerConnection.instances[1].closed).toBe(true)
  })

  it('fails immediately when the browser has no RTCPeerConnection', () => {
    delete global.RTCPeerConnection
    const signaling = makeSignaling()
    const { result } = renderHook(() => useWebRtcStream({ entityId: 'camera.a', enabled: true, signaling }))
    expect(result.current.status).toBe('failed')
    expect(signaling.sendOffer).not.toHaveBeenCalled()
  })
})
