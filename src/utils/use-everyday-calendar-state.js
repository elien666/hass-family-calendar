// WebSocket imports not needed - this component only uses REST API
import React from 'react'
import axios from 'axios'
import { HASS_HOST, HASS_ACCESS_TOKEN, ENTITY_EVERYDAY_CALENDAR, ENABLE_EVERYDAY_CALENDAR, buildHaUrl } from "./config"
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'

// Authorization header is configured centrally in config.js

const url = ENTITY_EVERYDAY_CALENDAR ? buildHaUrl(`/api/states/${ENTITY_EVERYDAY_CALENDAR}`) : null

const useEverydayCalendar = () => {

  const [ store, setStore ] = React.useState(null)
  const [ error, setError ] = React.useState(false)

  // Check if configured
  const isConfigured = ENABLE_EVERYDAY_CALENDAR && ENTITY_EVERYDAY_CALENDAR

  React.useEffect(() => {
    // Skip if not configured
    if (!isConfigured || !url) {
      return
    }

    axios(url)
      .then((response) => {
        if(response.data.attributes.store !== undefined) {
          setStore(response.data.attributes.store)
        } else {
          setStore([])
        }
        setError(false)
      })
      .catch((err) => {
        // Error is already logged by interceptor, format for UI
        setError(formatErrorForUI(err))
        setStore([])
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigured, url])

  return [ store, error ]

}

export const storeData = (data) => {
  if (!url) return
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