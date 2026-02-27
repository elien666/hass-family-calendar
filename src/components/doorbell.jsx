import React from 'react'
import useDoorbell, { unlatchFrontDoor } from "../utils/use-doorbell"
import Overlay from "./overlay"
import styled from 'styled-components'
import ProgressBar from '@ramonak/react-progress-bar'
import { useConfig } from '../utils/ConfigProvider'
import { fetchCameraAccessTokens } from '../utils/use-camera-access-tokens'
import logger from '../utils/logger'
import { formatErrorForUI } from '../utils/axios-error-handler'
import { DOORBELL_OVERLAY_TIMEOUT } from '../utils/constants'
import CameraGrid from './camera-grid'

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

        .token-error {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            text-align: center;
            padding: 1rem;
            z-index: 2;

            .loading-spinner {
                animation: spin 1s infinite linear;
                margin: 1rem 0;
            }

            @keyframes spin {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(359deg);
                }
            }

            button {
                margin-top: 1rem;
                padding: 0.5rem 1rem;
                background-color: rgba(255, 255, 255, 0.2);
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 8px;
                color: white;
                cursor: pointer;
                font-size: 0.9rem;
                transition: background-color 0.2s;

                &:hover {
                    background-color: rgba(255, 255, 255, 0.3);
                }

                &:active {
                    background-color: rgba(255, 255, 255, 0.4);
                }

                &:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
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

    // Extract camera entity IDs
    const cameraEntityIds = React.useMemo(() => {
        return DOORBELL_CAMERAS
            .map(cam => cam.entity_id)
            .filter(Boolean) // Remove any undefined/null values
    }, [DOORBELL_CAMERAS])

    // Fetch tokens fresh when modal opens
    const [accessTokens, setAccessTokens] = React.useState({})
    const [tokensLoading, setTokensLoading] = React.useState(false)
    const [tokensError, setTokensError] = React.useState(null)

    // Fetch tokens when modal opens
    React.useEffect(() => {
        if (showDoorCams && cameraEntityIds.length > 0) {
            setTokensLoading(true)
            setTokensError(null)
            
            fetchCameraAccessTokens(cameraEntityIds, config)
                .then(({ tokens, error }) => {
                    setAccessTokens(tokens)
                    setTokensError(error)
                    setTokensLoading(false)
                })
                .catch((err) => {
                    logger.error('Failed to fetch camera tokens:', err)
                    setTokensError(formatErrorForUI(err))
                    setTokensLoading(false)
                })
        } else if (!showDoorCams) {
            // Clear tokens when modal closes
            setAccessTokens({})
            setTokensError(null)
        }
    }, [showDoorCams, cameraEntityIds.join(','), config])

    // Manual refresh function
    const refreshTokens = React.useCallback(async () => {
        if (cameraEntityIds.length === 0) return
        
        setTokensLoading(true)
        setTokensError(null)
        
        try {
            const { tokens, error } = await fetchCameraAccessTokens(cameraEntityIds, config)
            setAccessTokens(tokens)
            setTokensError(error)
        } catch (err) {
            logger.error('Failed to refresh camera tokens:', err)
            setTokensError(formatErrorForUI(err))
        } finally {
            setTokensLoading(false)
        }
    }, [cameraEntityIds, config])
    
    // Refs to track camera img elements so we can stop streams when overlay closes
    const cameraImgRefs = React.useRef(new Map())

    // Stop all camera streams when overlay closes
    React.useEffect(() => {
        if (!showDoorCams) {
            // Clear all img src attributes to stop streaming
            cameraImgRefs.current.forEach((imgElement) => {
                if (imgElement && imgElement.src) {
                    imgElement.src = ''
                }
            })
            // Clear the refs map
            cameraImgRefs.current.clear()
        }
    }, [showDoorCams])

    React.useEffect(() => {
        if (state === 'off' && showDoorCams) {
            // Turn off with delay
            const timeoutId = window.setTimeout(() => {
                toggle(false)
                setCancelId(undefined)
            }, DOORBELL_OVERLAY_TIMEOUT)
            setCancelId(timeoutId)
            setTransitionDuration(DOORBELL_OVERLAY_TIMEOUT + 'ms')
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
                        <CameraGrid
                            cameras={DOORBELL_CAMERAS}
                            accessTokens={accessTokens}
                            tokensLoading={tokensLoading}
                            tokensError={tokensError}
                            refreshTokens={refreshTokens}
                            showDoorCams={showDoorCams}
                            cameraImgRefs={cameraImgRefs}
                            openDoor={openDoor}
                            config={config}
                        />
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