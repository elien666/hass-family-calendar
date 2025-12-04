import React, { memo, useCallback } from 'react'
import { mdiGarageVariant, mdiGarageAlertVariant, mdiGarageOpenVariant, mdiCloudQuestionOutline, mdiArrowUp, mdiArrowDown, mdiAlertCircle } from '@mdi/js'
import Icon from '@mdi/react'
import styled from 'styled-components'
import useGarageDoor, { toggleGarageDoor, closeGarageDoor, openGarageDoor } from '../utils/use-garage-door'
import { ENABLE_GARAGE } from '../utils/config'
import useKeyPress from '../utils/use-key-press'
import { toast } from 'react-toastify'
import Overlay from './overlay'
import clsx from 'clsx'
import logger from '../utils/logger'

const Div = styled.div`
  padding-bottom: 12px;

  @media only screen and (max-width: 1200px) {
    h2 {
      display: none;
    }
  }

  &.disabled {
    cursor: default;
    
    .status {
      cursor: default;
      opacity: 0.6;
    }
  }

  .status {
    cursor: pointer;
  }

  .controls {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      
      h2 {
        grid-column: 1 / -1;
        text-align: center;
        margin: 0 0 1rem 0;
        padding: 1rem 0;
        font-size: 2rem;
        font-weight: 400;
        color: #ffffff;
        display: block;
        width: 100%;
      }
      
      > div { 
        display: flex;
        justify-content: center;
        align-items: center;
        justify-self: center;
        border: solid 3px rgba(255,255,255,.5);
        border-radius: 12px;
        width: 150px;
        height: 150px;
        font-size: 24px;
        background-color: rgba(255,255,255,.1);
        cursor: pointer;
      }
    }
`

const StatusDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  span {
    margin-left: 1rem;
  }

  @media only screen and (max-width: 1200px) {
    span {
      display: none;
    }
  }

  &.animate {
    &::after {
      content: '';
      width: 30px;
      height: 30px;
      border-radius: 100%;
      border: 6px solid #dcdcdc;
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 24px;
      transform: translate(-50%, -50%);
      animation: ring 1.5s infinite;
    }
  
    @keyframes ring {
      0% {
        width: 30px;
        height: 30px;
        opacity: 1;
      }
      100% {
        width: 300px;
        height: 300px;
        opacity: 0;
      }
    }
  }
`

const toPresentation = (state) => {
  const map = {
    'unknown': { label: 'In Bewegung oder halb-offen', icon: mdiGarageAlertVariant },
    'open': { label: 'Offen', icon: mdiGarageOpenVariant },
    'closed': { label: 'Geschlossen', icon: mdiGarageVariant },
    'opening': { label: 'Öffnet', icon: mdiArrowUp },
    'closing': { label: 'Schließt', icon: mdiArrowDown }
  }
  if (!map[state]) {
    logger.warn('Garage door state is not recognized:', state, 'Available states: unknown, open, closed, opening, closing')
  }
  return map[state] || { label: 'Unavailable', icon: mdiCloudQuestionOutline }
}

const Status = ({ garageDoor, animate = false }) => (
  <StatusDiv className={clsx({ animate: animate })}>
    <Icon path={toPresentation(garageDoor).icon} size={'2rem'} color='#ffffff'/>
    <span>{toPresentation(garageDoor).label}</span>
  </StatusDiv>
)

const showToast = (promise) => (
  toast.promise(promise, {
    pending: 'Garagentor ist in Bewegung …',
    success: {
      render({ data }) {
        return toPresentation(data).label
      }
    },
    error: 'Nope'
  }, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
    transition: undefined,
  })
)

const Garage = () => {
  // Don't render if garage feature is disabled
  if (!ENABLE_GARAGE) {
    return null
  }

  const [ garageDoor, error ] = useGarageDoor()
  const [ garageInMotion, setGarageInMotion ] = React.useState(undefined)
  const [ animate, setAnimate ] = React.useState(false)
  const [ showControls, toggle ] = React.useState(false)

  React.useEffect(() => {
    // Check if garage door is in motion (unknown, opening, or closing)
    const isInMotion = garageDoor === 'unknown' || garageDoor === 'opening' || garageDoor === 'closing'
    
    if (isInMotion) {
      if(!garageInMotion) {
        // Set garageInMotion to resolve function of promise
        const promise = new Promise((resolve) => {
          setGarageInMotion({ resolve })
        })
        showToast(promise)
      }
    } else if (garageInMotion) {
      // Resolve promise and reset
      garageInMotion.resolve(garageDoor)
      setGarageInMotion(undefined)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [garageDoor]) // Only fire when garage status is changed

  const keyGarage = useKeyPress('g')
  React.useEffect(() => {
    if (keyGarage && error === false) {
      // Send toggle action to Home Assistant
      toggleGarageDoor(setAnimate)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyGarage, error]) // Only fire when key is pressed

  const controlGarage = useCallback((action) => {
    if (error !== false) return
    toggle(false)
    switch (action) {
      case 'open':
        openGarageDoor(setAnimate)
        break
      case 'close':
        closeGarageDoor(setAnimate)
        break;
      default:
        // 
    }
  }, [setAnimate, error])

  const handleStatusClick = useCallback(() => {
    if (error === false) {
      toggle(true)
    }
  }, [error])

  return (
    <Div className={clsx({ disabled: error !== false })}>
      <h2>Garage</h2>
      <div className="status" onClick={handleStatusClick}>
        {error !== false ? (
          <StatusDiv>
            <Icon path={mdiAlertCircle} size={'2rem'} color='#f85a5a'/>
            <span>Fehler</span>
          </StatusDiv>
        ) : (
          <Status garageDoor={garageDoor} animate={animate} />
        )}
      </div> 
      <Overlay visible={showControls && error === false} onClick={() => toggle(false)}>
        <div className={'controls'}>
          <h2>Garagentor</h2>
          <div onClick={() => controlGarage('open')}>Öffnen</div>
          <div onClick={() => controlGarage('close')}>Schließen</div>
        </div>
      </Overlay>
    </Div>
  )
}

export default memo(Garage)