import React from 'react'
import logger from './logger'
import {
  WEBRTC_CONNECT_TIMEOUT,
  WEBRTC_ICE_GATHER_TIMEOUT,
  WEBRTC_HOST_CANDIDATE_GRACE,
  WEBRTC_DECODE_TIMEOUT,
  WEBRTC_STATS_INTERVAL,
} from './constants'

const isHostCandidate = (candidate) =>
  typeof candidate?.candidate === 'string' && / typ host/i.test(candidate.candidate)

/**
 * Wait until the offer carries enough ICE candidates to send.
 *
 * Providers without trickle ICE (Frigate's own WebRTC class) answer a single
 * offer, so it must already contain the candidates. On a LAN the host
 * candidates are all that ever gets used and they arrive within milliseconds;
 * STUN/TURN gathering (`getCandidatesUpfront` false) would add up to 1.5 s for
 * candidates nobody needs. So: resolve `graceMs` after the first host
 * candidate, or when gathering completes, or at the cap — whichever is first.
 * With `waitForAll` (HA asked for candidates upfront) only completion or the
 * cap count.
 */
export const waitForIceCandidates = (pc, { timeoutMs, graceMs, waitForAll = false }) => new Promise((resolve) => {
  if (pc.iceGatheringState === 'complete') {
    resolve()
    return
  }
  let done = false
  let graceTimer = null
  const finish = () => {
    if (done) return
    done = true
    clearTimeout(capTimer)
    if (graceTimer) clearTimeout(graceTimer)
    pc.removeEventListener('icegatheringstatechange', onChange)
    pc.removeEventListener('icecandidate', onCandidate)
    resolve()
  }
  const onChange = () => {
    if (pc.iceGatheringState === 'complete') finish()
  }
  const onCandidate = (event) => {
    if (waitForAll || graceTimer || !isHostCandidate(event.candidate)) return
    graceTimer = setTimeout(finish, graceMs)
  }
  const capTimer = setTimeout(finish, timeoutMs)
  pc.addEventListener('icegatheringstatechange', onChange)
  pc.addEventListener('icecandidate', onCandidate)
})

export const isWebRtcSupported = () =>
  typeof window !== 'undefined' && typeof window.RTCPeerConnection === 'function'

const isUdpCandidateLine = (line) => /^a=candidate:\S+ \d+ udp /i.test(line.trim())

/**
 * Drop the remote UDP candidates from an SDP answer so ICE can only pair with
 * the TCP candidates go2rtc offers (host tcp passive). Used when UDP delivers
 * packets but keyframe bursts get lost and nothing decodes.
 */
export const stripUdpCandidates = (sdp) =>
  sdp.split('\n').filter((line) => !isUdpCandidateLine(line)).join('\n')

const isUdpCandidate = (candidate) =>
  typeof candidate?.candidate === 'string' && / udp /i.test(candidate.candidate)

/**
 * Order of transports to try. 'auto' starts with plain UDP (lowest latency)
 * and re-negotiates TCP-only when the UDP path connects but no frame decodes.
 */
export const transportSequence = (transport) => {
  if (transport === 'tcp') return ['tcp']
  if (transport === 'udp') return ['udp']
  return ['udp', 'tcp']
}

const readVideoStats = async (pc) => {
  if (typeof pc.getStats !== 'function') return null
  const report = await pc.getStats()
  let stats = null
  report.forEach((entry) => {
    if (entry.type === 'inbound-rtp' && (entry.kind === 'video' || entry.mediaType === 'video')) {
      stats = entry
    }
  })
  return stats
}

/**
 * Open a WebRTC stream for one HA camera entity through the backend relay.
 *
 * @param {Object} options
 * @param {string} options.entityId - camera entity (must be a configured doorbell camera)
 * @param {boolean} options.enabled - start/stop the stream
 * @param {WebRtcSignalingClient|null} options.signaling - shared signaling client
 * @param {'auto'|'udp'|'tcp'} [options.transport='auto'] - ICE transport strategy
 * @returns {{ stream: MediaStream|null, status: 'idle'|'connecting'|'playing'|'failed', error: string|null, transport: 'udp'|'tcp'|null }}
 */
export const useWebRtcStream = ({ entityId, enabled, signaling, transport = 'auto' }) => {
  const [stream, setStream] = React.useState(null)
  const [status, setStatus] = React.useState('idle')
  const [error, setError] = React.useState(null)
  const [activeTransport, setActiveTransport] = React.useState(null)

  React.useEffect(() => {
    if (!enabled || !entityId || !signaling) {
      setStream(null)
      setStatus('idle')
      setError(null)
      setActiveTransport(null)
      return undefined
    }

    if (!isWebRtcSupported()) {
      setStatus('failed')
      setError('WebRTC wird von diesem Browser nicht unterstützt')
      return undefined
    }

    let cancelled = false
    const logPrefix = `WebRTC[${entityId}]`
    const attempts = transportSequence(transport)
    let current = null // teardown of the running attempt

    const runAttempt = (mode) => new Promise((resolve) => {
      // resolve(null) = success (stream playing); resolve(message) = this attempt failed
      let pc = null
      let connectTimer = null
      let decodeTimer = null
      let statsTimer = null
      let sessionId = null
      let candidatesUpfront = false
      let settled = false
      const queuedCandidates = []
      const requestId = signaling.createRequestId()
      const tcpOnly = mode === 'tcp'

      const teardown = () => {
        if (connectTimer) clearTimeout(connectTimer)
        if (decodeTimer) clearTimeout(decodeTimer)
        if (statsTimer) clearInterval(statsTimer)
        connectTimer = decodeTimer = statsTimer = null
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

      const finish = (message) => {
        if (settled) return
        settled = true
        if (message !== null) teardown()
        resolve(message)
      }
      current = { teardown: () => { settled = true; teardown() } }

      const flushCandidates = () => {
        if (!sessionId) return
        while (queuedCandidates.length > 0) {
          signaling.sendCandidate(entityId, requestId, sessionId, queuedCandidates.shift())
        }
      }

      const startDecodeWatch = () => {
        // 'connected' only means ICE/DTLS are up. Declare success once frames
        // actually decode; if none arrive, the transport is unusable (typically
        // UDP keyframe-burst loss) and the next transport is tried.
        const check = async () => {
          if (settled || !pc) return
          try {
            const stats = await readVideoStats(pc)
            if (stats && stats.framesDecoded > 0) {
              if (decodeTimer) clearTimeout(decodeTimer)
              if (statsTimer) clearInterval(statsTimer)
              decodeTimer = statsTimer = null
              logger.debug(`${logPrefix} decoding frames via ${mode}`)
              setActiveTransport(mode)
              setStatus('playing')
              finish(null)
            }
          } catch (err) {
            logger.debug(`${logPrefix} getStats failed: ${err.message}`)
          }
        }
        statsTimer = setInterval(check, WEBRTC_STATS_INTERVAL)
        decodeTimer = setTimeout(async () => {
          if (settled || !pc) return
          const stats = await readVideoStats(pc).catch(() => null)
          const lost = stats?.packetsLost ?? '?'
          const received = stats?.packetsReceived ?? '?'
          finish(`Verbunden über ${mode}, aber kein Bild dekodiert (Pakete: ${received} empfangen, ${lost} verloren)`)
        }, WEBRTC_DECODE_TIMEOUT)
        check()
      }

      const onSignalingEvent = async (event) => {
        if (settled || !pc) return
        switch (event.type) {
          case 'session':
            sessionId = event.session_id
            flushCandidates()
            break
          case 'answer':
            try {
              const sdp = tcpOnly ? stripUdpCandidates(event.answer) : event.answer
              await pc.setRemoteDescription({ type: 'answer', sdp })
              logger.debug(`${logPrefix} remote description set (${mode})`)
            } catch (err) {
              finish(`Antwort konnte nicht verarbeitet werden: ${err.message}`)
            }
            break
          case 'candidate':
            if (event.candidate && !(tcpOnly && isUdpCandidate(event.candidate))) {
              try {
                await pc.addIceCandidate(event.candidate)
              } catch (err) {
                logger.debug(`${logPrefix} ignoring remote candidate: ${err.message}`)
              }
            }
            break
          case 'error':
            finish(event.message || event.code || 'Unbekannter WebRTC-Fehler')
            break
          default:
            break
        }
      }

      const negotiate = async () => {
        let configuration = {}
        if (tcpOnly) {
          // TCP pairs only with go2rtc's host candidate — STUN/TURN would just
          // slow gathering down. Skipping the client-config round-trip too.
          configuration = { iceServers: [] }
        } else {
          try {
            const clientConfig = await signaling.getClientConfig(entityId)
            configuration = clientConfig.configuration || {}
            candidatesUpfront = clientConfig.getCandidatesUpfront
          } catch (err) {
            // Not fatal: fall back to browser defaults (host candidates only)
            logger.debug(`${logPrefix} no client config, using defaults: ${err.message}`)
          }
        }
        if (settled) return

        try {
          pc = new RTCPeerConnection(configuration)
        } catch (err) {
          finish(`RTCPeerConnection konnte nicht erstellt werden: ${err.message}`)
          return
        }

        pc.addTransceiver('video', { direction: 'recvonly' })
        pc.addTransceiver('audio', { direction: 'recvonly' })

        pc.ontrack = (trackEvent) => {
          if (settled) return
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
          if (settled || candidatesUpfront || !iceEvent.candidate) return
          const candidate = iceEvent.candidate.toJSON ? iceEvent.candidate.toJSON() : iceEvent.candidate
          queuedCandidates.push(candidate)
          flushCandidates()
        }

        pc.onconnectionstatechange = () => {
          if (settled || !pc) return
          const state = pc.connectionState
          logger.debug(`${logPrefix} connection state (${mode}): ${state}`)
          if (state === 'connected') {
            if (connectTimer) {
              clearTimeout(connectTimer)
              connectTimer = null
            }
            startDecodeWatch()
          } else if (state === 'failed' || state === 'closed') {
            finish(`Verbindung über ${mode} fehlgeschlagen`)
          }
        }

        connectTimer = setTimeout(() => {
          finish(`Zeitüberschreitung beim Verbindungsaufbau (${mode})`)
        }, WEBRTC_CONNECT_TIMEOUT)

        try {
          const offer = await pc.createOffer()
          await pc.setLocalDescription(offer)
          // The offer must carry host candidates (Frigate's WebRTC class ignores
          // trickled ones); on a LAN they arrive within milliseconds. Trickle
          // continues afterwards where supported.
          await waitForIceCandidates(pc, {
            timeoutMs: WEBRTC_ICE_GATHER_TIMEOUT,
            graceMs: WEBRTC_HOST_CANDIDATE_GRACE,
            waitForAll: candidatesUpfront,
          })
          if (settled || !pc) return
          await signaling.sendOffer(entityId, requestId, pc.localDescription.sdp, onSignalingEvent)
          logger.debug(`${logPrefix} offer sent (${mode})`)
        } catch (err) {
          finish(`Angebot konnte nicht gesendet werden: ${err.message}`)
        }
      }

      negotiate()
    })

    const run = async () => {
      setStatus('connecting')
      setError(null)
      setStream(null)
      setActiveTransport(null)

      let lastError = null
      for (const mode of attempts) {
        if (cancelled) return
        setStream(null)
        const failure = await runAttempt(mode)
        if (cancelled) return
        if (failure === null) return // playing
        lastError = failure
        logger.warn(`${logPrefix} attempt via ${mode} failed: ${failure}`)
      }
      setError(lastError || 'WebRTC nicht verfügbar')
      setStatus('failed')
    }

    run()

    return () => {
      cancelled = true
      if (current) current.teardown()
    }
  }, [entityId, enabled, signaling, transport])

  return { stream, status, error, transport: activeTransport }
}

export default useWebRtcStream
