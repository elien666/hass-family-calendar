import React from 'react'
import { mdiGarageVariant, mdiGarageAlertVariant, mdiGarageOpenVariant, mdiCloudQuestionOutline } from '@mdi/js'
import Icon from '@mdi/react'
import styled from 'styled-components'
import useGarageDoor, { toggleGarageDoor, closeGarageDoor, openGarageDoor } from '../utils/use-garage-door'
import useKeyPress from '../utils/use-key-press'
import { toast } from 'react-toastify'
import Overlay from './overlay'
import clsx from 'clsx'

const Div = styled.div`
  padding-bottom: 12px;
  cursor: pointer;

  @media only screen and (max-width: 1200px) {
    h2 {
      display: none;
    }
  }

  .controls {
      display: grid;
      grid-template-columns: 1fr 1fr;
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
    'closed': { label: 'Geschlossen', icon: mdiGarageVariant }
  }
  return map[state] || { label: 'Unavailable', icon: mdiCloudQuestionOutline }
}

const Status = ({ garageDoor, animate = false }) => (
  <StatusDiv className={clsx({ animate: animate })}>
    <Icon path={toPresentation(garageDoor).icon} size={'2rem'} color='#ffffff'/>
    <span>{toPresentation(garageDoor).label}</span>
  </StatusDiv>
)

const showToast = (promise, garageDoor) => (
  toast.promise(promise, {
    pending: 'Garagentor ist in Bewegung …',
    success: { render({ data }) { return (<Status garageDoor={data} />) }},
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
  })
)

const Garage = () => {

  const [ garageDoor, error ] = useGarageDoor()
  const [ garageInMotion, setGarageInMotion ] = React.useState(undefined)
  const [ animate, setAnimate ] = React.useState(false)
  const [ showControls, toggle ] = React.useState(false)

  React.useEffect(() => {
    if (garageDoor === 'unknown') {
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
    // eslint-disable-next-line
  }, [garageDoor]) // Only fire when garage status is changed

  const keyGarage = useKeyPress('g')
  React.useEffect(() => {
    if (keyGarage) {
      // Send toggle action to Home Assistant
      toggleGarageDoor(setAnimate)
    }
  }, [keyGarage]) // Only fire when key is pressed

  const controlGarage = (action) => {
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
  }

  React.useEffect(() => {
    if (error !== false) {
      toggle(true)
    }
  }, [error])

  return (
    <Div>
      <h2>Garage</h2>
      <div onClick={() => toggle(true)}>
        <Status garageDoor={garageDoor} animate={animate} />
      </div> 
      <Overlay visible={showControls} onClick={() => toggle(false)}>
        <div className={'controls'}>
          {error !== false && (
            <div>
              <h3>Fehler!</h3>
              <div>{error}</div>
            </div>
          )}
          <div onClick={() => controlGarage('open')}>Öffnen</div>
          <div onClick={() => controlGarage('close')}>Schließen</div>
        </div>
      </Overlay>
    </Div>
  )
}

export default Garage