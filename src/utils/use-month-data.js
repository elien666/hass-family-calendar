import React from 'react'
import { DateTime } from 'luxon'
import { useConfig } from './ConfigProvider'
import { buildHaUrl } from './config'
import qs from 'qs'
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'
import { loadCalendarInto, getIconFromString } from './use-calendar-data'

/**
 * Lädt die Termine eines Monatsrasters.
 *
 * Das Raster zeigt immer sechs volle Wochen ab dem Montag vor dem Monatsersten,
 * damit es beim Blättern nicht springt. Geladen werden deshalb 42 Tage, nicht
 * die Kalendertage des Monats — die Randtage gehören zu den Nachbarmonaten und
 * sollen ihre Termine trotzdem zeigen.
 *
 * Die Wochenansicht bringt ihren eigenen Cache samt Vorladen mit; der arbeitet
 * auf Wochenschlüsseln und passt nicht auf Monatsbereiche. Hier genügt ein
 * schlichter Cache, weil das Overlay nur auf Zuruf geöffnet wird.
 */

const MONTH_CACHE_DURATION = 5 * 60 * 1000
const monthCache = new Map()

/** Erster Tag des Rasters: Montag der Woche, in der der Monat beginnt. */
export const gridStart = (month) => {
  const first = month.startOf('month')
  return first.minus({ days: (first.weekday - 1) }).startOf('day')
}

/** 42 Tage ab Rasterbeginn — sechs Wochen. */
export const buildMonthRange = (month) => {
  const start = gridStart(month)
  return Array.from({ length: 42 }, (_, i) => {
    const day = start.plus({ days: i })
    return i === 41 ? day.endOf('day') : day.startOf('day')
  })
}

const cacheKey = (month) => month.toFormat('yyyy-MM')

export const invalidateMonthCache = () => monthCache.clear()

const useMonthData = (month, enabled = true) => {
  const config = useConfig()
  const CALENDARS = config.CALENDARS || []

  // Über den Inhalt memoisieren, nicht über die Referenz: Der Config-Context
  // liefert bei jedem Laden ein neues Array, und eine wechselnde Referenz
  // würde den Ladeeffekt sofort wieder abbrechen und neu starten.
  const calendarKey = JSON.stringify(CALENDARS)
  const calendars = React.useMemo(
    () => (JSON.parse(calendarKey) || []).map((calendar) => ({
      name: calendar.name,
      icon: getIconFromString(calendar.icon),
    })),
    [ calendarKey ],
  )

  const configRef = React.useRef(config)
  configRef.current = config
  const buildUrl = React.useCallback(
    (name, params) =>
      `${buildHaUrl(`/api/calendars/${name}`, configRef.current)}?${qs.stringify(params)}`,
    [],
  )

  const [ data, setData ] = React.useState(null)
  const [ error, setError ] = React.useState(false)
  const [ loading, setLoading ] = React.useState(false)

  const key = month ? cacheKey(month) : null
  // Luxon-Objekte sind bei jedem Render neu; der Effekt hängt deshalb am
  // Monatsschlüssel, nicht am Objekt.
  const monthRef = React.useRef(month)
  monthRef.current = month

  React.useEffect(() => {
    // Das Overlay lädt erst, wenn es geöffnet wird — sonst zahlt die
    // Wochenansicht bei jedem Start für Daten, die niemand ansieht.
    const current = monthRef.current
    if (!enabled || !current || calendars.length === 0) return undefined

    const cached = monthCache.get(key)
    if (cached && Date.now() - cached.timestamp < MONTH_CACHE_DURATION) {
      setData(cached.data)
      setError(false)
      return undefined
    }

    let cancelled = false
    const controller = new AbortController()
    const range = buildMonthRange(current)
    const fresh = range.map((date) => ({ date, allDay: [], events: [] }))

    setLoading(true)
    Promise.all(calendars.map((calendar) =>
      loadCalendarInto(calendar, range[0], range[41], fresh, buildUrl, controller.signal)))
      .then(() => {
        monthCache.set(key, { data: fresh, timestamp: Date.now() })
        if (!cancelled) {
          setData(fresh)
          setError(false)
        }
      })
      .catch((err) => {
        logger.error('Monatsdaten konnten nicht geladen werden', err)
        if (!cancelled) setError(formatErrorForUI(err))
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
      controller.abort()
    }
    // calendarKey statt calendars: Das Array wechselt beim Laden der Config
    // seine Länge, und React verlangt eine konstant große Dependency-Liste.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ key, enabled, calendarKey, buildUrl ])

  return [ data, error, loading ]
}

export default useMonthData
