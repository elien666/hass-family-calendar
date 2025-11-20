import React from 'react'
import { DateTime } from 'luxon'
import useKeyPress from './use-key-press'

const lastMonday = () => {
  let today = new Date();
  let dayOfWeek = today.getDay();
  let difference = (dayOfWeek + 6) % 7; // Calculate the difference to Monday
  let mondayDate = new Date(today.setDate(today.getDate() - difference));
  return DateTime.fromJSDate(mondayDate)
}

const useShortcuts = (setStartDate) => {

  // Go to next week
  const nextWeek = () => setStartDate((date) => date.plus({ days: 7 }))
  const keyNext = useKeyPress('ArrowRight')
  React.useEffect(() => {
    if (keyNext) nextWeek()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyNext]) // Only fire when relevant key press changes

  // Go to previous week
  const previousWeek = () => setStartDate((date) => date.minus({ days: 7 }))
  const keyPrevious = useKeyPress('ArrowLeft')
  React.useEffect(() => {
    if (keyPrevious) previousWeek()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPrevious]) // Only fire when relevant key press changes

  // Start week with today
  const startWeekWithToday = () => setStartDate(lastMonday())
  const keyToday = useKeyPress('t')
  React.useEffect(() => {
    if (keyToday) startWeekWithToday()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyToday]) // Only fire when relevant key press changes

  return { nextWeek, previousWeek, startWeekWithToday }
}

export default useShortcuts