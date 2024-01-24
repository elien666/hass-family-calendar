import React from 'react'
import { mdiGarageVariant, mdiGarageAlertVariant, mdiGarageOpenVariant } from '@mdi/js'
import Icon from '@mdi/react'
import styled from 'styled-components'
import useGarageDoor, { toggleGarageDoor } from '../utils/use-garage-door'
import useKeyPress from '../utils/use-key-press'
import { toast } from 'react-toastify'
import clsx from 'clsx'

const Div = styled.div`
  padding-bottom: 12px;
  
  h2 {
    margin: 1.5rem 0 1rem;
    padding: 0;
    font-size: 26px;
  }

  @media only screen and (max-width: 1200px) {
    h2 {
      display: none;
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
  return map[state]
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

  const garageDoor = useGarageDoor()
  const [ garageInMotion, setGarageInMotion ] = React.useState(undefined)
  const [ animate, setAnimate ] = React.useState(false)

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

  return (
    <Div>
      <h2>Garage</h2>
      <Status garageDoor={garageDoor} animate={animate} />
    </Div>
  )
}

export default Garage