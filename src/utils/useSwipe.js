import { useRef } from 'react'

const MIN_SWIPE_DISTANCE = 50

/**
 * Erkennt waagerechte Wischgesten.
 *
 * Seit der Kalender senkrecht scrollt, muss die Geste die Richtung
 * unterscheiden: Wer die Zeitachse hoch- oder runterzieht, will nicht die
 * Woche wechseln. Deshalb zählt ein Wisch nur, wenn er deutlich waagerechter
 * verläuft als senkrecht.
 *
 * @param {{onSwipedLeft: Function, onSwipedRight: Function}} input
 */
const useSwipe = (input) => {
    // Refs statt State: Die Zwischenwerte einer laufenden Geste gehören nicht
    // ins Rendering, und ein Rerender pro touchmove wäre auf dem Tablet teuer.
    const start = useRef(null)
    const current = useRef(null)

    const onTouchStart = (e) => {
        const touch = e.targetTouches[0]
        start.current = { x: touch.clientX, y: touch.clientY }
        current.current = null
    }

    const onTouchMove = (e) => {
        const touch = e.targetTouches[0]
        current.current = { x: touch.clientX, y: touch.clientY }
    }

    const onTouchEnd = () => {
        if (!start.current || !current.current) return

        const dx = start.current.x - current.current.x
        const dy = start.current.y - current.current.y
        start.current = null
        current.current = null

        // Senkrechte Anteile überwiegen: Das war Scrollen, kein Wochenwechsel.
        if (Math.abs(dx) <= Math.abs(dy)) return

        if (dx > MIN_SWIPE_DISTANCE) {
            input.onSwipedLeft()
        } else if (dx < -MIN_SWIPE_DISTANCE) {
            input.onSwipedRight()
        }
    }

    return {
        onTouchStart,
        onTouchMove,
        onTouchEnd
    }
}

export default useSwipe
