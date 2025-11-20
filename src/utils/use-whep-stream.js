import React from 'react'
import MediaMTXWebRTCReader from './MediaMTXWebRTCReader'
import logger from './logger'

const useWhepStream = (url, visible, ref) => {

    const [ stream, setStream ] = React.useState(undefined)

    React.useEffect(() => {
        if (ref && ref.current && !stream && visible) {
            const reader = new MediaMTXWebRTCReader({
                    url: url,
                    onError: (err) => {
                        logger.error('Cannot load WHEP stream: ', url, err)
                    },
                    onTrack: (evt) => {
                        ref.current.srcObject = evt.streams[0]
                        setStream(reader)
                    },
                })
            return () => {
                if (reader) {
                    reader.close()
                }
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ url, visible, stream ])

    React.useEffect(() => {
        if (!visible && stream) {
            stream.close()
            setStream(undefined)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ visible, stream ])

}

export default useWhepStream