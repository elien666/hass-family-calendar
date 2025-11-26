import React from 'react'
import useDoorbell, { unlatchFrontDoor } from "../utils/use-doorbell"
import Overlay from "./overlay"
import styled from 'styled-components'
import ProgressBar from '@ramonak/react-progress-bar'
import Go2RTCStream from './go2rtc-stream'
import { ENABLE_DOORBELL, DOORBELL_CAMERAS } from '../utils/config'
import { calculateOptimalTiling } from '../utils/video-tiling'

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
        position: relative;
        width: 100%;
        height: 100%;
        flex: 1;
        min-height: 0;
        overflow: hidden;
    }

    .video-container {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        iframe {
            border: none;
            display: block;
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;

            &.portrait {
                aspect-ratio: 360 / 480;
            }

            &.landscape {
                aspect-ratio: 1920 / 1072;
            }

            &.wide {
                aspect-ratio: 770 / 216;
            }
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

                    <div className='grid' style={{ display: showDoorCams ? 'block' : 'none'}}>
                        {(() => {
                            if (DOORBELL_CAMERAS.length === 0) {
                                return null
                            }

                            // Convert cameras to format expected by tiling algorithm
                            const videos = DOORBELL_CAMERAS.map(cam => ({
                                orientation: cam.orientation || 'landscape'
                            }))

                            // Calculate optimal layout using the tiling algorithm
                            const canvasWidth = window.innerWidth
                            const canvasHeight = window.innerHeight - 10 // Account for progress bar
                            const layout = calculateOptimalTiling(videos, canvasWidth, canvasHeight)

                            // Create a map of cameras by orientation for lookup
                            const camerasByOrientation = {
                                portrait: DOORBELL_CAMERAS.filter(cam => (cam.orientation || 'landscape') === 'portrait'),
                                landscape: DOORBELL_CAMERAS.filter(cam => {
                                    const orientation = cam.orientation || 'landscape'
                                    return orientation === 'landscape'
                                }),
                                wide: DOORBELL_CAMERAS.filter(cam => cam.orientation === 'wide')
                            }

                            // Track which camera of each orientation we've used
                            const usedIndices = {
                                portrait: 0,
                                landscape: 0,
                                wide: 0
                            }

                            return layout.videos.map((videoLayout, index) => {
                                const orientation = videoLayout.orientation
                                const cameraIndex = usedIndices[orientation]
                                const camera = camerasByOrientation[orientation][cameraIndex]
                                
                                if (!camera) {
                                    return null
                                }

                                usedIndices[orientation]++

                                return (
                                    <div
                                        key={`${orientation}-${cameraIndex}-${index}`}
                                        className="video-container"
                                        onClick={() => openDoor()}
                                        style={{
                                            left: `${videoLayout.x}px`,
                                            top: `${videoLayout.y}px`,
                                            width: `${videoLayout.width}px`,
                                            height: `${videoLayout.height}px`
                                        }}
                                    >
                                        <Go2RTCStream
                                            src={camera.name}
                                            show={showDoorCams}
                                            orientation={orientation}
                                        />
                                    </div>
                                )
                            })
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