import Icon from '@mdi/react'
import { mdiChevronLeft, mdiChevronRight, mdiLoading } from '@mdi/js'
import styled from 'styled-components'
import { DateTime } from 'luxon'
import clsx from 'clsx'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    display: flex;
    align-items: center;
    
    svg {
      margin-left: 1rem;
      animation: spin 1s infinite linear;
      display: none;
      
      &.isLoading {
        display: inline-block;
      }
    }

    @keyframes spin {
      from {transform:rotate(0deg);}
      to {transform:rotate(359deg);}
    }
  }
  
  .buttons svg {
    cursor: pointer;
  }
`

const Header = ({ startDate, setStartDate, isLoading }) => {
  return (
    <Div>
      <h1>{startDate.toLocaleString(DateTime.DATE_MED)}
        <Icon path={mdiLoading}
              size={'32px'}
              color='#ffffff' className={clsx( { isLoading })}/>
      </h1>
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
    </Div>
  )
}

export default Header