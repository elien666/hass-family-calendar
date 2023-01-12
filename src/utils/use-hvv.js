import React, { useCallback, useEffect, useMemo } from 'react'
import createSignature from './create-signature'
import axios from 'axios'
import akWandsbek from './station-ak-wandsbek.json'
import { DateTime } from 'luxon'

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

const useHvv = (endPoint) => {

  const [ responseData, set ] = React.useState({})

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
          time: { date: now.toFormat('dd.MM.YYYY'), time: now.toFormat('hh:mm') },
          maxList: 6,
          maxTimeOffset: 60,
          useRealtime: true
        }

    }

    callApi(endPoint, data)
      .then((response) => {
      set(response.data)
    })
      .catch((error) => {
        console.log('Error calling Geofox API', error)
      })

  }, [endPoint])

  return responseData

}

export default useHvv