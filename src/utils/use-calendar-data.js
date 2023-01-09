import React from 'react'
import { DateTime } from 'luxon'
import axios from 'axios'
import qs from 'qs'
import { mdiDelete, mdiCake } from '@mdi/js'
import useTimeout from './use-timeout'

axios.defaults.headers.common['Authorization'] = 'Bearer '

const host = (name) => `http://homeassistant.local:8123/api/calendars/${name}`
const url = (name, params) => `${host(name)}?${qs.stringify(params)}`

const calendars = [
  { name: 'calendar.hamsischwan_s_kalender', icon: undefined },
  { name: 'calendar.biotonne', icon: mdiDelete },
  { name: 'calendar.gelber_sack', icon: mdiDelete },
  { name: 'calendar.blaue_tonne', icon: mdiDelete },
  { name: 'calendar.schwarze_tonne', icon: mdiDelete },
  { name: 'calendar.familiengeburtstage', icon: mdiCake },
]

const loadCalendarInto = (calendar, start, end, data) => (
  axios(url(calendar.name, { start: start.toISO(), end: end.toISO() }))
    .then((response) => {
      response.data.forEach((event) => {
        // Find bucket
        const eventStart = 'dateTime' in event.start
          ? DateTime.fromISO(event.start.dateTime)
          : DateTime.fromSQL(event.start.date)
        const bucket = Math.floor(eventStart.diff(start, 'days').as('days'))

        // Add to bucket
        const type = 'dateTime' in event.start ? 'events' : 'allDay'

        if (bucket >= 0 && bucket < data.length) {
          data[bucket][type] = [
            ...data[bucket][type],
            { ...event, icon: calendar.icon }
          ]
        } else {
          // Only enable for debugging
          // console.log('Ignoring event', bucket, type, ':', event)
        }

      })
    })
)

const loadAll = (startDate, data, setData, toggleLoading) => {
  // Set up day buckets
  const dateRange = [0,1,2,3,4,5].map((diff) => (
    startDate.plus({ days: diff })).startOf('day')
  )
  dateRange[6] = startDate.plus({ days: 6 }).endOf('day')

  const newData = dateRange.map((date) => ({ date, allDay: [], events: []}))

  // Immediately show new dates, if startDate is new
  if (data.length === 0 || (!data[0].date.hasSame(newData[0].date, 'day'))) {
    setData(newData)
  }

  // Fetch data
  try {
    toggleLoading(true)
    const loading = calendars.map((calendar) => (
      loadCalendarInto(calendar, dateRange[0], dateRange[6], newData)
    ))

    Promise.all(loading)
      .catch((err) => {
        console.log('Could not load calendar', err)
      })
      .finally(() => {
        toggleLoading(false)
        setData(newData)
      })
  } catch (err) {
    console.log(err)
  }
}

const useCalendarData = (startDate, setStartDate) => {
  const [ data, setData ] = React.useState([])
  const timeout = useTimeout(60000, 'Calendar')

  React.useEffect(() => {
    // If today is visible but not the first column, start week with today
    const today = DateTime.now()
    if (!startDate.hasSame(today, 'day') && startDate < today && today <= startDate.plus({ days: 6})) {
      setStartDate(today)
    } else {
      loadAll(startDate, data, setData, () => { return })
    }
  // eslint-disable-next-line
  }, [startDate, timeout, setData])

  return data
}

export default useCalendarData