import React from 'react'
import styled from 'styled-components'
import { DateTime } from 'luxon'
import Overlay from './overlay'
import classifyEvent, { PERSONS, AWAY_STYLE } from '../utils/event-rules'

const EMOJI_FONT = `"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`

/**
 * Hex-Farbe mit Deckkraft versehen.
 *
 * Bewusst kein `color-mix()`: Das setzt Chrome 111+ voraus, und wo es fehlt,
 * fällt die Deklaration ersatzlos weg — Badges und Symbolfläche wären dann
 * unsichtbar statt nur anders. Die Android-Version des Tablets steht nicht
 * fest, also bleibt es bei rgba.
 */
const withAlpha = (hex, alpha) => {
  const value = hex.replace('#', '')
  const r = parseInt(value.slice(0, 2), 16)
  const g = parseInt(value.slice(2, 4), 16)
  const b = parseInt(value.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/**
 * Die Farbe des Termins trägt das Panel: ein breiter Streifen links, ein
 * farbiger Schimmer hinter dem Symbol. Wer das Modal öffnet, weiß damit
 * schon vor dem Lesen, wen der Termin betrifft.
 */
const Div = styled.div`
  --accent: ${PERSONS.family.color};

  position: relative;
  min-width: 0;
  padding: 26px 30px 28px 34px;
  /* Der negative Rand hebt das Panel-Padding auf, damit der Farbstreifen
     bündig an der Panelkante sitzt. Die Lesebreite setzt das Overlay
     selbst über die compact-Variante. */
  margin: -12px -24px;

  /* Der Farbstreifen sitzt am Panelrand, nicht am Inhalt. */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;
    border-radius: 3px;
    background: var(--accent);
  }

  .heading {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .iconWrap {
    width: 62px;
    height: 62px;
    border-radius: 18px;
    flex: none;
    display: grid;
    place-items: center;
    /* Hintergrund und Rahmen setzt die Komponente inline, weil die Farbe
       erst zur Laufzeit aus dem Termin folgt. */
  }

  .icon {
    font-size: 32px;
    line-height: 1;
    font-family: ${EMOJI_FONT};
  }

  .titleBlock { min-width: 0; }

  h2 {
    font-size: 27px;
    font-weight: 600;
    margin: 0;
    line-height: 1.22;
    letter-spacing: -0.01em;
    overflow-wrap: anywhere;
    text-wrap: balance;
  }

  .who {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 9px;
  }

  .badge {
    font-size: 12.5px;
    font-weight: 600;
    padding: 3px 12px;
    border-radius: 20px;
    white-space: nowrap;
  }

  /* Die Zeitangabe ist die häufigste Frage — sie steht groß und allein,
     nicht als eine Zeile unter anderen. */
  .when {
    margin-top: 22px;
    padding: 14px 18px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.045);
    display: flex;
    align-items: baseline;
    gap: 14px;
    flex-wrap: wrap;
  }

  .clock {
    font-size: 27px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.01em;
    line-height: 1.1;
  }

  .whenMeta {
    font-size: 14.5px;
    color: #b4b2ad;
    line-height: 1.4;
  }

  .duration {
    font-size: 13px;
    color: #8d8a84;
    font-variant-numeric: tabular-nums;
  }

  .facts {
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .fact {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    font-size: 15.5px;
    line-height: 1.5;
  }

  .factIcon {
    font-size: 15px;
    line-height: 1.5;
    flex: none;
    opacity: 0.75;
    font-family: ${EMOJI_FONT};
  }

  .factBody {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .note {
    white-space: pre-wrap;
    /* Lange Notizen (bis ~2500 Zeichen im Bestand) scrollen in sich selbst,
       damit Titel und Uhrzeit stehen bleiben. */
    max-height: 38vh;
    overflow-y: auto;
    padding-right: 10px;
    scrollbar-width: thin;
  }

  @media only screen and (max-width: 1200px) {
    padding: 20px 22px 22px 26px;
    h2 { font-size: 22px; }
    .clock { font-size: 22px; }
    .iconWrap { width: 52px; height: 52px; border-radius: 15px; }
    .icon { font-size: 26px; }
  }
`

const formatDay = (date) =>
  date.toLocaleString({ weekday: 'long', day: 'numeric', month: 'long' })

const formatTime = (iso) =>
  DateTime.fromISO(iso).toLocaleString(DateTime.TIME_24_SIMPLE)

/** Dauer in der Sprache, in der man darüber spricht: "2 Std." statt "120 min". */
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

/** "heute" und "morgen" sind die Antwort, die man im Kopf hat. */
const relativeDay = (date, now = DateTime.now()) => {
  if (!date) return null
  const days = date.startOf('day').diff(now.startOf('day'), 'days').days
  if (days === 0) return 'heute'
  if (days === 1) return 'morgen'
  if (days === -1) return 'gestern'
  return null
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

  const { title, icon, persons, away } = classifyEvent(event)
  const isAllDay = !event.start?.dateTime
  const duration = isAllDay
    ? null
    : formatDuration(event.start.dateTime, event.end?.dateTime)
  const recurrence = describeRecurrence(event.rrule)
  const description = cleanDescription(event.description)
  const relative = relativeDay(day)

  // Abwesenheit hat eine eigene Signalfarbe; sonst färbt die erste Person.
  const accent = away
    ? AWAY_STYLE.color
    : PERSONS[persons[0] || 'family'].color

  /** Schrift nimmt die aufgehellte Variante, Fläche und Rahmen die Kantenfarbe. */
  const badgeStyle = (color, text) => ({
    color: text,
    background: withAlpha(color, 0.18),
    border: `solid 1px ${withAlpha(color, 0.5)}`,
  })

  return (
    <Overlay visible={true} onClick={onClose} compact={true}>
      <Div style={{ '--accent': accent }}>
        <div className={'heading'}>
          {icon && (
            <div className={'iconWrap'}
                 style={{
                   background: withAlpha(accent, 0.26),
                   border: `solid 1px ${withAlpha(accent, 0.45)}`,
                 }}>
              <span className={'icon'}>{icon}</span>
            </div>
          )}
          <div className={'titleBlock'}>
            <h2>{title}</h2>
            <div className={'who'}>
              {away && (
                <span className={'badge'}
                      style={badgeStyle(AWAY_STYLE.color, AWAY_STYLE.text)}>
                  {PERSONS[away].label} ist außer Haus
                </span>
              )}
              {persons.map((id) => (
                <span key={id} className={'badge'}
                      style={badgeStyle(PERSONS[id].color, PERSONS[id].text)}>
                  {PERSONS[id].label}
                </span>
              ))}
              {persons.length === 0 && !away && (
                <span className={'badge'}
                      style={badgeStyle(PERSONS.family.color, PERSONS.family.text)}>
                  Ganze Familie
                </span>
              )}
            </div>
          </div>
        </div>

        {day && (
          <div className={'when'}>
            <span className={'clock'}>
              {isAllDay
                ? 'Ganzer Tag'
                : `${formatTime(event.start.dateTime)}${
                    event.end?.dateTime ? `–${formatTime(event.end.dateTime)}` : ''
                  }`}
            </span>
            <span className={'whenMeta'}>
              {/* "gestern, Donnerstag, 10. September" sagt dasselbe dreimal —
                  bei relativem Bezug entfällt der Wochentag. */}
              {relative
                ? `${relative}, ${day.toLocaleString({ day: 'numeric', month: 'long' })}`
                : formatDay(day)}
            </span>
            {duration && <span className={'duration'}>{duration}</span>}
          </div>
        )}

        {(event.location || description || recurrence) && (
          <div className={'facts'}>
            {event.location && (
              <div className={'fact'}>
                <span className={'factIcon'}>📍</span>
                <span className={'factBody'}>{event.location}</span>
              </div>
            )}
            {description && (
              <div className={'fact'}>
                <span className={'factIcon'}>📝</span>
                <span className={'factBody note'}>{description}</span>
              </div>
            )}
            {recurrence && (
              <div className={'fact'}>
                <span className={'factIcon'}>🔁</span>
                <span className={'factBody'}>{recurrence}</span>
              </div>
            )}
          </div>
        )}
      </Div>
    </Overlay>
  )
}

export default EventDetails
