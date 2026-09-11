import React from 'react'
import styled from 'styled-components'
import { DateTime } from 'luxon'
import Overlay from './overlay'
import classifyEvent, { PERSONS, AWAY_STYLE } from '../utils/event-rules'

const Div = styled.div`
  min-width: 0;

  .heading {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding-bottom: 14px;
    border-bottom: solid 1px #3a3a40;
  }

  .icon {
    font-size: 34px;
    line-height: 1.1;
    flex: none;
    font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif;
  }

  h2 {
    font-size: 26px;
    font-weight: 600;
    margin: 0;
    line-height: 1.25;
    overflow-wrap: anywhere;
  }

  .who {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
  }

  .badge {
    font-size: 13px;
    font-weight: 600;
    padding: 3px 11px;
    border-radius: 20px;
    border: solid 1px;
    white-space: nowrap;
  }

  dl {
    margin: 0;
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 10px 20px;
    padding-top: 16px;
  }

  dt {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #9a9aa4;
    font-weight: 600;
    padding-top: 2px;
  }

  dd {
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
    overflow-wrap: anywhere;
    white-space: pre-wrap;
  }

  /* Lange Beschreibungen (bis 2500 Zeichen im Bestand) scrollen in sich
     selbst, damit Titel und Uhrzeit im Blick bleiben. */
  dd.note {
    max-height: 42vh;
    overflow-y: auto;
    padding-right: 8px;
  }

  .time { font-variant-numeric: tabular-nums; }
`

/** "Mo., 7. September" — der Wochentag hilft beim Einordnen. */
const formatDay = (date) =>
  date.toLocaleString({ weekday: 'short', day: 'numeric', month: 'long' })

const formatTime = (iso) =>
  DateTime.fromISO(iso).toLocaleString(DateTime.TIME_24_SIMPLE)

/** Dauer in der Sprache, in der man darüber spricht: "1,5 Std." statt "90 min". */
export const formatDuration = (startIso, endIso) => {
  const start = DateTime.fromISO(startIso)
  const end = DateTime.fromISO(endIso)
  if (!start.isValid || !end.isValid) return null

  const minutes = Math.round(end.diff(start, 'minutes').minutes)
  if (minutes <= 0) return null
  if (minutes < 60) return `${minutes} min`

  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  if (rest === 0) return `${hours} Std.`
  return `${hours}:${String(rest).padStart(2, '0')} Std.`
}

/**
 * Entfernt technische Spuren aus der Beschreibung. Der Hockey-Sync hängt
 * Source-UID und Herkunftsvermerk an; auf einem Familientablet sagt das
 * niemandem etwas, während Treffpunkt und Status wichtig sind.
 */
export const cleanDescription = (description) => {
  if (!description) return null
  const cleaned = description
    .split('\n')
    .filter((line) => !/^\s*(Source-UID:|\(Sync aus )/i.test(line))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
  return cleaned || null
}

/** Aus der Wiederholungsregel wird ein lesbarer Satz, kein RRULE-Kauderwelsch. */
export const describeRecurrence = (rrule) => {
  if (!rrule) return null
  if (/FREQ=DAILY/i.test(rrule)) return 'Jeden Tag'
  if (/FREQ=WEEKLY/i.test(rrule)) return 'Jede Woche'
  if (/FREQ=MONTHLY/i.test(rrule)) return 'Jeden Monat'
  if (/FREQ=YEARLY/i.test(rrule)) return 'Jedes Jahr'
  return 'Wiederkehrend'
}

/**
 * Zeigt die Details eines angetippten Termins.
 *
 * Im Wochenraster ist nur Platz für Titel und Uhrzeit; Ort, Beschreibung und
 * Wiederholung fallen dort weg. Beim Hockey-Sync steht genau dort die
 * Treffpunktzeit, die sonst niemand zu sehen bekäme.
 */
const EventDetails = ({ event, day, onClose }) => {
  if (!event) return null

  const { title, icon, persons, away, activity } = classifyEvent(event)
  const isAllDay = !event.start?.dateTime
  const duration = isAllDay
    ? null
    : formatDuration(event.start.dateTime, event.end?.dateTime)
  const recurrence = describeRecurrence(event.rrule)
  const description = cleanDescription(event.description)

  return (
    <Overlay visible={true} onClick={onClose}>
      <Div>
        <div className={'heading'}>
          {icon && <span className={'icon'}>{icon}</span>}
          <div style={{ minWidth: 0 }}>
            <h2>{title}</h2>
            <div className={'who'}>
              {away && (
                <span className={'badge'}
                      style={{ color: AWAY_STYLE.text, borderColor: AWAY_STYLE.color }}>
                  {PERSONS[away].label} ist außer Haus
                </span>
              )}
              {persons.map((id) => (
                <span key={id} className={'badge'}
                      style={{ color: PERSONS[id].color, borderColor: PERSONS[id].color }}>
                  {PERSONS[id].label}
                </span>
              ))}
              {persons.length === 0 && !away && (
                <span className={'badge'}
                      style={{ color: PERSONS.family.color, borderColor: PERSONS.family.color }}>
                  Familie
                </span>
              )}
            </div>
          </div>
        </div>

        <dl>
          {day && (
            <>
              <dt>Wann</dt>
              <dd className={'time'}>
                {formatDay(day)}
                {!isAllDay && (
                  <>
                    {', '}
                    {formatTime(event.start.dateTime)}
                    {event.end?.dateTime && ` – ${formatTime(event.end.dateTime)}`}
                    {duration && `  (${duration})`}
                  </>
                )}
                {isAllDay && ', ganztägig'}
              </dd>
            </>
          )}

          {event.location && (
            <>
              <dt>Wo</dt>
              <dd>{event.location}</dd>
            </>
          )}

          {description && (
            <>
              <dt>Notiz</dt>
              <dd className={'note'}>{description}</dd>
            </>
          )}

          {recurrence && (
            <>
              <dt>Rhythmus</dt>
              <dd>{recurrence}</dd>
            </>
          )}

          {activity && !away && (
            <>
              <dt>Art</dt>
              <dd>{activity.charAt(0).toUpperCase() + activity.slice(1)}</dd>
            </>
          )}
        </dl>

      </Div>
    </Overlay>
  )
}

export default EventDetails
