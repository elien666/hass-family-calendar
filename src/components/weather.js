import styled from 'styled-components'
import useWeatherData, { weatherIconToPresentation } from '../utils/use-weather-data'
import { DateTime } from 'luxon'
import useKeyPress from '../utils/use-key-press'
import React from 'react'
import Overlay from './overlay'
import merryTimeline from 'merry-timeline'
import TimeAgo from 'timeago-react'
import * as timeago from 'timeago.js'
import de from 'timeago.js/lib/lang/de'

// register it.
timeago.register('de', de);

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
    text-align: right;
    font-weight: 700;
    line-height: 1.5rem;

    span {
      font-weight: 100;
      color: #a1a0a0;
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

const Forecast = ({ data, daily=false }) => (
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
)

const convertTo24hMerryTimeline = (data) => (
  data.hourly.data.slice(0,24).map((data) => (
    {
      'color': weatherIconToPresentation[ data.icon ].color,
      'text': weatherIconToPresentation[ data.icon ].label,
      'annotation': `${Math.round(data.temperature)}°`,
      'time': data.time
    }
  ))
)

const Icon = ({ icon }) => {
  const presentation = weatherIconToPresentation[icon]
  return <presentation.icon size={60} color={'#ffffff'} />
}

const Weather = ({ pin }) => {

  const data = useWeatherData()
  const [ showWeather, toggle ] = React.useState(false)
  const keyWeather = useKeyPress('w')
  const merryWeatherNext24h = React.useRef()

  React.useEffect(() => {
    // Next 24 hours
    if (!merryWeatherNext24h.current) return
    const options = { timezone: "Europe/Berlin" };
    const timeLine = document.createElement('div')
    merryWeatherNext24h.current.textContent = ''
    merryWeatherNext24h.current.appendChild(timeLine)
    merryTimeline(timeLine, convertTo24hMerryTimeline(data), options);

  }, [merryWeatherNext24h, data])

  // Toggle weather on keypress
  React.useEffect(() => {
    if (keyWeather || pin === 17) toggle(v => !v)
  }, [ keyWeather, pin ]) // Only fire when key or button is pressed

  if (!data || !('currently' in data) || !('daily' in data) || !('hourly' in data)) return ''

  return (
    <Div onClick={() => toggle(true)}>
      <div className={'headline'}>
        <Icon icon={data.currently.icon}/>
        <h2>{Math.round(data.currently.temperature)}°</h2>
      </div>
      <div className={'forecast'}>
        {[3,6,9,12].map((i, index) => (
          <Forecast key={index} data={data.hourly.data[i]} />
        ))}
      </div>
      <Overlay visible={showWeather} onClick={() => toggle(false)}>
        <div className={'full-weather'} onClick={() => toggle(false)}>
          <h2>Wetter Vorhersage</h2>
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
            <div className={'values'}>
              <h3>{weatherIconToPresentation[data.daily.data[0].icon].label}</h3>
              <div><span>Gefühlt:</span> {Math.round(data.daily.data[0].apparentTemperatureHigh)}° C</div>
              <div><span>Luftfeuchtigkeit:</span> {Math.round(data.daily.data[0].humidity * 100)} %</div>
              <div><span>Wind:</span> {Math.round(data.daily.data[0].windSpeed)} km/h</div>
              <div><span>Bewölkung:</span> {data.daily.data[0].cloudCover * 100} %</div>
              <div><span>Regen:</span> {data.daily.data[0].precipProbability * 1000} %</div>
              <div><span>UV Index:</span> {data.daily.data[0].uvIndex}</div>
              <div><span>Luftdruck:</span> {Math.round(data.daily.data[0].pressure)}</div>
              <div><span>Windgeschwindigkeit:</span> {Math.round(data.daily.data[0].windSpeed)} km/h</div>
            </div>
          </div>
          <h3>Die nächsten 24 Stunden</h3>
          <div ref={merryWeatherNext24h}/>
          <h3>Die nächste Woche</h3>
          <div className={'forecast'}>
            {[1,2,3,4,5,6,7].map((i, index) => (
              <Forecast key={index} data={data.daily.data[i]} daily />
            ))}
          </div>
          <div className={'info'}>
            Aktualisiert <TimeAgo datetime={DateTime.fromSeconds(data.currently.time).toJSDate()} locale={'de'} />
          </div>
        </div>
      </Overlay>
    </Div>
  )
}

export default Weather