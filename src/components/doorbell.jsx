import React from 'react'
import ReactPlayer from 'react-player'
import useDoorbell from "../utils/use-doorbell"
import Overlay from "./overlay"
import styled from 'styled-components'
import ProgressBar from '@ramonak/react-progress-bar'

const Container = styled.div`

    h3 {
        margin-top: 6px;
    }

    .grid {
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
    }
`

const Doorbell = () => {

    const DELAY_IN_MS = 10000

    const [ showDoorCams, toggle ] = React.useState(false)
    const [ state, error ] = useDoorbell()
    //const [ state, setState ] = React.useState('on')
    const [ cancelId, setCancelId ] = React.useState(undefined)
    const [ progress, setProgress ] = React.useState(100)
    const [ transitionDuration, setTransitionDuration ] = React.useState('0')

    React.useEffect(() => {
        if (state === 'off' && showDoorCams) {
            // Turn off with delay
            setCancelId(window.setTimeout(() => {
                toggle(false)
                setCancelId(undefined)
            }, DELAY_IN_MS))
            setTransitionDuration(DELAY_IN_MS + 'ms')
            setProgress(0)
        } else if (state === 'on') {
            setTransitionDuration(0)
            setProgress(100)
            toggle(true)
        }
    }, [ state, setCancelId ])

    // Cancel timeout, if new doorbell event happens during timeout
    React.useEffect(() => {
        if (state === 'on' && cancelId !== undefined) {
            window.clearInterval(cancelId)
            setTransitionDuration(0)
            setProgress(100)
            setCancelId(undefined)
        }
    }, [ cancelId, state, setProgress, setCancelId ])

    return (
        <Overlay visible={showDoorCams} onClick={() => toggle(false)}>
            <Container>
            
                <ProgressBar
                    completed={progress}
                    height={10}
                    bgColor={cancelId === undefined ? 'none' : '#c0bfbf'}
                    isLabelVisible={false}
                    baseBgColor=""
                    transitionDuration={transitionDuration}
                    transitionTimingFunction='linear'
                />
            
                {/*<h3 onClick={() => setState(state => state === 'on' ? 'off' : 'on')}>Besucher an der Tür</h3>*/}
                <h3>Besucher an der Tür</h3>

                <div className='grid'>
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
                </div>                
            </Container>
        </Overlay>
    )
}

export default Doorbell