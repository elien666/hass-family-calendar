import React from 'react'
import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl } from './config'
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'
import { useHomeAssistantWebSocket } from './use-home-assistant-websocket'

const useDoorbell = () => {
  const config = useConfig()
  const ENABLE_DOORBELL = config.ENABLE_DOORBELL || false
  const ENTITY_DOORBELL = config.ENTITY_DOORBELL || ''
  const ENTITY_DOORBELL_BUTTON = config.ENTITY_DOORBELL_BUTTON || ''

  const [ state, setState ] = React.useState('off')
  const [ restError, setRestError ] = React.useState(false)

  // Check if doorbell is configured
  const isConfigured = ENABLE_DOORBELL && ENTITY_DOORBELL
  const url = ENTITY_DOORBELL ? buildHaUrl(`/api/states/${ENTITY_DOORBELL}`, config) : null

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
  }, [isConfigured, url, ENABLE_DOORBELL, ENTITY_DOORBELL])

  // WebSocket subscription
  const { error: wsError } = useHomeAssistantWebSocket({
    enabled: isConfigured && !!ENTITY_DOORBELL,
    logPrefix: 'doorbell',
    onReady: (connection, subscriptionsRef) => {
      // Create callback for state updates
      const callback = (data) => {
        if (data.state !== undefined) {
          setState(data.state)
        }
      }

      // Register callback
      subscriptionsRef.current.set(ENTITY_DOORBELL, callback)

      // Subscribe to entity
      if (connection.readyState === WebSocket.OPEN) {
        connection.send(JSON.stringify({
          type: 'subscribe_entity',
          entity_id: ENTITY_DOORBELL
        }))
        logger.debug('Subscribed to doorbell state changes')
      }

      // Return unsubscribe function
      return () => {
        subscriptionsRef.current.delete(ENTITY_DOORBELL)
        if (connection.readyState === WebSocket.OPEN) {
          connection.send(JSON.stringify({
            type: 'unsubscribe_entity',
            entity_id: ENTITY_DOORBELL
          }))
        }
      }
    },
    dependencies: [isConfigured, ENTITY_DOORBELL],
  })

  // Combine REST and WebSocket errors
  const error = restError || wsError || false

  return [state, error]
}

export const unlatchFrontDoor = (config = {}) => {
  const ENTITY_DOORBELL_BUTTON = config.ENTITY_DOORBELL_BUTTON || ''
  if (!ENTITY_DOORBELL_BUTTON) return
  axios.post(buildHaUrl('/api/services/button/press', config), {
    "entity_id": ENTITY_DOORBELL_BUTTON
  })
    .catch((err) => {
      // Error is already logged by interceptor
      logger.error('Failed to unlatch front door:', err)
    })
}

export default useDoorbell