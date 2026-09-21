import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

vi.mock('../../utils/logger', () => ({
  default: { log: vi.fn(), debug: vi.fn(), warn: vi.fn(), error: vi.fn() },
}))
vi.mock('../../utils/backend-websocket-url', () => ({
  getBackendWebSocketUrl: () => 'ws://backend.test/api/websocket',
}))

import { WebRtcSignalingClient } from '../../utils/webrtc-signaling'

/** Controllable fake WebSocket: tests open it and inject messages. */
class FakeSocket {
  static instances = []
  constructor(url) {
    this.url = url
    this.readyState = 0
    this.sent = []
    this.onopen = null
    this.onmessage = null
    this.onclose = null
    this.onerror = null
    FakeSocket.instances.push(this)
  }
  send(text) { this.sent.push(JSON.parse(text)) }
  close() {
    this.readyState = 3
    this.onclose && this.onclose({ code: 1000 })
  }
  open() { this.readyState = 1; this.onopen && this.onopen() }
  receive(obj) { this.onmessage && this.onmessage({ data: JSON.stringify(obj) }) }
}
FakeSocket.OPEN = 1

describe('WebRtcSignalingClient', () => {
  let originalWebSocket

  beforeEach(() => {
    vi.useFakeTimers()
    originalWebSocket = global.WebSocket
    FakeSocket.instances = []
    global.WebSocket = FakeSocket
  })

  afterEach(() => {
    global.WebSocket = originalWebSocket
    vi.useRealTimers()
  })

  const openClient = async () => {
    const client = new WebRtcSignalingClient({})
    const connecting = client.connect()
    const socket = FakeSocket.instances[0]
    socket.open()
    await connecting
    return { client, socket }
  }

  it('connects lazily to the backend relay URL', async () => {
    const { socket } = await openClient()
    expect(socket.url).toBe('ws://backend.test/api/websocket')
    expect(FakeSocket.instances).toHaveLength(1)
  })

  it('resolves getClientConfig from the matching webrtc_client_config reply', async () => {
    const { client, socket } = await openClient()
    const promise = client.getClientConfig('camera.front')
    await vi.advanceTimersByTimeAsync(0)

    const sent = socket.sent[0]
    expect(sent.type).toBe('webrtc_client_config')
    expect(sent.entity_id).toBe('camera.front')

    socket.receive({ type: 'webrtc_client_config', request_id: 'other', configuration: { iceServers: ['x'] } })
    socket.receive({
      type: 'webrtc_client_config',
      request_id: sent.request_id,
      entity_id: 'camera.front',
      configuration: { iceServers: [{ urls: 'stun:a' }] },
      get_candidates_upfront: true,
    })
    await expect(promise).resolves.toEqual({
      configuration: { iceServers: [{ urls: 'stun:a' }] },
      getCandidatesUpfront: true,
    })
  })

  it('rejects getClientConfig on webrtc_error and on timeout', async () => {
    const { client, socket } = await openClient()
    const failing = client.getClientConfig('camera.front')
    await vi.advanceTimersByTimeAsync(0)
    socket.receive({ type: 'webrtc_error', request_id: socket.sent[0].request_id, code: 'not_allowed', message: 'nope' })
    await expect(failing).rejects.toThrow('nope')

    const timingOut = expect(client.getClientConfig('camera.front')).rejects.toThrow(/Timed out/)
    await vi.advanceTimersByTimeAsync(10000)
    await timingOut
  })

  it('routes webrtc_event and webrtc_error to the offer handler until closeSession', async () => {
    const { client, socket } = await openClient()
    const events = []
    const requestId = client.createRequestId()
    await client.sendOffer('camera.front', requestId, 'v=0', (e) => events.push(e))

    expect(socket.sent[0]).toEqual({ type: 'webrtc_offer', entity_id: 'camera.front', request_id: requestId, offer: 'v=0' })

    socket.receive({ type: 'webrtc_event', request_id: requestId, event: { type: 'session', session_id: 's1' } })
    socket.receive({ type: 'webrtc_event', request_id: 'someone-else', event: { type: 'answer', answer: 'x' } })
    socket.receive({ type: 'webrtc_error', request_id: requestId, code: 'boom', message: 'failed' })
    expect(events).toEqual([
      { type: 'session', session_id: 's1' },
      { type: 'error', code: 'boom', message: 'failed' },
    ])

    await client.sendCandidate('camera.front', requestId, 's1', { candidate: 'c', sdpMLineIndex: 0 })
    expect(socket.sent[1]).toEqual({
      type: 'webrtc_candidate', entity_id: 'camera.front', request_id: requestId,
      session_id: 's1', candidate: { candidate: 'c', sdpMLineIndex: 0 },
    })

    client.closeSession(requestId)
    expect(socket.sent[2]).toEqual({ type: 'webrtc_close', request_id: requestId })
    socket.receive({ type: 'webrtc_event', request_id: requestId, event: { type: 'answer', answer: 'late' } })
    expect(events).toHaveLength(2)
  })

  it('fails everything in flight when the socket closes or the client is closed', async () => {
    const { client, socket } = await openClient()
    const events = []
    const requestId = client.createRequestId()
    await client.sendOffer('camera.front', requestId, 'v=0', (e) => events.push(e))
    const config = client.getClientConfig('camera.front')
    await vi.advanceTimersByTimeAsync(0)

    socket.close()
    await expect(config).rejects.toThrow(/closed/)
    expect(events).toEqual([{ type: 'error', code: 'signaling_closed', message: 'Signaling connection closed' }])

    client.close()
    await expect(client.connect()).rejects.toThrow(/closed/)
  })

  it('rejects connect when the socket never opens', async () => {
    const client = new WebRtcSignalingClient({})
    const connecting = expect(client.connect()).rejects.toThrow(/timed out/)
    await vi.advanceTimersByTimeAsync(10000)
    await connecting
  })
})
