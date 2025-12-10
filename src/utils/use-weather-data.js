import React from 'react'
import useTimeout from './use-timeout'
import axios from 'axios'
import { WiDaySunny, WiNightClear, WiRain, WiSnow, WiSleet, WiWindy, WiFog, WiCloud, WiDayCloudy, WiNightPartlyCloudy } from 'weather-icons-react'
import { useConfig } from './ConfigProvider'
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'

export const weatherIconToPresentation = {
  'clear-day': { icon: WiDaySunny, label: 'Klar', color: '#eeeef5' },
  'clear-night': { icon: WiNightClear, label: 'Klar', color: '#eeeef5' },
  'rain': { icon: WiRain, label: 'Regen', color: '#80a5d6' },
  'snow': { icon: WiSnow, label: 'Schnee', color: '#8c82ce' },
  'sleet': { icon: WiSleet, label: 'Graupel', color: '#aba4db' },
  'wind': { icon: WiWindy, label: 'Stürmisch', color: '#9fb6d6' },
  'fog': { icon: WiFog, label: 'Neblig', color: '#d5dae2' },
  'cloudy': { icon: WiCloud, label: 'Bewölkt', color: '#b6bfcb' },
  'partly-cloudy-day': { icon: WiDayCloudy, label: 'Teils bewölkt', color: '#d5dae2' },
  'partly-cloudy-night': { icon: WiNightPartlyCloudy, label: 'Teils bewölkt', color: '#d5dae2' }
}

const useWeatherData = (toggleLoading) => {
  const [ data, setData ] = React.useState([])
  const [ error, setError ] = React.useState(false)
  const timer = useTimeout(60000 * 10, 'Weather') // 1 hour in ms
  
  // Use reactive config hook to get current config values
  const config = useConfig()
  const ENABLE_WEATHER = config.ENABLE_WEATHER || false
  const WEATHER_API_KEY = config.WEATHER_API_KEY || ''
  const WEATHER_LATITUDE = config.WEATHER_LATITUDE
  const WEATHER_LONGITUDE = config.WEATHER_LONGITUDE

  // Check if weather is configured
  const isConfigured = ENABLE_WEATHER && WEATHER_API_KEY && WEATHER_LATITUDE && WEATHER_LONGITUDE
  
  const url = () => `./forecast/${WEATHER_API_KEY}/${WEATHER_LATITUDE},${WEATHER_LONGITUDE}?&units=si&exclude=minutely`

  React.useEffect(() => {
    // Skip if not configured
    if (!isConfigured) {
      if(toggleLoading) toggleLoading(false)
      return
    }

    let isMounted = true
    const abortController = new AbortController()

    if(toggleLoading) toggleLoading(true)

    axios(url(), {
      signal: abortController.signal
    })
      .then((response) => {
        if (isMounted) {
          setData(response.data)
          setError(false)
        }
      })
      .catch((err) => {
        // Don't set error if request was aborted or component unmounted
        if (isMounted && !abortController.signal.aborted) {
          // Error is already logged by interceptor, format for UI
          setError(formatErrorForUI(err))
        }
      })
      .finally(() => { 
        if (isMounted && toggleLoading) toggleLoading(false) 
      })

    return () => {
      isMounted = false
      abortController.abort()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ timer, toggleLoading, isConfigured, ENABLE_WEATHER, WEATHER_API_KEY, WEATHER_LATITUDE, WEATHER_LONGITUDE ])

  return [ data, error ]
}

export default useWeatherData