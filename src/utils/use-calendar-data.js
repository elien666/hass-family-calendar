import React from 'react'
import { DateTime } from 'luxon'
import axios from 'axios'
import qs from 'qs'
import { mdiDelete } from '@mdi/js'

axios.defaults.headers.common['Authorization'] = 'Bearer '

const host = 'http://homeassistant.local:8123/api/calendars/calendar.hamsischwan_s_kalender'
const url = (params) => `${host}?${qs.stringify(params)}`

const useCalendarData = (startDate) => {
  const [ data, setData ] = React.useState([])

  React.useEffect(() => {
    console.log('LOADING', startDate.toISO())

    // Set up day buckets
    const dateRange = [0,1,2,3,4,5].map((diff) => (
      startDate.plus({ days: diff })).startOf('day')
    )
    dateRange[6] = startDate.plus({ days: 6 }).endOf('day')

    const data = dateRange.map((date) => ({ date, allDay: [], events: []}))

    axios(url({ start: dateRange[0].toISO(), end: dateRange[6].toISO() }))
      .then((response) => {
        setData(dateRange.map((date) => {
          const events = response.data.filter((event => {
            if ('dateTime' in event.start) {
              return DateTime.fromISO(event.start.dateTime).hasSame(date, 'day')
            } else {
              return DateTime.fromSQL(event.start.date).hasSame(date, 'day')
            }
          }))
          return {
            date,
            allDay: events.filter((event) => 'date' in event.start).map((event) => ({ ...event, icon: undefined })),
            events: events.filter((event) => 'dateTime' in event.start).map((event) => ({ ...event, icon: mdiDelete }))
          }
        }))
      })
  }, [startDate])

  return data
}

export default useCalendarData