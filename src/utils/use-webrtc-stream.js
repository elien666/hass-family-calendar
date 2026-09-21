import React from 'react'
import logger from './logger'
import { WEBRTC_CONNECT_TIMEOUT, WEBRTC_ICE_GATHER_TIMEOUT } from './constants'

/**
 * Wait until the peer connection has gathered its ICE candidates (or a cap
 * elapses). Needed for providers that ignore trickled candidates — Frigate's
 * own WebRTC class answers a single, complete offer.
 */
const waitForIceGathering = (pc, timeoutMs) => new Promise((resolve) => {
  if (pc.iceGatheringState === 'complete') {
    resolve()
    return
  }
  let done = false
  const finish = () => {
    if (done) return
    done = true
    clearTimeout(timer)
    pc.removeEventListener('icegatheringstatechange', onChange)
    resolve()
  }
  const onChange = () => {
    if (pc.iceGatheringState === 'complete') finish()
  }
  const timer = setTimeout(finish, timeoutMs)
  pc.addEventListener('icegatheringstatechange', onChange)
})

export const isWebRtcSupported = () =>
  typeof window !== 'undefined' && typeof window.RTCPeerConnection === 'function'

/**
 * Open a WebRTC stream for one HA camera entity through the backend relay.
 *
 * @param {Object} options
 * @param {string} options.entityId - camera entity (must be a configured doorbell camera)
 * @param {boolean} options.enabled - start/stop the stream
 * @param {WebRtcSignalingClient|null} options.signaling - shared signaling client
 * @returns {{ stream: MediaStream|null, status: 'idle'|'connecting'|'playing'|'failed', error: string|null }}
 */
export const useWebRtcStream = ({ entityId, enabled, signaling }) => {
  const [stream, setStream] = React.useState(null)
  const [status, setStatus] = React.useState('idle')
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    if (!enabled || !entityId || !signaling) {
      setStream(null)
      setStatus('idle')
      setError(null)
      return undefined
    }

    if (!isWebRtcSupported()) {
      setStatus('failed')
      setError('WebRTC wird von diesem Browser nicht unterstützt')
      return undefined
    }

    let cancelled = false
    let pc = null
    let connectTimer = null
    let sessionId = null
    let candidatesUpfront = false
    const queuedCandidates = []
    const requestId = signaling.createRequestId()
    const logPrefix = `WebRTC[${entityId}]`

    const fail = (message) => {
      if (cancelled) return
      logger.warn(`${logPrefix} failed: ${message}`)
      setError(message)
      setStatus('failed')
      cleanup()
    }

    const cleanup = () => {
      if (connectTimer) {
        clearTimeout(connectTimer)
        connectTimer = null
      }
      signaling.closeSession(requestId)
      if (pc) {
        try {
          pc.ontrack = null
          pc.onicecandidate = null
          pc.onconnectionstatechange = null
          pc.close()
        } catch { /* ignore */ }
        pc = null
      }
    }

    const flushCandidates = () => {
      if (!sessionId) return
      while (queuedCandidates.length > 0) {
        signaling.sendCandidate(entityId, requestId, sessionId, queuedCandidates.shift())
      }
    }

    const onSignalingEvent = async (event) => {
      if (cancelled || !pc) return
      switch (event.type) {
        case 'session':
          sessionId = event.session_id
          flushCandidates()
          break
        case 'answer':
          try {
            await pc.setRemoteDescription({ type: 'answer', sdp: event.answer })
            logger.debug(`${logPrefix} remote description set`)
          } catch (err) {
            fail(`Antwort konnte nicht verarbeitet werden: ${err.message}`)
          }
          break
        case 'candidate':
          if (event.candidate) {
            try {
              await pc.addIceCandidate(event.candidate)
            } catch (err) {
              logger.debug(`${logPrefix} ignoring remote candidate: ${err.message}`)
            }
          }
          break
        case 'error':
          fail(event.message || event.code || 'Unbekannter WebRTC-Fehler')
          break
        default:
          break
      }
    }

    const start = async () => {
      setStatus('connecting')
      setError(null)
      setStream(null)

      let configuration = {}
      try {
        const clientConfig = await signaling.getClientConfig(entityId)
        configuration = clientConfig.configuration || {}
        candidatesUpfront = clientConfig.getCandidatesUpfront
      } catch (err) {
        // Not fatal: fall back to browser defaults (host candidates only)
        logger.debug(`${logPrefix} no client config, using defaults: ${err.message}`)
      }
      if (cancelled) return

      try {
        pc = new RTCPeerConnection(configuration)
      } catch (err) {
        fail(`RTCPeerConnection konnte nicht erstellt werden: ${err.message}`)
        return
      }

      pc.addTransceiver('video', { direction: 'recvonly' })
      pc.addTransceiver('audio', { direction: 'recvonly' })

      pc.ontrack = (trackEvent) => {
        if (cancelled) return
        const remote = trackEvent.streams && trackEvent.streams[0]
        if (remote) {
          setStream(remote)
        } else {
          setStream((prev) => {
            const next = prev || new MediaStream()
            next.addTrack(trackEvent.track)
            return next
          })
        }
      }

      pc.onicecandidate = (iceEvent) => {
        if (cancelled || candidatesUpfront || !iceEvent.candidate) return
        const candidate = iceEvent.candidate.toJSON ? iceEvent.candidate.toJSON() : iceEvent.candidate
        queuedCandidates.push(candidate)
        flushCandidates()
      }

      pc.onconnectionstatechange = () => {
        if (cancelled || !pc) return
        const state = pc.connectionState
        logger.debug(`${logPrefix} connection state: ${state}`)
        if (state === 'connected') {
          if (connectTimer) {
            clearTimeout(connectTimer)
            connectTimer = null
          }
          setStatus('playing')
        } else if (state === 'failed' || state === 'closed') {
          fail('Verbindung fehlgeschlagen')
        }
      }

      connectTimer = setTimeout(() => {
        fail('Zeitüberschreitung beim Verbindungsaufbau')
      }, WEBRTC_CONNECT_TIMEOUT)

      try {
        const offer = await pc.createOffer()
        await pc.setLocalDescription(offer)
        // Always wait briefly for gathering so the offer carries host candidates —
        // this is what providers without trickle ICE (Frigate) need, and it costs
        // only a few ms on a LAN. Trickle continues afterwards where supported.
        await waitForIceGathering(pc, WEBRTC_ICE_GATHER_TIMEOUT)
        if (cancelled || !pc) return
        await signaling.sendOffer(entityId, requestId, pc.localDescription.sdp, onSignalingEvent)
        logger.debug(`${logPrefix} offer sent`)
      } catch (err) {
        fail(`Angebot konnte nicht gesendet werden: ${err.message}`)
      }
    }

    start()

    return () => {
      cancelled = true
      cleanup()
    }
  }, [entityId, enabled, signaling])

  return { stream, status, error }
}

export default useWebRtcStream
