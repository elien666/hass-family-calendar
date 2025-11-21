import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { HASS_HOST, HASS_ACCESS_TOKEN, ENTITY_DOORBELL, ENTITY_DOORBELL_BUTTON, ENABLE_DOORBELL, buildHaUrl } from "./config"
import logger from './logger'

// Set authorization header if token is available
if (HASS_ACCESS_TOKEN) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${HASS_ACCESS_TOKEN}`
}

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
      })
      .catch((err) => {
        logger.error('Failed to fetch doorbell state:', err)
        setError(err instanceof Error ? err.message : String(err))
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

      let auth
      try {
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
        if (isMounted) setError(err instanceof Error ? err.message : String(err))
        return
      }
    
      try {
        connection = await createConnection({ auth })
    
        const trigger = (result) => {
          if (isMounted) {
            setState(result.variables.trigger.to_state.state)
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
      } catch (err) {
        if (isMounted) setError(err instanceof Error ? err.message : String(err))
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
}

export default useDoorbell