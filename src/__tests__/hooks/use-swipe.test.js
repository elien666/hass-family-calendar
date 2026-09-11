import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import useSwipe from '../../utils/useSwipe'

/** Touch-Ereignis nachbilden, wie React es an die Handler reicht. */
const touch = (x, y) => ({ targetTouches: [ { clientX: x, clientY: y } ] })

describe('useSwipe', () => {
  let onSwipedLeft
  let onSwipedRight

  beforeEach(() => {
    onSwipedLeft = vi.fn()
    onSwipedRight = vi.fn()
  })

  const setup = () => renderHook(() => useSwipe({ onSwipedLeft, onSwipedRight })).result

  /** Eine vollständige Geste von (x1,y1) nach (x2,y2). */
  const swipe = (result, x1, y1, x2, y2) => {
    result.current.onTouchStart(touch(x1, y1))
    result.current.onTouchMove(touch(x2, y2))
    result.current.onTouchEnd()
  }

  it('löst beim Wisch nach links die nächste Woche aus', () => {
    const result = setup()
    swipe(result, 300, 400, 100, 400)
    expect(onSwipedLeft).toHaveBeenCalledTimes(1)
    expect(onSwipedRight) .not.toHaveBeenCalled()
  })

  it('löst beim Wisch nach rechts die vorherige Woche aus', () => {
    const result = setup()
    swipe(result, 100, 400, 300, 400)
    expect(onSwipedRight).toHaveBeenCalledTimes(1)
  })

  it('ignoriert zu kurze Wischer', () => {
    const result = setup()
    swipe(result, 300, 400, 270, 400) // 30px, unter der Schwelle
    expect(onSwipedLeft).not.toHaveBeenCalled()
    expect(onSwipedRight).not.toHaveBeenCalled()
  })

  it('ignoriert senkrechtes Scrollen', () => {
    // Der wichtige Fall: Die Zeitachse wird hochgezogen, die Woche darf bleiben.
    const result = setup()
    swipe(result, 300, 600, 300, 200)
    expect(onSwipedLeft).not.toHaveBeenCalled()
    expect(onSwipedRight).not.toHaveBeenCalled()
  })

  it('ignoriert überwiegend senkrechte Diagonalen', () => {
    const result = setup()
    swipe(result, 300, 600, 220, 300) // 80px quer, 300px hoch
    expect(onSwipedLeft).not.toHaveBeenCalled()
  })

  it('akzeptiert überwiegend waagerechte Diagonalen', () => {
    const result = setup()
    swipe(result, 400, 400, 100, 330) // 300px quer, 70px hoch
    expect(onSwipedLeft).toHaveBeenCalledTimes(1)
  })

  it('löst bei einem Tipp ohne Bewegung nichts aus', () => {
    // Ein Tipp auf einen Termin darf die Woche nicht wechseln.
    const result = setup()
    result.current.onTouchStart(touch(300, 400))
    result.current.onTouchEnd()
    expect(onSwipedLeft).not.toHaveBeenCalled()
    expect(onSwipedRight).not.toHaveBeenCalled()
  })

  it('wertet eine Geste nicht doppelt aus', () => {
    const result = setup()
    swipe(result, 300, 400, 100, 400)
    result.current.onTouchEnd() // zweites touchend ohne neue Geste
    expect(onSwipedLeft).toHaveBeenCalledTimes(1)
  })

  it('trennt aufeinanderfolgende Gesten sauber', () => {
    const result = setup()
    swipe(result, 300, 400, 100, 400)
    swipe(result, 100, 400, 300, 400)
    expect(onSwipedLeft).toHaveBeenCalledTimes(1)
    expect(onSwipedRight).toHaveBeenCalledTimes(1)
  })
})
