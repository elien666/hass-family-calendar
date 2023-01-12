import React from 'react'
import createSignature from './create-signature'
import axios from 'axios'

const useHvv = () => {

  React.useEffect(() => {

    const data = {}

    axios({
      method: 'post',
      url: '/gti/public/init',
      data: data,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'geofox-auth-user': '',
        'geofox-auth-signature': createSignature(data),
        'Authorization': undefined,
      }
    })
      .then((response) => {
      console.log(response.data)
    })
      .catch((error) => {
        console.log('Oh nein', error)
      })
    console.log(createSignature({}))

  }, [])

}

export default useHvv