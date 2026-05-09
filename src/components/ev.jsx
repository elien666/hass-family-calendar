import React, { memo, useCallback } from 'react'
import {
  mdiBatteryCharging,
  mdiBatteryHigh,
  mdiBatteryMedium,
  mdiBatteryLow,
  mdiBatteryOutline,
  mdiAlertCircle,
  mdiFan
} from '@mdi/js'
import Icon from '../utils/mdi-icon'
import styled from 'styled-components'
import useEv, { startPreclimate, stopPreclimate } from '../utils/use-ev'
import { useConfig } from '../utils/ConfigProvider'
import usePreclimateAnimation from '../utils/use-preclimate-animation'
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

  .preclimate-button-wrapper {
    margin-top: 1rem;
    margin: 1rem 3px 0 3px;
    position: relative;
    width: calc(100% - 6px);
  }

  .preclimate-button {
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
    position: relative;
    z-index: 1;

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

    &.shaking {
      animation: shake 0.5s ease-in-out;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes shake {
      0%, 100% {
        transform: translateX(0);
      }
      10%, 30%, 50%, 70%, 90% {
        transform: translateX(-5px);
      }
      20%, 40%, 60%, 80% {
        transform: translateX(5px);
      }
    }
  }

  .progress-ring {
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 8px;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: var(--progress-gradient, conic-gradient(
        from -90deg,
        var(--progress-color, #17e146) 0deg,
        var(--progress-color, #17e146) var(--progress-angle, 0deg),
        transparent var(--progress-angle, 0deg),
        transparent 360deg
      ));
      mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      mask-composite: exclude;
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      padding: 3px;
      box-sizing: border-box;
      transition: background 0.1s linear;
    }
  }
`

const getBatteryIcon = (stateOfCharge, isCharging) => {
  if (isCharging) {
    return mdiBatteryCharging
  } else {
    if (stateOfCharge >= 80) return mdiBatteryHigh
    if (stateOfCharge >= 50) return mdiBatteryMedium
    if (stateOfCharge >= 20) return mdiBatteryLow
    return mdiBatteryOutline
  }
}

const getBatteryColor = (stateOfCharge) => {
  if (stateOfCharge >= 90) return '#17e146'
  if (stateOfCharge >= 40) return '#ff9800'
  return '#f85a5a'
}

const Ev = () => {
  const config = useConfig()
  const ENABLE_EV = config.ENABLE_EV || false

  const [ evState, error ] = useEv()
  const { preclimateStatus, chargingState, stateOfCharge } = evState

  const onStart = useCallback(() => startPreclimate(config), [config])
  const onStop = useCallback(() => stopPreclimate(config), [config])

  const {
    isAnimating,
    animationDirection,
    shouldShake,
    isComplete,
    progressAngle,
    handleToggle,
  } = usePreclimateAnimation({ preclimateStatus, error, onStart, onStop })

  const batteryIcon = getBatteryIcon(stateOfCharge || 0, chargingState)
  const batteryColor = getBatteryColor(stateOfCharge || 0)
  const chargeDisplay = Math.round(stateOfCharge || 0)

  const displayPreclimateStatus = isAnimating
    ? (animationDirection === 'start')
    : preclimateStatus

  const progressColor = animationDirection === 'start' ? '#17e146' : '#f85a5a'
  const progressDirection = animationDirection === 'start' ? 'clockwise' : 'counterclockwise'

  if (!ENABLE_EV) {
    return null
  }

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
        <div className="preclimate-button-wrapper">
          {isAnimating && (
            <div
              className={clsx('progress-ring', progressDirection, { complete: isComplete })}
              style={{
                '--progress-color': progressColor,
                '--progress-angle': `${progressAngle}deg`,
                '--progress-gradient': `conic-gradient(from -90deg, ${progressColor} 0deg, ${progressColor} ${progressAngle}deg, transparent ${progressAngle}deg, transparent 360deg)`
              }}
            />
          )}
          <button
            className={clsx('preclimate-button', {
              spinning: displayPreclimateStatus && !isAnimating,
              shaking: shouldShake
            })}
            onClick={handleToggle}
            disabled={error !== false || isAnimating}
          >
            <Icon
              path={mdiFan}
              size={'2rem'}
              color={displayPreclimateStatus ? '#ff9800' : '#ffffff'}
            />
            <span>{displayPreclimateStatus ? 'Stop' : 'Start'}</span>
          </button>
        </div>
      )}
    </Div>
  )
}

export default memo(Ev)
