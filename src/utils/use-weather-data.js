import React from 'react'
import useTimeout from './use-timeout'
import axios from 'axios'
import { WiDaySunny, WiNightClear, WiRain, WiSnow, WiSleet, WiWindy, WiFog, WiCloud, WiDayCloudy, WiNightPartlyCloudy } from 'weather-icons-react'

const API_KEY = 'qMHi6qXYKU26CX2Ve3HUV7hq4ou61OI53WmgbtsW'
const LATITUDE = 53.570
const LONGITUDE = 10.091

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

const url = () => `/forecast/${API_KEY}/${LATITUDE},${LONGITUDE}?&units=si&exclude=minutely`

const useWeatherData = (toggleLoading) => {
  const [ data, setData ] = React.useState(null)
  const timer = useTimeout(60 * 60 * 1000) // 1 hour in ms

  React.useEffect(() => {

    toggleLoading(true)

    axios(url())
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.log('Could not load weather data', err)
      })
      .finally(() => toggleLoading(false))

  }, [ timer, toggleLoading ])

  return data
}

export default useWeatherData