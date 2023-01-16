import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Week from './components/week'
import Sidebar from './components/sidebar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import usePhysicalButtons from './utils/use-physical-buttons'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Lato, Helvetica, sans-serif;
    background-color: #1c1c1c;
    color: #ffffff;
  }
`

const Div = styled.div`
  padding: 0 12px;
  overflow: hidden;

  .main {
    display: grid;
    grid-template-columns: 80% 1fr;
    height: 100vh;
  }
`

function App() {

  const pin = usePhysicalButtons()

  return (
    <Div>
      <GlobalStyle/>
      <div className={'main'}>
        <Week />
        <Sidebar pin={pin} />
      </div>
    <ToastContainer />
    </Div>
  )
}

export default App