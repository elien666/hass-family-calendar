import React from 'react'
import useDoorbell from "../utils/use-doorbell"
import Overlay from "./overlay"
import styled from 'styled-components'
import ProgressBar from '@ramonak/react-progress-bar'
import WhepVideo from './whep-video'

const Container = styled.div`

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
                    <div>
                        <WhepVideo src="http://192.168.188.126:8889/tuerklingel_sub/whep" 
                            muted={true} controls={false} autoPlay={true} width='360' height='480' />
                    </div>
                    <div>
                        <WhepVideo src="http://192.168.188.126:8889/eingang/whep" 
                            muted={true} controls={false} autoPlay={true} width='420' height='240px' />
                        <WhepVideo src="http://192.168.188.126:8889/weg/whep" 
                            muted={true} controls={false} autoPlay={true} width='420' height='240px' />
                    </div>
                </div>                
            </Container>
        </Overlay>
    )
}

export default Doorbell