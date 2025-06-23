import React from 'react'
import useDoorbell, { unlatchFrontDoor } from "../utils/use-doorbell"
import Overlay from "./overlay"
import styled from 'styled-components'
import ProgressBar from '@ramonak/react-progress-bar'
import WhepVideo from './whep-video'

// Duration to keep overlay open, afer door ring event stopped
const DELAY_IN_MS = 45000

const Container = styled.div`

    position: relative;

    h3 {
        margin-top: 6px;
    }

    .grid {
        display: flex;

        iframe {

            border: none;

            &.portrait {
                
            }

            &.landscape {
                width: 420px;
                height: 240px;
            }
        }

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

    .open-door {
        position: absolute;
        top: 38%;
        left: 38%;
        background-color: rgba(127, 32, 34, 0.5);
        width: 25%;
        height: 25%;
        display: grid;
        justify-content: center;
        align-content: center;
        border-radius: 24px;
    }
`

const Doorbell = () => {

    const [ showDoorCams, toggle ] = React.useState(false)
    const [ state, error ] = useDoorbell()
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

    const [ showOpenDoor, setShowOpenDoor ] = React.useState(false)
    const openDoor = () => {
        unlatchFrontDoor();
        setShowOpenDoor(true)
    }
    React.useEffect(() => {
        if (showOpenDoor) {
            setTimeout(() => setShowOpenDoor(false), 1000)
        }
    }, [ showOpenDoor ])

    return (
        <>
            <button onClick={() => toggle(v => !v)}>CCTV</button>
            <Overlay visible={showDoorCams} onClick={() => toggle(false)} fullsize={true}>
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

                    <div className='grid' style={{ display: showDoorCams ? 'flex' : 'none'}}>
                        <div onClick={() => openDoor()}> 
                            <WhepVideo src="http://192.168.188.10:8889/tuerklingel_sub/whep" show={showDoorCams}
                                muted={true} controls={false} autoPlay={true} width='360' height='480' />                   
                        </div>
                        <div onClick={() => openDoor()}>
                            <WhepVideo src="http://192.168.188.10:8889/eingang/whep" show={showDoorCams}
                                muted={true} controls={false} autoPlay={true} width='100%' />
                            <WhepVideo src="http://192.168.188.10:8889/weg/whep" show={showDoorCams}
                                muted={true} controls={false} autoPlay={true} width='100%' height='240px' />
                        </div>
                    </div>    
                    {showOpenDoor && (
                    
                    <div className='open-door'>
                        Tür öffnet sich
                    </div>

                    )}            
                </Container>
            </Overlay>
        </>
    )
}

export default Doorbell