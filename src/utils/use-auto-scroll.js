import { useCallback, useEffect, useRef, useState } from 'react'
import { CALENDAR_AUTOSCROLL_RESUME } from './constants'

/**
 * Hält die aktuelle Uhrzeit im sichtbaren Bereich.
 *
 * Das Tablet hängt an der Wand und wird meist nur angeschaut, nicht bedient —
 * deshalb scrollt die Ansicht von selbst zur Jetzt-Linie. Sobald jemand
 * eingreift, tritt der Automatismus zurück und meldet sich erst nach einer
 * Ruhephase wieder, damit er niemandem das Scrollen aus der Hand nimmt.
 *
 * @param {number|null} targetOffset Pixelposition der Jetzt-Linie, null außerhalb des Fensters
 * @param {number} resumeDelay Ruhezeit bis zur Rückkehr des Automatismus
 * @returns {{ref: Object, auto: boolean, resume: () => void}}
 */
const useAutoScroll = (targetOffset, resumeDelay = CALENDAR_AUTOSCROLL_RESUME) => {
  // Der Container wird als State gehalten, nicht nur als Ref: Eine
  // Ref-Zuweisung löst keinen Effekt aus, sodass die Listener sonst am
  // leeren Ref des ersten Renders hängen blieben.
  const [ node, setNode ] = useState(null)
  const ref = useRef(null)
  const setRef = useCallback((element) => {
    ref.current = element
    setNode(element)
  }, [])
  const [ auto, setAuto ] = useState(true)
  const resumeTimer = useRef(null)

  const clearResumeTimer = () => {
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current)
      resumeTimer.current = null
    }
  }

  const resume = useCallback(() => {
    clearResumeTimer()
    setAuto(true)
  }, [])

  const suspend = useCallback(() => {
    setAuto(false)
    clearResumeTimer()
    resumeTimer.current = setTimeout(() => setAuto(true), resumeDelay)
  }, [ resumeDelay ])

  // Eingriff erkennen. Reines Scrollen reicht nicht als Signal, weil auch der
  // Automatismus scrollt — deshalb hängen wir an den Gesten selbst.
  useEffect(() => {
    if (!node) return undefined

    // Gesten sind immer der Nutzer: Ein Wisch oder Mausrad kann nicht vom
    // eigenen Scrollen stammen, deshalb greift hier keine Sperre. Sonst
    // würde ein Eingriff kurz nach einem Auto-Scroll verschluckt.
    const onUserScroll = () => suspend()

    node.addEventListener('wheel', onUserScroll, { passive: true })
    node.addEventListener('touchstart', onUserScroll, { passive: true })
    node.addEventListener('pointerdown', onUserScroll, { passive: true })

    return () => {
      node.removeEventListener('wheel', onUserScroll)
      node.removeEventListener('touchstart', onUserScroll)
      node.removeEventListener('pointerdown', onUserScroll)
    }
  }, [ node, suspend ])

  // Jetzt-Linie mittig halten, solange der Automatismus aktiv ist.
  useEffect(() => {
    if (!node || !auto || targetOffset === null || targetOffset === undefined) return undefined

    const desired = Math.max(0, targetOffset - node.clientHeight / 2)
    if (Math.abs(node.scrollTop - desired) < 2) return undefined

    node.scrollTo({
      top: desired,
      behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    })
    return undefined
  }, [ node, auto, targetOffset ])

  useEffect(() => clearResumeTimer, [])

  return { ref: setRef, auto, resume }
}

export default useAutoScroll
