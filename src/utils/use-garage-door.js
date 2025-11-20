import {
  createLongLivedTokenAuth,
  createConnection,
} from 'home-assistant-js-websocket'
import React from 'react'
import axios from 'axios'
import { HASS_HOST, HASS_ACCESS_TOKEN, ENTITY_GARAGE_DOOR } from "./config"
import logger from './logger'

// Set authorization header if token is available
if (HASS_ACCESS_TOKEN) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${HASS_ACCESS_TOKEN}`
}

const url = `${HASS_HOST}/api/states/${ENTITY_GARAGE_DOOR}`

const useGarageDoor = () => {

  const [ state, setState ] = React.useState('closed')
  const [ error, setError ] = React.useState(false)

  React.useEffect(() => {
    axios(url)
      .then((response) => {
        setState(response.data.state)
      })
      .catch((err) => {
        logger.error('Failed to fetch garage door state:', err)
        setError(err instanceof Error ? err.message : String(err))
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    let connection = null
    let isMounted = true

    async function connect() {
      let auth
      try {
        if (!HASS_ACCESS_TOKEN) {
          throw new Error('HASS_ACCESS_TOKEN is not configured')
        }
        auth = createLongLivedTokenAuth(
          HASS_HOST,
          HASS_ACCESS_TOKEN
        );
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
  }, [])

  return [ state, error ]

}

export const toggleGarageDoor = (isLoading) => {
  isLoading(true)
  const timeoutId = setTimeout(() => isLoading(false), 3000)
  axios.post(`${HASS_HOST}/api/services/cover/toggle`, {
    entity_id: ENTITY_GARAGE_DOOR
  }).finally(() => {
    clearTimeout(timeoutId)
    isLoading(false)
  })
}

export const openGarageDoor = (isLoading) => {
  isLoading(true)
  const timeoutId = setTimeout(() => isLoading(false), 3000)
  axios.post(`${HASS_HOST}/api/services/cover/open_cover`, {
    entity_id: ENTITY_GARAGE_DOOR
  }).finally(() => {
    clearTimeout(timeoutId)
    isLoading(false)
  })
}

export const closeGarageDoor = (isLoading) => {
  isLoading(true)
  const timeoutId = setTimeout(() => isLoading(false), 3000)
  axios.post(`${HASS_HOST}/api/services/cover/close_cover`, {
    entity_id: ENTITY_GARAGE_DOOR
  }).finally(() => {
    clearTimeout(timeoutId)
    isLoading(false)
  })
}

export default useGarageDoor