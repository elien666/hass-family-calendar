import styled from 'styled-components'
import Icon from '@mdi/react'
import React from 'react'
import { mdiWashingMachine } from '@mdi/js'
import useWashingMachine from '../utils/use-washing-machine'
import clsx from 'clsx'

const Div = styled.div`
  padding-bottom: 12px;
  
  h2 {
    margin: 1.5rem 0 1rem;
    padding: 0;
  }
  
  .status {
    display: flex;
    align-items: center;
    position: relative;

    span {
      margin-left: 1rem;
    }
  }

  &.animate {
    svg {
      animation: rotate 2s linear infinite;
    }

    @keyframes rotate {
      0% {
        rotate: 0;
      }
      100% {
        rotate: 360deg;
      }
    }
  }
`

const toPresentation = {
  done: { label: 'Fertig', animate: false },
  off: { label: 'Aus', animate: false },
  standby: { label: 'Standby', animate: false },
  running: { label: 'Läuft …', animate: true }
}

const Laundry = () => {

  const status = useWashingMachine()

  return (
    <Div className={clsx({ animate: toPresentation[status].animate })}>
      <h2>Wäsche</h2>
      <div className={'status'}>
        <Icon path={mdiWashingMachine} size={'2rem'} color='#ffffff'/>
        <span>{toPresentation[status].label}</span>
      </div>
    </Div>
  )
}

export default Laundry