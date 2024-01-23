import { DateTime } from 'luxon'
import Icon from '@mdi/react'
import styled from 'styled-components'
import clsx from 'clsx'
import Header from './header'
import React from 'react'
import useCalendarData from '../utils/use-calendar-data'
import useShortcuts from '../utils/use-shortcuts'

const formatDateTime = (iso) => DateTime.fromISO(iso).toLocaleString(DateTime.TIME_24_SIMPLE)

const isWeekend = (date) => date.toFormat('c') >= 6

const isToday = (date) => date.hasSame(DateTime.now(), 'day')

const Div = styled.div`

  display: flex;
  flex-direction: column;

  .schedule {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(2, max-content) 1fr;
    grid-column-gap: 12px;
    flex-grow: 1;

    background-color: #2f2f2f;
    border-radius: 4px;

    h1, h2 {
      font-weight: 400;
    }

    h2 {
      font-size: 18px;
      text-align: center;
      margin-bottom: 0;
      padding-bottom: 12px;
    }

    .caption {
      border-bottom: solid 1px #a1a0a0;
    }

    .event, .allDayEvent {
      padding: 6px 12px;
      border-radius: 4px;
      background-color: #356957;

      h3 {
        margin: 0 0 6px 0;
        display: flex;
        align-items: flex-start;
      }

      svg {
        margin-right: 6px;
        padding-top: 2px;
        min-width: 1rem;
      }

      & + .event {
        margin-top: 12px;
      }
    }

    .allDayEvent {
      display: flex;
      align-items: flex-start;
      background-color: #38576b;

      & + .allDayEvent {
        margin-top: 12px;
      }
    }

    .eventRow {
      padding: 12px 0;
    }

    .allDayRow {
      padding: 12px 0;
      border-bottom: solid 1px #a1a0a0;
    }

    .weekend {
      background-color: #363636;
    }

    .today h2 {
      color: #f85a5a;
      font-weight: 600;
    }
  }
`

const Week = () => {

  const [ startDate, setStartDate ] = React.useState(undefined)
  const data = useCalendarData(startDate)
  const { nextWeek, previousWeek, startWeekWithToday } = useShortcuts(setStartDate)
  
  React.useEffect(() => {
    startWeekWithToday()
    // eslint-disable-next-line
  }, [])
  
  return (
    <Div>
      <Header nextWeek={nextWeek} previousWeek={previousWeek}
              startWeekWithToday={startWeekWithToday}/>
      <div className={'schedule'}>

        {/* First row: Captions */}
        {data.slice(0,7).map((day, index) => (
          <div key={index} className={clsx({ weekend: isWeekend(day.date), today: isToday(day.date) }, 'caption')}>
            <h2>{day.date.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</h2>
          </div>
        ))}

        {/* Second row: Full day events */}
        {data.slice(0,7).map((day, index) => (
          <div key={index} className={clsx('allDayRow', { weekend: isWeekend(day.date), today: isToday(day.date) })}>
            {day.allDay.map((event, index) => (
              <div key={index} className={'allDayEvent'}>
                {event.icon && <Icon path={event.icon} size={'1rem'} color="#ffffff"/>}
                {event.summary}
              </div>
            ))}
          </div>
        ))}

        {/* Third row: Events */}
        {data.slice(0,7).map((day, index) => (
          <div key={index} className={clsx('eventRow', { weekend: isWeekend(day.date), today: isToday(day.date) })}>
            {day.events.map((event, index) => (
              <div key={index} className={'event'}>
                <h3>
                  {event.icon && <Icon path={event.icon} size={'1rem'} color="#ffffff"/>}
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
  )
}

export default Week