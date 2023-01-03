import { DateTime } from 'luxon'
import Icon from '@mdi/react'
import styled from 'styled-components'
import clsx from 'clsx'

const formatDateTime = (iso) => DateTime.fromISO(iso).toLocaleString(DateTime.TIME_24_SIMPLE)

const isWeekend = (date) => date.toFormat('c') >= 6

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, max-content);
  grid-column-gap:  12px;

  padding: 0 12px;
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
    border-bottom: solid 1px #707070;
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

  .allDayRow, .eventRow {
    padding: 12px 0;
  }
  
  .allDayRow {
    border-bottom: solid 1px #707070;
  }

  .weekend {
    background-color: #414141;
  }
`

const Week = ({ data }) => {
  return (
    <Div>

      {/* First row: Captions */}
      {data.map((day, index) => (
        <div key={index} className={clsx({ weekend: isWeekend(day.date)})}>
          <h2>{day.date.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</h2>
        </div>
      ))}

      {/* Second row: Full day events */}
      {data.map((day, index) => (
        <div key={index} className={clsx('allDayRow', { weekend: isWeekend(day.date)})}>
          {day.allDay.map((event, index) => (
            <div key={index} className={'allDayEvent'}>
              {event.icon && <Icon path={event.icon} size={'1rem'} color='#ffffff'/>}
              {event.summary}
            </div>
          ))}
        </div>
      ))}

      {/* Third row: Events */}
      {data.map((day, index) => (
        <div key={index} className={clsx('eventRow', { weekend: isWeekend(day.date)})}>
          {day.events.map((event, index) => (
            <div key={index} className={'event'}>
              <h3>
                {event.icon && <Icon path={event.icon} size={'1rem'} color='#ffffff'/>}
                {formatDateTime(event.start.dateTime)} - {formatDateTime(event.end.dateTime)}
              </h3>
              <div>
                {event.summary}
              </div>
            </div>
          ))}
        </div>
      ))}
    </Div>
  )
}

export default Week