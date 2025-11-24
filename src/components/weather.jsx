import styled from 'styled-components'
import useWeatherData, { weatherIconToPresentation } from '../utils/use-weather-data'
import { ENABLE_WEATHER } from '../utils/config'
import { DateTime } from 'luxon'
import useKeyPress from '../utils/use-key-press'
import React, { memo, useMemo, useCallback } from 'react'
import Overlay from './overlay'
import merryTimeline from 'merry-timeline'
import TimeAgo from 'react-timeago'
import de from 'react-timeago/lib/language-strings/de'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

// register DE language
const formatter = buildFormatter(de)

const Div = styled.div`

  cursor: pointer;

  .headline {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100px;

    @media only screen and (max-width: 1200px) {
      height: auto;
     
      h2 {
        font-size: 42px;
      }
    }

    h2 {
      margin: 0;
      padding: 0;
      font-size: 50px;
      
      span {
        font-size: 36px;
        margin-left: 1rem;
      }
    }
  }

  .values {
    margin-top: 2rem;
    line-height: 1.5rem;

    span {
      font-weight: 100;
      color: #a1a0a0;
    }

    .table {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .forecast {
    display: flex;
    color: #a1a0a0;
    margin-top: 1.5rem;
    background-color: #2d2d2d;
    border-radius: 4px;
    padding: 12px 0;
    font-size: .85rem;

    > div {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 25%;

      > * + * {
        margin-top: .25rem;
      }
    }

    strong, svg {
      color: #ffffff;
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 1200px) {
    .forecast {
      display: none;
    }
  }
  
  .detail-header {
    display: flex;
    justify-content: space-between;
    
    > div:nth-child(1) {
      flex-grow: 1;
    }
    
    .headline {
      justify-content: flex-start;
    }
  }
  
  .info {
    margin-top: .5rem;
    font-size: .8rem;
  }
`

const Forecast = memo(({ data, daily=false }) => (
  <div>
    <div>
      {!daily && DateTime.fromSeconds(data.time).toLocaleString(DateTime.TIME_24_SIMPLE)}
      {daily && DateTime.fromSeconds(data.time).setLocale('de').toFormat('ccc, d.M')}
    </div>
    <div><Icon icon={data.icon}/></div>
    <div><strong>
      {!daily && <>{Math.round(data.temperature)}°</>}
      {daily && <>{Math.round(data.temperatureHigh)}° / {Math.round(data.temperatureLow)}°</>}
    </strong></div>
    <div>{Math.round(data.precipProbability * 100)} %</div>
    <div>{(data.precipIntensity * 100).toFixed(1)} mm</div>
  </div>
))

const convertTo24hMerryTimeline = (data) => {
  if (!data || !data.hourly || !data.hourly.data) return []
  return data.hourly.data.slice(0,24).map((data) => (
    {
      'color': weatherIconToPresentation[ data.icon ]?.color || '#ffffff',
      'text': weatherIconToPresentation[ data.icon ]?.label || '',
      'annotation': `${Math.round(data.temperature)}°`,
      'time': data.time
    }
  ))
}

const Icon = ({ icon }) => {
  const presentation = weatherIconToPresentation[icon]
  return <presentation.icon size={60} color={'#ffffff'} />
}

const Weather = () => {
  // Don't render if weather feature is disabled
  if (!ENABLE_WEATHER) {
    return null
  }

  const [data, error] = useWeatherData()
  const [ showWeather, toggle ] = React.useState(false)
  const keyWeather = useKeyPress('w')
  const merryWeatherNext24h = React.useRef()

  const toggleWeather = useCallback(() => toggle(v => !v), [])
  const openWeather = useCallback(() => toggle(true), [])

  const timelineData = useMemo(() => convertTo24hMerryTimeline(data), [data])
  
  // Move all useMemo calls before any early returns to avoid hooks order violation
  const forecastHours = useMemo(() => [3,6,9,12], [])
  const forecastDays = useMemo(() => [1,2,3,4,5,6,7], [])

  React.useEffect(() => {
    // Next 24 hours
    if (!merryWeatherNext24h.current || !data || !data.hourly || timelineData.length === 0) return
    const options = { timezone: "Europe/Berlin" };
    const timeLine = document.createElement('div')
    merryWeatherNext24h.current.textContent = ''
    merryWeatherNext24h.current.appendChild(timeLine)
    merryTimeline(timeLine, timelineData, options);

    return () => {
      if (merryWeatherNext24h.current) {
        merryWeatherNext24h.current.textContent = ''
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timelineData])

  // Toggle weather on keypress
  React.useEffect(() => {
    if (keyWeather) toggleWeather()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ keyWeather ]) // Only fire when key is pressed

  // Early return AFTER all hooks
  if (!data || !('currently' in data) || !('daily' in data) || !('hourly' in data)) {
    if (error !== false) {
      return (
        <Div>
          <div style={{ padding: '1rem', color: '#f85a5a', textAlign: 'center' }}>
            <h3>Fehler beim Laden der Wetterdaten</h3>
            <div>{error instanceof Error ? error.message : String(error)}</div>
          </div>
        </Div>
      )
    }
    return ''
  }

  return (
    <Div>
      <div onClick={openWeather}>
        <div className={'headline'}>
          <Icon icon={data.currently.icon}/>
          <h2>{Math.round(data.currently.temperature)}°</h2>
        </div>
        <div className={'forecast'}>
          {forecastHours.map((i, index) => (
            <Forecast key={index} data={data.hourly.data[i]} />
          ))}
        </div>
      </div>
      <Overlay visible={showWeather} onClick={toggleWeather}>
        <div className={'full-weather'}>
          {error !== false && (
            <div style={{ padding: '1rem', color: '#f85a5a', textAlign: 'center', marginBottom: '1rem' }}>
              <h3>Fehler!</h3>
              <div>{error instanceof Error ? error.message : String(error)}</div>
            </div>
          )}
          <div className={'detail-header'}>
            <div>
              <div className={'headline'}>
                <Icon icon={data.daily.data[0].icon}/>
                <h2>
                  {Math.round(data.daily.data[0].temperatureHigh)}° /
                  <span>{Math.round(data.daily.data[0].temperatureLow)}°</span>
                </h2>
              </div>
            </div>
            <h3>{weatherIconToPresentation[data.daily.data[0].icon].label}</h3>
          </div>
          <div className={'values'}>
            <div className={'table'}>
              <div><span>Gefühlt:</span> {Math.round(data.daily.data[0].apparentTemperatureHigh)}° C</div>
              <div><span>Luftfeuchtigkeit:</span> {Math.round(data.daily.data[0].humidity * 100)} %</div>
              <div><span>Wind:</span> {Math.round(data.daily.data[0].windSpeed)} km/h</div>
              <div><span>Bewölkung:</span> {Math.round(data.daily.data[0].cloudCover * 100)} %</div>
              <div><span>Regen:</span> {data.daily.data[0].precipProbability * 100} %</div>
              <div><span>UV Index:</span> {data.daily.data[0].uvIndex}</div>
              <div><span>Luftdruck:</span> {Math.round(data.daily.data[0].pressure)}</div>
              <div><span>Windgeschwindigkeit:</span> {Math.round(data.daily.data[0].windSpeed)} km/h</div>
            </div>
          </div>
          <h3>Die nächsten 24 Stunden</h3>
          <div ref={merryWeatherNext24h}/>
          <h3>Die nächste Woche</h3>
          <div className={'forecast'}>
            {forecastDays.map((i, index) => (
              <Forecast key={index} data={data.daily.data[i]} daily />
            ))}
          </div>
          <div className={'info'}>
            Aktualisiert <TimeAgo date={DateTime.fromSeconds(data.currently.time).toJSDate()} formatter={formatter} />
          </div>
        </div>
      </Overlay>
    </Div>
  )
}

export default memo(Weather)