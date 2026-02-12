import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'

// Mock logger
vi.mock('../../utils/logger', () => ({
  default: {
    log: vi.fn(),
    debug: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  },
}))

import useTimeout from '../../utils/use-timeout'

describe('useTimeout()', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should return true initially', () => {
    const { result } = renderHook(() => useTimeout(1000))
    expect(result.current).toBe(true)
  })

  it('should toggle after timeout', () => {
    const { result } = renderHook(() => useTimeout(1000))
    expect(result.current).toBe(true)

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(result.current).toBe(false)
  })

  it('should toggle back after two intervals', () => {
    const { result } = renderHook(() => useTimeout(1000))

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(result.current).toBe(false)

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(result.current).toBe(true)
  })

  it('should use default timeout of 60 seconds', () => {
    const { result } = renderHook(() => useTimeout())

    // Should not toggle before 60s
    act(() => {
      vi.advanceTimersByTime(59999)
    })
    expect(result.current).toBe(true)

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(result.current).toBe(false)
  })

  it('should clear interval on unmount', () => {
    const clearSpy = vi.spyOn(global, 'clearInterval')
    const { unmount } = renderHook(() => useTimeout(5000))

    unmount()

    expect(clearSpy).toHaveBeenCalled()
    clearSpy.mockRestore()
  })

  it('should restart interval when timeout changes', () => {
    const { result, rerender } = renderHook(
      ({ timeout }) => useTimeout(timeout),
      { initialProps: { timeout: 1000 } }
    )

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(result.current).toBe(false)

    // Change timeout — interval should reset
    rerender({ timeout: 2000 })
    // After rerender, toggle state resets based on new interval
    // The initial state after rerender is the last value

    act(() => {
      vi.advanceTimersByTime(2000)
    })
    // Should have toggled
    expect(result.current).toBe(true)
  })
})
