import styled from 'styled-components'
import Icon from '@mdi/react'
import React, { memo, useCallback } from 'react'
import useWashingMachine from '../utils/use-washing-machine'
import { ENABLE_LAUNDRY } from '../utils/config'
import clsx from 'clsx'
import Overlay from './overlay'
import { mapToPresentation } from '../utils/use-washing-machine'
import { mdiAlertCircle } from '@mdi/js'

const Div = styled.div`
  padding-bottom: 12px;

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

  &.disabled {
    cursor: default;
    
    .status {
      cursor: default;
      opacity: 0.6;
    }
  }

  .animate {
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    column-gap: 2rem;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: .4rem 1rem;
      background-color: #262626;
      border-radius: 12px;
    }
  }
  
  .subtitle {
    margin: 1rem 0 0 0;
    font-size: 1.2rem;
  }
`

const Laundry = () => {
  // Don't render if laundry feature is disabled
  if (!ENABLE_LAUNDRY) {
    return null
  }

  const [ status, states, error ] = useWashingMachine()
  const [ showLaundry, toggle ] = React.useState(false)
  
  const openLaundry = useCallback(() => {
    if (error === false) {
      toggle(true)
    }
  }, [error])
  const closeLaundry = useCallback(() => toggle(false), [])

  return (
    <Div className={clsx({ disabled: error !== false })}>
      <h2>Wäsche</h2>
      <div className={'status'} onClick={openLaundry}>
        {error !== false ? (
          <>
            <Icon path={mdiAlertCircle} size={'2rem'} color='#f85a5a'/>
            <span>Fehler</span>
          </>
        ) : (
          <>
            <div className={clsx({ animate: status.animate })}>
              <Icon path={status.icon} size={'2rem'} color='#ffffff'/>
            </div>
            <span>{status.label}</span>
          </>
        )}
      </div>
      <Overlay visible={showLaundry && error === false} onClick={closeLaundry}>
        <div className={'states'}>
          {states.map((state, index) => (
            <div key={index}>
              <div className={clsx({ animate: mapToPresentation[state.state].animate })}><Icon path={mapToPresentation[state.state].icon} size={2}/></div>
              <div>{mapToPresentation[state.state].label}</div>
              <div className='subtitle'>{state.label}</div>
            </div>
          ))}
        </div>
      </Overlay>
    </Div>
  )
}

export default memo(Laundry)