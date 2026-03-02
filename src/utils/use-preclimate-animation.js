import { useState, useEffect, useRef, useCallback } from 'react'
import { PRECLIMATE_ANIMATION_DURATION, PRECLIMATE_COMMAND_TIMEOUT } from './constants'

/**
 * Manages the preclimate button animation state machine.
 *
 * @param {Object} options
 * @param {boolean} options.preclimateStatus - Current preclimate on/off state
 * @param {string|false} options.error - Current error state
 * @param {Function} options.onStart - Called when user starts preclimate
 * @param {Function} options.onStop - Called when user stops preclimate
 * @returns {Object} Animation state and toggle handler
 */
const usePreclimateAnimation = ({ preclimateStatus, error, onStart, onStop }) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationDirection, setAnimationDirection] = useState(null) // 'start' or 'stop'
  const [shouldShake, setShouldShake] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [progressAngle, setProgressAngle] = useState(0)

  const timeoutRef = useRef(null)
  const animationFrameRef = useRef(null)
  const previousPreclimateStatusRef = useRef(preclimateStatus)
  const animationStartTimeRef = useRef(null)

  // Monitor preclimateStatus changes
  useEffect(() => {
    if (previousPreclimateStatusRef.current === preclimateStatus) {
      return
    }

    if (isAnimating && animationStartTimeRef.current !== null) {
      const expectedStatus = animationDirection === 'start'

      if (preclimateStatus === expectedStatus) {
        const finalAngle = animationDirection === 'start' ? 360 : 0
        setProgressAngle(finalAngle)
        setIsComplete(true)

        setTimeout(() => {
          setIsAnimating(false)
          setAnimationDirection(null)
          setIsComplete(false)
          setProgressAngle(0)
          animationStartTimeRef.current = null
          setShouldShake(false)
        }, 300)

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }
      }
    }

    previousPreclimateStatusRef.current = preclimateStatus
  }, [preclimateStatus, isAnimating, animationDirection])

  // Animation progress loop
  useEffect(() => {
    if (!isAnimating || isComplete) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
      return
    }

    const startTime = animationStartTimeRef.current || Date.now()
    const isCounterClockwise = animationDirection === 'stop'

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / PRECLIMATE_ANIMATION_DURATION, 1)

      if (isCounterClockwise) {
        setProgressAngle(360 * (1 - progress))
      } else {
        setProgressAngle(360 * progress)
      }

      if (progress < 1 && !isComplete) {
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
  }, [isAnimating, isComplete, animationDirection])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const handleToggle = useCallback(() => {
    if (error !== false || isAnimating) return

    const isStarting = !preclimateStatus
    const direction = isStarting ? 'start' : 'stop'

    setIsAnimating(true)
    setAnimationDirection(direction)
    setIsComplete(false)
    setShouldShake(false)
    setProgressAngle(0)
    animationStartTimeRef.current = Date.now()
    previousPreclimateStatusRef.current = preclimateStatus

    if (isStarting) {
      onStart()
    } else {
      onStop()
    }

    timeoutRef.current = setTimeout(() => {
      setShouldShake(true)

      setTimeout(() => {
        setIsAnimating(false)
        setAnimationDirection(null)
        setIsComplete(false)
        setProgressAngle(0)
        setShouldShake(false)
        animationStartTimeRef.current = null
      }, 500)
    }, PRECLIMATE_COMMAND_TIMEOUT)
  }, [preclimateStatus, error, isAnimating, onStart, onStop])

  return {
    isAnimating,
    animationDirection,
    shouldShake,
    isComplete,
    progressAngle,
    handleToggle,
  }
}

export default usePreclimateAnimation
