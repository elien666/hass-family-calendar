import React from 'react'
import Icon from '@mdi/react'
import { mdiChevronLeft, mdiChevronRight, mdiLoading } from '@mdi/js'
import styled from 'styled-components'
import clsx from 'clsx'
import useKeyPress from '../utils/use-Key-press'
import Clock from './clock'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  
  svg.indicator {
    margin-left: 1rem;
    animation: spin 1s infinite linear;
    visibility: hidden;

    &.isLoading {
      visibility: visible;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  .buttons svg {
    cursor: pointer;
  }

`

const Header = ({ startDate, setStartDate, isLoading }) => {

  const nextWeek = () => setStartDate((date) => date.minus({ days: 7 }))
  const previousWeek = () => setStartDate((date) => date.plus({ days: 7 }))

  const keyPrevious = useKeyPress('ArrowLeft')
  const keyNext = useKeyPress('ArrowRight')

  React.useEffect(() => {
    if (keyPrevious) previousWeek()
    // eslint-disable-next-line
  }, [keyPrevious]) // Only fire when relevant key press changes

  React.useEffect(() => {
    if (keyNext) nextWeek()
    // eslint-disable-next-line
  }, [keyNext]) // Only fire when relevant key press changes

  return (
    <Div>

      <div className={'buttons'}>
        <Icon path={mdiChevronLeft}
              size={'32px'}
              color='#ffffff'
              onClick={nextWeek}/>
        <Icon path={mdiChevronRight}
              size={'32px'}
              color='#ffffff'
              onClick={previousWeek}/>
      </div>

      <Clock />

      <Icon path={mdiLoading}
            size={'32px'}
            color='#ffffff' className={clsx( 'indicator', { isLoading })}/>

    </Div>
  )
}

export default Header