import React from 'react'
import styled from 'styled-components'
import { DateTime } from 'luxon'
import clsx from 'clsx'
import useHvv from '../utils/use-hvv'

const Div = styled.div`
  margin-top: 2rem;

  svg {
    height: 32px;
    width: auto;
    margin-bottom: 1rem;
  }

  h3 {
    margin: 0 0 .5rem 0;
    padding: 0;
    font-size: 1rem;
    color: #a1a0a0;
  }

  .departure {
    display: flex;
    align-items: center;

    > *:nth-child(1) {
      height: 14px;
      width: 50px;
      align-items: center;
    }

    > *:nth-child(2) {
      flex-grow: 2;
    }

    > *:nth-child(3) {
      flex-grow: 1;
      text-align: right;

      span {
        color: #17e146;

        &.error {
          color: #ea0000;
        }
        
        &.invisible {
          opacity: 0;
        }
      }
    }
  }
`

const Departure = ({ line, direction, time, offset }) => (
  <div className={'departure'}>
    <div><img src={`https://cloud.geofox.de/icon/linename?name=${line}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`} alt={`Linie ${line}`}/></div>
    <div>{direction}</div>
    <div>
      {time.toLocaleString(DateTime.TIME_24_SIMPLE)}&nbsp;
      {offset && <span className={clsx({ error: !offset.endsWith(0)})}>{offset}</span>}
      {!offset && <span className={'invisible'}>+0</span>}
    </div>
  </div>
)

const Hvv = () => {

  const data = useHvv('departureList')

  console.log(data)

  return (
    <Div>
      <svg xmlns="http://www.w3.org/2000/svg" width="226.2" height="68.3" viewBox="0 0 226.2 68.3">
        <g transform="translate(10368 -6294)">
          <path d="M200.4,68.3H187.8L163.2,19H178l16.4,34.5L211.3,19h14.9Zm-65.3,0H122.5L97.9,19h14.8l16.4,34.5L146,19h14.9Zm-79.8-22v22H42.4V3.1H55.3v26a20.678,20.678,0,0,1,7.4-8.6,22.024,22.024,0,0,1,12.1-3.2,27.842,27.842,0,0,1,6.6.7,17.825,17.825,0,0,1,5.5,2.3,18.36,18.36,0,0,1,7.5,8.3A29.823,29.823,0,0,1,97,41.4V68.3H83.6V45.6a34.829,34.829,0,0,0-.3-4.7,24.681,24.681,0,0,0-.9-4.1,11.517,11.517,0,0,0-4.1-5.9,12.9,12.9,0,0,0-7.8-2.1c-5.2,0-9,1.5-11.5,4.4s-3.7,7.3-3.7,13.1" transform="translate(-10368 6294)" fill="#fa1e41"/>
          <path d="M0,0V11.7l16.4,7.4L0,26.1V37.8L29.5,23.1V15.5Z" transform="translate(-10368 6294)" fill="#00ff00"/>
        </g>
      </svg>
      <h3>AK Wandsbek</h3>
      <Departure line={'10'} direction={'U Wandsbek Markt'} time={DateTime.fromSQL('21:45:00.000')} offset={'+1'} />
      <Departure line={'162'} direction={'Bf. Rahlstedt (Amtsstraße)'} time={DateTime.fromSQL('21:48:00.000')} offset={'+0'} />
      <Departure line={'263'} direction={'Willinghusen (Kehre)'} time={DateTime.fromSQL('21:48:00.000')} offset={'+1'} />
      <Departure line={'263'} direction={'U Wandsbek Markt'} time={DateTime.fromSQL('21:54:00.000')} />
    </Div>
  )
}

export default Hvv