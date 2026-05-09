import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import Week from './components/week'
import Sidebar from './components/sidebar'
import TilingDemo from './components/tiling-demo'
import { Toaster } from 'sonner'
import './fonts/fonts.css'
import ErrorBoundary from './components/ErrorBoundary'
import ConfigStatusBanner, { DISMISSED_STORAGE_KEY } from './components/ConfigStatusBanner'
import { useConfigError, useIsUsingCachedConfig, useConfigLoading } from './utils/ConfigProvider'
import Reload from './utils/use-reload'

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
  min-width: 100vw;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-top: ${props => props.$hasBanner ? '48px' : '0'};
  transition: padding-top 0.2s;

  .main {
    display: grid;
    grid-template-columns: 1fr 300px;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }

  @media only screen and (max-width: 1200px) {
    .main {
      grid-template-columns: 1fr 150px;
    }
  }
`

function MainApp() {
  // Schedules a hard reload every 3 hours. The wall display is a kiosk that runs for days —
  // a periodic reload absorbs slow leaks (timers, MJPEG handles, accumulated state) without
  // anyone needing to diagnose them.
  Reload()

  const configError = useConfigError()
  const isUsingCachedConfig = useIsUsingCachedConfig()
  const loading = useConfigLoading()
  
  const [dismissed] = React.useState(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return localStorage.getItem(DISMISSED_STORAGE_KEY) === 'true'
      }
    } catch (e) {
      // Ignore errors
    }
    return false
  })
  
  // Determine if banner should be visible (same logic as ConfigStatusBanner)
  const hasBanner = !loading && !dismissed && (configError || isUsingCachedConfig)

  return (
    <Div $hasBanner={hasBanner}>
      <GlobalStyle/>
      <ConfigStatusBanner />
      <div className={'main'}>
        <ErrorBoundary>
          <Week />
        </ErrorBoundary>
        <ErrorBoundary>
          <Sidebar />
        </ErrorBoundary>
      </div>
      <Toaster
        position="bottom-center"
        theme="dark"
        duration={5000}
        closeButton
      />
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