import styled from 'styled-components'
import useWeatherData, { weatherIconToPresentation } from '../utils/use-weather-data'
import { DateTime } from 'luxon'

const Div = styled.div`

  .headline {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100px;

    h2 {
      margin: 0;
      padding: 0;
      font-size: 50px;
      
      span {
        font-size: 16px;
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
`

const Forecast = ({ data }) => (
  <div>
    <div>{DateTime.fromSeconds(data.time).toLocaleString(DateTime.TIME_24_SIMPLE)}</div>
    <div><Icon icon={data.icon}/></div>
    <div><strong>{Math.round(data.temperature)}°</strong></div>
    <div>{data.precipProbability * 100} %</div>
    <div>{(data.precipAccumulation * 100).toFixed(1)} mm</div>
  </div>
)

const Icon = ({ icon }) => {
  const presentation = weatherIconToPresentation[icon]
  return <presentation.icon size={60} color={'#ffffff'} />
}

const Label = ({ icon }) => <div>{weatherIconToPresentation[icon].label}</div>

const Weather = ({ toggleLoading }) => {

  const data = useWeatherData(toggleLoading)
  if (!data || !('currently' in data) || !('daily' in data) || !('hourly' in data)) return ''

  return (
    <Div>
      <div className={'headline'}>
        <Icon icon={data.currently.icon}/>
        <h2>{Math.round(data.currently.temperature)}° C</h2>
      </div>
      <div className={'values'}>
        <Label icon={data.currently.icon} />
        <div><span>Gefühlt:</span> {Math.round(data.currently.apparentTemperature)}° C</div>
        <div><span>Luftfeuchtigkeit:</span> {data.currently.humidity * 100}%</div>
        <div><span>Wind:</span> {Math.round(data.currently.windSpeed)} km/h</div>
        <div><span>Bewölkung:</span> {data.currently.cloudCover * 100} %</div>
        <div><span>Regen:</span> {data.currently.precipProbability * 100} %</div>
        <div><span>Sonnenaufgang:</span> {DateTime.fromSeconds(data.daily.data[0].sunriseTime).toLocaleString(DateTime.TIME_24_SIMPLE)}</div>
        <div><span>Sonnenuntergang:</span> {DateTime.fromSeconds(data.daily.data[0].sunsetTime).toLocaleString(DateTime.TIME_24_SIMPLE)}</div>
      </div>
      <div className={'forecast'}>
        {[3,6,9,12].map((i, index) => (
          <Forecast key={index} data={data.hourly.data[i]} />
        ))}
      </div>
    </Div>
  )
}

export default Weather