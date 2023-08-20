import React from 'react'
import Icon from '@mdi/react'
import { mdiChevronLeft, mdiChevronRight, mdiLoading } from '@mdi/js'
import styled from 'styled-components'
import clsx from 'clsx'
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

  .buttons {
    display: flex;
    align-items: center;
    
    svg {
      cursor: pointer;
    }
    
    button {
      cursor: pointer;
      background-color: transparent;
      padding: 6px 12px;
      border-radius: 4px;
      color: #ffffff;
      border: solid 1px #a1a0a0;
      margin-left: 1rem;
    }
  }

`

const Header = ({ nextWeek, previousWeek, startWeekWithToday }) => {

  return (
    <Div>

      <div className={'buttons'}>
        <Icon path={mdiChevronLeft}
              size={'32px'}
              color='#ffffff'
              onClick={previousWeek}/>
        <Icon path={mdiChevronRight}
              size={'32px'}
              color='#ffffff'
              onClick={nextWeek}/>
        <button onClick={startWeekWithToday}>Today</button>
      </div>

      <Clock />

      <Icon path={mdiLoading}
            size={'32px'}
            color='#ffffff' className={clsx( 'indicator' )}/>

    </Div>
  )
}

export default Header