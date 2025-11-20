import React from 'react'
import useTimeout from './use-timeout'
import axios from 'axios'
import { WiDaySunny, WiNightClear, WiRain, WiSnow, WiSleet, WiWindy, WiFog, WiCloud, WiDayCloudy, WiNightPartlyCloudy } from 'weather-icons-react'
import { WEATHER_API_KEY, WEATHER_LATITUDE, WEATHER_LONGITUDE } from './config'
import logger from './logger'

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

const url = () => `./forecast/${WEATHER_API_KEY}/${WEATHER_LATITUDE},${WEATHER_LONGITUDE}?&units=si&exclude=minutely`

const useWeatherData = (toggleLoading) => {
  const [ data, setData ] = React.useState([])
  const timer = useTimeout(60000 * 10, 'Weather') // 1 hour in ms

  // Check if weather is configured
  const isConfigured = WEATHER_API_KEY && WEATHER_LATITUDE && WEATHER_LONGITUDE

  React.useEffect(() => {
    // Skip if not configured
    if (!isConfigured) {
      if(toggleLoading) toggleLoading(false)
      return
    }

    if(toggleLoading) toggleLoading(true)

    axios(url())
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        logger.error('Could not load weather data', err)
      })
      .finally(() => { if(toggleLoading) toggleLoading(false) })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ timer, toggleLoading, isConfigured ])

  return data
}

export default useWeatherData