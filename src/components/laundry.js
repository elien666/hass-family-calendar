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
`

const Laundry = () => {

  const status = useWashingMachine()

  return (
    <Div className={clsx({ animate: status.animate })}>
      <h2>Wäsche</h2>
      <div className={'status'}>
        <Icon path={mdiWashingMachine} size={'2rem'} color='#ffffff'/>
        <span>{status.label}</span>
      </div>
    </Div>
  )
}

export default Laundry