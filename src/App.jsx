import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import Week from './components/week'
import Sidebar from './components/sidebar'
import TilingDemo from './components/tiling-demo'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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

function MainApp() {
  useReload()

  return (
    <Div>
      <GlobalStyle/>
      <div className={'main'}>
        <ErrorBoundary>
          <Week />
        </ErrorBoundary>
        <ErrorBoundary>
          <Sidebar />
        </ErrorBoundary>
      </div>
      <ToastContainer />
    </Div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/demo" element={<TilingDemo />} />
        <Route path="/tiling-demo" element={<TilingDemo />} />
        <Route path="*" element={<MainApp />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App