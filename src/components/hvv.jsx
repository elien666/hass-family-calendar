import React, { memo } from 'react'
import styled from 'styled-components'
import useHvv, { SUPPORTED_CALLS } from '../utils/use-hvv'
import { useConfig } from '../utils/ConfigProvider'

const Div = styled.div`
  margin-top: 2rem;

  h3 {
    margin: 1rem 0 .5rem 0;
    padding: 0;
    font-size: 1rem;
    color: #a1a0a0;
  }

  .departure {
    display: flex;
    align-items: flex-start;
    
    img {
      margin-top: 3px;
    }

    > *:nth-child(1) {
      height: 14px;
      width: 50px;
      align-items: center;
    }

    > *:nth-child(2) {
      flex-grow: 2;
    }

    > *:nth-child(3) {
      flex-grow: 1;
      text-align: right;

      span {
        color: #17e146;

        &.error {
          color: #ea0000;
        }
        
        &.invisible {
          opacity: 0;
        }
      }
    }
  }
`

const Departure = memo(({ line, direction, realtimeOffset }) => (
    <div className={'departure'}>
      <div><img src={`https://cloud.geofox.de/icon/linename?name=${line}&outlined=true&fileFormat=SVG&height=14&appearance=COLOURED`} alt={`Linie ${line}`}/></div>
      {/*<div>{direction}</div>*/}
      <div>
        {realtimeOffset  === 0 ? 'Jetzt' : <>in {realtimeOffset} '</>}
      </div>
    </div>
  ))

const Hvv = () => {
  const config = useConfig()
  const ENABLE_HVV = config.ENABLE_HVV || false
  
  // Call all hooks unconditionally (before any early returns)
  const [data, error] = useHvv(SUPPORTED_CALLS.departureList)

  // Don't render if HVV feature is disabled
  if (!ENABLE_HVV) {
    return null
  }

  return (
    <Div>
      {error !== false ? (
        <div style={{ padding: '1rem', color: '#f85a5a', textAlign: 'center' }}>
          <h3>Fehler!</h3>
          <div>{error instanceof Error ? error.message : String(error)}</div>
        </div>
      ) : (
        <>
          <h3>→&nbsp;Wandsbek</h3>
          {data.to?.map((entry, index) => (
            <Departure key={index} line={entry.line} direction={entry.direction} realtimeOffset={entry.realtimeOffset} />
          ))}
          <h3>→&nbsp;Stadtauswärts</h3>
          {data.from?.map((entry, index) => (
            <Departure key={index} line={entry.line} direction={entry.direction} realtimeOffset={entry.realtimeOffset} />
          ))}
        </>
      )}
    </Div>
  )
}

export default memo(Hvv)