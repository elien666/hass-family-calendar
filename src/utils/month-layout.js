import { DateTime } from 'luxon'
import classifyEvent from './event-rules'

/**
 * Aufbereitung des Monatsrasters.
 *
 * Abwesenheiten haben in der Monatsansicht Vorrang: Sie sagen der Familie, an
 * welchen Tagen jemand nicht da ist, und laufen als durchgehender Balken über
 * alle betroffenen Tage statt als Einzelkachel pro Tag.
 */

/** Ein Tages-Bucket ist abwesenheitsrelevant, wenn Regel 2 greift. */
export const isAwayEvent = (event) => classifyEvent(event).away !== null

/** ISO-Datum eines Tages-Buckets, als stabiler Schlüssel. */
const dayKey = (day) => day.date.toISODate()

/**
 * Bündelt Abwesenheiten zu zusammenhängenden Zeiträumen.
 *
 * Die Datenschicht verteilt einen mehrtägigen Termin auf jeden betroffenen Tag.
 * Für einen durchgehenden Balken braucht es daraus wieder den Zeitraum.
 *
 * Derselbe Titel steht über das Jahr für mehrere getrennte Reisen
 * ("Björn in Kopenhagen" kommt viermal vor), deshalb wird innerhalb eines
 * Titels bei jeder Lücke im Datum ein neuer Zeitraum begonnen.
 *
 * @param {Array<{date: DateTime, allDay: Array, events: Array}>} days Rasterdaten
 * @returns {Array<{title, who, fromIndex, toIndex, days, event}>}
 */
export const collectAwaySpans = (days) => {
  const byKey = new Map()

  ;(days || []).forEach((day, index) => {
    const all = [ ...(day?.allDay || []), ...(day?.events || []) ]
    all.forEach((event) => {
      const info = classifyEvent(event)
      if (!info.away) return
      // uid trennt gleichnamige Termine sauber; ohne uid dient der Titel
      // als Ersatz, und die Lückenprüfung unten fängt getrennte Reisen ab.
      const id = `${event.uid || info.title}|${info.away}`
      if (!byKey.has(id)) byKey.set(id, { info, event, indices: [] })
      byKey.get(id).indices.push(index)
    })
  })

  const spans = []
  byKey.forEach(({ info, event, indices }) => {
    const sorted = [ ...new Set(indices) ].sort((a, b) => a - b)
    let run = [ sorted[0] ]

    const flush = () => spans.push({
      title: info.title,
      who: info.away,
      fromIndex: run[0],
      toIndex: run[run.length - 1],
      days: run.length,
      event,
    })

    for (let i = 1; i < sorted.length; i += 1) {
      if (sorted[i] === sorted[i - 1] + 1) {
        run.push(sorted[i])
      } else {
        flush()
        run = [ sorted[i] ]
      }
    }
    flush()
  })

  return spans.sort((a, b) => a.fromIndex - b.fromIndex || b.days - a.days)
}

/**
 * Schneidet einen Zeitraum auf eine Rasterzeile zu.
 *
 * Ein Zeitraum kann über Wochen- und Monatsgrenzen laufen — dann endet der
 * Balken an der Zeilenkante, und die gestrichelte Kante zeigt die Fortsetzung.
 *
 * @returns {{lane, span, continuesLeft, continuesRight}|null} null, wenn der
 *          Zeitraum diese Zeile nicht berührt
 */
export const clipSpanToWeek = (span, weekIndex) => {
  const first = weekIndex * 7
  const last = first + 6
  if (span.toIndex < first || span.fromIndex > last) return null

  return {
    lane: Math.max(span.fromIndex, first) - first,
    span: Math.min(span.toIndex, last) - Math.max(span.fromIndex, first) + 1,
    continuesLeft: span.fromIndex < first,
    continuesRight: span.toIndex > last,
  }
}

/** Indizes aller Tage, an denen jemand außer Haus ist — für die Einfärbung. */
export const awayDayIndices = (spans) => {
  const set = new Set()
  ;(spans || []).forEach((s) => {
    for (let i = s.fromIndex; i <= s.toIndex; i += 1) set.add(i)
  })
  return set
}

/**
 * Termine eines Tages ohne die Abwesenheiten, nach Uhrzeit sortiert.
 * Ganztägiges steht vorn, weil es den ganzen Tag betrifft.
 */
export const dayEntries = (day) => {
  if (!day) return []
  const allDay = (day.allDay || []).filter((e) => !isAwayEvent(e))
  const timed = (day.events || [])
    .filter((e) => !isAwayEvent(e))
    .sort((a, b) => (a.start?.dateTime || '').localeCompare(b.start?.dateTime || ''))
  return [ ...allDay, ...timed ]
}

/**
 * Wie viele Terminkacheln in eine Zelle passen.
 *
 * Die Zellenhöhe schwankt stark mit dem Display — auf dem heutigen Tablet sind
 * es vier Kacheln, auf einem größeren fünf oder sechs. Eine feste Zahl würde
 * auf großen Displays Platz verschenken und auf kleinen überlaufen. Die Maße
 * stammen aus dem gerenderten Raster.
 */
export const TILE_HEIGHT = 20.5
export const BAR_HEIGHT = 21
const CELL_PADDING = 9
const DAY_NUMBER = 20
const COUNTER = 15

export const tilesThatFit = (cellHeight, barRows = 0) => {
  const free = cellHeight - CELL_PADDING - DAY_NUMBER - COUNTER - barRows * BAR_HEIGHT
  return Math.max(0, Math.floor(free / TILE_HEIGHT))
}

/** Sechs Wochen als Index-Paare, zum Rendern der Zeilen. */
export const weekRows = () => Array.from({ length: 6 }, (_, w) => w)

/** Gehört dieser Rastertag zum angezeigten Monat? */
export const isInMonth = (day, month) =>
  !!day && !!month && day.date.hasSame(month, 'month')

/** Ist dieser Rastertag heute? */
export const isTodayCell = (day, now = DateTime.now()) =>
  !!day && day.date.hasSame(now, 'day')
