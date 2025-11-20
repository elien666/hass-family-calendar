import React from 'react'
import clsx from "clsx"
import styled from "styled-components"
import useEverydayCalendar, { storeData } from '../utils/use-everyday-calendar-state'
import { ENTITY_EVERYDAY_CALENDAR } from '../utils/config'
import { ThreeDots } from 'react-loader-spinner'

const Div = styled.div` 

    h2 {
        text-align: center;
        margin-bottom: 12px !important;
    }

    .calendar {
        display: grid;
        grid-template-columns: repeat(13, 1fr);
        grid-template-rows: repeat(32 1fr);
        column-gap: 0;
        row-gap: 0;

        &.loading {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
        }

        > * {
            place-self: center;
            //height: 35px;
        }

        .dot {
            height: 18px;
            width: 18px;
            border-radius: 12px;
            background-color: #8e8c8c;
            margin: 5px 0;

            &.on {
                background-color: #00ff00;
            }
        }           
    }
`

const Dot = ({ on, month, day }) => {
    const [ store, setStore ] = on
    const index = store.indexOf(`${month}-${day}`)
    const state = index > -1
    const toggle = () => {
        if (state) {
            setStore(store.toSpliced(index, 1))
        } else {
            setStore([ ...store, `${month}-${day}`])
        }
    }

    return (
        <div className={clsx('dot', { on: state})} onClick={() => toggle(v => !v)}></div>
    )
}

const EverydayCalendar = () => {
    // Don't render if everyday calendar is not configured
    if (!ENTITY_EVERYDAY_CALENDAR) {
        return null
    }

    const current_year = new Date().getFullYear()

    const days = []

    // Loop over months
    for (let month=1; month < 13; month++) {
        // Loop over days
        const days_in_month = new Date(current_year, month, 0).getDate();
        for (let day=1; day <= days_in_month; day++) {
            days.push({ month, day})
        }
    }

    const day_labels = Array.from({ length: 31 }, (_, i) => i + 1); // Creates an array [1, 2, ..., 31]
    const month_labels = Array.from({ length: 12 }, (_, i) => i + 1); // Creates an array [1, 2, ..., 12]

    const on = React.useState(undefined)
    const dataStore = useEverydayCalendar()

    React.useEffect(() => {
        // Set local store if loading from backend completed
        if (dataStore !== null) {
            on[1](dataStore)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ dataStore ])

    React.useEffect(() => {
        if (on[0] !== undefined) {
            storeData(on[0])
        }        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ on[0] ])

    return on[0] !== undefined ? (
        <Div>
            <h2>Jeden Tag ein bißchen</h2>
            <div className='calendar'>
                {day_labels.map((label, index) => (
                    <div key={index} style={{ gridArea: `${label+1} / 1 / ${label+1} / 1` }}>{label}</div>
                ))}
                {month_labels.map((label, index) => (
                    <div key={index} style={{ gridArea: `1 / ${label+1} / 1 / ${label+1}` }}>{label}</div>
                ))}
                {days.map((day, index) => (
                    <div key={index} style={{ gridArea: `${day.day+1} / ${day.month+1} / ${day.day+1} / ${day.month+1}` }}>
                        <Dot on={on} month={day.month} day={day.day}/>
                    </div>
                ))}
            </div>
        </Div>
    ) : (
        <Div className='loading'>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#c1c1c1"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </Div>
    )
}

export default EverydayCalendar