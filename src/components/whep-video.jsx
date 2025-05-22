import React from 'react'
import useWhepStream from '../utils/use-whep-stream';

const WhepVideo = ({ src, show, ...params }) => {

    const ref = React.useRef();

    useWhepStream(src, show, ref)

    return (
        <video ref={ref} {...params} />
    )

}

export default WhepVideo