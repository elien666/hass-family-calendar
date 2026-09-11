import { DateTime } from 'luxon'
import styled from 'styled-components'
import clsx from 'clsx'
import Header from './header'
import ErrorBoundary from './ErrorBoundary'
import React, { useMemo } from 'react'
import useCalendarData from '../utils/use-calendar-data'
import useShortcuts from '../utils/use-shortcuts'
import useSwipe from '../utils/useSwipe'
import useAutoScroll from '../utils/use-auto-scroll'
import useTimeout from '../utils/use-timeout'
import { ThreeDots } from 'react-loader-spinner'
import classifyEvent, { PERSONS, AWAY_STYLE } from '../utils/event-rules'
import {
  layoutDayEvents,
  spanMultiDayEvents,
  currentHourOffset,
  axisHeight,
  DAY_START_HOUR,
  DAY_END_HOUR,
  HOUR_HEIGHT,
} from '../utils/day-layout'
import EventDetails from './event-details'
import { CALENDAR_NOW_TICK } from '../utils/constants'

const formatDateTime = (iso) => DateTime.fromISO(iso).toLocaleString(DateTime.TIME_24_SIMPLE)

const isWeekend = (date) => date.toFormat('c') >= 6

const isToday = (date) => date.hasSame(DateTime.now(), 'day')

const HOURS = Array.from(
  { length: DAY_END_HOUR - DAY_START_HOUR + 1 },
  (_, i) => DAY_START_HOUR + i,
)

/** Spaltenraster: Zeitachse plus sieben gleich breite Tage. */
const GRID_COLUMNS = '56px repeat(7, minmax(0, 1fr))'

/** Lato enthält keine Emoji — ohne diese Kette zeigt der Browser Ersatzkästchen. */
const EMOJI_FONT = `"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  .calendar {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    /* Eigener Stapelkontext: Die z-index-Werte für Terminstapel und
       Jetzt-Linie bleiben dadurch im Kalender eingeschlossen und können
       die Overlays (CCTV, Wäsche, Garage, Wetter, Türklingel) nicht
       überdecken, die im selben Elternkontext liegen. */
    isolation: isolate;
    background-color: #252528;
    border-radius: 4px;
    overflow: hidden;
  }

  .headRow, .awayRow, .allDayRow {
    display: grid;
    grid-template-columns: ${GRID_COLUMNS};
    flex: none;
  }

  .rowLabel {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #6e6e78;
    align-self: center;
    text-align: right;
    padding: 4px 6px;
    line-height: 1.2;
  }

  .headRow {
    border-bottom: solid 1px #3a3a40;

    .caption {
      text-align: center;
      padding: 7px 4px;
      border-left: solid 1px #2f2f35;
      min-width: 0;

      &:first-child { border-left: 0; }

      .weekday {
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #6e6e78;
      }

      .dayNumber {
        font-size: 22px;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        line-height: 1.2;
      }
    }

    .caption.today {
      background-color: #33292c;
      box-shadow: inset 0 -3px 0 #f85a5a;

      .weekday { color: #f85a5a; }

      .dayNumber {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background-color: #f85a5a;
        color: #1c1c1c;
        font-weight: 700;
      }
    }
  }

  /* Abwesenheiten stehen über allem: Für die Kinder ist das die wichtigste
     Information des Tages. Die Zeile entfällt, wenn niemand unterwegs ist. */
  .awayRow {
    background-color: #201d1e;
    border-bottom: solid 1px #3a3a40;

    .awayTrack {
      grid-column: 2 / -1;
      position: relative;
      padding: 4px 0;
    }

    .awayLane {
      position: relative;
      height: 26px;

      & + .awayLane { margin-top: 3px; }
    }

    .awayBar {
      position: absolute;
      height: 26px;
      border-radius: 13px;
      background-color: ${AWAY_STYLE.tile};
      border: solid 1px ${AWAY_STYLE.color};
      color: ${AWAY_STYLE.text};
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0 11px;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      cursor: pointer;
      touch-action: manipulation;

      &:active { filter: brightness(1.25); }

      &:focus-visible {
        outline: solid 2px #f2f2f4;
        outline-offset: -2px;
      }

      .awayIcon { font-family: ${EMOJI_FONT}; }

      .awayLabel {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .allDayRow {
    background-color: #212126;
    border-bottom: solid 1px #3a3a40;

    .allDayCell {
      border-left: solid 1px #2f2f35;
      padding: 4px;
      min-height: 30px;
      display: flex;
      flex-direction: column;
      gap: 3px;
      min-width: 0;
    }

    .allDayCell.today { background-color: #33292c; }
    .allDayCell.weekend { background-color: #232326; }
  }

  .chip {
    font-size: 12.5px;
    padding: 4px 7px;
    border-radius: 5px;
    background-color: #3a3a44;
    border-left: solid 4px #5a5a62;
    display: flex;
    align-items: center;
    gap: 5px;
    overflow: hidden;
    cursor: pointer;
    touch-action: manipulation;

    &:active { filter: brightness(1.25); }

    &:focus-visible {
      outline: solid 2px #f2f2f4;
      outline-offset: -2px;
    }

    .chipLabel {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }

    .chipIcon {
      flex: none;
      font-size: 13px;
      font-family: ${EMOJI_FONT};
    }

    .wasteDot {
      width: 11px;
      height: 11px;
      border-radius: 50%;
      flex: none;
      border: solid 1px rgba(0, 0, 0, 0.4);
    }
  }

  .scrollBody {
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;

    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  }

  .timeGrid {
    display: grid;
    grid-template-columns: ${GRID_COLUMNS};
    position: relative;
  }

  .axis {
    position: relative;

    .hourLabel {
      position: absolute;
      top: -7px;
      right: 7px;
      font-size: 11px;
      color: #6e6e78;
      font-variant-numeric: tabular-nums;
    }
  }

  .hourLine {
    height: ${HOUR_HEIGHT}px;
    border-top: solid 1px #2f2f35;
  }

  .axis .hourLine { border-top: 0; }

  .dayColumn {
    position: relative;
    border-left: solid 1px #2f2f35;
    min-width: 0;
  }

  .dayColumn.weekend { background-color: #232326; }
  .dayColumn.today { background-color: #33292c; }

  .event {
    position: absolute;
    border-radius: 7px;
    padding: 5px 8px;
    overflow: hidden;
    background-color: #3a3a44;
    border-left: solid 5px #5a5a62;
    font-size: 13.5px;
    line-height: 1.28;
    box-shadow: -1px 0 0 rgba(0, 0, 0, 0.35);
    cursor: pointer;
    /* Der Browser soll die Geste nicht als Doppeltipp-Zoom deuten. */
    touch-action: manipulation;

    &:active { filter: brightness(1.25); }

    &:focus-visible {
      outline: solid 2px #f2f2f4;
      outline-offset: -2px;
    }

    .eventTitle {
      font-weight: 600;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .eventTime {
      font-size: 11.5px;
      color: #ffffffb0;
      font-variant-numeric: tabular-nums;
      margin-top: 1px;
    }

    .eventIcon {
      margin-right: 3px;
      font-family: ${EMOJI_FONT};
    }
  }

  .nowLine {
    position: absolute;
    left: 56px;
    right: 0;
    height: 0;
    border-top: solid 2px #f85a5a;
    z-index: 20;
    pointer-events: none;

    &::before {
      content: '';
      position: absolute;
      left: -5px;
      top: -5px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #f85a5a;
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

  @media only screen and (max-width: 1200px) {
    .headRow .caption .dayNumber { font-size: 18px; }
    .event { font-size: 12px; }
    .chip { font-size: 11px; }
  }
`

/** Ganztages-Termine ohne Abwesenheit — diese laufen in der Chip-Zeile. */
const isAwayEvent = (event) => classifyEvent(event).away !== null

const Week = () => {

  const [ startDate, setStartDate ] = React.useState(undefined)
  const [data, error] = useCalendarData(startDate)
  const { nextWeek, previousWeek, startWeekWithToday } = useShortcuts(setStartDate)

  React.useEffect(() => {
    // Set initial start date to Monday of current week
    if (startDate === undefined) {
      startWeekWithToday()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const swipeHandlers = useSwipe({
    onSwipedLeft: () => nextWeek(),
    onSwipedRight: () => previousWeek()
  })

  // Angetippter Termin samt seinem Tag — das Datum steht nicht im Termin
  // selbst, wird im Detail-Overlay aber gebraucht.
  const [ selected, setSelected ] = React.useState(null)
  const closeDetails = React.useCallback(() => setSelected(null), [])

  // Die Jetzt-Linie muss auch dann nachrücken, wenn keine neuen Daten kommen.
  // useTimeout kippt in festem Takt einen Wert und erzwingt so ein Rerender.
  const tick = useTimeout(CALENDAR_NOW_TICK, 'calendar-now')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const now = useMemo(() => DateTime.now(), [ tick ])

  const weekData = useMemo(() => data.slice(0, 7), [data])

  const showsToday = useMemo(
    () => weekData.some((day) => isToday(day.date)),
    [ weekData ],
  )

  // Nur in der Woche, die den heutigen Tag enthält, gibt es ein "jetzt".
  const nowOffset = useMemo(
    () => (showsToday ? currentHourOffset(now) : null),
    [ showsToday, now ],
  )

  const { ref: scrollRef } = useAutoScroll(nowOffset)

  const awaySpans = useMemo(
    () => spanMultiDayEvents(weekData, isAwayEvent),
    [ weekData ],
  )

  const laidOutDays = useMemo(
    () => weekData.map((day) => layoutDayEvents(day.events)),
    [ weekData ],
  )

  return (
    <Div {...swipeHandlers}>
      <ErrorBoundary label="Header">
        <Header nextWeek={nextWeek} previousWeek={previousWeek}
                startWeekWithToday={startWeekWithToday}/>
      </ErrorBoundary>

      <div className={'calendar'}>
        {/* Spaltenköpfe */}
        <div className={'headRow'}>
          <div/>
          {weekData.map((day, index) => (
            <div key={index}
                 className={clsx('caption', {
                   weekend: isWeekend(day.date),
                   today: isToday(day.date),
                 })}>
              {/* toLocaleString folgt der Browsersprache; toFormat('ccc')
                  würde dagegen auf der Systemsprache landen (englisch). */}
              <div className={'weekday'}>
                {day.date.toLocaleString({ weekday: 'short' })}
              </div>
              <div className={'dayNumber'}>
                {isToday(day.date)
                  ? day.date.day
                  : day.date.toLocaleString({ day: 'numeric', month: 'numeric' })}
              </div>
            </div>
          ))}
        </div>

        {/* Abwesenheiten als durchgehende Balken */}
        {awaySpans.length > 0 && (
          <div className={'awayRow'}>
            <div className={'rowLabel'}>außer<br/>Haus</div>
            <div className={'awayTrack'}>
              {awaySpans.map(({ event, startIndex, span }, index) => {
                const { title } = classifyEvent(event)
                return (
                  <div key={index} className={'awayLane'}>
                    <div className={'awayBar'}
                         role={'button'}
                         tabIndex={0}
                         onClick={() => setSelected({
                           event,
                           day: weekData[startIndex]?.date,
                         })}
                         onKeyDown={(e) => {
                           if (e.key === 'Enter' || e.key === ' ') {
                             e.preventDefault()
                             setSelected({ event, day: weekData[startIndex]?.date })
                           }
                         }}
                         style={{
                           left: `${(startIndex / 7) * 100}%`,
                           width: `calc(${(span / 7) * 100}% - 6px)`,
                           marginLeft: '3px',
                         }}>
                      <span className={'awayIcon'}>✈️</span>
                      <span className={'awayLabel'}>{title}</span>
                      {span > 1 && <span>· {span} Tage</span>}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Ganztages-Termine */}
        <div className={'allDayRow'}>
          <div className={'rowLabel'}>ganz<br/>tags</div>
          {weekData.map((day, index) => (
            <div key={index}
                 className={clsx('allDayCell', {
                   weekend: isWeekend(day.date),
                   today: isToday(day.date),
                 })}>
              {day.allDay.filter((event) => !isAwayEvent(event)).map((event, eventIndex) => {
                const { title, icon, primary, wasteColor } = classifyEvent(event)
                return (
                  <div key={eventIndex} className={'chip'}
                       role={'button'}
                       tabIndex={0}
                       onClick={() => setSelected({ event, day: day.date })}
                       onKeyDown={(e) => {
                         if (e.key === 'Enter' || e.key === ' ') {
                           e.preventDefault()
                           setSelected({ event, day: day.date })
                         }
                       }}
                       style={{ borderLeftColor: PERSONS[primary].color }}>
                    {wasteColor
                      ? <span className={'wasteDot'} style={{ backgroundColor: wasteColor }}/>
                      : icon && <span className={'chipIcon'}>{icon}</span>}
                    <span className={'chipLabel'}>{title}</span>
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Zeitachse mit den Terminen des Tages */}
        <div className={'scrollBody'} ref={scrollRef}>
          <div className={'timeGrid'}>
            <div className={'axis'} style={{ height: axisHeight() }}>
              {HOURS.map((hour) => (
                <div key={hour} className={'hourLine'}>
                  <span className={'hourLabel'}>
                    {String(hour).padStart(2, '0')}:00
                  </span>
                </div>
              ))}
            </div>

            {weekData.map((day, index) => (
              <div key={index}
                   className={clsx('dayColumn', {
                     weekend: isWeekend(day.date),
                     today: isToday(day.date),
                   })}
                   style={{ height: axisHeight() }}>
                {HOURS.map((hour) => <div key={hour} className={'hourLine'}/>)}

                {laidOutDays[index]?.map(({ event, top, height, lane, lanes }, eventIndex) => {
                  const { title, icon, primary } = classifyEvent(event)
                  const person = PERSONS[primary]
                  // Überlappende Termine versetzt stapeln statt die Spalte zu
                  // teilen — so bleibt jeder Titel lesbar.
                  const offset = lanes > 1 ? lane * 14 : 0
                  return (
                    <div key={eventIndex}
                         className={'event'}
                         role={'button'}
                         tabIndex={0}
                         onClick={() => setSelected({ event, day: day.date })}
                         onKeyDown={(e) => {
                           if (e.key === 'Enter' || e.key === ' ') {
                             e.preventDefault()
                             setSelected({ event, day: day.date })
                           }
                         }}
                         style={{
                           top,
                           height,
                           left: `calc(3px + ${offset}px)`,
                           right: '3px',
                           zIndex: 10 + lane,
                           backgroundColor: person.tile,
                           borderLeftColor: person.color,
                         }}>
                      <div className={'eventTitle'}>
                        {icon && <span className={'eventIcon'}>{icon}</span>}
                        {title}
                      </div>
                      <div className={'eventTime'}>
                        {formatDateTime(event.start.dateTime)} – {formatDateTime(event.end.dateTime)}
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>

          {nowOffset !== null && (
            <div className={'nowLine'} style={{ top: nowOffset }}/>
          )}
        </div>
      </div>

      {data.length === 0 && (
        <div className='loading'>
          {error !== false ? (
            <div style={{ padding: '1rem', color: '#f85a5a', textAlign: 'center' }}>
              <h3>Fehler beim Laden der Kalenderdaten</h3>
              <div>{error instanceof Error ? error.message : String(error)}</div>
            </div>
          ) : (
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
          )}
        </div>
      )}
      {error !== false && data.length > 0 && (
        <div style={{ padding: '1rem', color: '#f85a5a', textAlign: 'center', marginTop: '1rem' }}>
          <div>Warnung: {error instanceof Error ? error.message : String(error)}</div>
        </div>
      )}

      {selected && (
        <ErrorBoundary label="Termindetails">
          <EventDetails event={selected.event} day={selected.day} onClose={closeDetails}/>
        </ErrorBoundary>
      )}
    </Div>
  )
}

export default Week
