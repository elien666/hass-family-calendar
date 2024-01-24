import styled from 'styled-components'
import Icon from '@mdi/react'
import React from 'react'
import useWashingMachine from '../utils/use-washing-machine'
import clsx from 'clsx'
import Overlay from './overlay'
import { mapToPresentation } from '../utils/use-washing-machine'

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
  
  .status {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    span {
      margin-left: 1rem;
    }

    @media only screen and (max-width: 1200px) {
      span {
        display: none;
      }
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

  .states {
    display: flex;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

const Laundry = () => {

  const [ status, states ] = useWashingMachine()
  const [ showLaundry, toggle ] = React.useState(false)

  return (
    <Div className={clsx({ animate: status.animate })}>
      <h2>Wäsche</h2>
      <div className={'status'} onClick={() => toggle(true)}>
        <Icon path={status.icon} size={'2rem'} color='#ffffff'/>
        <span>{status.label}</span>
      </div>
      <Overlay visible={showLaundry} onClick={() => toggle(false)}>
        <div className={'states'} onClick={() => toggle(false)}>
          {states.map((state) => (
            <div>
              <div className={clsx({ animate: mapToPresentation[state.state].animate })}><Icon path={mapToPresentation[state.state].icon} size={2}/></div>
              <div>{mapToPresentation[state.state].label}</div>
              <div><br />{state.label}</div>
            </div>
          ))}
        </div>
      </Overlay>
    </Div>
  )
}

export default Laundry