import React, { memo } from 'react'
import styled from 'styled-components'
import Weather from './weather'
import Hvv from './hvv'
import Garage from './garage'
import Laundry from './laundry'

const Div = styled.div`
  padding: 0 0 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow-y: auto;

  .top-content {
    flex-shrink: 0;
  }

  .top-content > * + * {
    margin-top: 24px;
  }
  
  h2 {
    font-size: 1.3rem;
    font-weight: 400;
  }
  
  .two-cols {
    display: flex;
    margin-top: auto;
    flex-shrink: 0;

    @media only screen and (max-width: 1200px) {
      margin-top: 3rem;
    }
    
    > * {
      width: 50%;
    }
    
    > *:nth-child(1) {
      padding-right: 6px;
    }

    > *:nth-child(2) {
      padding-left: 6px;
    }
  }
`

const Sidebar = () => {
  return (
    <Div>
      <div className={'top-content'}>
        <Weather />
        <Hvv />
      </div>
      <div className={'two-cols'}>
        <Garage />
        <Laundry />
      </div>
    </Div>
  )
}

export default memo(Sidebar)