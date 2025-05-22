import React from 'react'
import MediaMTXWebRTCReader from './MediaMTXWebRTCReader'

const useWhepStream = (url, visible, ref) => {

    const [ stream, setStream ] = React.useState(undefined)

    React.useEffect(() => {
        if (ref && ref.current && !stream && visible) {
            const reader = new MediaMTXWebRTCReader({
                    url: url,
                    onError: (err) => {
                        console.log('Cannot load WHEP stream: ', url, err)
                    },
                    onTrack: (evt) => {
                        ref.current.srcObject = evt.streams[0]
                        setStream(reader)
                    },
                })
            }
    }, [ ref, stream, visible ])

    React.useEffect(() => {
        if (!visible && stream) {
            stream.close()
            setStream(undefined)
        }
    })

}

export default useWhepStream