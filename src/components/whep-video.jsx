import React from 'react'
import useWhepStream from '../utils/use-whep-stream';

const WhepVideo = ({ src, ...params }) => {

    const ref = React.useRef();

    useWhepStream(src, ref)

    return (
        <video ref={ref} {...params} />
    )

}

export default WhepVideo