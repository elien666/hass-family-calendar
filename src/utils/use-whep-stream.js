import React from 'react'
import MediaMTXWebRTCReader from './MediaMTXWebRTCReader'

const useWhepStream = (url, ref) => {

    React.useEffect(() => {
        if (ref && ref.current) {
            new MediaMTXWebRTCReader({
                    url: new URL(url),
                    onError: (err) => {
                        console.log(err)
                    },
                    onTrack: (evt) => {
                        ref.current.srcObject = evt.streams[0]
                    },
                });
            }
    }, [ ref ])

}

export default useWhepStream