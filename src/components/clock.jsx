import React from 'react'
import { DateTime } from 'luxon'
import styled from 'styled-components'
import Overlay from './overlay'
import EverydayCalendar from './everyday-calendar'

const Div = styled.div`
  font-family: "Digital Dismay";
  font-size: 76px;
  margin: 30px 0 10px 0;
  color: #fff;
  cursor: pointer;
  user-select: none;

  @media only screen and (max-width: 1200px) {
    font-size: 42px;
    margin: 0;
  }

  span {
    animation: blinking 2s steps(2, start) infinite;
  }

  @keyframes blinking {
    to {
      visibility: hidden;
    }
  }`

const Clock = () => {

  const [ now, setNow ] = React.useState(DateTime.now())
  const [ showEverydayCalendar, toggle ] = React.useState(false)

  React.useEffect(() => {
    const timer = setInterval(() => setNow(DateTime.now()), 1000)
    return () => clearInterval(timer)
  })

  return (
    <>
      <Div onClick={() => toggle(true)}>
        {now.toFormat('HH')}<span>:</span>{now.toFormat('mm')}
      </Div>
      <Overlay visible={showEverydayCalendar} onClick={() => toggle(false)} fullsize={true}>
        <EverydayCalendar />
      </Overlay>
    </>
  )

}

export default Clock