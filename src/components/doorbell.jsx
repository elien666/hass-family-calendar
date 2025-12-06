import React from 'react'
import useDoorbell, { unlatchFrontDoor } from "../utils/use-doorbell"
import Overlay from "./overlay"
import styled from 'styled-components'
import ProgressBar from '@ramonak/react-progress-bar'
import { useConfig } from '../utils/ConfigProvider'
import { calculateOptimalTiling } from '../utils/video-tiling'
import { buildCameraStreamUrl } from '../utils/use-camera-access-tokens'
import { useFrigateAuth } from '../utils/use-frigate-auth'
import logger from '../utils/logger'

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

// Component to handle Frigate MJPEG streams
// Modern browsers don't support multipart/x-mixed-replace in video/img tags
// So we need to manually parse the stream and extract JPEG frames
const FrigateStream = ({ streamUrl, className }) => {
    const [imageUrl, setImageUrl] = React.useState(null)
    const imgRef = React.useRef(null)

    React.useEffect(() => {
        if (!streamUrl) return

        let abortController = new AbortController()
        let reader = null
        let buffer = new Uint8Array(0)
        const boundary = '--frame'
        const boundaryBytes = new TextEncoder().encode(boundary)

        const parseStream = async () => {
            try {
                const response = await fetch(streamUrl, {
                    signal: abortController.signal,
                    headers: {
                        'Accept': 'multipart/x-mixed-replace, */*'
                    }
                })

                if (!response.ok) {
                    logger.error(`Frigate stream failed: ${response.status}`)
                    return
                }

                reader = response.body.getReader()
                
                while (true) {
                    const { done, value } = await reader.read()
                    
                    if (done) {
                        logger.debug('Frigate stream ended')
                        break
                    }

                    // Append new data to buffer
                    const newBuffer = new Uint8Array(buffer.length + value.length)
                    newBuffer.set(buffer)
                    newBuffer.set(value, buffer.length)
                    buffer = newBuffer

                    // Look for boundary markers
                    let boundaryIndex = -1
                    for (let i = 0; i <= buffer.length - boundaryBytes.length; i++) {
                        let match = true
                        for (let j = 0; j < boundaryBytes.length; j++) {
                            if (buffer[i + j] !== boundaryBytes[j]) {
                                match = false
                                break
                            }
                        }
                        if (match) {
                            boundaryIndex = i
                            break
                        }
                    }

                    // If we found a boundary, extract the JPEG frame before it
                    if (boundaryIndex > 0) {
                        // Find the start of the JPEG (after headers)
                        const frameData = buffer.slice(0, boundaryIndex)
                        const textDecoder = new TextDecoder()
                        const frameText = textDecoder.decode(frameData)
                        
                        // Find JPEG start marker
                        const jpegStart = frameData.indexOf(0xFF, frameData.indexOf(0xD8))
                        if (jpegStart === -1) {
                            // Try to find JPEG start after headers
                            const headerEnd = frameText.indexOf('\r\n\r\n')
                            if (headerEnd !== -1) {
                                const jpegData = frameData.slice(headerEnd + 4)
                                if (jpegData.length > 0 && jpegData[0] === 0xFF && jpegData[1] === 0xD8) {
                                    // Create blob URL from JPEG data
                                    const blob = new Blob([jpegData], { type: 'image/jpeg' })
                                    const url = URL.createObjectURL(blob)
                                    
                                    // Clean up old URL
                                    if (imageUrl) {
                                        URL.revokeObjectURL(imageUrl)
                                    }
                                    
                                    setImageUrl(url)
                                }
                            }
                        } else {
                            const jpegData = frameData.slice(jpegStart)
                            if (jpegData.length > 0) {
                                const blob = new Blob([jpegData], { type: 'image/jpeg' })
                                const url = URL.createObjectURL(blob)
                                
                                if (imageUrl) {
                                    URL.revokeObjectURL(imageUrl)
                                }
                                
                                setImageUrl(url)
                            }
                        }

                        // Keep data after boundary for next frame
                        buffer = buffer.slice(boundaryIndex)
                    }
                }
            } catch (error) {
                if (error.name !== 'AbortError') {
                    logger.error('Frigate stream error:', error)
                }
            }
        }

        parseStream()

        return () => {
            abortController.abort()
            if (reader) {
                reader.cancel()
            }
            if (imageUrl) {
                URL.revokeObjectURL(imageUrl)
            }
        }
    }, [streamUrl])

    return (
        <img
            ref={imgRef}
            src={imageUrl || ''}
            className={className}
            alt="Camera stream"
        />
    )
}

const Doorbell = () => {
    const config = useConfig()
    const ENABLE_DOORBELL = config.ENABLE_DOORBELL || false
    const DOORBELL_CAMERAS = config.DOORBELL_CAMERAS || []
    
    // Don't render if doorbell feature is disabled
    if (!ENABLE_DOORBELL) {
        return null
    }

    const [ showDoorCams, toggle ] = React.useState(false)
    const [ state, error ] = useDoorbell()
    const [ cancelId, setCancelId ] = React.useState(undefined)
    const [ progress, setProgress ] = React.useState(100)
    const [ transitionDuration, setTransitionDuration ] = React.useState('0')

    // Get Frigate authentication
    const { frigateHost, cookie, loading: frigateLoading, error: frigateError } = useFrigateAuth()

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
            unlatchFrontDoor()
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

                                // Get camera name (support both entity_id for legacy and camera_name for Frigate)
                                const cameraName = camera.camera_name || camera.entity_id?.replace('camera.', '') || camera.entity_id
                                
                                // Build Frigate URL if host is available, otherwise fall back to HA
                                let streamUrl = null
                                const isFrigateStream = frigateHost && cameraName
                                if (isFrigateStream) {
                                    streamUrl = buildCameraStreamUrl(cameraName, frigateHost)
                                } else if (camera.entity_id) {
                                    // Fallback to HA camera stream (legacy)
                                    streamUrl = buildCameraStreamUrl(camera.entity_id, null, config.HASS_HOST)
                                }

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
                                        {isFrigateStream ? (
                                            <FrigateStream
                                                streamUrl={streamUrl}
                                                className={orientation}
                                                key={`${cameraName || camera.entity_id}-${index}`}
                                            />
                                        ) : (
                                            <img
                                                src={streamUrl}
                                                className={orientation}
                                                alt="Camera stream"
                                                crossOrigin="anonymous"
                                                key={`${cameraName || camera.entity_id}-${index}-${Date.now()}`}
                                                referrerPolicy="no-referrer"
                                            />
                                        )}   
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