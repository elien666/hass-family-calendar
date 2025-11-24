import React from 'react'
import useDoorbell, { unlatchFrontDoor } from "../utils/use-doorbell"
import Overlay from "./overlay"
import styled from 'styled-components'
import ProgressBar from '@ramonak/react-progress-bar'
import WhepVideo from './whep-video'
import { ENABLE_DOORBELL, DOORBELL_CAMERAS } from '../utils/config'

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
    // Don't render if doorbell feature is disabled
    if (!ENABLE_DOORBELL) {
        return null
    }

    const [ showDoorCams, toggle ] = React.useState(false)
    const [ state, error ] = useDoorbell()
    const [ cancelId, setCancelId ] = React.useState(undefined)
    const [ progress, setProgress ] = React.useState(100)
    const [ transitionDuration, setTransitionDuration ] = React.useState('0')

    React.useEffect(() => {
        if (state === 'off' && showDoorCams) {
            // Turn off with delay
            const timeoutId = window.setTimeout(() => {
                toggle(false)
                setCancelId(undefined)
            }, DELAY_IN_MS)
            setCancelId(timeoutId)
            setTransitionDuration(DELAY_IN_MS + 'ms')
            setProgress(0)
            return () => {
                if (timeoutId) window.clearTimeout(timeoutId)
            }
        } else if (state === 'on') {
            setTransitionDuration(0)
            setProgress(100)
            toggle(true)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ state, showDoorCams ])

    // Cancel timeout, if new doorbell event happens during timeout
    React.useEffect(() => {
        if (state === 'on' && cancelId !== undefined) {
            window.clearTimeout(cancelId)
            setTransitionDuration(0)
            setProgress(100)
            setCancelId(undefined)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ cancelId, state ])

    const [ showOpenDoor, setShowOpenDoor ] = React.useState(false)
    const openDoor = () => {
        unlatchFrontDoor();
        setShowOpenDoor(true)
    }
    React.useEffect(() => {
        if (showOpenDoor) {
            const timeoutId = setTimeout(() => setShowOpenDoor(false), 1000)
            return () => clearTimeout(timeoutId)
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

                    {error !== false && (
                        <div style={{ padding: '1rem', color: '#f85a5a', textAlign: 'center' }}>
                            <h3>Fehler!</h3>
                            <div>{error instanceof Error ? error.message : String(error)}</div>
                        </div>
                    )}

                    <div className='grid' style={{ display: showDoorCams ? 'flex' : 'none'}}>
                        {(() => {
                            // Separate cameras by orientation
                            const portraitCameras = DOORBELL_CAMERAS.filter(cam => (cam.orientation || 'landscape') === 'portrait')
                            const landscapeCameras = DOORBELL_CAMERAS.filter(cam => (cam.orientation || 'landscape') === 'landscape')
                            
                            return (
                                <>
                                    {portraitCameras.length > 0 && (
                                        <div onClick={() => openDoor()} style={{ flexDirection: 'column' }}>
                                            {portraitCameras.map((camera, index) => (
                                                <WhepVideo
                                                    key={index}
                                                    src={camera.url}
                                                    show={showDoorCams}
                                                    muted={true}
                                                    controls={false}
                                                    autoPlay={true}
                                                    width='360'
                                                    height='480'
                                                />
                                            ))}
                                        </div>
                                    )}
                                    {landscapeCameras.length > 0 && (
                                        <div onClick={() => openDoor()}>
                                            {landscapeCameras.map((camera, index) => (
                                                <WhepVideo
                                                    key={index}
                                                    src={camera.url}
                                                    show={showDoorCams}
                                                    muted={true}
                                                    controls={false}
                                                    autoPlay={true}
                                                    width='100%'
                                                    height={index === landscapeCameras.length - 1 ? '240px' : undefined}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </>
                            )
                        })()}
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