import React from 'react'
import Icon from '@mdi/react'
import { mdiChevronLeft, mdiChevronRight, mdiLoading } from '@mdi/js'
import styled from 'styled-components'
import { DateTime } from 'luxon'
import clsx from 'clsx'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
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

  .time {
    font-family: "Luckiest Guy", sans-serif;
    font-size: 60px;
    margin: 30px 0 10px 0;
    span {
      animation: blinking 2s steps(2, start) infinite;
    }

    @keyframes blinking {
      to {
        visibility: hidden;
      }
    }
  }
`

const Header = ({ startDate, setStartDate, isLoading }) => {

  const [ now, setNow ] = React.useState(DateTime.now())

  React.useEffect(() => {
    const timer = setInterval(() => setNow(DateTime.now()), 1000)

    return () => clearInterval(timer)
  })

  return (
    <Div>

      <div className={'buttons'}>
        <Icon path={mdiChevronLeft}
              size={'32px'}
              color='#ffffff'
              onClick={() => setStartDate((date) => date.minus({ days: 7 }))}/>
        <Icon path={mdiChevronRight}
              size={'32px'}
              color='#ffffff'
              onClick={() => setStartDate((date) => date.plus({ days: 7 }))}/>
      </div>

      <div className={'time'}>
        {now.toFormat('HH')}<span>:</span>{now.toFormat('mm')}
      </div>

      <Icon path={mdiLoading}
            size={'32px'}
            color='#ffffff' className={clsx( 'indicator', { isLoading })}/>

    </Div>
  )
}

export default Header