import React  from 'react'
import axios from 'axios'
import akWandsbek from './station-ak-wandsbek.json'
import { DateTime } from 'luxon'
import useTimeout from './use-timeout'
import { useConfig } from './ConfigProvider'
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'
import { buildHaUrl } from './config'

export const SUPPORTED_CALLS = { departureList: 'departureList', checkName: 'checkName' }

// Call Geofox API with authentication
// Always use backend proxy which handles signature generation (secrets stay in backend)
const callApi = async (endPoint, data, signal, config) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  }
  
  // Include Authorization header if available to satisfy supervisor middleware
  // This endpoint doesn't require HA auth, but including a token prevents warnings
  // Note: HASS_ACCESS_TOKEN is only available in local dev mode, not in production
  const hassToken = config.HASS_ACCESS_TOKEN || ''
  if (hassToken && hassToken.trim() !== '' && hassToken !== 'undefined' && hassToken !== 'null') {
    headers['Authorization'] = `Bearer ${hassToken}`
  }
  
  // Always use backend proxy which handles signature generation server-side
  // This keeps GEOFOX_SECRET secure in the backend
  const url = buildHaUrl(`/gti/public/${endPoint}`, config)
  return axios({
    method: 'post',
    url: url,
    data: data,
    signal: signal,
    headers: headers,
  })
}

const byRealtimeOffset = (a, b) => a.realtimeOffset - b.realtimeOffset

export const transformData = (data) => {
  const mapped = (data?.departures ?? []).map((entry) => (
    {
      line: entry.line.name,
      direction: entry.line.direction,
      timeOffset: entry.timeOffset,
      delay: entry.delay ? entry.delay : '0',
      directionId: entry.directionId,
      realtimeOffset: entry.timeOffset + ((entry.delay ? entry.delay : 0)/60)
    }
  ))

  return {
    from: mapped.filter((entry) => entry.directionId === 1).slice(0,3).sort(byRealtimeOffset),
    to: mapped.filter((entry) => entry.directionId === 6).slice(0,3).sort(byRealtimeOffset)
  }
}

const useHvv = (endPoint) => {
  const config = useConfig()
  const ENABLE_HVV = config.ENABLE_HVV || false

  const [ responseData, set ] = React.useState([])
  const [ error, setError ] = React.useState(false)
  const timeout = useTimeout(60000) // 60 seconds

  // Check if Geofox is configured
  const isConfigured = ENABLE_HVV

  React.useEffect(() => {

    // Skip if not configured
    if (!isConfigured) {
      return
    }

    if(!(endPoint in SUPPORTED_CALLS)) {
      logger.warn(endPoint, 'not supported by HVV connector')
      return
    }

    let isMounted = true
    const abortController = new AbortController()

    let data = { version: 51 }

    switch(endPoint) {

      case SUPPORTED_CALLS.checkName:
        data = { ...data,
          theName: {
            name: 'AK Wandsbek',
            type: 'STATION'
          },
          maxList: 1
        }
        break

      case SUPPORTED_CALLS.departureList:
        const now = DateTime.now()
        data = { ...data,
          station: akWandsbek,
          time: { date: now.toFormat('dd.MM.yyyy'), time: now.toFormat('HH:mm') },
          maxList: 20,
          maxTimeOffset: 200,
          useRealtime: true
        }
        break

      default:
        data = undefined

    }

    callApi(endPoint, data, abortController.signal, config)
      .then((response) => {
        if (isMounted) {
          if (endPoint === SUPPORTED_CALLS.departureList) {
            set(transformData(response.data))
          } else {
            set(response.data)
          }
          setError(false)
        }
    })
      .catch((error) => {
        // Don't set error if request was aborted or component unmounted
        if (isMounted && !abortController.signal.aborted) {
          // Error is already logged by interceptor, format for UI
          setError(formatErrorForUI(error))
        }
      })

    return () => {
      isMounted = false
      abortController.abort()
    }
  }, [endPoint, timeout, isConfigured, ENABLE_HVV])

  return [ responseData, error ]

}

export default useHvv