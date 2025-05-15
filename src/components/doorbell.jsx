import React from 'react'
import ReactPlayer from 'react-player'
import useDoorbell from "../utils/use-doorbell"
import Overlay from "./overlay"
import styled from 'styled-components'

const Grid = styled.div`
    display: flex;

    > div {
        display: flex;
        flex-grow: 1;
        justify-content: center;
    }

    > div:last-child {
        flex-direction: column;
        align-items: center;
    }
`

const Doorbell = () => {

    const [ showDoorCams, toggle ] = React.useState(false)
    const [ state, error ] = useDoorbell()
    //const [ state, error ] = [ 'on', undefined ]

    React.useEffect(() => {
        toggle(state === 'on')
    }, [ state ])

    return (
        <Overlay visible={showDoorCams} onClick={() => toggle(false)}>
            <h3>Besucher an der Tür</h3>
            <Grid>
                <div>
                    <ReactPlayer url='http://192.168.188.126:8888/tuerklingel_sub/index.m3u8' 
                        muted={true} playing={true} width="360px" height="480px" />
                </div>
                <div>
                    <ReactPlayer url='http://192.168.188.126:8888/eingang/index.m3u8' 
                        muted={true} playing={true} width="420px" height="240px"/>
                    <ReactPlayer url='http://192.168.188.126:8888/weg/index.m3u8' 
                        muted={true} playing={true} width="420px" height="240px" />
                </div>
            </Grid>
        </Overlay>
    )
}

export default Doorbell