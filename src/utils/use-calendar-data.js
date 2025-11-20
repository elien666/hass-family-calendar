import React, { useRef } from 'react'
import { DateTime } from 'luxon'
import axios from 'axios'
import qs from 'qs'
import { mdiDelete, mdiCake } from '@mdi/js'
import useTimeout from './use-timeout'
import { HASS_HOST, HASS_ACCESS_TOKEN, buildHaUrl } from "./config"
import logger from './logger'

// Set authorization header if token is available
if (HASS_ACCESS_TOKEN) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${HASS_ACCESS_TOKEN}`
}

const host = (name) => buildHaUrl(`/api/calendars/${name}`)
const url = (name, params) => `${host(name)}?${qs.stringify(params)}`

const calendars = [
  { name: 'calendar.hamsischwan_s_kalender', icon: undefined },
  { name: 'calendar.biotonne', icon: mdiDelete },
  { name: 'calendar.gelber_sack', icon: mdiDelete },
  { name: 'calendar.blaue_tonne', icon: mdiDelete },
  { name: 'calendar.schwarze_tonne', icon: mdiDelete },
  { name: 'calendar.familiengeburtstage', icon: mdiCake },
]

const loadCalendarInto = (calendar, start, end, data) => (
  axios(url(calendar.name, { start: start.toISO(), end: end.toISO() }), {
    timeout: 10000 // 10 second timeout
  })
    .then((response) => {
      if (!response.data || !Array.isArray(response.data)) {
        return
      }
      response.data.forEach((event) => {
        // Find day offsets
        const eventStart = 'dateTime' in event.start
          ? DateTime.fromISO(event.start.dateTime)
          : DateTime.fromSQL(event.start.date)
        let offsetDayEnd = undefined
        if ('dateTime' in event.end) {
          offsetDayEnd = Math.floor(DateTime.fromISO(event.end.dateTime).diff(start, 'days').as('days'))
        } else {
          // Full day events always have the end date set to the following day,
          // so we need to subtract '1' for the right offset
          offsetDayEnd = Math.floor(DateTime.fromSQL(event.end.date).diff(start, 'days').as('days')) - 1
        }
        const offsetDayStart = Math.floor(eventStart.diff(start, 'days').as('days'))
        
        // Limit end to length
        if (offsetDayEnd >= data.length) {
          offsetDayEnd = data.length - 1
        }

        // Add to bucket
        const type = 'dateTime' in event.start ? 'events' : 'allDay'

        if (offsetDayStart >= 0 && offsetDayStart < data.length) {
          // Add event to each day from offset start to offset end
          for (let i = offsetDayStart; i <= offsetDayEnd; i++) {
            data[i][type] = [
              ...data[i][type],
              { ...event, icon: calendar.icon }
            ]
          }
        } else {
          // Only enable for debugging
          // console.log('Ignoring event', bucket, type, ':', event)
        }

      })
    })
)

// Simple cache to avoid reloading the same date range
const calendarCache = new Map()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

const getCacheKey = (startDate) => {
  return startDate.toISODate()
}

const loadAll = (startDate, data, setData, toggleLoading, cacheRef) => {
  // Set up day buckets
  const dateRange = [0,1,2,3,4,5].map((diff) => (
    startDate.plus({ days: diff })).startOf('day')
  )
  dateRange[6] = startDate.plus({ days: 6 }).endOf('day')

  const cacheKey = getCacheKey(startDate)
  const cached = calendarCache.get(cacheKey)
  
  // Check cache
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    setData(cached.data)
    return
  }

  const newData = dateRange.map((date) => ({ date, allDay: [], events: []}))

  // Fetch data
  const abortController = new AbortController()
  if (cacheRef.current) {
    cacheRef.current.abort()
  }
  cacheRef.current = abortController

  try {
    toggleLoading(true)
    // Batch all calendar requests in parallel
    const loading = calendars.map((calendar) => (
      loadCalendarInto(calendar, dateRange[0], dateRange[6], newData)
    ))

    Promise.all(loading)
      .then(() => {
        if (!abortController.signal.aborted) {
          // Cache the result
          calendarCache.set(cacheKey, {
            data: newData,
            timestamp: Date.now()
          })
          setData(newData)
        }
      })
      .catch((err) => {
        if (!abortController.signal.aborted) {
          logger.error('Could not load calendar', err)
        }
      })
      .finally(() => {
        if (!abortController.signal.aborted) {
          toggleLoading(false)
        }
      })
  } catch (err) {
    if (!abortController.signal.aborted) {
      logger.error('Error loading calendar data:', err)
      toggleLoading(false)
    }
  }
}

const emptyData = []

const useCalendarData = (startDate) => {
  const [ data, setData ] = React.useState(emptyData)
  const [ isLoading, setIsLoading ] = React.useState(false)
  const timeout = useTimeout(60000, 'Calendar')
  const [ currentStartDate, setCurrentStartDate ] = React.useState(null)
  const abortRef = useRef(null)

  React.useEffect(() => {
    if (startDate !== undefined) {
      const isNewDate = currentStartDate === null || !currentStartDate.equals(startDate)
      
      if (isNewDate) {
        // Start date was changed, show loading animation
        setData(emptyData)
        setCurrentStartDate(startDate)
      }
      
      loadAll(startDate, data, setData, setIsLoading, abortRef)
    }

    return () => {
      if (abortRef.current) {
        abortRef.current.abort()
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, timeout])

  return data
}

export default useCalendarData