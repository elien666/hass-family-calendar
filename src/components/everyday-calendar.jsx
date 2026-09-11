import React from 'react'
import clsx from "clsx"
import styled from "styled-components"
import useEverydayCalendar, { storeData } from '../utils/use-everyday-calendar-state'
import { useConfig } from '../utils/ConfigProvider'
import { ThreeDots } from 'react-loader-spinner'

const Div = styled.div`
    /* Das Overlay gibt volle Bildschirmhöhe vor; der Inhalt teilt sie in
       Überschrift und Raster auf, statt darüber hinauszuwachsen. */
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;

    /* Das Schließkreuz des Overlays schwebt oben rechts über dem Inhalt und
       verdeckte sonst die Dezember-Spalte. */
    padding-right: 56px;

    h2 {
        text-align: center;
        margin-bottom: 12px !important;
        flex: none;
    }

    /* Ladeanzeige und Fehlermeldung mittig, statt oben zu kleben.
       Die Klasse saß bisher auf diesem Div, die Regel zielte aber auf das
       Raster darin — sie lief also ins Leere. */
    &.loading {
        align-items: center;
        justify-content: center;
    }

    .everydayGrid {
        display: grid;
        /* Erste Spalte trägt die Tageszahlen, dann zwölf Monate; erste
           Zeile die Monatszahlen, darunter 31 Tage.
           Das fehlende Komma in repeat(32 1fr) machte die Zeilenangabe
           ungültig — CSS verwarf sie still, alle gridArea-Angaben liefen
           ins Leere und das Raster wurde zur 11.000 px langen Kolonne. */
        grid-template-columns: repeat(13, 1fr);
        grid-template-rows: repeat(32, 1fr);
        column-gap: 0;
        row-gap: 0;
        flex: 1;
        min-height: 0;

        > * {
            place-self: center;
            min-height: 0;
        }

        .dot {
            /* Punktgröße folgt der Zeilenhöhe, damit das Jahr auf jedem
               Display in eine Bildschirmhöhe passt. */
            height: min(18px, 2.2vh);
            width: min(18px, 2.2vh);
            aspect-ratio: 1;
            border-radius: 50%;
            background-color: #8e8c8c;

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
    const config = useConfig()
    const ENABLE_EVERYDAY_CALENDAR = config.ENABLE_EVERYDAY_CALENDAR || false
    
    // Don't render if everyday calendar feature is disabled
    if (!ENABLE_EVERYDAY_CALENDAR) {
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
    const [dataStore, error] = useEverydayCalendar()

    React.useEffect(() => {
        // Set local store if loading from backend completed
        if (dataStore !== null) {
            on[1](dataStore)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ dataStore ])

    React.useEffect(() => {
        if (on[0] !== undefined) {
            storeData(on[0], config)
        }        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ on[0], config ])

    return on[0] !== undefined ? (
        <Div>
            <h2>Jeden Tag ein bißchen</h2>
            {error !== false && (
                <div style={{ padding: '1rem', color: '#f85a5a', textAlign: 'center', marginBottom: '1rem' }}>
                    <h3>Fehler!</h3>
                    <div>{error instanceof Error ? error.message : String(error)}</div>
                </div>
            )}
            <div className='everydayGrid'>
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
            {error !== false ? (
                <div style={{ padding: '1rem', color: '#f85a5a', textAlign: 'center' }}>
                    <h3>Fehler!</h3>
                    <div>{error instanceof Error ? error.message : String(error)}</div>
                </div>
            ) : (
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
            )}
        </Div>
    )
}

export default EverydayCalendar