import { DateTime } from 'luxon'
import Icon from '@mdi/react'
import styled from 'styled-components'
import clsx from 'clsx'
import Header from './header'
import React, { useMemo } from 'react'
import useCalendarData from '../utils/use-calendar-data'
import useShortcuts from '../utils/use-shortcuts'
import useSwipe from '../utils/useSwipe'
import { ThreeDots } from 'react-loader-spinner'

const formatDateTime = (iso) => DateTime.fromISO(iso).toLocaleString(DateTime.TIME_24_SIMPLE)

const isWeekend = (date) => date.toFormat('c') >= 6

const isToday = (date) => date.hasSame(DateTime.now(), 'day')

const Div = styled.div`

  display: flex;
  flex-direction: column;

  .schedule {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
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

      @media only screen and (max-width: 1200px) {
        h2 {
          font-size: 12px;
        }
      }
    }

    .event, .allDayEvent {
      padding: 6px 12px;
      border-radius: 4px;
      background-color: #356957;
      word-break: break-word;
      font-size: 0.9rem;

      h3 {
        margin: 6px 0 0 0;
        display: flex;
        align-items: flex-start;
        font-size: 0.8rem;
        font-weight: normal;
        color: #ffffff6b
      }

      @media only screen and (max-width: 1200px) {
        h3 {
          font-size: 12px;
        }
        font-size: 14px;
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
  
  .loading {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #2f2f2f;
    justify-content: center;
  }
`

const Week = () => {

  const [ startDate, setStartDate ] = React.useState(undefined)
  const data = useCalendarData(startDate)
  const { nextWeek, previousWeek, startWeekWithToday } = useShortcuts(setStartDate)
  
  React.useEffect(() => {
    startWeekWithToday()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const swipeHandlers = useSwipe({
    onSwipedLeft: () => nextWeek(),
    onSwipedRight: () => previousWeek()
  })

  const dateOptions = useMemo(() => ({
    weekday: 'short',
    month: 'numeric',   
    day: 'numeric'   
  }), []);

  // Memoize the first 7 days to avoid re-slicing on every render
  const weekData = useMemo(() => data.slice(0, 7), [data]);
  
  return (
    <Div {...swipeHandlers}>
      <Header nextWeek={nextWeek} previousWeek={previousWeek}
              startWeekWithToday={startWeekWithToday}/>
      <div className={'schedule'}>
          {/* First row: Captions */}
          {weekData.map((day, index) => (
            <div key={index} className={clsx({ weekend: isWeekend(day.date), today: isToday(day.date) }, 'caption')}>
              <h2>{day.date.toLocaleString(dateOptions)}</h2>
            </div>
          ))}

          {/* Second row: Full day events */}
          {weekData.map((day, index) => (
            <div key={index} className={clsx('allDayRow', { weekend: isWeekend(day.date), today: isToday(day.date) })}>
              {day.allDay.map((event, eventIndex) => (
                <div key={eventIndex} className={'allDayEvent'}>
                  {/*event.icon && <Icon path={event.icon} size={'1rem'} color="#ffffff"/>*/}
                  {event.summary}
                </div>
              ))}
            </div>
          ))}

          {/* Third row: Events */}
          {weekData.map((day, index) => (
            <div key={index} className={clsx('eventRow', { weekend: isWeekend(day.date), today: isToday(day.date) })}>
              {day.events.map((event, eventIndex) => (
                <div key={eventIndex} className={'event'}>
                  <div>
                    {event.summary}
                  </div>
                  <h3>
                    {event.icon && <Icon path={event.icon} size={'1rem'} color="#ffffff"/>}
                    {formatDateTime(event.start.dateTime)} - {formatDateTime(event.end.dateTime)}
                  </h3>
                </div>
              ))}
            </div>
          ))}
      </div>
      {data.length === 0 && (
        <div className='loading'>
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#c1c1c1"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        </div>
      )}
    </Div>
  ) 
}

export default Week