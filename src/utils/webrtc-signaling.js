import logger from './logger'
import { getBackendWebSocketUrl } from './backend-websocket-url'
import { WEBRTC_SIGNALING_TIMEOUT } from './constants'

/**
 * Thin signaling client for WebRTC camera streams.
 *
 * Opens one WebSocket to the backend relay (/api/websocket) and speaks the
 * webrtc_* subset of its protocol. The backend forwards the messages to Home
 * Assistant's camera/webrtc/* commands; the media itself flows directly
 * between the browser and HA's go2rtc and never touches the backend.
 *
 * One client is created per overlay session and shared by all camera tiles.
 */
export class WebRtcSignalingClient {
  constructor(config = {}) {
    this.url = getBackendWebSocketUrl(config)
    this.socket = null
    this.openPromise = null
    this.closed = false
    this.nextRequestId = 1
    this.pendingConfigs = new Map()   // request_id -> {resolve, reject, timer}
    this.eventHandlers = new Map()    // request_id -> handler(event)
  }

  /** Allocate a request id unique within this client. */
  createRequestId() {
    return `cam-${Date.now().toString(36)}-${this.nextRequestId++}`
  }

  /** Lazily open the socket; resolves once it is usable. */
  connect() {
    if (this.closed) {
      return Promise.reject(new Error('Signaling client is closed'))
    }
    if (this.openPromise) {
      return this.openPromise
    }
    if (!this.url) {
      return Promise.reject(new Error('Backend WebSocket URL is not available'))
    }

    this.openPromise = new Promise((resolve, reject) => {
      let settled = false
      let socket
      try {
        socket = new WebSocket(this.url)
      } catch (err) {
        this.openPromise = null
        reject(err)
        return
      }
      this.socket = socket

      const timer = setTimeout(() => {
        if (!settled) {
          settled = true
          try { socket.close() } catch { /* ignore */ }
          this.openPromise = null
          reject(new Error('Signaling connection timed out'))
        }
      }, WEBRTC_SIGNALING_TIMEOUT)

      socket.onopen = () => {
        if (settled) return
        settled = true
        clearTimeout(timer)
        logger.debug('WebRTC signaling connected')
        resolve(socket)
      }
      socket.onerror = (err) => {
        logger.debug('WebRTC signaling socket error', err)
      }
      socket.onclose = (event) => {
        logger.debug(`WebRTC signaling closed (code: ${event.code})`)
        if (!settled) {
          settled = true
          clearTimeout(timer)
          this.openPromise = null
          reject(new Error('Signaling connection closed before it opened'))
        }
        this._failAll(new Error('Signaling connection closed'))
        if (this.socket === socket) {
          this.socket = null
          this.openPromise = null
        }
      }
      socket.onmessage = (event) => this._handleMessage(event)
    })

    return this.openPromise
  }

  _handleMessage(event) {
    let data
    try {
      data = JSON.parse(event.data)
    } catch {
      return
    }
    const requestId = data.request_id

    if (data.type === 'webrtc_client_config') {
      const pending = this.pendingConfigs.get(requestId)
      if (pending) {
        clearTimeout(pending.timer)
        this.pendingConfigs.delete(requestId)
        pending.resolve({
          configuration: data.configuration || {},
          getCandidatesUpfront: !!data.get_candidates_upfront,
        })
      }
    } else if (data.type === 'webrtc_event') {
      const handler = this.eventHandlers.get(requestId)
      if (handler) handler(data.event || {})
    } else if (data.type === 'webrtc_error') {
      const pending = this.pendingConfigs.get(requestId)
      if (pending) {
        clearTimeout(pending.timer)
        this.pendingConfigs.delete(requestId)
        pending.reject(new Error(data.message || data.code || 'WebRTC error'))
        return
      }
      const handler = this.eventHandlers.get(requestId)
      if (handler) handler({ type: 'error', code: data.code, message: data.message })
    } else if (data.type === 'error') {
      logger.warn('WebRTC signaling protocol error:', data.message)
    }
    // state_update / pong etc. are not used on this socket
  }

  async _send(message) {
    const socket = await this.connect()
    if (socket.readyState !== WebSocket.OPEN) {
      throw new Error('Signaling socket is not open')
    }
    socket.send(JSON.stringify(message))
  }

  /** Ask HA for the RTCPeerConnection configuration (ICE servers) of a camera. */
  getClientConfig(entityId) {
    const requestId = this.createRequestId()
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pendingConfigs.delete(requestId)
        reject(new Error('Timed out waiting for WebRTC client config'))
      }, WEBRTC_SIGNALING_TIMEOUT)
      this.pendingConfigs.set(requestId, { resolve, reject, timer })
      this._send({ type: 'webrtc_client_config', entity_id: entityId, request_id: requestId })
        .catch((err) => {
          clearTimeout(timer)
          this.pendingConfigs.delete(requestId)
          reject(err)
        })
    })
  }

  /**
   * Send an SDP offer. `onEvent` receives HA's session/answer/candidate/error
   * events for this request until closeSession() is called.
   */
  async sendOffer(entityId, requestId, offerSdp, onEvent) {
    this.eventHandlers.set(requestId, onEvent)
    try {
      await this._send({ type: 'webrtc_offer', entity_id: entityId, request_id: requestId, offer: offerSdp })
    } catch (err) {
      this.eventHandlers.delete(requestId)
      throw err
    }
  }

  /** Forward a local ICE candidate (trickle ICE). */
  sendCandidate(entityId, requestId, sessionId, candidate) {
    return this._send({
      type: 'webrtc_candidate',
      entity_id: entityId,
      request_id: requestId,
      session_id: sessionId,
      candidate,
    }).catch((err) => logger.debug('Failed to send ICE candidate:', err))
  }

  /** End one camera session (HA closes the go2rtc session). */
  closeSession(requestId) {
    this.eventHandlers.delete(requestId)
    const socket = this.socket
    if (socket && socket.readyState === WebSocket.OPEN) {
      try {
        socket.send(JSON.stringify({ type: 'webrtc_close', request_id: requestId }))
      } catch { /* socket is going away anyway */ }
    }
  }

  _failAll(error) {
    this.pendingConfigs.forEach(({ reject, timer }) => {
      clearTimeout(timer)
      reject(error)
    })
    this.pendingConfigs.clear()
    this.eventHandlers.forEach((handler) => {
      try { handler({ type: 'error', code: 'signaling_closed', message: error.message }) } catch { /* ignore */ }
    })
    this.eventHandlers.clear()
  }

  /** Close the socket and fail everything still in flight. */
  close() {
    this.closed = true
    const socket = this.socket
    this.socket = null
    this.openPromise = null
    this._failAll(new Error('Signaling client closed'))
    if (socket) {
      try { socket.close() } catch { /* ignore */ }
    }
  }
}
