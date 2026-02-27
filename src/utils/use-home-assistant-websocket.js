import React from 'react'
import { useConfig } from './ConfigProvider'
import { isDevelopment, buildWebSocketUrl } from './config'
import logger from './logger'
import { useConnectionStateContext } from './ConnectionStateProvider'
import { WS_HEARTBEAT_INTERVAL, WS_HEARTBEAT_TIMEOUT, WS_PERIODIC_RETRY_INTERVAL, WS_RECONNECT_DEBOUNCE } from './constants'

/**
 * Reusable hook for Home Assistant WebSocket connections using custom FastAPI protocol
 * 
 * @param {Object} options
 * @param {Function} options.onReady - Called when connection is ready. Receives entity_id and callback function for state updates
 * @param {boolean} [options.enabled=true] - Whether to connect
 * @param {boolean} [options.checkBackendConnection=true] - Check isConnected from ConnectionStateProvider
 * @param {'simple'|'exponential'} [options.reconnectStrategy='simple'] - Reconnection strategy
 * @param {number} [options.maxReconnectAttempts=5] - Max reconnect attempts for exponential strategy
 * @param {number} [options.reconnectDelay=2000] - Base delay in ms for reconnection
 * @param {string} [options.logPrefix='WebSocket'] - Prefix for log messages
 * @param {Array} [options.dependencies=[]] - Dependencies that trigger reconnection
 * @returns {{connection: WebSocket|null, error: string|false, isConnecting: boolean}}
 */
export function useHomeAssistantWebSocket({
  onReady,
  enabled = true,
  checkBackendConnection = true,
  reconnectStrategy = 'simple',
  maxReconnectAttempts = 5,
  reconnectDelay = 2000,
  logPrefix = 'WebSocket',
  dependencies = [],
}) {
  const config = useConfig()
  const connectionState = useConnectionStateContext()
  const isConnected = checkBackendConnection ? connectionState?.isConnected : true

  const [error, setError] = React.useState(false)
  const [isConnecting, setIsConnecting] = React.useState(false)

  // Internal state
  const connectionRef = React.useRef(null)
  const unsubscribeRef = React.useRef(null)
  const isMountedRef = React.useRef(true)
  const reconnectTimeoutRef = React.useRef(null)
  const reconnectDebounceTimeoutRef = React.useRef(null)
  const periodicRetryTimeoutRef = React.useRef(null) // For periodic retries when backend is down
  const reconnectAttemptsRef = React.useRef(0)
  const isConnectingRef = React.useRef(false)
  const stoppedReconnectingRef = React.useRef(false) // Track if we've stopped aggressive reconnection
  const subscriptionsRef = React.useRef(new Map()) // {entity_id: callback}
  const heartbeatIntervalRef = React.useRef(null)
  const heartbeatTimeoutRef = React.useRef(null)
  const connectRef = React.useRef(null)
  const isConnectedRef = React.useRef(isConnected)

  // Keep isConnectedRef in sync (avoids stale closures in WebSocket event handlers)
  isConnectedRef.current = isConnected

  // Cleanup function
  const cleanup = React.useCallback(() => {
    const connection = connectionRef.current
    const unsubscribe = unsubscribeRef.current

    // Clear timeouts
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current)
      reconnectTimeoutRef.current = null
    }
    if (reconnectDebounceTimeoutRef.current) {
      clearTimeout(reconnectDebounceTimeoutRef.current)
      reconnectDebounceTimeoutRef.current = null
    }
    if (periodicRetryTimeoutRef.current) {
      clearTimeout(periodicRetryTimeoutRef.current)
      periodicRetryTimeoutRef.current = null
    }
    if (heartbeatIntervalRef.current) {
      clearInterval(heartbeatIntervalRef.current)
      heartbeatIntervalRef.current = null
    }
    if (heartbeatTimeoutRef.current) {
      clearTimeout(heartbeatTimeoutRef.current)
      heartbeatTimeoutRef.current = null
    }

    // Unsubscribe from all entities
    if (connection && connection.readyState === WebSocket.OPEN) {
      subscriptionsRef.current.forEach((callback, entityId) => {
        try {
          connection.send(JSON.stringify({
            type: 'unsubscribe_entity',
            entity_id: entityId
          }))
        } catch (err) {
          logger.debug(`Error unsubscribing from ${entityId} for ${logPrefix}:`, err)
        }
      })
      subscriptionsRef.current.clear()
    }

    // Close connection
    if (connection) {
      try {
        connection.close()
      } catch (err) {
        logger.debug(`Error closing connection for ${logPrefix}:`, err)
      }
      connectionRef.current = null
    }

    unsubscribeRef.current = null
  }, [logPrefix])

  // Connection function
  const connect = React.useCallback(async () => {
    // Skip if not enabled or not mounted
    if (!enabled || !isMountedRef.current) {
      return
    }

    // Check backend connection if required
    if (checkBackendConnection && !isConnectedRef.current) {
      logger.debug(`Skipping ${logPrefix} connection - backend not connected`)
      return
    }

    // Prevent multiple simultaneous connection attempts
    if (isConnectingRef.current) {
      return
    }

    // Close existing connection if any
    if (connectionRef.current) {
      cleanup()
    }

    isConnectingRef.current = true
    setIsConnecting(true)

    try {
      // Build WebSocket URL - always use FastAPI endpoint (not direct HA connection)
      // In development: connect to local FastAPI server
      // In production: use buildWebSocketUrl which properly handles ingress paths
      let wsUrl
      if (isDevelopment) {
        wsUrl = 'ws://localhost:8000/api/websocket'
      } else {
        // Use buildWebSocketUrl to properly handle ingress URLs
        wsUrl = buildWebSocketUrl(config)
        
        // Fallback if buildWebSocketUrl returns empty (shouldn't happen, but be safe)
        if (!wsUrl) {
          // Detect protocol from current page
          const protocol = typeof window !== 'undefined' && window.location.protocol === 'https:' ? 'wss:' : 'ws:'
          const host = typeof window !== 'undefined' && window.location.host ? window.location.host : ''
          wsUrl = `${protocol}//${host}/api/websocket`
        }
      }

      if (!wsUrl) {
        logger.error(`Failed to build WebSocket URL for ${logPrefix} - cannot connect`)
        if (isMountedRef.current) {
          setError('WebSocket URL konnte nicht erstellt werden.')
        }
        isConnectingRef.current = false
        setIsConnecting(false)
        return
      }

      logger.debug(`${logPrefix} connecting to: ${wsUrl}`)

      // Create WebSocket connection
      const connection = new WebSocket(wsUrl)
      connectionRef.current = connection

      // Handle connection open
      connection.onopen = () => {
        if (!isMountedRef.current) {
          connection.close()
          return
        }

        logger.debug(`${logPrefix} connection opened`)
        reconnectAttemptsRef.current = 0
        stoppedReconnectingRef.current = false // Reset stopped flag on successful connection
        // Clear periodic retry since we're connected
        if (periodicRetryTimeoutRef.current) {
          clearTimeout(periodicRetryTimeoutRef.current)
          periodicRetryTimeoutRef.current = null
        }
        if (isMountedRef.current) {
          setError(false)
        }
        isConnectingRef.current = false
        setIsConnecting(false)

        // Call onReady callback to set up subscriptions
        if (onReady) {
          try {
            // onReady receives (entityId, callback) and should return unsubscribe function
            const unsubscribe = onReady(connection, subscriptionsRef)
            unsubscribeRef.current = unsubscribe
          } catch (subscribeErr) {
            logger.error(`Failed to subscribe for ${logPrefix}:`, subscribeErr)
            if (isMountedRef.current) {
              setError(subscribeErr instanceof Error ? subscribeErr.message : String(subscribeErr))
            }
          }
        }

        // Start application-level heartbeat every 30s.
        // If the backend doesn't respond with a pong within 10s, assume the
        // connection is dead and trigger a reconnect.
        if (heartbeatIntervalRef.current) clearInterval(heartbeatIntervalRef.current)
        heartbeatIntervalRef.current = setInterval(() => {
          if (connection.readyState !== WebSocket.OPEN) return
          try {
            connection.send(JSON.stringify({ type: 'ping' }))
          } catch { return } // send failed — onclose will handle it
          heartbeatTimeoutRef.current = setTimeout(() => {
            logger.warn(`${logPrefix} heartbeat timeout — closing stale connection`)
            try { connection.close(4000, 'heartbeat timeout') } catch {}
          }, WS_HEARTBEAT_TIMEOUT)
        }, WS_HEARTBEAT_INTERVAL)
      }

      // Handle messages
      connection.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)

          // Handle state_update
          if (data.type === 'state_update') {
            const entityId = data.entity_id
            const callback = subscriptionsRef.current.get(entityId)
            if (callback) {
              callback(data)
            }
          }
          // Handle state_response
          else if (data.type === 'state_response') {
            const entityId = data.entity_id
            const callback = subscriptionsRef.current.get(entityId)
            if (callback) {
              callback(data)
            }
          }
          // Handle pong (heartbeat response) — clear the timeout
          else if (data.type === 'pong') {
            if (heartbeatTimeoutRef.current) {
              clearTimeout(heartbeatTimeoutRef.current)
              heartbeatTimeoutRef.current = null
            }
          }
          // Handle error
          else if (data.type === 'error') {
            logger.error(`${logPrefix} received error:`, data.message)
            if (isMountedRef.current) {
              setError(data.message)
            }
          }
        } catch (err) {
          logger.error(`Error handling message for ${logPrefix}:`, err)
        }
      }

      // Handle connection close
      connection.onclose = (event) => {
        if (isMountedRef.current && !isConnectingRef.current) {
          logger.debug(`${logPrefix} disconnected (code: ${event.code}, wasClean: ${event.wasClean})`)

          // Clear connection reference
          connectionRef.current = null
          subscriptionsRef.current.clear()
          unsubscribeRef.current = null

          // Clear any existing reconnect timeout
          if (reconnectTimeoutRef.current) {
            clearTimeout(reconnectTimeoutRef.current)
            reconnectTimeoutRef.current = null
          }

          // If connection never opened (code 1006 = abnormal closure, or immediate close)
          // and we've tried multiple times, stop aggressive reconnecting but set up periodic retry
          const neverOpened = !event.wasClean && (event.code === 1006 || reconnectAttemptsRef.current > 0)
          if (neverOpened && reconnectAttemptsRef.current >= 5 && !stoppedReconnectingRef.current) {
            logger.warn(`Backend appears to be down for ${logPrefix} (${reconnectAttemptsRef.current} failed attempts), switching to periodic retry every ${WS_PERIODIC_RETRY_INTERVAL / 1000}s`)
            stoppedReconnectingRef.current = true
            if (isMountedRef.current) {
              setError('Backend nicht erreichbar. Wiederherstellungsversuche alle 60 Sekunden.')
            }
            // Set up periodic retry every 60 seconds
            const schedulePeriodicRetry = () => {
              periodicRetryTimeoutRef.current = setTimeout(() => {
                if (isMountedRef.current && !isConnectingRef.current && isConnectedRef.current && stoppedReconnectingRef.current) {
                  logger.debug(`Periodic retry attempt for ${logPrefix} (backend might be back up)`)
                  reconnectAttemptsRef.current = 0 // Reset attempts for periodic retry
                  connectRef.current()
                  // Schedule next retry
                  schedulePeriodicRetry()
                }
              }, WS_PERIODIC_RETRY_INTERVAL)
            }
            schedulePeriodicRetry()
            return
          }
          
          // If we've stopped aggressive reconnection, don't try again here (periodic retry will handle it)
          if (stoppedReconnectingRef.current) {
            return
          }

          // Stop reconnecting if we've exceeded max attempts (exponential strategy)
          if (reconnectStrategy === 'exponential' && reconnectAttemptsRef.current >= maxReconnectAttempts) {
            logger.warn(`Max reconnection attempts (${maxReconnectAttempts}) reached for ${logPrefix}, stopping reconnection`)
            if (isMountedRef.current) {
              setError('Verbindung verloren. Bitte Seite neu laden.')
            }
            return
          }

          // Attempt to reconnect only if backend is connected
          if (isConnectedRef.current) {
            if (reconnectStrategy === 'exponential') {
              // Use longer delay if connection never opened (backend might be down)
              const baseDelay = neverOpened ? reconnectDelay * 10 : reconnectDelay
              const delay = Math.min(baseDelay * Math.pow(2, reconnectAttemptsRef.current), 60000)
              reconnectAttemptsRef.current++
              reconnectTimeoutRef.current = setTimeout(() => {
                if (isMountedRef.current && !isConnectingRef.current && isConnectedRef.current) {
                  logger.debug(`Attempting to reconnect ${logPrefix} (attempt ${reconnectAttemptsRef.current}/${maxReconnectAttempts})`)
                  connectRef.current()
                }
              }, delay)
            } else {
              // Simple strategy: use longer delay if connection never opened
              const delay = neverOpened ? reconnectDelay * 10 : reconnectDelay
              reconnectTimeoutRef.current = setTimeout(() => {
                if (isMountedRef.current && !isConnectingRef.current && isConnectedRef.current) {
                  logger.debug(`Attempting to reconnect ${logPrefix}`)
                  connectRef.current()
                }
              }, delay)
            }
          } else {
            logger.debug(`Skipping reconnection for ${logPrefix} - waiting for backend connection`)
          }
        }
      }

      // Handle connection error
      // NOTE: onerror always fires BEFORE onclose. Reconnect logic lives exclusively
      // in onclose to prevent double-counting of attempts and stale-closure issues.
      connection.onerror = (err) => {
        logger.error(`WebSocket error for ${logPrefix}:`, err)
        isConnectingRef.current = false
        setIsConnecting(false)
        if (isMountedRef.current) {
          setError('WebSocket-Verbindungsfehler')
        }
      }

    } catch (err) {
      isConnectingRef.current = false
      setIsConnecting(false)
      if (isMountedRef.current) {
        logger.error(`Failed to setup ${logPrefix} connection:`, err)
        setError(err instanceof Error ? err.message : String(err))

        // Only attempt to reconnect if backend is connected
        if (isConnectedRef.current) {
          if (reconnectStrategy === 'exponential' && reconnectAttemptsRef.current < maxReconnectAttempts) {
            const delay = Math.min(reconnectDelay * Math.pow(2, reconnectAttemptsRef.current), 30000)
            reconnectAttemptsRef.current++
            reconnectTimeoutRef.current = setTimeout(() => {
              if (isMountedRef.current && !isConnectingRef.current && isConnectedRef.current) {
                logger.debug(`Attempting to reconnect ${logPrefix} after error (attempt ${reconnectAttemptsRef.current}/${maxReconnectAttempts})`)
                connectRef.current()
              }
            }, delay)
          } else if (reconnectStrategy === 'simple') {
            reconnectTimeoutRef.current = setTimeout(() => {
              if (isMountedRef.current && !isConnectingRef.current && isConnectedRef.current) {
                logger.debug(`Attempting to reconnect ${logPrefix} after error`)
                connectRef.current()
              }
            }, reconnectDelay)
          } else {
            logger.warn(`Max reconnection attempts (${maxReconnectAttempts}) reached for ${logPrefix}, stopping reconnection`)
            if (isMountedRef.current) {
              setError('Verbindung fehlgeschlagen. Bitte Seite neu laden.')
            }
          }
        } else {
          logger.debug(`Skipping reconnection for ${logPrefix} after error - waiting for backend connection`)
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    enabled,
    checkBackendConnection,
    // isConnected intentionally omitted — accessed via isConnectedRef to avoid
    // recreating connect (and thus all WS event handlers) on every state change.
    config, // Include config to rebuild URL when ingress path changes
    reconnectStrategy,
    maxReconnectAttempts,
    reconnectDelay,
    logPrefix,
    onReady,
    cleanup,
  ])

  // Keep connectRef in sync so event handlers always call the latest version
  connectRef.current = connect

  // Initial connection attempt
  React.useEffect(() => {
    // Only connect if enabled, backend is connected, and we don't already have a connection
    if (enabled && isConnected && !connectionRef.current && !isConnectingRef.current) {
      connect()
    }
  }, [enabled, isConnected, connect, ...dependencies])

  // Reconnect when connection state becomes available (with debounce)
  React.useEffect(() => {
    if (enabled && isConnected && !connectionRef.current && !isConnectingRef.current) {
      // Clear any existing debounce timeout
      if (reconnectDebounceTimeoutRef.current) {
        clearTimeout(reconnectDebounceTimeoutRef.current)
        reconnectDebounceTimeoutRef.current = null
      }
      // Debounce reconnection when connection state changes (1 second)
      reconnectDebounceTimeoutRef.current = setTimeout(() => {
        if (isMountedRef.current && isConnectedRef.current && !connectionRef.current && !isConnectingRef.current) {
          logger.debug(`Backend connection restored - reconnecting ${logPrefix}`)
          stoppedReconnectingRef.current = false // Reset stopped flag when backend is back
          reconnectAttemptsRef.current = 0 // Reset attempts
          // Clear periodic retry since we're actively reconnecting
          if (periodicRetryTimeoutRef.current) {
            clearTimeout(periodicRetryTimeoutRef.current)
            periodicRetryTimeoutRef.current = null
          }
          connect()
        }
      }, WS_RECONNECT_DEBOUNCE)
    }
  }, [enabled, isConnected, connect, logPrefix])

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      isMountedRef.current = false
      cleanup()
    }
  }, [cleanup])

  return {
    connection: connectionRef.current,
    error,
    isConnecting,
  }
}
