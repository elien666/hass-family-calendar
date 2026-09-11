import React from 'react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, waitFor, act } from '@testing-library/react'
import { DateTime } from 'luxon'

// axios is called as a function by use-calendar-data
vi.mock('axios', () => {
  const axios = vi.fn(() => Promise.resolve({ data: [] }))
  axios.isCancel = vi.fn(() => false)
  return { default: axios }
})

// One frozen config object, mirroring the real ConfigProvider which memoizes its
// context value. A fresh object per call would invalidate the calendars/url memos
// on every render and make the fetch effect re-run regardless of its dependencies.
const CONFIG = { CALENDARS: [{ name: 'calendar.family' }] }
vi.mock('../../utils/ConfigProvider', () => ({
  useConfig: () => CONFIG
}))

vi.mock('../../utils/config', () => ({
  buildHaUrl: (path) => `http://ha.local${path}`
}))

// use-timeout is deliberately NOT mocked: the refresh tests below drive the real
// 60s interval with fake timers, so they actually exercise the effect dependency.

const MONDAY = DateTime.fromISO('2026-09-07T00:00:00')
const REFRESH_INTERVAL = 60000

// Start dates of the weeks requested so far, derived from the request URLs
const requestedWeekStarts = (axios) => axios.mock.calls.map(([url]) => {
  const start = decodeURIComponent(url.match(/start=([^&]+)/)[1])
  return DateTime.fromISO(start).toISODate()
})

describe('useCalendarData week prefetching', () => {
  let axios
  let useCalendarData

  beforeEach(async () => {
    // The module holds a process-wide cache, so each test needs a fresh copy
    vi.resetModules()
    axios = (await import('axios')).default
    axios.mockClear()
    axios.mockImplementation(() => Promise.resolve({ data: [] }))
    useCalendarData = (await import('../../utils/use-calendar-data')).default
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('prefetches the previous and the next three weeks around the visible one', async () => {
    const { result } = renderHook(() => useCalendarData(MONDAY))

    await waitFor(() => expect(result.current[0]).toHaveLength(7))
    await waitFor(() => expect(axios.mock.calls.length).toBeGreaterThanOrEqual(5))

    const weeks = requestedWeekStarts(axios)
    expect(weeks).toContain('2026-09-07') // visible week
    expect(weeks).toContain('2026-08-31') // previous week
    expect(weeks).toContain('2026-09-14') // next week
    expect(weeks).toContain('2026-09-21')
    expect(weeks).toContain('2026-09-28')
  })

  it('runs the prefetches one at a time instead of in one burst', async () => {
    let inFlight = 0
    let maxInFlight = 0
    const release = []

    axios.mockImplementation(() => {
      inFlight++
      maxInFlight = Math.max(maxInFlight, inFlight)
      return new Promise((resolve) => {
        release.push(() => {
          inFlight--
          resolve({ data: [] })
        })
      })
    })

    renderHook(() => useCalendarData(MONDAY))

    // Resolve requests one by one; each release may start the next prefetch
    for (let i = 0; i < 5; i++) {
      await waitFor(() => expect(release.length).toBeGreaterThan(i))
      await act(async () => { release[i]() })
    }

    await waitFor(() => expect(release.length).toBe(5))

    // One visible week plus four prefetches, never overlapping
    expect(maxInFlight).toBe(1)
  })

  it('prefetches the next week before the more distant ones', async () => {
    const release = []
    axios.mockImplementation(() => new Promise((resolve) => {
      release.push(() => resolve({ data: [] }))
    }))

    renderHook(() => useCalendarData(MONDAY))

    // Visible week first
    await waitFor(() => expect(release.length).toBe(1))
    await act(async () => { release[0]() })

    // Then the next week, ahead of the previous one and the distant ones
    await waitFor(() => expect(release.length).toBe(2))
    expect(requestedWeekStarts(axios)[1]).toBe('2026-09-14')
  })

  it('stops a prefetch run that has been superseded by a week change', async () => {
    const release = []
    axios.mockImplementation(() => new Promise((resolve) => {
      release.push(() => resolve({ data: [] }))
    }))

    const { rerender } = renderHook(
      ({ startDate }) => useCalendarData(startDate),
      { initialProps: { startDate: MONDAY } }
    )

    // Let the visible week finish so the prefetch chain starts
    await waitFor(() => expect(release.length).toBe(1))
    await act(async () => { release[0]() })
    await waitFor(() => expect(release.length).toBe(2))

    // Navigate away, then let the in-flight prefetch settle
    await act(async () => {
      rerender({ startDate: MONDAY.plus({ days: 70 }) })
    })
    await act(async () => { release[1]() })

    await waitFor(() => expect(release.length).toBeGreaterThan(2))

    // The superseded run must not keep walking its remaining offsets
    const requested = requestedWeekStarts(axios)
    expect(requested).not.toContain('2026-09-21')
    expect(requested).not.toContain('2026-09-28')
  })

  it('shows the next week without an intermediate empty (loading) state', async () => {
    const { result, rerender } = renderHook(
      ({ startDate }) => useCalendarData(startDate),
      { initialProps: { startDate: MONDAY } }
    )

    // Wait until the visible week and its prefetched neighbours have landed
    await waitFor(() => expect(result.current[0]).toHaveLength(7))
    await waitFor(() => expect(axios.mock.calls.length).toBeGreaterThanOrEqual(5))

    await act(async () => {
      rerender({ startDate: MONDAY.plus({ days: 7 }) })
    })

    // Data is served straight from the prefetch cache: never empty in between
    expect(result.current[0]).toHaveLength(7)
    expect(result.current[0][0].date.toISODate()).toBe('2026-09-14')
  })

  it('does not request the same week twice when it is already cached', async () => {
    const { result, rerender } = renderHook(
      ({ startDate }) => useCalendarData(startDate),
      { initialProps: { startDate: MONDAY } }
    )

    await waitFor(() => expect(result.current[0]).toHaveLength(7))
    await waitFor(() => expect(axios.mock.calls.length).toBeGreaterThanOrEqual(5))

    const callsAfterInitialLoad = axios.mock.calls.length

    await act(async () => {
      rerender({ startDate: MONDAY.plus({ days: 7 }) })
    })
    await waitFor(() => expect(result.current[0][0].date.toISODate()).toBe('2026-09-14'))

    // Only the newly reachable week (+4 from the original) may be fetched
    const newWeeks = requestedWeekStarts(axios).slice(callsAfterInitialLoad)
    expect(newWeeks).not.toContain('2026-09-14')
    expect(newWeeks).not.toContain('2026-09-07')
  })

  it('keeps a failing prefetch from surfacing as an error for the visible week', async () => {
    axios.mockImplementation((url) => {
      // Every week except the visible one fails
      if (!url.includes('2026-09-07')) {
        return Promise.reject(new Error('prefetch boom'))
      }
      return Promise.resolve({ data: [] })
    })

    const { result } = renderHook(() => useCalendarData(MONDAY))

    await waitFor(() => expect(result.current[0]).toHaveLength(7))
    // Give the rejected prefetches a chance to settle
    await act(async () => { await Promise.resolve() })

    expect(result.current[1]).toBe(false)
  })
})

describe('useCalendarData periodic refresh', () => {
  let axios
  let useCalendarData

  // Lets pending promise callbacks run while fake timers are active
  const flush = async () => {
    for (let i = 0; i < 10; i++) {
      await Promise.resolve()
    }
  }

  beforeEach(async () => {
    vi.resetModules()
    vi.useFakeTimers()
    axios = (await import('axios')).default
    axios.mockClear()
    axios.mockImplementation(() => Promise.resolve({ data: [] }))
    useCalendarData = (await import('../../utils/use-calendar-data')).default
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('refetches the visible week when the 60s timer fires', async () => {
    const { result } = renderHook(() => useCalendarData(MONDAY))

    await act(async () => { await flush() })
    expect(result.current[0]).toHaveLength(7)

    const callsBeforeRefresh = axios.mock.calls.length
    expect(callsBeforeRefresh).toBeGreaterThanOrEqual(5)

    await act(async () => {
      vi.advanceTimersByTime(REFRESH_INTERVAL)
      await flush()
    })

    // The visible week must have been requested again after the tick
    const refetched = requestedWeekStarts(axios).slice(callsBeforeRefresh)
    expect(refetched).toContain('2026-09-07')
  })

  it('keeps the current week visible while the refresh is in flight', async () => {
    axios.mockImplementation(() => Promise.resolve({
      data: [{
        summary: 'Zahnarzt',
        start: { dateTime: '2026-09-07T10:00:00.000+02:00' },
        end: { dateTime: '2026-09-07T11:00:00.000+02:00' }
      }]
    }))

    const { result } = renderHook(() => useCalendarData(MONDAY))

    await act(async () => { await flush() })
    expect(result.current[0][0].events).toHaveLength(1)

    // Hold the refresh request open so the in-between state is observable
    let releaseRefresh
    axios.mockImplementation(() => new Promise((resolve) => {
      releaseRefresh = () => resolve({ data: [] })
    }))

    await act(async () => {
      vi.advanceTimersByTime(REFRESH_INTERVAL)
      await flush()
    })

    // Old data stays on screen: no empty array, so week.jsx shows no spinner
    expect(result.current[0]).toHaveLength(7)
    expect(result.current[0][0].events).toHaveLength(1)

    await act(async () => {
      releaseRefresh()
      await flush()
    })
  })

  it('does not refetch before the interval has elapsed', async () => {
    const { result } = renderHook(() => useCalendarData(MONDAY))

    await act(async () => { await flush() })
    expect(result.current[0]).toHaveLength(7)

    const callsBeforeWait = axios.mock.calls.length

    await act(async () => {
      vi.advanceTimersByTime(REFRESH_INTERVAL - 1000)
      await flush()
    })

    expect(axios.mock.calls.length).toBe(callsBeforeWait)
  })
})
