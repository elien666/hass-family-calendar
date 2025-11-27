import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { HASS_HOST, HASS_ACCESS_TOKEN, SUPERVISOR_TOKEN, ENTITY_DOORBELL, ENTITY_DOORBELL_BUTTON, ENABLE_DOORBELL, buildHaUrl, isDevelopment } from "./config"
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'

// Authorization header is configured centrally in config.js

const url = ENTITY_DOORBELL ? buildHaUrl(`/api/states/${ENTITY_DOORBELL}`) : null

const useDoorbell = () => {

  const [ state, setState ] = React.useState('off')
  const [ error, setError ] = React.useState(false)

  // Check if doorbell is configured
  const isConfigured = ENABLE_DOORBELL && ENTITY_DOORBELL

  React.useEffect(() => {
    // Skip if not configured
    if (!isConfigured || !url) {
      return
    }

    axios(url)
      .then((response) => {
        setState(response.data.state)
        setError(false)
      })
      .catch((err) => {
        // Error is already logged by interceptor, format for UI
        setError(formatErrorForUI(err))
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured, url])

  React.useEffect(() => {
    let connection = null
    let isMounted = true

    async function connect() {
      // Skip if not configured
      if (!isConfigured || !ENTITY_DOORBELL) {
        return
      }

      // In production mode (add-on/ingress), construct host URL including ingress path
      // The Apache proxy forwards /api/websocket to ws://supervisor/core/websocket
      // The supervisor WebSocket API uses the standard auth flow and accepts SUPERVISOR_TOKEN in the auth message
      // In development mode, use HASS_HOST and HASS_ACCESS_TOKEN for WebSocket
      let host
      if (isDevelopment && HASS_HOST) {
        host = HASS_HOST
      } else if (typeof window !== 'undefined' && window.location) {
        // Include the ingress path in the host URL so the library constructs the correct WebSocket URL
        // This matches how buildHaUrl constructs URLs for REST API calls
        const basePath = window.location.pathname.replace(/\/$/, '')
        host = `${window.location.origin}${basePath}`
      } else {
        host = ''
      }
      
      // In production, use SUPERVISOR_TOKEN if available, otherwise fall back to HASS_ACCESS_TOKEN
      // In development, use HASS_ACCESS_TOKEN
      const token = isDevelopment 
        ? (HASS_ACCESS_TOKEN || '')
        : (SUPERVISOR_TOKEN || HASS_ACCESS_TOKEN || '')

      // Skip WebSocket connection if no token
      if (!token) {
        logger.debug('Skipping WebSocket connection - no access token (using REST API only)')
        logger.debug(`isDevelopment: ${isDevelopment}, SUPERVISOR_TOKEN: ${SUPERVISOR_TOKEN ? 'present' : 'missing'}, HASS_ACCESS_TOKEN: ${HASS_ACCESS_TOKEN ? 'present' : 'missing'}`)
        return
      }

      logger.debug(`Connecting WebSocket - host: ${host}, token: ${token ? 'present' : 'missing'}, mode: ${isDevelopment ? 'development' : 'production'}`)

      let auth
      try {
        logger.debug(`Creating auth with host: ${host}, token length: ${token ? token.length : 0}`)
        auth = createLongLivedTokenAuth(host, token)
        logger.debug(`Auth created - wsUrl: ${auth?.wsUrl}, accessToken present: ${!!auth?.accessToken}`)
        if (isMounted) setError(false)
      } catch (err) {
        if (isMounted) {
          logger.error('Failed to create WebSocket auth:', err)
          setError(err instanceof Error ? err.message : String(err))
        }
        return
      }

      try {
        logger.debug(`Creating WebSocket connection with auth - wsUrl: ${auth.wsUrl}`)
        logger.debug('About to call createConnection - this should trigger WebSocket upgrade request')
        // The library will attempt to connect to the WebSocket URL
        // If no request appears in the access log, the connection is failing before reaching the server
        connection = await createConnection({ auth })
        logger.debug('WebSocket connection established successfully')

        const trigger = (result) => {
          if (isMounted) {
            const newState = result.variables.trigger.to_state.state
            logger.debug(`Doorbell state update via WebSocket: ${newState}`)
            setState(newState)
          }
        }

        await connection.subscribeMessage(trigger, {
          "type": "subscribe_trigger",
          "trigger":
            {
              "platform": "state",
              "entity_id": ENTITY_DOORBELL,
            }
        })
        logger.debug(`Subscribed to doorbell entity: ${ENTITY_DOORBELL}`)
      } catch (err) {
        if (isMounted) {
          logger.error('Failed to setup WebSocket connection:', err)
          logger.error('WebSocket error details:', {
            message: err instanceof Error ? err.message : String(err),
            code: err.code,
            name: err.name,
            wsUrl: auth?.wsUrl,
            host: host,
            tokenLength: token ? token.length : 0
          })
          // Error code 2 = ERR_INVALID_AUTH - authentication failed
          if (err.code === 2) {
            logger.error('Authentication failed - check if SUPERVISOR_TOKEN is valid and correctly formatted')
          }
          setError(err instanceof Error ? err.message : String(err))
        }
      }
    }

    connect()

    return () => {
      isMounted = false
      if (connection) {
        connection.close()
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured])

  return [ state, error ]

}

export const unlatchFrontDoor = () => {
  if (!ENTITY_DOORBELL_BUTTON) return
  axios.post(buildHaUrl('/api/services/button/press'), {
    "entity_id": ENTITY_DOORBELL_BUTTON
  })
    .catch((err) => {
      // Error is already logged by interceptor
      logger.error('Failed to unlatch front door:', err)
    })
}

export default useDoorbell