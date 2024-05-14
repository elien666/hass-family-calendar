import React from 'react'
import { DateTime } from 'luxon'
import axios from 'axios'
import qs from 'qs'
import { mdiDelete, mdiCake } from '@mdi/js'
import useTimeout from './use-timeout'
import { HASS_HOST } from "./config";

axios.defaults.headers.common['Authorization'] = 'Bearer '

const host = (name) => `${HASS_HOST}/api/calendars/${name}`
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
        // Find day offsets
        const eventStart = 'dateTime' in event.start
          ? DateTime.fromISO(event.start.dateTime)
          : DateTime.fromSQL(event.start.date)
        let offsetDayEnd = undefined
        if ('dateTime' in event.end) {
          offsetDayEnd = Math.floor(DateTime.fromISO(event.end.dateTime).diff(start, 'days').as('days'))
        } else {
          // Full day events always have the end date set to the following day,
          // so we need to subtract '1' for the right offset
          offsetDayEnd = Math.floor(DateTime.fromSQL(event.end.date).diff(start, 'days').as('days')) - 1
        }
        const offsetDayStart = Math.floor(eventStart.diff(start, 'days').as('days'))
        
        // Limit end to length
        if (offsetDayEnd >= data.length) {
          offsetDayEnd = data.length - 1
        }

        // Add to bucket
        const type = 'dateTime' in event.start ? 'events' : 'allDay'

        if (offsetDayStart >= 0 && offsetDayStart < data.length) {
          // Add event to each day from offset start to offset end
          for (let i = offsetDayStart; i <= offsetDayEnd; i++) {
            data[i][type] = [
              ...data[i][type],
              { ...event, icon: calendar.icon }
            ]
          }
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
  /*
  if (data.length === 0 || (!data[0].date.hasSame(newData[0].date, 'day'))) {
    setData(newData)
  }*/

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
      .then(() => {
        setData(newData)
      })
      .finally(() => {
        toggleLoading(false)
      })
  } catch (err) {
    console.log(err)
  }
}

const emptyData = []

const useCalendarData = (startDate) => {
  const [ data, setData ] = React.useState(emptyData)
  const timeout = useTimeout(60000, 'Calendar')
  const [ currentStartDate, setCurrentStartDate ] = React.useState(null)

  React.useEffect(() => {
    if (startDate !== undefined) {
      if (currentStartDate !== startDate) {
        // Start date was changed, show loading animation
        setData(emptyData)
        setCurrentStartDate(startDate)
      } // else reload in background
      loadAll(startDate, data, setData, () => { return })
    }
  // eslint-disable-next-line
  }, [startDate, timeout, setData])

  return data
}

export default useCalendarData