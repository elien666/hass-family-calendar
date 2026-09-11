import React from 'react'
import styled from 'styled-components'
import clsx from 'clsx'
import { DateTime } from 'luxon'
import { ThreeDots } from 'react-loader-spinner'
import Overlay from './overlay'
import EventDetails from './event-details'
import useMonthData from '../utils/use-month-data'
import classifyEvent, { PERSONS, AWAY_STYLE } from '../utils/event-rules'
import {
  collectAwaySpans,
  clipSpanToWeek,
  awayDayIndices,
  dayEntries,
  tilesThatFit,
  isTodayCell,
  BAR_HEIGHT,
} from '../utils/month-layout'

const EMOJI_FONT = `"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`

const WEEKDAYS = [ 1, 2, 3, 4, 5, 6, 7 ]

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  /* Eigener Stapelkontext, damit die Balkenspur nicht mit dem Schließkreuz
     des Overlays konkurriert. */
  isolation: isolate;
  margin: -4px -6px;

  .mhead {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 4px 68px 12px 4px;
    flex: none;
  }

  .nav { display: flex; gap: 6px; }

  .navbtn {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    border: solid 1px #3a3a40;
    background: transparent;
    color: #f2f2f4;
    font-size: 19px;
    cursor: pointer;
    display: grid;
    place-items: center;
    font-family: inherit;

    &:active { background-color: #2e2e34; }
    &:focus-visible { outline: solid 2px #f2f2f4; outline-offset: 2px; }
  }

  h2 {
    font-size: 23px;
    font-weight: 600;
    margin: 0;
    letter-spacing: -0.01em;
    font-variant-numeric: tabular-nums;
  }

  .today {
    margin-left: auto;
    font-size: 13px;
    padding: 7px 14px;
    border-radius: 6px;
    border: solid 1px #3a3a40;
    background: transparent;
    color: #9a9aa4;
    cursor: pointer;
    font-family: inherit;

    &:focus-visible { outline: solid 2px #f2f2f4; outline-offset: 2px; }
  }

  .wdays {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    border-bottom: solid 1px #3a3a40;
    flex: none;
    background-color: #252528;

    div {
      padding: 7px 8px;
      text-align: center;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: #6e6e78;
      border-left: solid 1px #2f2f35;
    }

    div:first-child { border-left: 0; }
    div.weekend { color: #85838c; }
  }

  /* Eine Zeile je Woche, damit ein Balken über mehrere Tage laufen kann. */
  .grid {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    background-color: #2f2f35;
    gap: 1px;
  }

  .week {
    position: relative;
    flex: 1;
    min-height: 0;
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 1px;
    background-color: #2f2f35;
  }

  .cell {
    background-color: #212126;
    padding: 4px 5px 5px;
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    overflow: hidden;
    cursor: pointer;
    touch-action: manipulation;

    &.weekend { background-color: #1d1d21; }
    &.outside { background-color: #191a1d; }
    &.outside .dnum { color: #4a4a52; }
    &.outside .ev { opacity: 0.42; }
    /* Tage mit Abwesenheit bekommen einen warmen Grundton, damit die
       Information über die ganze Zelle wirkt und nicht nur im Balken. */
    &.awayday { background-color: #2a2022; }
    &.awayday.weekend { background-color: #261d1f; }
    &.isToday { background-color: #33292c; box-shadow: inset 0 0 0 2px #f85a5a; }
    &.awayday.isToday { background-color: #3a2a2c; }
    &:active { filter: brightness(1.2); }
    &:focus-visible { outline: solid 2px #f2f2f4; outline-offset: -2px; }
  }

  .dnum {
    font-size: 13.5px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: #9a9aa4;
    flex: none;
    line-height: 1.3;
    padding: 1px 2px;
  }

  .cell.isToday .dnum {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: #f85a5a;
    color: #1c1c1c;
    font-weight: 700;
    padding: 0 5px;
  }

  .awaylane {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 5;
    pointer-events: none;
  }

  .awaybar {
    position: absolute;
    height: 19px;
    border-radius: 10px;
    background-color: ${AWAY_STYLE.tile};
    border: solid 1px ${AWAY_STYLE.color};
    color: ${AWAY_STYLE.text};
    font-size: 11.5px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 9px;
    white-space: nowrap;
    overflow: hidden;
    pointer-events: auto;
    cursor: pointer;
    touch-action: manipulation;

    .ic { font-family: ${EMOJI_FONT}; font-size: 11px; flex: none; }
    .lbl { overflow: hidden; text-overflow: ellipsis; }
    .dur { opacity: 0.75; font-weight: 600; flex: none; }

    /* Läuft der Zeitraum über die Zeilenkante hinaus, zeigt die gestrichelte
       Kante die Fortsetzung in der nächsten Woche. */
    &.contL {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      border-left-style: dashed;
    }
    &.contR {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      border-right-style: dashed;
    }
  }

  .ev {
    font-size: 11px;
    line-height: 1.3;
    padding: 2px 5px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 4px;
    overflow: hidden;
    background-color: #34343c;
    border-left: solid 3px #5a5a62;
    flex: none;

    .ic { flex: none; font-family: ${EMOJI_FONT}; font-size: 10.5px; }
    .tx { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0; }
    .tm { color: #ffffff9c; font-variant-numeric: tabular-nums; flex: none; font-size: 10px; }
  }

  .more {
    font-size: 10.5px;
    color: #6e6e78;
    padding: 1px 6px;
    font-weight: 600;
    flex: none;
  }

  .state {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6e6e78;
  }

  @media only screen and (max-width: 1200px) {
    h2 { font-size: 19px; }
    .ev .tm { display: none; }
  }
`

const formatTime = (iso) => DateTime.fromISO(iso).toLocaleString(DateTime.TIME_24_SIMPLE)

/**
 * Monatsübersicht als Vollbild-Overlay.
 *
 * Abwesenheiten haben Vorrang: Sie laufen als durchgehender Balken über alle
 * betroffenen Tage und stehen über den übrigen Terminen. Ein Tipp auf einen
 * Tag öffnet dessen Terminliste.
 */
const MonthView = ({ visible, onClose }) => {
  const [ month, setMonth ] = React.useState(() => DateTime.now().startOf('month'))
  const [ data, error, loading ] = useMonthData(month, visible)
  const [ selectedDay, setSelectedDay ] = React.useState(null)
  const [ selectedEvent, setSelectedEvent ] = React.useState(null)

  // Zellenhöhe bestimmt, wie viele Kacheln passen — sie schwankt mit dem
  // Display, deshalb wird sie gemessen statt angenommen.
  const gridRef = React.useRef(null)
  const [ cellHeight, setCellHeight ] = React.useState(110)

  React.useLayoutEffect(() => {
    if (!visible || !gridRef.current) return undefined
    const measure = () => {
      const row = gridRef.current?.querySelector('.week')
      if (row) setCellHeight(row.getBoundingClientRect().height)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [ visible, data ])

  // Beim Öffnen zurück auf den laufenden Monat.
  React.useEffect(() => {
    if (visible) {
      setMonth(DateTime.now().startOf('month'))
      setSelectedDay(null)
    }
  }, [ visible ])

  const spans = React.useMemo(() => collectAwaySpans(data), [ data ])
  const awayDays = React.useMemo(() => awayDayIndices(spans), [ spans ])

  if (!visible) return null

  const previousMonth = () => setMonth((m) => m.minus({ months: 1 }))
  const nextMonth = () => setMonth((m) => m.plus({ months: 1 }))
  const thisMonth = () => setMonth(DateTime.now().startOf('month'))

  const renderWeek = (weekIndex) => {
    const clipped = spans
      .map((s) => ({ span: s, clip: clipSpanToWeek(s, weekIndex) }))
      .filter((x) => x.clip)

    const room = tilesThatFit(cellHeight, clipped.length)

    return (
      <div className={'week'} key={weekIndex}>
        {WEEKDAYS.map((_, dayIndex) => {
          const index = weekIndex * 7 + dayIndex
          const day = data?.[index]
          if (!day) return <div className={'cell'} key={dayIndex}/>

          const entries = dayEntries(day)
          const shown = entries.slice(0, room)
          const rest = entries.length - shown.length
          const outside = !day.date.hasSame(month, 'month')

          return (
            <div key={dayIndex}
                 className={clsx('cell', {
                   weekend: day.date.weekday >= 6,
                   outside,
                   awayday: awayDays.has(index),
                   isToday: isTodayCell(day),
                 })}
                 role={'button'}
                 tabIndex={0}
                 onClick={() => setSelectedDay(index)}
                 onKeyDown={(e) => {
                   if (e.key === 'Enter' || e.key === ' ') {
                     e.preventDefault()
                     setSelectedDay(index)
                   }
                 }}>
              <div className={'dnum'}>{day.date.day}</div>
              {/* Platzhalter unter den Balken, damit Termine nicht darunter liegen */}
              {clipped.length > 0 && (
                <div style={{ height: clipped.length * BAR_HEIGHT, flex: 'none' }}/>
              )}
              {shown.map((event, i) => {
                const { title, icon, primary } = classifyEvent(event)
                const person = PERSONS[primary]
                return (
                  <div key={i} className={'ev'}
                       style={{ backgroundColor: person.tile, borderLeftColor: person.color }}>
                    {icon && <span className={'ic'}>{icon}</span>}
                    <span className={'tx'}>{title}</span>
                    {event.start?.dateTime && (
                      <span className={'tm'}>{formatTime(event.start.dateTime)}</span>
                    )}
                  </div>
                )
              })}
              {rest > 0 && <div className={'more'}>+{rest} weitere</div>}
            </div>
          )
        })}

        <div className={'awaylane'} style={{ top: 26 }}>
          {clipped.map(({ span, clip }, i) => (
            <div key={i}
                 className={clsx('awaybar', {
                   contL: clip.continuesLeft,
                   contR: clip.continuesRight,
                 })}
                 role={'button'}
                 tabIndex={0}
                 onClick={(e) => {
                   e.stopPropagation()
                   setSelectedEvent({ event: span.event, day: data?.[span.fromIndex]?.date })
                 }}
                 onKeyDown={(e) => {
                   if (e.key === 'Enter' || e.key === ' ') {
                     e.preventDefault()
                     e.stopPropagation()
                     setSelectedEvent({ event: span.event, day: data?.[span.fromIndex]?.date })
                   }
                 }}
                 style={{
                   left: `calc(${(clip.lane / 7) * 100}% + 3px)`,
                   width: `calc(${(clip.span / 7) * 100}% - 6px)`,
                   top: i * BAR_HEIGHT,
                 }}>
              <span className={'ic'}>✈️</span>
              <span className={'lbl'}>{span.title}</span>
              {span.days > 1 && <span className={'dur'}>· {span.days} Tage</span>}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Overlay visible={true} onClick={onClose} fullsize={true}>
      <Div>
        <div className={'mhead'}>
          <div className={'nav'}>
            <button className={'navbtn'} onClick={previousMonth} aria-label={'Vorheriger Monat'}>‹</button>
            <button className={'navbtn'} onClick={nextMonth} aria-label={'Nächster Monat'}>›</button>
          </div>
          <h2>{month.toLocaleString({ month: 'long', year: 'numeric' })}</h2>
          <button className={'today'} onClick={thisMonth}>Heute</button>
        </div>

        <div className={'wdays'}>
          {WEEKDAYS.map((wd) => (
            <div key={wd} className={clsx({ weekend: wd >= 6 })}>
              {DateTime.fromObject({ weekday: wd }).toLocaleString({ weekday: 'short' })}
            </div>
          ))}
        </div>

        {error !== false && !data && (
          <div className={'state'} style={{ color: '#f85a5a', textAlign: 'center', padding: '1rem' }}>
            <div>
              <h3>Fehler beim Laden</h3>
              <div>{error instanceof Error ? error.message : String(error)}</div>
            </div>
          </div>
        )}

        {!data && error === false && (
          <div className={'state'}>
            <ThreeDots visible={true} height="70" width="70" color="#c1c1c1"
                       radius="9" ariaLabel="Monat wird geladen"/>
          </div>
        )}

        {data && (
          <div className={'grid'} ref={gridRef}>
            {[ 0, 1, 2, 3, 4, 5 ].map(renderWeek)}
          </div>
        )}
      </Div>

      {selectedDay !== null && data?.[selectedDay] && (
        <DayList day={data[selectedDay]}
                 spans={spans.filter((s) => s.fromIndex <= selectedDay && s.toIndex >= selectedDay)}
                 onPick={(event) => {
                   setSelectedEvent({ event, day: data[selectedDay].date })
                   setSelectedDay(null)
                 }}
                 onClose={() => setSelectedDay(null)}/>
      )}

      {selectedEvent && (
        <EventDetails event={selectedEvent.event}
                      day={selectedEvent.day}
                      onClose={() => setSelectedEvent(null)}/>
      )}
    </Overlay>
  )
}

/** Terminliste eines Tages — zeigt auch, was in der Zelle unter "+N" lag. */
const DayListDiv = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 12, 0.82);
  backdrop-filter: blur(6px);
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px;

  .card {
    background-color: #1c1c1c;
    border: solid 1px #3a3a40;
    border-radius: 14px;
    width: min(560px, 92%);
    max-height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
  }

  .head {
    padding: 16px 20px 14px;
    border-bottom: solid 1px #3a3a40;
    display: flex;
    align-items: baseline;
    gap: 12px;
    flex-wrap: wrap;

    .dt { font-size: 20px; font-weight: 600; }
    .cnt { font-size: 12.5px; color: #6e6e78; margin-left: auto; }
  }

  .list {
    padding: 14px 20px 18px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .row {
    display: flex;
    gap: 11px;
    align-items: flex-start;
    font-size: 14px;
    line-height: 1.4;
    cursor: pointer;

    .t {
      font-variant-numeric: tabular-nums;
      color: #9a9aa4;
      flex: none;
      width: 82px;
      font-size: 12.5px;
      padding-top: 2px;
    }

    .bar { width: 4px; border-radius: 2px; align-self: stretch; flex: none; min-height: 19px; }
    .nm { min-width: 0; overflow-wrap: anywhere; }
    .ic { font-family: ${EMOJI_FONT}; margin-right: 4px; }
    &:active { filter: brightness(1.25); }
  }

  .awayrow {
    background-color: ${AWAY_STYLE.tile};
    border: solid 1px ${AWAY_STYLE.color};
    color: ${AWAY_STYLE.text};
    border-radius: 9px;
    padding: 8px 11px;
    font-weight: 600;
    display: flex;
    gap: 7px;
    align-items: center;
  }

  .empty { color: #6e6e78; font-size: 13.5px; font-style: italic; }
`

const DayList = ({ day, spans, onPick, onClose }) => {
  const entries = dayEntries(day)
  const total = entries.length + spans.length

  return (
    <DayListDiv onClick={onClose}>
      <div className={'card'} onClick={(e) => e.stopPropagation()}>
        <div className={'head'}>
          <span className={'dt'}>
            {day.date.toLocaleString({ weekday: 'long', day: 'numeric', month: 'long' })}
          </span>
          <span className={'cnt'}>
            {total === 0 ? 'nichts eingetragen' : `${total} ${total === 1 ? 'Eintrag' : 'Einträge'}`}
          </span>
        </div>
        <div className={'list'}>
          {/* Abwesenheit zuerst — sie ist die wichtigste Information des Tages. */}
          {spans.map((s, i) => (
            <div key={`a${i}`} className={'awayrow'}>
              <span className={'ic'}>✈️</span>
              {s.title}{s.days > 1 ? ` · ${s.days} Tage` : ''}
            </div>
          ))}
          {entries.map((event, i) => {
            const { title, icon, primary } = classifyEvent(event)
            return (
              <div key={i} className={'row'} onClick={() => onPick(event)}>
                <span className={'t'}>
                  {event.start?.dateTime ? formatTime(event.start.dateTime) : 'ganztägig'}
                </span>
                <span className={'bar'} style={{ backgroundColor: PERSONS[primary].color }}/>
                <span className={'nm'}>
                  {icon && <span className={'ic'}>{icon}</span>}{title}
                </span>
              </div>
            )
          })}
          {total === 0 && <div className={'empty'}>Keine Termine an diesem Tag.</div>}
        </div>
      </div>
    </DayListDiv>
  )
}

export default MonthView
