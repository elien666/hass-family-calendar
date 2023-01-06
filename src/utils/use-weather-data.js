import React from 'react'
import useTimeout from './use-timeout'
import axios from 'axios'
import { WiDaySunny, WiNightClear, WiRain, WiSnow, WiSleet, WiWindy, WiFog, WiCloud, WiDayCloudy, WiNightPartlyCloudy } from 'weather-icons-react'

const API_KEY = 'qMHi6qXYKU26CX2Ve3HUV7hq4ou61OI53WmgbtsW'
const LATITUDE = 53.570
const LONGITUDE = 10.091

export const weatherIconToPresentation = {
  'clear-day': { icon: WiDaySunny, label: 'Klar' },
  'clear-night': { icon: WiNightClear, label: 'Klar' },
  'rain': { icon: WiRain, label: 'Regen' },
  'snow': { icon: WiSnow, label: 'Schnee' },
  'sleet': { icon: WiSleet, label: 'Graupel' },
  'wind': { icon: WiWindy, label: 'Stürmisch' },
  'fog': { icon: WiFog, label: 'Neblig' },
  'cloudy': { icon: WiCloud, label: 'Bewölkt' },
  'partly-cloudy-day': { icon: WiDayCloudy, label: 'Teils bewölkt' },
  'partly-cloudy-night': { icon: WiNightPartlyCloudy, label: 'Teils bewölkt' }
}

const url = () => `/forecast/${API_KEY}/${LATITUDE},${LONGITUDE}?&units=si&exclude=minutely`

const useWeatherData = (toggleLoading) => {
  const [ data, setData ] = React.useState(null)
  const timer = useTimeout(60 * 60 * 1000) // 1 hour in ms

  React.useEffect(() => {

    // TODO: Enable weather loading
    toggleLoading(true)

    console.log('Loading weather')

    toggleLoading(false)

    axios(url())
      .then((response) => {
        console.log(response.data)
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