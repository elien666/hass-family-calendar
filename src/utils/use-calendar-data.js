import React, { useRef } from 'react'
import { DateTime } from 'luxon'
import axios from 'axios'
import qs from 'qs'
// Import only the icons that are commonly used for calendars
// Add more icons here as needed when configuring calendars
import { 
  mdiDelete, 
  mdiCake,
  // Add other commonly used calendar icons here as needed
} from '@mdi/js'
import useTimeout from './use-timeout'
import { useConfig } from './ConfigProvider'
import { buildHaUrl } from "./config"
import logger from './logger'
import { formatErrorForUI } from './axios-error-handler'

// Map icon string names to actual icon objects from @mdi/js
// Only includes icons that are explicitly imported above to keep bundle size small
const iconMap = {
  mdiDelete,
  mdiCake,
  // Add mappings for other icons as needed
}

const getIconFromString = (iconString) => {
  if (!iconString || typeof iconString !== 'string') {
    return undefined
  }
  // Convert icon string (e.g., "mdiDelete") to actual icon object
  const iconKey = iconString.startsWith('mdi') ? iconString : `mdi${iconString.charAt(0).toUpperCase() + iconString.slice(1)}`
  return iconMap[iconKey] || undefined
}

const loadCalendarInto = (calendar, start, end, data, buildUrl, signal) => (
  axios(buildUrl(calendar.name, { start: start.toISO(), end: end.toISO() }), {
    timeout: 10000, // 10 second timeout
    signal: signal // Add abort signal to cancel request if component unmounts
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
    .catch((err) => {
      // Don't throw if request was aborted (component unmounted)
      if (axios.isCancel(err) || err.name === 'AbortError' || err.code === 'ERR_CANCELED') {
        return
      }
      // Error is already logged by interceptor
      // Re-throw to be handled by Promise.all catch
      throw err
    })
)

// Simple cache to avoid reloading the same date range
const calendarCache = new Map()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

const getCacheKey = (startDate) => {
  return startDate.toISODate()
}

const loadAll = (startDate, data, setData, toggleLoading, cacheRef, setError, calendars, buildUrl, isMountedRef) => {
  // Set up day buckets
  const dateRange = [0,1,2,3,4,5].map((diff) => (
    startDate.plus({ days: diff })).startOf('day')
  )
  dateRange[6] = startDate.plus({ days: 6 }).endOf('day')

  const cacheKey = getCacheKey(startDate)
  const cached = calendarCache.get(cacheKey)
  
  // Check cache
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    if (isMountedRef.current) {
      setData(cached.data)
    }
    return
  }

  const newData = dateRange.map((date) => ({ date, allDay: [], events: []}))

  // Skip if no calendars configured
  if (!calendars || calendars.length === 0) {
    if (isMountedRef.current) {
      setData(newData)
      toggleLoading(false)
    }
    return
  }

  // Fetch data
  const abortController = new AbortController()
  if (cacheRef.current) {
    cacheRef.current.abort()
  }
  cacheRef.current = abortController

  try {
    if (isMountedRef.current) {
      toggleLoading(true)
    }
    // Batch all calendar requests in parallel
    const loading = calendars.map((calendar) => (
      loadCalendarInto(calendar, dateRange[0], dateRange[6], newData, buildUrl, abortController.signal)
    ))

    Promise.all(loading)
      .then(() => {
        if (isMountedRef.current && !abortController.signal.aborted) {
          // Cache the result
          calendarCache.set(cacheKey, {
            data: newData,
            timestamp: Date.now()
          })
          setData(newData)
          setError(false)
        }
      })
      .catch((err) => {
        // Don't set error if request was aborted or component unmounted
        if (isMountedRef.current && !abortController.signal.aborted) {
          // Error is already logged by interceptor, format for UI
          setError(formatErrorForUI(err))
        }
      })
      .finally(() => {
        if (isMountedRef.current && !abortController.signal.aborted) {
          toggleLoading(false)
        }
      })
  } catch (err) {
    if (isMountedRef.current && !abortController.signal.aborted) {
      // Error is already logged by interceptor, format for UI
      setError(formatErrorForUI(err))
      toggleLoading(false)
    }
  }
}

const emptyData = []

const useCalendarData = (startDate) => {
  const config = useConfig()
  const CALENDARS = config.CALENDARS || []
  
  // Process calendars from config: map icon strings to icon objects
  const calendars = React.useMemo(() => {
    return CALENDARS.map((calendar) => ({
      name: calendar.name,
      icon: getIconFromString(calendar.icon)
    }))
  }, [CALENDARS])

  const host = React.useCallback((name) => buildHaUrl(`/api/calendars/${name}`, config), [config])
  const url = React.useCallback((name, params) => `${host(name)}?${qs.stringify(params)}`, [host])

  const [ data, setData ] = React.useState(emptyData)
  const [ isLoading, setIsLoading ] = React.useState(false)
  const [ error, setError ] = React.useState(false)
  const [ currentStartDate, setCurrentStartDate ] = React.useState(null)
  const abortRef = useRef(null)
  const isMountedRef = useRef(true)

  // Use timeout to periodically refresh data, but don't include it as a dependency
  // to avoid unnecessary re-renders
  useTimeout(60000, 'Calendar')

  React.useEffect(() => {
    isMountedRef.current = true
    
    if (startDate !== undefined) {
      const isNewDate = currentStartDate === null || !currentStartDate.equals(startDate)
      
      if (isNewDate) {
        // Start date was changed, show loading animation
        setData(emptyData)
        setCurrentStartDate(startDate)
      }
      
      loadAll(startDate, data, setData, setIsLoading, abortRef, setError, calendars, url, isMountedRef)
    }

    return () => {
      isMountedRef.current = false
      if (abortRef.current) {
        abortRef.current.abort()
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, calendars])

  return [ data, error ]
}

export default useCalendarData