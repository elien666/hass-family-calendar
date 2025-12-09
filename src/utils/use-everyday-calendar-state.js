// WebSocket imports not needed - this component only uses REST API
import React from 'react'
import axios from 'axios'
import { useConfig } from './ConfigProvider'
import { buildHaUrl } from "./config"
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'

const useEverydayCalendar = () => {
  const config = useConfig()
  const ENABLE_EVERYDAY_CALENDAR = config.ENABLE_EVERYDAY_CALENDAR || false
  const ENTITY_EVERYDAY_CALENDAR = config.ENTITY_EVERYDAY_CALENDAR || ''

  const [ store, setStore ] = React.useState(null)
  const [ error, setError ] = React.useState(false)

  // Check if configured
  const isConfigured = ENABLE_EVERYDAY_CALENDAR && ENTITY_EVERYDAY_CALENDAR
  const url = ENTITY_EVERYDAY_CALENDAR ? buildHaUrl(`/api/states/${ENTITY_EVERYDAY_CALENDAR}`, config) : null

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
          if(response.data.attributes.store !== undefined) {
            setStore(response.data.attributes.store)
          } else {
            setStore([])
          }
          setError(false)
        }
      })
      .catch((err) => {
        // Don't set error if request was aborted or component unmounted
        if (isMounted && !abortController.signal.aborted) {
          // Error is already logged by interceptor, format for UI
          setError(formatErrorForUI(err))
          setStore([])
        }
      })

    return () => {
      isMounted = false
      abortController.abort()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured, url, ENABLE_EVERYDAY_CALENDAR, ENTITY_EVERYDAY_CALENDAR])

  return [ store, error ]

}

export const storeData = (data, config) => {
  const entityId = config?.ENTITY_EVERYDAY_CALENDAR
  if (!entityId) return
  const url = buildHaUrl(`/api/states/${entityId}`, config)
  axios.post(url, {
    state: new Date(),
    attributes: { store: data }
  })
    .catch((err) => {
      // Error is already logged by interceptor
      logger.error('Failed to store everyday calendar data:', err)
    })
}

export default useEverydayCalendar