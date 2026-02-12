import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import useKeyPress from '../../utils/use-key-press'

describe('useKeyPress()', () => {
  it('should return false initially', () => {
    const { result } = renderHook(() => useKeyPress('Enter'))
    expect(result.current).toBe(false)
  })

  it('should return true when target key is pressed', () => {
    const { result } = renderHook(() => useKeyPress('Enter'))

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
    })

    expect(result.current).toBe(true)
  })

  it('should return false when target key is released', () => {
    const { result } = renderHook(() => useKeyPress('Enter'))

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
    })
    expect(result.current).toBe(true)

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }))
    })
    expect(result.current).toBe(false)
  })

  it('should ignore non-target keys', () => {
    const { result } = renderHook(() => useKeyPress('Enter'))

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    })

    expect(result.current).toBe(false)
  })

  it('should clean up event listeners on unmount', () => {
    const addSpy = vi.spyOn(window, 'addEventListener')
    const removeSpy = vi.spyOn(window, 'removeEventListener')

    const { unmount } = renderHook(() => useKeyPress('Enter'))

    expect(addSpy).toHaveBeenCalledWith('keydown', expect.any(Function))
    expect(addSpy).toHaveBeenCalledWith('keyup', expect.any(Function))

    unmount()

    expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function))
    expect(removeSpy).toHaveBeenCalledWith('keyup', expect.any(Function))

    addSpy.mockRestore()
    removeSpy.mockRestore()
  })

  it('should update when target key changes', () => {
    const { result, rerender } = renderHook(
      ({ key }) => useKeyPress(key),
      { initialProps: { key: 'Enter' } }
    )

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
    })
    expect(result.current).toBe(true)

    // Change target key — old state should reset
    rerender({ key: 'Escape' })

    // Enter should no longer be tracked
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }))
    })

    // New key should work
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    })
    expect(result.current).toBe(true)
  })
})
