import React, { memo } from 'react'
import styled from 'styled-components'
import ErrorBoundary from './ErrorBoundary'
import Weather from './weather'
import Hvv from './hvv'
import Ev from './ev'
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
    flex-shrink: 0;
    margin-top: 0;
    
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
        <ErrorBoundary compact><Weather /></ErrorBoundary>
        <ErrorBoundary compact><Hvv /></ErrorBoundary>
        <ErrorBoundary compact><Ev /></ErrorBoundary>
      </div>
      <div className={'two-cols'}>
        <ErrorBoundary compact><Garage /></ErrorBoundary>
        <ErrorBoundary compact><Laundry /></ErrorBoundary>
      </div>
    </Div>
  )
}

export default memo(Sidebar)