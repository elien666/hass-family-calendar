import React from 'react'
import { DateTime } from 'luxon'
import styled from 'styled-components'

const Div = styled.div`
  font-family: "Digital Dismay";
  font-size: 76px;
  margin: 30px 0 10px 0;
  color: #fff;

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

  React.useEffect(() => {
    const timer = setInterval(() => setNow(DateTime.now()), 1000)
    return () => clearInterval(timer)
  })

  return (
    <Div>
      {now.toFormat('HH')}<span>:</span>{now.toFormat('mm')}
    </Div>
  )

}

export default Clock