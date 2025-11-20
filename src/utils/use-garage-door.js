import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { HASS_HOST, HASS_ACCESS_TOKEN, ENTITY_GARAGE_DOOR, buildHaUrl } from "./config"
import logger from './logger'

// Set authorization header if token is available
if (HASS_ACCESS_TOKEN) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${HASS_ACCESS_TOKEN}`
}

const url = ENTITY_GARAGE_DOOR ? buildHaUrl(`/api/states/${ENTITY_GARAGE_DOOR}`) : null

const useGarageDoor = () => {

  const [ state, setState ] = React.useState('closed')
  const [ error, setError ] = React.useState(false)

  // Check if garage door is configured
  const isConfigured = ENTITY_GARAGE_DOOR && (HASS_HOST || HASS_ACCESS_TOKEN)

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
        logger.error('Failed to fetch garage door state:', err)
        setError(err instanceof Error ? err.message : String(err))
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured, url])

  React.useEffect(() => {
    let connection = null
    let isMounted = true

    async function connect() {
      // Skip if not configured
      if (!isConfigured || !ENTITY_GARAGE_DOOR) {
        return
      }

      let auth
      try {
        // Use window.location.origin if HASS_HOST is empty (HA add-on mode with relative URLs)
        const host = HASS_HOST || (typeof window !== 'undefined' ? window.location.origin : '')
        const token = HASS_ACCESS_TOKEN || ''
        
        // Skip WebSocket connection if no token (ingress mode handles REST API, WebSocket needs token)
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
        connection = await createConnection({ auth });
    
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
              "entity_id": ENTITY_GARAGE_DOOR,
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

export const toggleGarageDoor = (isLoading) => {
  if (!ENTITY_GARAGE_DOOR) return
  isLoading(true)
  const timeoutId = setTimeout(() => isLoading(false), 3000)
  axios.post(buildHaUrl('/api/services/cover/toggle'), {
    entity_id: ENTITY_GARAGE_DOOR
  }).finally(() => {
    clearTimeout(timeoutId)
    isLoading(false)
  })
}

export const openGarageDoor = (isLoading) => {
  if (!ENTITY_GARAGE_DOOR) return
  isLoading(true)
  const timeoutId = setTimeout(() => isLoading(false), 3000)
  axios.post(buildHaUrl('/api/services/cover/open_cover'), {
    entity_id: ENTITY_GARAGE_DOOR
  }).finally(() => {
    clearTimeout(timeoutId)
    isLoading(false)
  })
}

export const closeGarageDoor = (isLoading) => {
  if (!ENTITY_GARAGE_DOOR) return
  isLoading(true)
  const timeoutId = setTimeout(() => isLoading(false), 3000)
  axios.post(buildHaUrl('/api/services/cover/close_cover'), {
    entity_id: ENTITY_GARAGE_DOOR
  }).finally(() => {
    clearTimeout(timeoutId)
    isLoading(false)
  })
}

export default useGarageDoor