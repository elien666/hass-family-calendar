import React from 'react'
import { DateTime } from 'luxon'
import styled, { createGlobalStyle } from 'styled-components'
import useCalendarData from './utils/use-calendar-data'
import Week from './components/week'
import Sidebar from './components/sidebar'

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

// TODO: Check start date not today
// TODO: Sidebar
function App() {

  const [ startDate, setStartDate ] = React.useState(DateTime.now())
  const [ isLoading, toggleLoading ] = React.useState(false)
  const calendarData = useCalendarData(startDate, setStartDate, toggleLoading)

  return (
    <Div>
      <GlobalStyle />
      <div className={'main'}>
        <Week data={calendarData} startDate={startDate} setStartDate={setStartDate} isLoading={isLoading}/>
        <Sidebar toggleLoading={toggleLoading}/>
      </div>
    </Div>
  );
}

export default App