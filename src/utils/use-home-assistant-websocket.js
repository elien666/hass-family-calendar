import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import { useConfig } from './ConfigProvider'
import { buildWebSocketHost, buildWebSocketUrl, isDevelopment } from './config'
import logger from './logger'
import { useConnectionStateContext } from './ConnectionStateProvider'

/**
 * Reusable hook for Home Assistant WebSocket connections
 * 
 * @param {Object} options
 * @param {Function} options.onReady - Called when connection is ready. Should return unsubscribe function(s) or array of unsubscribe functions
 * @param {boolean} [options.enabled=true] - Whether to connect
 * @param {boolean} [options.checkBackendConnection=true] - Check isConnected from ConnectionStateProvider
 * @param {'simple'|'exponential'} [options.reconnectStrategy='simple'] - Reconnection strategy
 * @param {number} [options.maxReconnectAttempts=5] - Max reconnect attempts for exponential strategy
 * @param {number} [options.reconnectDelay=2000] - Base delay in ms for reconnection
 * @param {string} [options.logPrefix='WebSocket'] - Prefix for log messages
 * @param {Array} [options.dependencies=[]] - Dependencies that trigger reconnection
 * @returns {{connection: Connection|null, error: string|false, isConnecting: boolean}}
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
  const reconnectAttemptsRef = React.useRef(0)
  const isConnectingRef = React.useRef(false)
  const readyHandlerRef = React.useRef(null)
  const disconnectedHandlerRef = React.useRef(null)

  // Cleanup function
  const cleanup = React.useCallback(() => {
    const connection = connectionRef.current
    const readyHandler = readyHandlerRef.current
    const disconnectedHandler = disconnectedHandlerRef.current
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

    // Remove event listeners
    if (connection) {
      try {
        if (readyHandler) {
          connection.removeEventListener('ready', readyHandler)
        }
        if (disconnectedHandler) {
          connection.removeEventListener('disconnected', disconnectedHandler)
        }
      } catch (err) {
        logger.debug(`Error removing event listeners for ${logPrefix}:`, err)
      }
    }

    // Unsubscribe
    if (unsubscribe) {
      try {
        if (Array.isArray(unsubscribe)) {
          unsubscribe.forEach(fn => {
            if (fn) fn()
          })
        } else if (typeof unsubscribe === 'function') {
          unsubscribe()
        }
      } catch (err) {
        logger.debug(`Error unsubscribing for ${logPrefix}:`, err)
      }
      unsubscribeRef.current = null
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

    readyHandlerRef.current = null
    disconnectedHandlerRef.current = null
  }, [logPrefix])

  // Connection function
  const connect = React.useCallback(async () => {
    // Skip if not enabled or not mounted
    if (!enabled || !isMountedRef.current) {
      return
    }

    // Check backend connection if required
    if (checkBackendConnection && !isConnected) {
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
      // Build host and token
      const host = buildWebSocketHost(config)
      const HASS_ACCESS_TOKEN = config.HASS_ACCESS_TOKEN || ''
      const SUPERVISOR_TOKEN = config.SUPERVISOR_TOKEN || ''
      const token = isDevelopment
        ? (HASS_ACCESS_TOKEN || '')
        : (SUPERVISOR_TOKEN || HASS_ACCESS_TOKEN || '')

      // Skip if no token
      if (!token) {
        logger.debug(`Skipping ${logPrefix} connection - no access token (using REST API only)`)
        isConnectingRef.current = false
        setIsConnecting(false)
        return
      }

      if (!host) {
        logger.error(`Failed to build WebSocket host for ${logPrefix} - cannot create auth`)
        if (isMountedRef.current) {
          setError('WebSocket host konnte nicht erstellt werden.')
        }
        isConnectingRef.current = false
        setIsConnecting(false)
        return
      }

      // Create auth
      let auth
      try {
        auth = createLongLivedTokenAuth(host, token)
        if (isMountedRef.current) setError(false)
      } catch (err) {
        if (isMountedRef.current) {
          logger.error(`Failed to create WebSocket auth for ${logPrefix}:`, err)
          setError(err instanceof Error ? err.message : String(err))
        }
        isConnectingRef.current = false
        setIsConnecting(false)
        return
      }

      // Build connection options
      let connectionOptions = { auth }

      if (!isDevelopment) {
        // Build WebSocket URL using ingress route for production
        const wsUrl = buildWebSocketUrl(config)

        if (!wsUrl) {
          logger.error(`Failed to build WebSocket URL for ${logPrefix} - cannot connect`)
          if (isMountedRef.current) {
            setError('WebSocket URL konnte nicht erstellt werden.')
          }
          isConnectingRef.current = false
          setIsConnecting(false)
          return
        }

        // Create custom socket factory that uses the ingress URL
        connectionOptions.createSocket = () => {
          return new Promise((resolve, reject) => {
            const socket = new WebSocket(wsUrl)
            socket.onopen = () => resolve(socket)
            socket.onerror = (err) => reject(err)
          })
        }
      }

      // Create connection
      const connection = await createConnection(connectionOptions)
      connectionRef.current = connection

      // Handle connection ready event
      const readyHandler = async () => {
        if (!isMountedRef.current || !connectionRef.current) {
          logger.debug(`Skipping ready handler for ${logPrefix} - component unmounted or connection is null`)
          return
        }

        logger.debug(`${logPrefix} connection ready`)
        reconnectAttemptsRef.current = 0 // Reset reconnection attempts on successful connection
        setError(false)

        // Double-check connection is still valid
        if (!connectionRef.current) {
          logger.warn(`Connection became null before subscription for ${logPrefix}`)
          return
        }

        // Call onReady callback to set up subscriptions
        try {
          const unsubscribe = await onReady(connectionRef.current)
          unsubscribeRef.current = unsubscribe
        } catch (subscribeErr) {
          logger.error(`Failed to subscribe for ${logPrefix}:`, subscribeErr)
          if (isMountedRef.current) {
            setError(subscribeErr instanceof Error ? subscribeErr.message : String(subscribeErr))
          }
        }
      }
      readyHandlerRef.current = readyHandler
      connection.addEventListener('ready', readyHandler)

      // Handle disconnection events
      const disconnectedHandler = () => {
        if (isMountedRef.current && !isConnectingRef.current) {
          logger.debug(`${logPrefix} disconnected`)

          // Remove event listeners before clearing connection
          if (connectionRef.current) {
            try {
              if (readyHandlerRef.current) {
                connectionRef.current.removeEventListener('ready', readyHandlerRef.current)
              }
              if (disconnectedHandlerRef.current) {
                connectionRef.current.removeEventListener('disconnected', disconnectedHandlerRef.current)
              }
            } catch (err) {
              logger.debug(`Error removing event listeners on disconnect for ${logPrefix}:`, err)
            }
          }

          // Clear connection reference
          connectionRef.current = null
          unsubscribeRef.current = null
          readyHandlerRef.current = null
          disconnectedHandlerRef.current = null

          // Clear any existing reconnect timeout
          if (reconnectTimeoutRef.current) {
            clearTimeout(reconnectTimeoutRef.current)
            reconnectTimeoutRef.current = null
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
          if (isConnected) {
            if (reconnectStrategy === 'exponential') {
              // Calculate exponential backoff delay
              const delay = Math.min(reconnectDelay * Math.pow(2, reconnectAttemptsRef.current), 30000)
              reconnectAttemptsRef.current++
              reconnectTimeoutRef.current = setTimeout(() => {
                if (isMountedRef.current && !isConnectingRef.current && isConnected) {
                  logger.debug(`Attempting to reconnect ${logPrefix} (attempt ${reconnectAttemptsRef.current}/${maxReconnectAttempts})`)
                  connect()
                }
              }, delay)
            } else {
              // Simple strategy: fixed delay
              reconnectTimeoutRef.current = setTimeout(() => {
                if (isMountedRef.current && !isConnectingRef.current && isConnected) {
                  logger.debug(`Attempting to reconnect ${logPrefix}`)
                  connect()
                }
              }, reconnectDelay)
            }
          } else {
            logger.debug(`Skipping reconnection for ${logPrefix} - waiting for backend connection`)
          }
        }
      }
      disconnectedHandlerRef.current = disconnectedHandler
      connection.addEventListener('disconnected', disconnectedHandler)

      // If connection is already ready, trigger the ready handler immediately
      if (connection && connection.ready) {
        readyHandler()
      }

      isConnectingRef.current = false
      setIsConnecting(false)
    } catch (err) {
      isConnectingRef.current = false
      setIsConnecting(false)
      if (isMountedRef.current) {
        logger.error(`Failed to setup ${logPrefix} connection:`, err)
        setError(err instanceof Error ? err.message : String(err))

        // Only attempt to reconnect if backend is connected
        if (isConnected) {
          if (reconnectStrategy === 'exponential' && reconnectAttemptsRef.current < maxReconnectAttempts) {
            const delay = Math.min(reconnectDelay * Math.pow(2, reconnectAttemptsRef.current), 30000)
            reconnectAttemptsRef.current++
            reconnectTimeoutRef.current = setTimeout(() => {
              if (isMountedRef.current && !isConnectingRef.current && isConnected) {
                logger.debug(`Attempting to reconnect ${logPrefix} after error (attempt ${reconnectAttemptsRef.current}/${maxReconnectAttempts})`)
                connect()
              }
            }, delay)
          } else if (reconnectStrategy === 'simple') {
            reconnectTimeoutRef.current = setTimeout(() => {
              if (isMountedRef.current && !isConnectingRef.current && isConnected) {
                logger.debug(`Attempting to reconnect ${logPrefix} after error`)
                connect()
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
  }, [
    enabled,
    checkBackendConnection,
    isConnected,
    config,
    reconnectStrategy,
    maxReconnectAttempts,
    reconnectDelay,
    logPrefix,
    onReady,
    cleanup,
  ])

  // Initial connection attempt
  React.useEffect(() => {
    if (enabled && isConnected) {
      connect()
    }
  }, [enabled, isConnected, connect, ...dependencies])

  // Reconnect when connection state becomes available
  React.useEffect(() => {
    if (enabled && isConnected && !connectionRef.current && !isConnectingRef.current) {
      // Clear any existing debounce timeout
      if (reconnectDebounceTimeoutRef.current) {
        clearTimeout(reconnectDebounceTimeoutRef.current)
        reconnectDebounceTimeoutRef.current = null
      }
      // Debounce reconnection when connection state changes
      reconnectDebounceTimeoutRef.current = setTimeout(() => {
        if (isMountedRef.current && isConnected && !connectionRef.current && !isConnectingRef.current) {
          logger.debug(`Backend connection restored - reconnecting ${logPrefix}`)
          connect()
        }
      }, 1000) // 1 second debounce when connection state changes
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

