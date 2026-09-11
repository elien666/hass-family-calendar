import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import useAutoScroll from '../../utils/use-auto-scroll'

/** Scroll-Container nachbilden; jsdom hat kein Layout und kein scrollTo. */
const makeNode = () => {
  const node = document.createElement('div')
  Object.defineProperty(node, 'clientHeight', { value: 400, configurable: true })
  node.scrollTop = 0
  node.scrollTo = vi.fn(({ top }) => { node.scrollTop = top })
  document.body.appendChild(node)
  return node
}

describe('useAutoScroll', () => {
  let node

  beforeEach(() => {
    vi.useFakeTimers()
    node = makeNode()
  })

  afterEach(() => {
    vi.useRealTimers()
    node.remove()
  })

  /** `ref` ist ein Callback-Ref; React ruft ihn beim Einhängen mit dem
   *  Element auf. Genau das bildet der Test nach. */
  const setup = (offset = 600, delay = 120000) => {
    const hook = renderHook(({ o }) => useAutoScroll(o, delay), {
      initialProps: { o: offset },
    })
    act(() => { hook.result.current.ref(node) })
    return hook
  }

  it('startet mit aktivem Automatismus', () => {
    const { result } = setup()
    expect(result.current.auto).toBe(true)
  })

  it('zentriert die Jetzt-Linie im sichtbaren Bereich', () => {
    setup(600)
    act(() => { vi.advanceTimersByTime(10) })
    // 600 minus halbe Containerhöhe (200)
    expect(node.scrollTo).toHaveBeenCalledWith(expect.objectContaining({ top: 400 }))
  })

  it('scrollt nicht über den oberen Rand hinaus', () => {
    // Frühmorgens läge die Jetzt-Linie rechnerisch im Negativen.
    node.scrollTop = 300
    setup(100)
    act(() => { vi.advanceTimersByTime(10) })
    expect(node.scrollTo).toHaveBeenCalledWith(expect.objectContaining({ top: 0 }))
  })

  it('setzt den Automatismus bei Berührung aus', () => {
    const { result } = setup()
    act(() => { node.dispatchEvent(new Event('touchstart')) })
    expect(result.current.auto).toBe(false)
  })

  it('setzt ihn auch beim Mausrad aus', () => {
    const { result } = setup()
    act(() => { node.dispatchEvent(new Event('wheel')) })
    expect(result.current.auto).toBe(false)
  })

  it('nimmt ihn nach der Ruhezeit von selbst wieder auf', () => {
    const { result } = setup(600, 120000)
    act(() => { node.dispatchEvent(new Event('wheel')) })
    expect(result.current.auto).toBe(false)

    act(() => { vi.advanceTimersByTime(119000) })
    expect(result.current.auto).toBe(false) // kurz davor noch aus

    act(() => { vi.advanceTimersByTime(2000) })
    expect(result.current.auto).toBe(true)
  })

  it('verlängert die Ruhezeit bei erneuter Berührung', () => {
    const { result } = setup(600, 120000)
    act(() => { node.dispatchEvent(new Event('wheel')) })
    act(() => { vi.advanceTimersByTime(100000) })
    act(() => { node.dispatchEvent(new Event('wheel')) })
    act(() => { vi.advanceTimersByTime(100000) })
    // Ohne Verlängerung wären die 120s längst um.
    expect(result.current.auto).toBe(false)

    act(() => { vi.advanceTimersByTime(25000) })
    expect(result.current.auto).toBe(true)
  })

  it('lässt sich vorzeitig zurückholen', () => {
    const { result } = setup()
    act(() => { node.dispatchEvent(new Event('wheel')) })
    act(() => { result.current.resume() })
    expect(result.current.auto).toBe(true)
  })

  it('scrollt nicht, während der Automatismus aus ist', () => {
    const { rerender } = setup(600)
    act(() => { vi.advanceTimersByTime(800) })
    node.scrollTo.mockClear()

    act(() => { node.dispatchEvent(new Event('wheel')) })
    rerender({ o: 900 })
    act(() => { vi.advanceTimersByTime(10) })
    expect(node.scrollTo).not.toHaveBeenCalled()
  })

  it('scrollt nicht außerhalb des Zeitfensters', () => {
    setup(null)
    act(() => { vi.advanceTimersByTime(10) })
    expect(node.scrollTo).not.toHaveBeenCalled()
  })

  it('räumt den Timer beim Abbau ab', () => {
    const { result, unmount } = setup()
    act(() => { node.dispatchEvent(new Event('wheel')) })
    expect(result.current.auto).toBe(false)
    expect(() => unmount()).not.toThrow()
  })
})
