import React from 'react'
import useDoorbell, { unlatchFrontDoor } from "../utils/use-doorbell"
import Overlay from "./overlay"
import styled from 'styled-components'
import ProgressBar from '@ramonak/react-progress-bar'
import { useConfig } from '../utils/ConfigProvider'
import { calculateOptimalTiling } from '../utils/video-tiling'
import { useCameraAccessTokens, buildCameraStreamUrl } from '../utils/use-camera-access-tokens'

// Duration to keep overlay open, afer door ring event stopped
const DELAY_IN_MS = 45000

const Container = styled.div`
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

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

        video, img {
            border: none;
            display: block;
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            pointer-events: none;
            object-fit: cover;

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

        .video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            cursor: pointer;
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
        font-size: 24px;
        font-weight: bold;
        z-index: 10;
        text-align: center;
        opacity: 1;

        &.confirm {
            background-color: rgba(255, 165, 0, 0.8);
            color: #fff;
            animation: fadeOut 3s ease-out forwards;
        }

        &.opening {
            background-color: rgba(127, 32, 34, 0.8);
            color: #fff;
        }
    }
`

const Doorbell = () => {
    const config = useConfig()
    const ENABLE_DOORBELL = config.ENABLE_DOORBELL || false
    const DOORBELL_CAMERAS = config.DOORBELL_CAMERAS || []
    
    // Call all hooks unconditionally (before any early returns)
    const [ showDoorCams, toggle ] = React.useState(false)
    const [ state, error ] = useDoorbell()
    const [ cancelId, setCancelId ] = React.useState(undefined)
    const [ progress, setProgress ] = React.useState(100)
    const [ transitionDuration, setTransitionDuration ] = React.useState('0')

    // Extract camera entity IDs and fetch access tokens
    const cameraEntityIds = React.useMemo(() => {
        return DOORBELL_CAMERAS
            .map(cam => cam.entity_id)
            .filter(Boolean) // Remove any undefined/null values
    }, [DOORBELL_CAMERAS])

    const [accessTokens, tokensLoading, tokensError] = useCameraAccessTokens(cameraEntityIds)

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

    const [ confirmationState, setConfirmationState ] = React.useState(null) // null, 'confirm', 'opening'
    
    const openDoor = () => {
        if (confirmationState === null) {
            // First click: show confirmation
            setConfirmationState('confirm')
        } else if (confirmationState === 'confirm') {
            // Second click: open door
            setConfirmationState('opening')
            unlatchFrontDoor(config)
            // Reset after showing the message
            setTimeout(() => setConfirmationState(null), 2000)
        }
    }

    // Reset confirmation state after 3 seconds when in 'confirm' state
    React.useEffect(() => {
        if (confirmationState === 'confirm') {
            // Reset state after 3 seconds
            const resetTimeoutId = setTimeout(() => {
                setConfirmationState(null)
            }, 3000)
            return () => {
                clearTimeout(resetTimeoutId)
            }
        }
    }, [confirmationState])

    // Reset confirmation state when overlay closes
    React.useEffect(() => {
        if (!showDoorCams) {
            setConfirmationState(null)
        }
    }, [showDoorCams])

    // Don't render if doorbell feature is disabled
    if (!ENABLE_DOORBELL) {
        return null
    }

    return (
        <>
            <button onClick={() => toggle(v => !v)}>CCTV</button>
            <Overlay visible={showDoorCams} onClick={openDoor} onClose={() => { toggle(false); setConfirmationState(null) }} fullsize={true}>
                <Container onClick={openDoor}>
                
                    <ProgressBar
                        completed={progress}
                        height={10}
                        bgColor={cancelId === undefined ? 'none' : '#c0bfbf'}
                        isLabelVisible={false}
                        baseBgColor=""
                        transitionDuration={transitionDuration}
                        transitionTimingFunction='linear'
                    />

                    <div className='grid'>
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

                                // Get access token for this camera entity
                                const accessToken = accessTokens[camera.entity_id] || null
                                const streamUrl = buildCameraStreamUrl(camera.entity_id, accessToken, config)

                                if (!streamUrl) {
                                    return null
                                }

                                return (
                                    <div
                                        key={`${orientation}-${cameraIndex}-${index}`}
                                        className="video-container"
                                        style={{
                                            left: `${videoLayout.x}px`,
                                            top: `${videoLayout.y}px`,
                                            width: `${videoLayout.width}px`,
                                            height: `${videoLayout.height}px`
                                        }}
                                    >
                                        <img
                                            src={streamUrl}
                                            className={orientation}
                                            alt="Camera stream"
                                            crossOrigin="anonymous"
                                            key={`${camera.entity_id}-${index}`}
                                        />   
                                        <div 
                                            className="video-overlay"
                                            onClick={() => openDoor()}
                                        />
                                    </div>
                                )
                            })
                        })()}
                    </div>    
                    {confirmationState === 'confirm' && (
                        <div className='open-door confirm'>
                            Haustür öffnen?
                        </div>
                    )}
                    {confirmationState === 'opening' && (
                        <div className='open-door opening'>
                            Öffne die Tür!
                        </div>
                    )}            
                </Container>
            </Overlay>
        </>
    )
}

export default Doorbell