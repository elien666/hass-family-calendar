import React from 'react'
import useDoorbell, { unlatchFrontDoor } from "../utils/use-doorbell"
import Overlay from "./overlay"
import styled from 'styled-components'
import ProgressBar from '@ramonak/react-progress-bar'
import Go2RTCStream from './go2rtc-stream'
import { ENABLE_DOORBELL, DOORBELL_CAMERAS } from '../utils/config'

// Duration to keep overlay open, afer door ring event stopped
const DELAY_IN_MS = 45000

const Container = styled.div`

    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    h3 {
        margin-top: 6px;
    }

    .grid {
        display: flex;
        flex-direction: column;
        gap: 12px;
        flex: 1;
        width: 100%;
        height: 100%;
        min-height: 0;
        overflow: hidden;

        .wide-section {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 12px;
            width: 100%;
            flex-shrink: 0;
        }

        .main-section {
            display: grid;
            grid-template-columns: auto auto;
            flex: 1;
            min-height: 0;
            gap: 12px;
            justify-content: center;
            align-content: stretch;
        }

        iframe {
            border: none;
            flex-shrink: 0;
            display: block;

            &.portrait {
                height: 100%;
                width: auto;
                max-width: 100%;
                max-height: 100%;
                aspect-ratio: 360 / 480;
            }

            &.landscape {
                height: 100%;
                width: auto;
                max-width: 100%;
                max-height: 100%;
                aspect-ratio: 420 / 240;
            }

            &.wide {
                width: 100%;
                max-width: 100%;
                height: auto;
                max-height: 100%;
                aspect-ratio: 770 / 216;
            }
        }

        .main-section > div {
            display: flex;
            justify-content: center;
            align-items: stretch;
            min-width: 0;
            min-height: 0;
            height: 100%;
            overflow: hidden;
        }

        .main-section > div:last-child {
            flex-direction: column;
        }

        .main-section > div:only-child {
            grid-column: 1 / -1;
        }

        .wide-section > * {
            flex: 1;
            min-width: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
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
                            const landscapeCameras = DOORBELL_CAMERAS.filter(cam => {
                                const orientation = cam.orientation || 'landscape'
                                return orientation === 'landscape'
                            })
                            const wideCameras = DOORBELL_CAMERAS.filter(cam => cam.orientation === 'wide')
                            
                            return (
                                <>
                                    {wideCameras.length > 0 && (
                                        <div className='wide-section' onClick={() => openDoor()}>
                                            {wideCameras.map((camera, index) => (
                                                <div key={index} style={{ flex: 1, minWidth: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Go2RTCStream
                                                        src={camera.name}
                                                        show={showDoorCams}
                                                        orientation="wide"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <div className='main-section'>
                                        {portraitCameras.length > 0 && (
                                            <div onClick={() => openDoor()} style={{ flexDirection: 'column', gap: '12px', height: '100%' }}>
                                                {portraitCameras.map((camera, index) => (
                                                    <div key={index} style={{ flex: 1, minHeight: 0, display: 'flex', justifyContent: 'center', alignItems: 'stretch', height: '100%' }}>
                                                        <Go2RTCStream
                                                            src={camera.name}
                                                            show={showDoorCams}
                                                            orientation="portrait"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {landscapeCameras.length > 0 && (
                                            <div onClick={() => openDoor()} style={{ flexDirection: 'column', gap: '12px', height: '100%' }}>
                                                {landscapeCameras.map((camera, index) => (
                                                    <div key={index} style={{ flex: 1, minHeight: 0, display: 'flex', justifyContent: 'center', alignItems: 'stretch', height: '100%' }}>
                                                        <Go2RTCStream
                                                            src={camera.name}
                                                            show={showDoorCams}
                                                            orientation="landscape"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
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