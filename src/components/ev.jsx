import React, { memo, useCallback } from 'react'
import { 
  mdiBattery, 
  mdiBatteryCharging, 
  mdiBatteryHigh, 
  mdiBatteryMedium, 
  mdiBatteryLow,
  mdiBatteryOutline,
  mdiAlertCircle,
  mdiFan
} from '@mdi/js'
import Icon from '@mdi/react'
import styled from 'styled-components'
import useEv, { startPreclimate, stopPreclimate } from '../utils/use-ev'
import { ENABLE_EV } from '../utils/config'
import clsx from 'clsx'

const Div = styled.div`
  padding-bottom: 12px;

  h2 {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.1rem;
  }

  &.disabled {
    cursor: default;
    
    .status {
      cursor: default;
      opacity: 0.6;
    }
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;

    span {
      margin-left: 1rem;
    }
  }

  .battery-info {
    display: flex;
    align-items: center;
    gap: 0.1rem;
  }

  .charge-percentage {
    font-size: 0.9rem;
    font-weight: 400;
    color: #a1a0a0;
  }

  .preclimate-button {
    margin-top: 1rem;
    width: 100%;
    padding: 0.75rem 0.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 8px;
    color: #ffffff;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover:not(:disabled) {
      background-color: rgba(255, 255, 255, 0.2);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.spinning svg {
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`

const getBatteryIcon = (stateOfCharge, isCharging) => {
  // Choose icon based on charge level and charging state
  if (isCharging) {
    // Use charging icon for all charge levels when charging
    return mdiBatteryCharging
  } else {
    // Use different icons based on charge level when not charging
    if (stateOfCharge >= 80) return mdiBatteryHigh
    if (stateOfCharge >= 50) return mdiBatteryMedium
    if (stateOfCharge >= 20) return mdiBatteryLow
    return mdiBatteryOutline
  }
}

const getBatteryColor = (stateOfCharge) => {
  // Color code based on battery percentage
  if (stateOfCharge >= 90) return '#17e146' // green
  if (stateOfCharge >= 40) return '#ff9800' // orange
  return '#f85a5a' // red
}

const Ev = () => {
  // Don't render if EV feature is disabled
  if (!ENABLE_EV) {
    return null
  }

  const [ evState, error ] = useEv()
  const { preclimateStatus, chargingState, stateOfCharge } = evState

  const handlePreclimateToggle = useCallback(() => {
    if (error !== false) return
    
    if (preclimateStatus) {
      stopPreclimate()
    } else {
      startPreclimate()
    }
  }, [preclimateStatus, error])

  const batteryIcon = getBatteryIcon(stateOfCharge || 0, chargingState)
  const batteryColor = getBatteryColor(stateOfCharge || 0)
  const chargeDisplay = Math.round(stateOfCharge || 0)

  return (
    <Div className={clsx({ disabled: error !== false })}>
      <h2>
        Auto
        {error !== false ? (
          <div className="battery-info">
            <Icon path={mdiAlertCircle} size={'1.2rem'} color='#f85a5a'/>
            <span>Fehler</span>
          </div>
        ) : (
          <div className="battery-info">
            <span className="charge-percentage">{chargeDisplay}%</span>
            <Icon 
              path={batteryIcon} 
              size={'1.2rem'} 
              color={batteryColor}
            />
          </div>
        )}
      </h2>
      {error === false && (
        <button 
          className={clsx('preclimate-button', { spinning: preclimateStatus })}
          onClick={handlePreclimateToggle}
          disabled={error !== false}
        >
          <Icon 
            path={mdiFan} 
            size={'2rem'} 
            color={preclimateStatus ? '#ff9800' : '#ffffff'}
          />
          <span>{preclimateStatus ? 'Stop' : 'Start'}</span>
        </button>
      )}
    </Div>
  )
}

export default memo(Ev)

