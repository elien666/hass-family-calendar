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

// Weeks to prefetch around the visible one, so switching weeks does not show
// a loading state: the previous week and the following three. They are fetched
// in this order, so the next week - the most likely destination - is warm first.
const PREFETCH_OFFSETS = [1, -1, 2, 3]

const loadCalendarInto = (calendar, start, end, data, buildUrl, signal) => (
  axios(buildUrl(calendar.name, { start: start.toISO(), end: end.toISO() }), {
    timeout: 65000, // 65 second timeout (backend has 60s timeout, add buffer)
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

// In-flight requests per week, so a prefetch and a later navigation to the same
// week share one request instead of firing it twice.
const pendingWeeks = new Map()

const getCacheKey = (startDate) => {
  return startDate.toISODate()
}

const buildDateRange = (startDate) => {
  const dateRange = [0,1,2,3,4,5].map((diff) => (
    startDate.plus({ days: diff })).startOf('day')
  )
  dateRange[6] = startDate.plus({ days: 6 }).endOf('day')
  return dateRange
}

// Returns cached week data if it is still fresh, otherwise undefined.
const getCachedWeek = (startDate) => {
  const cached = calendarCache.get(getCacheKey(startDate))
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }
  return undefined
}

// Drops a week from the cache so the next load fetches it again. Used by the
// periodic refresh to pick up calendar changes made elsewhere.
const invalidateWeek = (startDate) => {
  calendarCache.delete(getCacheKey(startDate))
}

// Fetches one week and puts it into the cache. Resolves with the week data.
// Concurrent calls for the same week share a single request.
//
// Week requests are deliberately not abortable: they are shared between the
// visible week and background prefetches, so aborting one caller's navigation
// would also cancel a fetch another caller still needs. A request whose result
// is no longer wanted is simply ignored by the caller and still fills the cache.
const fetchWeek = (startDate, calendars, buildUrl) => {
  const cacheKey = getCacheKey(startDate)

  const pending = pendingWeeks.get(cacheKey)
  if (pending) {
    return pending
  }

  const dateRange = buildDateRange(startDate)
  const newData = dateRange.map((date) => ({ date, allDay: [], events: []}))

  const request = Promise.all(calendars.map((calendar) => (
    loadCalendarInto(calendar, dateRange[0], dateRange[6], newData, buildUrl, undefined)
  )))
    .then(() => {
      calendarCache.set(cacheKey, {
        data: newData,
        timestamp: Date.now()
      })
      return newData
    })
    .finally(() => {
      pendingWeeks.delete(cacheKey)
    })

  pendingWeeks.set(cacheKey, request)
  return request
}

// Identifies the most recent prefetch run, so a run started for an earlier week
// stops as soon as the user has navigated somewhere else.
let currentPrefetchRun = 0

// Loads the surrounding weeks in the background to keep navigation instant.
//
// The weeks are fetched one after another rather than all at once: a parallel
// burst would hit Home Assistant with PREFETCH_OFFSETS x calendars requests at
// the same moment. Nearest weeks go first, so the most likely next week is ready
// earliest.
//
// Prefetch failures are intentionally swallowed: they must never surface as an
// error for the week the user is actually looking at, and one failing week must
// not stop the ones after it.
const prefetchNeighbours = (startDate, calendars, buildUrl) => {
  const run = ++currentPrefetchRun

  const fetchNext = async () => {
    for (const offset of PREFETCH_OFFSETS) {
      // A newer run has taken over: these weeks are no longer the ones to warm up
      if (run !== currentPrefetchRun) {
        return
      }
      const neighbourStart = startDate.plus({ days: offset * 7 })
      if (getCachedWeek(neighbourStart)) {
        continue
      }
      try {
        await fetchWeek(neighbourStart, calendars, buildUrl)
      } catch {
        // Keep going: a failing week must not block the remaining ones
      }
    }
  }

  fetchNext()
}

const loadAll = (startDate, setData, toggleLoading, activeWeekRef, setError, calendars, buildUrl, isMountedRef) => {
  // Marks results of an earlier week as stale once the user has navigated on
  const isStale = () => !isMountedRef.current || activeWeekRef.current !== getCacheKey(startDate)

  // Skip if no calendars configured
  if (!calendars || calendars.length === 0) {
    logger.warn('loadAll: No calendars configured, skipping fetch', { calendars })
    if (isMountedRef.current) {
      setData(buildDateRange(startDate).map((date) => ({ date, allDay: [], events: []})))
      toggleLoading(false)
    }
    return
  }

  const cached = getCachedWeek(startDate)
  if (cached) {
    if (isMountedRef.current) {
      setData(cached)
      setError(false)
    }
    // Still warm up the neighbours around the newly shown week
    prefetchNeighbours(startDate, calendars, buildUrl)
    return
  }

  logger.debug('loadAll: Starting calendar fetch', {
    calendarsCount: calendars.length,
    calendars: calendars.map(c => c.name),
    startDate: startDate.toISO()
  })

  try {
    if (isMountedRef.current) {
      toggleLoading(true)
    }

    fetchWeek(startDate, calendars, buildUrl)
      .then((weekData) => {
        if (!isStale()) {
          setData(weekData)
          setError(false)
        }
        prefetchNeighbours(startDate, calendars, buildUrl)
      })
      .catch((err) => {
        // Don't surface errors for a week the user has already navigated away from
        if (!isStale()) {
          // Error is already logged by interceptor, format for UI
          setError(formatErrorForUI(err))
        }
      })
      .finally(() => {
        if (!isStale()) {
          toggleLoading(false)
        }
      })
  } catch (err) {
    if (!isStale()) {
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

  // Debug: Log config changes
  React.useEffect(() => {
    logger.debug('useCalendarData: config changed', {
      hasCALENDARS: 'CALENDARS' in config,
      CALENDARS: config.CALENDARS,
      CALENDARSCount: Array.isArray(config.CALENDARS) ? config.CALENDARS.length : 'not array',
      configKeys: Object.keys(config)
    })
  }, [config])

  // Process calendars from config: map icon strings to icon objects
  const calendars = React.useMemo(() => {
    const processed = CALENDARS.map((calendar) => ({
      name: calendar.name,
      icon: getIconFromString(calendar.icon)
    }))
    logger.debug('Processing calendars from config (memo update):', {
      CALENDARS,
      count: CALENDARS.length,
      processedCount: processed.length,
      processed: processed.map(c => c.name)
    })
    return processed
  }, [CALENDARS])

  // Debug: Log when CALENDARS changes
  React.useEffect(() => {
    logger.debug('CALENDARS array changed:', {
      CALENDARS,
      count: CALENDARS.length,
      calendarsMemoCount: calendars.length
    })
  }, [CALENDARS, calendars.length])

  const host = React.useCallback((name) => {
    const url = buildHaUrl(`/api/calendars/${name}`, config)
    logger.debug(`Building calendar URL for ${name}:`, url)
    return url
  }, [config])
  const url = React.useCallback((name, params) => {
    const fullUrl = `${host(name)}?${qs.stringify(params)}`
    logger.debug(`Full calendar URL for ${name}:`, fullUrl)
    return fullUrl
  }, [host])

  const [ data, setData ] = React.useState(emptyData)
  const [ , setIsLoading ] = React.useState(false)
  const [ error, setError ] = React.useState(false)
  const [ currentStartDate, setCurrentStartDate ] = React.useState(null)
  // Cache key of the week currently being displayed; results for any other week
  // are stale and get discarded.
  const activeWeekRef = useRef(null)
  const isMountedRef = useRef(true)

  // Track mounted state separately from the fetch effect, so navigating between
  // weeks does not mark the hook as unmounted.
  React.useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])

  // Flips every 60 seconds and re-runs the effect below to refresh the data
  const refreshTick = useTimeout(60000, 'Calendar')
  // Skip the invalidation on the very first run: that is the initial load, not a refresh
  const lastRefreshTick = useRef(refreshTick)

  React.useEffect(() => {
    logger.debug('useCalendarData effect triggered:', {
      startDate: startDate?.toISO(),
      calendarsCount: calendars.length,
      calendars: calendars.map(c => c.name),
      hasStartDate: startDate !== undefined,
      hasCalendars: calendars.length > 0
    })

    // Only fetch if we have both startDate and calendars
    if (startDate !== undefined && calendars.length > 0) {
      const isNewDate = currentStartDate === null || !currentStartDate.equals(startDate)
      const isRefresh = lastRefreshTick.current !== refreshTick
      lastRefreshTick.current = refreshTick

      activeWeekRef.current = getCacheKey(startDate)

      if (isNewDate) {
        // Start date was changed. Show the prefetched week right away if we have
        // it; only fall back to the loading animation for an uncached week.
        setData(getCachedWeek(startDate) || emptyData)
        setCurrentStartDate(startDate)
      } else if (isRefresh) {
        // The timer fired: drop the cached copy so the week is fetched again and
        // changes made elsewhere show up. The currently displayed data stays in
        // place until the new data arrives, so this never flashes a loading state.
        invalidateWeek(startDate)
      }

      logger.debug('useCalendarData: Calling loadAll', {
        startDate: startDate.toISO(),
        calendarsCount: calendars.length,
        isRefresh
      })
      loadAll(startDate, setData, setIsLoading, activeWeekRef, setError, calendars, url, isMountedRef)
    } else {
      if (startDate === undefined) {
        logger.debug('useCalendarData: startDate is undefined, skipping fetch')
      }
      if (calendars.length === 0) {
        logger.debug('useCalendarData: No calendars configured yet, skipping fetch')
      }
    }

  // refreshTick drives the periodic refresh; url re-runs it when the config changes
  }, [startDate, calendars, url, refreshTick])

  return [ data, error ]
}

export default useCalendarData
