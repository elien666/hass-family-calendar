import React  from 'react'
import createSignature from './create-signature'
import axios from 'axios'
import akWandsbek from './station-ak-wandsbek.json'
import { DateTime } from 'luxon'
import useTimeout from './use-timeout'

const callApi = (endPoint, data) => (
  axios({
    method: 'post',
    url: `/gti/public/${endPoint}`,
    data: data,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'geofox-auth-user': '',
      'geofox-auth-signature': createSignature(data),
      'Authorization': undefined,
    }
  })
)

const transformData = (data) => {
  const mapped = data.departures.map((entry) => (
    {
      line: entry.line.name,
      direction: entry.line.direction,
      timeOffset: entry.timeOffset,
      delay: entry.delay ? entry.delay : '0',
      directionId: entry.directionId
    }
  ))

  return {
    from: mapped.filter((entry) => entry.directionId === 1),
    to: mapped.filter((entry) => entry.directionId === 6)
  }
}

const useHvv = (endPoint) => {

  const [ responseData, set ] = React.useState([])
  const timeout = useTimeout(60000) // 60 seconds

  React.useEffect(() => {

    let data = { version: 51 }

    switch(endPoint) {

      case 'checkName':
        data = { ...data,
          theName: {
            name: 'AK Wandsbek',
            type: 'STATION'
          },
          maxList: 1
        }
        break

      case 'departureList':
        const now = DateTime.now()
        data = { ...data,
          station: akWandsbek,
          time: { date: now.toFormat('dd.MM.yyyy'), time: now.toFormat('HH:mm') },
          maxList: 6,
          maxTimeOffset: 60,
          useRealtime: true
        }
        break

      default:
        data = undefined

    }

    callApi(endPoint, data)
      .then((response) => {
        if (endPoint ==='departureList') {
          set(transformData(response.data))
        } else {
          set(response.data)
        }
    })
      .catch((error) => {
        console.log('Error calling Geofox API', error)
      })

  }, [endPoint, timeout])

  return responseData

}

export default useHvv