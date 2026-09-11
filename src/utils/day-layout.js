import { DateTime } from 'luxon'

/**
 * Positioniert Termine auf einer Zeitachse.
 *
 * Bisher wurden Termine schlicht gestapelt: Die vertikale Position sagte nichts
 * über die Uhrzeit, und volle Tage liefen unsichtbar aus dem Container.
 * Hier bekommt jeder Termin eine Position aus seiner Startzeit und eine Höhe
 * aus seiner Dauer.
 */

/** Fenster der Zeitachse. Termine außerhalb werden an den Rand geklemmt,
 *  statt unsichtbar zu verschwinden. */
export const DAY_START_HOUR = 6
export const DAY_END_HOUR = 22
export const HOUR_HEIGHT = 62

/** Kürzeste darstellbare Kachel — darunter ist der Titel nicht mehr lesbar. */
const MIN_EVENT_HEIGHT = 26

/** Dezimalstunde einer ISO-Zeit, z.B. 17:30 -> 17.5 */
export const toDecimalHour = (iso) => {
  const dt = DateTime.fromISO(iso)
  if (!dt.isValid) return null
  return dt.hour + dt.minute / 60 + dt.second / 3600
}

/** Pixelabstand vom oberen Rand der Zeitachse. */
export const hourToOffset = (hour) => (hour - DAY_START_HOUR) * HOUR_HEIGHT

/** Gesamthöhe der Achse inklusive der abschließenden Stundenlinie. */
export const axisHeight = () => (DAY_END_HOUR - DAY_START_HOUR + 1) * HOUR_HEIGHT

/**
 * Ordnet die Termine eines Tages überschneidungsfrei an.
 *
 * Überlappende Termine werden versetzt gestapelt statt die Spalte zu teilen:
 * So bleibt jeder Titel lesbar, und der Versatz macht die Überschneidung
 * sichtbar. (Am Donnerstag etwa überlappen Athletik 16:45–18:45 und
 * Technik 18:00–20:00 um 45 Minuten — im alten Stapel war das unsichtbar.)
 *
 * @param {Array} events Termine mit start.dateTime / end.dateTime
 * @returns {Array<{event: Object, top: number, height: number, lane: number, lanes: number}>}
 */
export const layoutDayEvents = (events) => {
  const positioned = (events || [])
    .map((event) => {
      const startHour = toDecimalHour(event?.start?.dateTime)
      const endHourRaw = toDecimalHour(event?.end?.dateTime)
      if (startHour === null) return null

      // Ein Termin, der über Mitternacht läuft, endet rechnerisch vor seinem
      // Start — für diesen Tag bis zum Achsenende zeichnen.
      const endHour = endHourRaw === null || endHourRaw < startHour
        ? DAY_END_HOUR + 1
        : endHourRaw

      return { event, startHour, endHour }
    })
    .filter(Boolean)
    .sort((a, b) => a.startHour - b.startHour || b.endHour - a.endHour)

  // Spuren (lanes) vergeben: Ein Termin kommt in die erste Spur, die zum
  // Zeitpunkt seines Starts wieder frei ist.
  const laneEnds = []
  const laid = positioned.map((item) => {
    let lane = laneEnds.findIndex((end) => end <= item.startHour + 1e-6)
    if (lane === -1) {
      lane = laneEnds.length
      laneEnds.push(0)
    }
    laneEnds[lane] = item.endHour

    const clampedStart = Math.max(item.startHour, DAY_START_HOUR)
    const clampedEnd = Math.min(item.endHour, DAY_END_HOUR + 1)
    const top = hourToOffset(clampedStart)
    const height = Math.max(
      hourToOffset(clampedEnd) - top,
      MIN_EVENT_HEIGHT,
    )

    return { event: item.event, top, height, lane }
  })

  const lanes = laneEnds.length || 1
  return laid.map((item) => ({ ...item, lanes }))
}

/**
 * Fasst mehrtägige Ganztages-Termine zu durchgehenden Balken zusammen.
 *
 * Die Datenschicht dupliziert mehrtägige Termine in jeden betroffenen Tag.
 * Für einen Balken über mehrere Spalten braucht es stattdessen den Zeitraum.
 *
 * @param {Array} weekData Tages-Buckets mit date und allDay
 * @param {(event: Object) => boolean} predicate Welche Termine gebündelt werden
 * @returns {Array<{event: Object, startIndex: number, span: number}>}
 */
export const spanMultiDayEvents = (weekData, predicate) => {
  const spans = new Map()

  ;(weekData || []).forEach((day, index) => {
    ;(day?.allDay || []).forEach((event) => {
      if (predicate && !predicate(event)) return
      // uid identifiziert denselben Termin über die Tage hinweg; ohne uid
      // dient der Titel als Ersatzschlüssel.
      const key = event.uid || event.summary
      const existing = spans.get(key)
      if (existing) {
        existing.span = index - existing.startIndex + 1
      } else {
        spans.set(key, { event, startIndex: index, span: 1 })
      }
    })
  })

  return [ ...spans.values() ]
}

/** Aktuelle Uhrzeit als Dezimalstunde, oder null außerhalb des Zeitfensters. */
export const currentHourOffset = (now = DateTime.now()) => {
  const hour = now.hour + now.minute / 60
  if (hour < DAY_START_HOUR || hour > DAY_END_HOUR + 1) return null
  return hourToOffset(hour)
}
