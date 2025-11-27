import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { HASS_HOST, HASS_ACCESS_TOKEN, ENTITY_DOORBELL, ENTITY_DOORBELL_BUTTON, ENTITY_DOORBELL_PERSON_OCCUPANCY, ENABLE_DOORBELL, buildHaUrl, isDevelopment } from "./config"
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'

// Authorization header is configured centrally in config.js

const doorbellUrl = ENTITY_DOORBELL ? buildHaUrl(`/api/states/${ENTITY_DOORBELL}`) : null
const personOccupancyUrl = ENTITY_DOORBELL_PERSON_OCCUPANCY ? buildHaUrl(`/api/states/${ENTITY_DOORBELL_PERSON_OCCUPANCY}`) : null

const useDoorbell = () => {

  const [ doorbellState, setDoorbellState ] = React.useState('off')
  const [ personOccupancyState, setPersonOccupancyState ] = React.useState('off')
  const [ error, setError ] = React.useState(false)

  // Check if doorbell is configured (either entity is enough)
  const isConfigured = ENABLE_DOORBELL && (ENTITY_DOORBELL || ENTITY_DOORBELL_PERSON_OCCUPANCY)

  // Combined state: 'on' if either entity is 'on'
  const state = doorbellState === 'on' || personOccupancyState === 'on' ? 'on' : 'off'

  // Fetch initial state for doorbell entity
  React.useEffect(() => {
    // Skip if not configured or no entity
    if (!isConfigured || !doorbellUrl) {
      return
    }

    axios(doorbellUrl)
      .then((response) => {
        setDoorbellState(response.data.state)
        setError(false)
      })
      .catch((err) => {
        // Error is already logged by interceptor, format for UI
        setError(formatErrorForUI(err))
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured, doorbellUrl])

  // Fetch initial state for person occupancy entity
  React.useEffect(() => {
    // Skip if not configured or no entity
    if (!isConfigured || !personOccupancyUrl) {
      return
    }

    axios(personOccupancyUrl)
      .then((response) => {
        setPersonOccupancyState(response.data.state)
        setError(false)
      })
      .catch((err) => {
        // Error is already logged by interceptor, format for UI
        setError(formatErrorForUI(err))
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured, personOccupancyUrl])

  React.useEffect(() => {
    let connection = null
    let isMounted = true

    async function connect() {
      // Skip if not configured or no entities to monitor
      if (!isConfigured || (!ENTITY_DOORBELL && !ENTITY_DOORBELL_PERSON_OCCUPANCY)) {
        return
      }

      let auth
      try {
        // In production mode (add-on/ingress), skip WebSocket as ingress may not support it
        // In development mode, use HASS_HOST and HASS_ACCESS_TOKEN for WebSocket
        if (!isDevelopment) {
          logger.debug('Skipping WebSocket connection in production mode (using REST API only)')
          return
        }

        const host = HASS_HOST || (typeof window !== 'undefined' ? window.location.origin : '')
        const token = HASS_ACCESS_TOKEN || ''

        // Skip WebSocket connection if no token
        if (!token) {
          logger.debug('Skipping WebSocket connection - no access token (using REST API only)')
          return
        }

        auth = createLongLivedTokenAuth(host, token)
        if (isMounted) setError(false)
      } catch (err) {
        if (isMounted) {
          logger.error('Failed to create WebSocket auth:', err)
          setError(err instanceof Error ? err.message : String(err))
        }
        return
      }

      try {
        connection = await createConnection({ auth })

        // Subscribe to doorbell entity if configured
        if (ENTITY_DOORBELL) {
          const doorbellTrigger = (result) => {
            if (isMounted) {
              setDoorbellState(result.variables.trigger.to_state.state)
            }
          }

          await connection.subscribeMessage(doorbellTrigger, {
            "type": "subscribe_trigger",
            "trigger":
              {
                "platform": "state",
                "entity_id": ENTITY_DOORBELL,
              }
          })
        }

        // Subscribe to person occupancy entity if configured
        if (ENTITY_DOORBELL_PERSON_OCCUPANCY) {
          const personOccupancyTrigger = (result) => {
            if (isMounted) {
              setPersonOccupancyState(result.variables.trigger.to_state.state)
            }
          }

          await connection.subscribeMessage(personOccupancyTrigger, {
            "type": "subscribe_trigger",
            "trigger":
              {
                "platform": "state",
                "entity_id": ENTITY_DOORBELL_PERSON_OCCUPANCY,
              }
          })
        }
      } catch (err) {
        if (isMounted) {
          logger.error('Failed to setup WebSocket connection:', err)
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