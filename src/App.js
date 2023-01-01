import React from 'react'
import axios from 'axios'
import qs from 'qs'
import { DateTime } from 'luxon'
import styled, { createGlobalStyle } from 'styled-components'
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';


axios.defaults.headers.common['Authorization'] = 'Bearer '

const host = 'http://homeassistant.local:8123/api/calendars/calendar.hamsischwan_s_kalender'
const url = (params) => `${host}?${qs.stringify(params)}`

const formatDateTime = (iso) => DateTime.fromISO(iso).toLocaleString(DateTime.TIME_24_SIMPLE)

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, sans-serif;
    background-color: #1c1c1c;
    color: #ffffff;
  }
`

const Div = styled.div`

  padding: 0 12px;

  h1, h2 {
    font-weight: 400;
  }

  h2 {
    font-size: 18px;
    text-align: center;
    margin-bottom: 0;
    padding-bottom: 12px;
    border-bottom: solid 1px #707070;
  }
  
  .allDayRow {
    padding-bottom: 12px;
    border-bottom: solid 1px #707070;
  }

  .days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(3, max-content);
    gap: 12px;

    padding: 0 12px 12px 12px;
    background-color: #2f2f2f;
    border-radius: 4px;

    .event, .allDayEvent {
      padding: 6px 12px;
      border-radius: 4px;
      background-color: #356957;

      h3 {
        margin: 0 0 6px 0;
        display: flex;
        align-items: center;
      }

      svg {
        margin-right: 6px;
      }

      & + .event {
        margin-top: 12px;
      }
    }

    .allDayEvent {
      display: flex;
      align-items: center;
      background-color: #38576b;
    }
  }
`

function App() {

  const [ days, setDays ] = React.useState([])

  React.useEffect(() => {

    const dateRange = [0,1,2,3,4,5].map((diff) => (
      DateTime.now().plus({ days: diff })).startOf('day')
    )
    dateRange[6] = DateTime.now().plus({ days: 6 }).endOf('day')

    axios(url({ start: dateRange[0].toISO(), end: dateRange[6].toISO() }))
      .then((response) => {
        setDays(dateRange.map((date) => {
          const events = response.data.filter((event => {
            if ('dateTime' in event.start) {
              return DateTime.fromISO(event.start.dateTime).hasSame(date, 'day')
            } else {
              return DateTime.fromSQL(event.start.date).hasSame(date, 'day')
            }
          }))
          return {
            date,
            allDay: events.filter((event) => 'date' in event.start),
            events: events.filter((event) => 'dateTime' in event.start)
          }
        }))
      })
  }, [])

  return (
    <Div>
      <GlobalStyle />
      <h1>Diese Woche</h1>
      <div className={'days'}>
        {/* First row: Captions */}
        {days.map((day, index) => (
          <div key={index}>
            <h2>{day.date.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</h2>
          </div>
        ))}
        {/* Second row: Full day events */}
        {days.map((day, index) => (
          <div key={index} className={'allDayRow'}>
            {day.allDay.map((event, index) => (
              <div key={index} className={'allDayEvent'}>
                <Icon path={mdiDelete} size={'1rem'} color='#ffffff'/>
                {event.summary}
              </div>
            ))}
          </div>
        ))}
        {/* Third row: Events */}
        {days.map((day, index) => (
          <div key={index}>
            {day.events.map((event, index) => (
              <div key={index} className={'event'}>
                <h3>
                  <Icon path={mdiDelete} size={'1rem'} color='#ffffff'/>
                  {formatDateTime(event.start.dateTime)} - {formatDateTime(event.end.dateTime)}
                </h3>
                <div>
                  {event.summary}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Div>
  );
}

export default App;
