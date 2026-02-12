import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'

// Mock logger
vi.mock('../../utils/logger', () => ({
  default: {
    log: vi.fn(),
    debug: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  },
}))

import Reload from '../../utils/use-reload'

describe('Reload component / setTimeOfDayTimeout()', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    // Mock window.location.reload
    delete window.location
    window.location = { reload: vi.fn() }
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should set 8 timeouts on mount', () => {
    const setTimeoutSpy = vi.spyOn(global, 'setTimeout')
    const initialCount = setTimeoutSpy.mock.calls.length

    renderHook(() => Reload())

    // 8 scheduled reloads
    const newCalls = setTimeoutSpy.mock.calls.length - initialCount
    expect(newCalls).toBeGreaterThanOrEqual(8)

    setTimeoutSpy.mockRestore()
  })

  it('should clear timeouts on unmount', () => {
    const clearTimeoutSpy = vi.spyOn(global, 'clearTimeout')

    const { unmount } = renderHook(() => Reload())
    unmount()

    // Should clear all 8 timeouts
    expect(clearTimeoutSpy).toHaveBeenCalledTimes(8)

    clearTimeoutSpy.mockRestore()
  })

  it('should set timeouts with positive delay values', () => {
    const setTimeoutSpy = vi.spyOn(global, 'setTimeout')
    const initialCount = setTimeoutSpy.mock.calls.length

    renderHook(() => Reload())

    // Check that all new setTimeout calls have positive delays
    const newCalls = setTimeoutSpy.mock.calls.slice(initialCount)
    for (const call of newCalls) {
      const delay = call[1]
      if (typeof delay === 'number') {
        expect(delay).toBeGreaterThan(0)
      }
    }

    setTimeoutSpy.mockRestore()
  })
})
