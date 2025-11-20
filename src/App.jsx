import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Week from './components/week'
import Sidebar from './components/sidebar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//import usePhysicalButtons from './utils/use-physical-buttons'
import './fonts/fonts.css'
import useReload from './utils/use-reload'
import ErrorBoundary from './components/ErrorBoundary'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Lato, Helvetica, sans-serif;
    background-color: #1c1c1c;
    color: #ffffff;
  }

  #root {
    min-width: 100vw;
    box-sizing: border-box;
  }
`

const Div = styled.div`
  padding: 0 12px;
  overflow: scroll;
  min-width: 100vw;
  box-sizing: border-box;

  .main {
    display: grid;
    grid-template-columns: 1fr 300px;
  }

  @media only screen and (max-width: 1200px) {
    .main {
      grid-template-columns: 1fr 150px;
    }
  }
`

function App() {

  const pin = undefined// usePhysicalButtons()
  
  useReload()

  return (
    <ErrorBoundary>
      <Div>
        <GlobalStyle/>
        <div className={'main'}>
          <ErrorBoundary>
            <Week />
          </ErrorBoundary>
          <ErrorBoundary>
            <Sidebar pin={pin} />
          </ErrorBoundary>
        </div>
        <ToastContainer />
      </Div>
    </ErrorBoundary>
  )
}

export default App