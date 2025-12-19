import React from 'react'
import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl } from './config'
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'
import { useHomeAssistantWebSocket } from './use-home-assistant-websocket'

const useGarageDoor = () => {
  const config = useConfig()
  const ENABLE_GARAGE = config.ENABLE_GARAGE || false
  const ENTITY_GARAGE_DOOR = config.ENTITY_GARAGE_DOOR || ''

  const [ state, setState ] = React.useState('closed')
  const [ restError, setRestError ] = React.useState(false)

  // Check if garage door is configured
  const isConfigured = ENABLE_GARAGE && ENTITY_GARAGE_DOOR
  const url = ENTITY_GARAGE_DOOR ? buildHaUrl(`/api/states/${ENTITY_GARAGE_DOOR}`, config) : null

  React.useEffect(() => {
    // Skip if not configured
    if (!isConfigured || !url) {
      return
    }

    let isMounted = true
    const abortController = new AbortController()

    axios(url, {
      signal: abortController.signal
    })
      .then((response) => {
        if (isMounted) {
          setState(response.data.state)
          setRestError(false)
        }
      })
      .catch((err) => {
        // Don't set error if request was aborted or component unmounted
        if (isMounted && !abortController.signal.aborted) {
          // Error is already logged by interceptor, format for UI
          setRestError(formatErrorForUI(err))
        }
      })

    return () => {
      isMounted = false
      abortController.abort()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured, url, ENABLE_GARAGE, ENTITY_GARAGE_DOOR])

  // WebSocket subscription
  const { error: wsError } = useHomeAssistantWebSocket({
    enabled: isConfigured && !!ENTITY_GARAGE_DOOR,
    logPrefix: 'garage door',
    onReady: (connection, subscriptionsRef) => {
      // Create callback for state updates
      const callback = (data) => {
        if (data.state !== undefined) {
          setState(data.state)
        }
      }

      // Register callback
      subscriptionsRef.current.set(ENTITY_GARAGE_DOOR, callback)

      // Subscribe to entity
      if (connection.readyState === WebSocket.OPEN) {
        connection.send(JSON.stringify({
          type: 'subscribe_entity',
          entity_id: ENTITY_GARAGE_DOOR
        }))
        logger.debug('Subscribed to garage door state changes')
      }

      // Return unsubscribe function
      return () => {
        subscriptionsRef.current.delete(ENTITY_GARAGE_DOOR)
        if (connection.readyState === WebSocket.OPEN) {
          connection.send(JSON.stringify({
            type: 'unsubscribe_entity',
            entity_id: ENTITY_GARAGE_DOOR
          }))
        }
      }
    },
    dependencies: [isConfigured, ENTITY_GARAGE_DOOR],
  })

  // Combine REST and WebSocket errors
  const error = restError || wsError || false

  return [state, error]
}

export const toggleGarageDoor = (isLoading, config = {}) => {
  const ENTITY_GARAGE_DOOR = config.ENTITY_GARAGE_DOOR || ''
  if (!ENTITY_GARAGE_DOOR) return
  isLoading(true)
  const timeoutId = setTimeout(() => isLoading(false), 3000)
  axios.post(buildHaUrl('/api/services/cover/toggle', config), {
    entity_id: ENTITY_GARAGE_DOOR
  })
    .catch((err) => {
      // Error is already logged by interceptor
      logger.error('Failed to toggle garage door:', err)
    })
    .finally(() => {
      clearTimeout(timeoutId)
      isLoading(false)
    })
}

export const openGarageDoor = (isLoading, config = {}) => {
  const ENTITY_GARAGE_DOOR = config.ENTITY_GARAGE_DOOR || ''
  if (!ENTITY_GARAGE_DOOR) return
  isLoading(true)
  const timeoutId = setTimeout(() => isLoading(false), 3000)
  axios.post(buildHaUrl('/api/services/cover/open_cover', config), {
    entity_id: ENTITY_GARAGE_DOOR
  })
    .catch((err) => {
      // Error is already logged by interceptor
      logger.error('Failed to open garage door:', err)
    })
    .finally(() => {
      clearTimeout(timeoutId)
      isLoading(false)
    })
}

export const closeGarageDoor = (isLoading, config = {}) => {
  const ENTITY_GARAGE_DOOR = config.ENTITY_GARAGE_DOOR || ''
  if (!ENTITY_GARAGE_DOOR) return
  isLoading(true)
  const timeoutId = setTimeout(() => isLoading(false), 3000)
  axios.post(buildHaUrl('/api/services/cover/close_cover', config), {
    entity_id: ENTITY_GARAGE_DOOR
  })
    .catch((err) => {
      // Error is already logged by interceptor
      logger.error('Failed to close garage door:', err)
    })
    .finally(() => {
      clearTimeout(timeoutId)
      isLoading(false)
    })
}

export default useGarageDoor