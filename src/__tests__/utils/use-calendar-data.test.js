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

vi.mock('../../utils/ConfigProvider', () => ({
  useConfig: () => ({ CALENDARS: [{ name: 'calendar.family' }] })
}))

vi.mock('../../utils/config', () => ({
  buildHaUrl: (path) => `http://ha.local${path}`
}))

// Keeps the periodic re-render out of these tests
vi.mock('../../utils/use-timeout', () => ({ default: () => true }))

const MONDAY = DateTime.fromISO('2026-09-07T00:00:00')

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
