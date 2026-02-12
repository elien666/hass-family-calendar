import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import Week from './components/week'
import Sidebar from './components/sidebar'
import TilingDemo from './components/tiling-demo'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './fonts/fonts.css'
// Periodic page reload disabled — connection resilience improvements (ping/pong,
// state refetch on reconnect) should keep the dashboard fresh without full reloads.
// Re-enable if stale-data issues reappear.
// import useReload from './utils/use-reload'
import ErrorBoundary from './components/ErrorBoundary'
import ConfigStatusBanner from './components/ConfigStatusBanner'
import { useConfigError, useIsUsingCachedConfig, useConfigLoading } from './utils/ConfigProvider'

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
  // useReload()
  const configError = useConfigError()
  const isUsingCachedConfig = useIsUsingCachedConfig()
  const loading = useConfigLoading()
  
  // Check if banner was dismissed (same logic as ConfigStatusBanner)
  const [dismissed] = React.useState(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage.getItem('hass-family-calendar-config-banner-dismissed') === 'true'
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
      <ToastContainer 
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover={false}
        draggable={false}
        theme="dark"
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