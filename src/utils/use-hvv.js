import React  from 'react'
import createSignature from './create-signature'
import axios from 'axios'
import akWandsbek from './station-ak-wandsbek.json'
import { DateTime } from 'luxon'
import useTimeout from './use-timeout'

export const SUPPORTED_CALLS = { departureList: 'departureList', checkName: 'checkName' }

const callApi = (endPoint, data) => (
  axios({
    method: 'post',
    url: `./gti/public/${endPoint}`,
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

const byRealtimeOffset = (a, b) => a.realtimeOffset - b.realtimeOffset

const transformData = (data) => {
  const mapped = data.departures.map((entry) => (
    {
      line: entry.line.name,
      direction: entry.line.direction,
      timeOffset: entry.timeOffset,
      delay: entry.delay ? entry.delay : '0',
      directionId: entry.directionId,
      realtimeOffset: entry.timeOffset + ((entry.delay ? entry.delay : 0)/60)
    }
  ))

  return {
    from: mapped.filter((entry) => entry.directionId === 1).slice(0,3).sort(byRealtimeOffset),
    to: mapped.filter((entry) => entry.directionId === 6).slice(0,3).sort(byRealtimeOffset)
  }
}

const useHvv = (endPoint) => {

  const [ responseData, set ] = React.useState([])
  const timeout = useTimeout(60000) // 60 seconds

  React.useEffect(() => {

    if(!(endPoint in SUPPORTED_CALLS)) {
      console.log(endPoint, 'not supported by HVV connector')
      return
    }

    let data = { version: 51 }

    switch(endPoint) {

      case SUPPORTED_CALLS.checkName:
        data = { ...data,
          theName: {
            name: 'AK Wandsbek',
            type: 'STATION'
          },
          maxList: 1
        }
        break

      case SUPPORTED_CALLS.departureList:
        const now = DateTime.now()
        data = { ...data,
          station: akWandsbek,
          time: { date: now.toFormat('dd.MM.yyyy'), time: now.toFormat('HH:mm') },
          maxList: 20,
          maxTimeOffset: 200,
          useRealtime: true
        }
        break

      default:
        data = undefined

    }

    callApi(endPoint, data)
      .then((response) => {
        if (endPoint === SUPPORTED_CALLS.departureList) {
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