import React from 'react'
import { DateTime } from 'luxon'
import styled, { createGlobalStyle } from 'styled-components'
import useCalendarData from './utils/use-calendar-data'
import Header from './components/header'
import Week from './components/week'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, sans-serif;
    background-color: #1c1c1c;
    color: #ffffff;
  }
`

const Div = styled.div`
  padding: 0 12px;
`

function App() {

  const [ startDate, setStartDate ] = React.useState(DateTime.now())
  const data = useCalendarData(startDate)

  return (
    <Div>
      <GlobalStyle />
      <Header startDate={startDate} setStartDate={setStartDate}/>
      <Week data={data} />
    </Div>
  );
}

export default App;