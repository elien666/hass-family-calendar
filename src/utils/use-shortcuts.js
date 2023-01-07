import React from 'react'
import { DateTime } from 'luxon'
import useKeyPress from './use-key-press'

const useShortcuts = (setStartDate) => {

  // Go to next week
  const nextWeek = () => setStartDate((date) => date.plus({ days: 7 }))
  const keyNext = useKeyPress('ArrowRight')
  React.useEffect(() => {
    if (keyNext) nextWeek()
    // eslint-disable-next-line
  }, [keyNext]) // Only fire when relevant key press changes

  // Go to previous week
  const previousWeek = () => setStartDate((date) => date.minus({ days: 7 }))
  const keyPrevious = useKeyPress('ArrowLeft')
  React.useEffect(() => {
    if (keyPrevious) previousWeek()
    // eslint-disable-next-line
  }, [keyPrevious]) // Only fire when relevant key press changes

  // Start week with today
  const startWeekWithToday = () => setStartDate(DateTime.now())
  const keyToday = useKeyPress('t')
  React.useEffect(() => {
    if (keyToday) startWeekWithToday()
    // eslint-disable-next-line
  }, [keyToday]) // Only fire when relevant key press changes

  return { nextWeek, previousWeek, startWeekWithToday }
}

export default useShortcuts