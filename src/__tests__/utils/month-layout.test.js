import { describe, it, expect } from 'vitest'
import { DateTime } from 'luxon'
import {
  collectAwaySpans,
  clipSpanToWeek,
  awayDayIndices,
  dayEntries,
  tilesThatFit,
  isAwayEvent,
  isTodayCell,
  isInMonth,
  TILE_HEIGHT,
} from '../../utils/month-layout'

/** Rasterzeile mit 42 leeren Tagen ab Montag. */
const emptyGrid = (startIso = '2026-08-31') =>
  Array.from({ length: 42 }, (_, i) => ({
    date: DateTime.fromISO(startIso).plus({ days: i }),
    allDay: [],
    events: [],
  }))

/** Ganztags-Termin, wie ihn Home Assistant liefert. */
const allDay = (summary, uid) => ({ summary, uid, start: { date: '2026-09-01' }, end: { date: '2026-09-02' } })

/** Verteilt einen Termin über mehrere Rastertage — so wie die Datenschicht. */
const spread = (grid, summary, fromIndex, toIndex, uid) => {
  for (let i = fromIndex; i <= toIndex; i += 1) {
    grid[i].allDay.push(allDay(summary, uid))
  }
  return grid
}

describe('isAwayEvent', () => {
  it('erkennt eine Abwesenheit', () => {
    expect(isAwayEvent(allDay('Björn in Kopenhagen'))).toBe(true)
  })

  it('lässt normale Termine in Ruhe', () => {
    expect(isAwayEvent(allDay('Swantje Bürotag'))).toBe(false)
    expect(isAwayEvent(allDay('Hayo Büchertausch'))).toBe(false)
  })
})

describe('collectAwaySpans', () => {
  it('fasst aufeinanderfolgende Tage zu einem Zeitraum zusammen', () => {
    const grid = spread(emptyGrid(), 'Björn in Kopenhagen', 10, 14, 'trip-1')
    const spans = collectAwaySpans(grid)
    expect(spans).toHaveLength(1)
    expect(spans[0]).toMatchObject({ fromIndex: 10, toIndex: 14, days: 5, who: 'bjoern' })
  })

  it('trennt zwei Reisen mit gleichem Titel', () => {
    // "Björn in Kopenhagen" steht im Jahr für vier getrennte Reisen. Ohne
    // Lückenprüfung würden sie zu einem Zeitraum verschmelzen.
    let grid = spread(emptyGrid(), 'Björn in Kopenhagen', 3, 5)
    grid = spread(grid, 'Björn in Kopenhagen', 20, 24)
    const spans = collectAwaySpans(grid)
    expect(spans).toHaveLength(2)
    expect(spans[0]).toMatchObject({ fromIndex: 3, toIndex: 5, days: 3 })
    expect(spans[1]).toMatchObject({ fromIndex: 20, toIndex: 24, days: 5 })
  })

  it('hält gleichzeitige Abwesenheiten verschiedener Personen auseinander', () => {
    let grid = spread(emptyGrid(), 'Björn in Kopenhagen', 10, 14, 'a')
    grid = spread(grid, 'Swantje in München', 12, 16, 'b')
    const spans = collectAwaySpans(grid)
    expect(spans).toHaveLength(2)
    expect(spans.map((s) => s.who).sort()).toEqual([ 'bjoern', 'swantje' ])
  })

  it('erfasst einen einzelnen Tag', () => {
    const grid = spread(emptyGrid(), 'Björn bei Mars in Bremen', 15, 15)
    expect(collectAwaySpans(grid)[0]).toMatchObject({ days: 1, fromIndex: 15, toIndex: 15 })
  })

  it('ignoriert normale Termine', () => {
    const grid = spread(emptyGrid(), 'Swantje Bürotag', 3, 7)
    expect(collectAwaySpans(grid)).toEqual([])
  })

  it('verträgt leere Eingaben', () => {
    expect(collectAwaySpans([])).toEqual([])
    expect(collectAwaySpans(undefined)).toEqual([])
  })

  it('sortiert nach Beginn', () => {
    let grid = spread(emptyGrid(), 'Swantje in München', 20, 22, 'b')
    grid = spread(grid, 'Björn in Kopenhagen', 5, 7, 'a')
    expect(collectAwaySpans(grid).map((s) => s.fromIndex)).toEqual([ 5, 20 ])
  })
})

describe('clipSpanToWeek', () => {
  const span = { fromIndex: 10, toIndex: 16, days: 7 }   // Do bis Mi, über das Wochenende

  it('schneidet den Anfang auf die erste Zeile zu', () => {
    // Woche 1 = Index 7..13
    const clip = clipSpanToWeek(span, 1)
    expect(clip).toMatchObject({ lane: 3, span: 4, continuesLeft: false, continuesRight: true })
  })

  it('setzt den Rest in der nächsten Zeile fort', () => {
    // Woche 2 = Index 14..20
    const clip = clipSpanToWeek(span, 2)
    expect(clip).toMatchObject({ lane: 0, span: 3, continuesLeft: true, continuesRight: false })
  })

  it('gibt null für nicht betroffene Zeilen zurück', () => {
    expect(clipSpanToWeek(span, 0)).toBeNull()
    expect(clipSpanToWeek(span, 4)).toBeNull()
  })

  it('behandelt einen Zeitraum innerhalb einer Zeile ohne Fortsetzung', () => {
    const clip = clipSpanToWeek({ fromIndex: 8, toIndex: 10 }, 1)
    expect(clip).toMatchObject({ lane: 1, span: 3, continuesLeft: false, continuesRight: false })
  })

  it('füllt eine ganze Zeile, wenn der Zeitraum sie überspannt', () => {
    const clip = clipSpanToWeek({ fromIndex: 3, toIndex: 25 }, 1)
    expect(clip).toMatchObject({ lane: 0, span: 7, continuesLeft: true, continuesRight: true })
  })
})

describe('awayDayIndices', () => {
  it('markiert jeden Tag eines Zeitraums', () => {
    const set = awayDayIndices([ { fromIndex: 3, toIndex: 6 } ])
    expect([ ...set ].sort((a, b) => a - b)).toEqual([ 3, 4, 5, 6 ])
  })

  it('führt überlappende Zeiträume zusammen', () => {
    const set = awayDayIndices([ { fromIndex: 3, toIndex: 5 }, { fromIndex: 4, toIndex: 7 } ])
    expect(set.size).toBe(5)
  })
})

describe('dayEntries', () => {
  const timed = (summary, time) => ({
    summary,
    start: { dateTime: `2026-09-10T${time}:00+02:00` },
    end: { dateTime: `2026-09-10T${time}:00+02:00` },
  })

  it('sortiert zeitgebundene Termine nach Uhrzeit', () => {
    const day = { allDay: [], events: [ timed('Spät', '19:30'), timed('Früh', '09:15') ] }
    expect(dayEntries(day).map((e) => e.summary)).toEqual([ 'Früh', 'Spät' ])
  })

  it('stellt Ganztägiges voran', () => {
    const day = { allDay: [ allDay('Bürotag') ], events: [ timed('Termin', '09:00') ] }
    expect(dayEntries(day)[0].summary).toBe('Bürotag')
  })

  it('lässt Abwesenheiten weg — die zeigt der Balken', () => {
    const day = { allDay: [ allDay('Björn in Kopenhagen'), allDay('Bürotag') ], events: [] }
    expect(dayEntries(day).map((e) => e.summary)).toEqual([ 'Bürotag' ])
  })

  it('verträgt leere Tage', () => {
    expect(dayEntries(null)).toEqual([])
    expect(dayEntries({})).toEqual([])
  })
})

describe('tilesThatFit', () => {
  it('nutzt hohe Zellen besser aus', () => {
    expect(tilesThatFit(133)).toBeGreaterThan(tilesThatFit(92))
  })

  it('lässt Platz für Abwesenheitsbalken', () => {
    // Der Balken verdrängt Termine, nicht umgekehrt.
    expect(tilesThatFit(120, 1)).toBeLessThan(tilesThatFit(120, 0))
  })

  it('gibt bei zu kleinen Zellen null zurück statt negativ zu werden', () => {
    expect(tilesThatFit(30)).toBe(0)
    expect(tilesThatFit(60, 3)).toBe(0)
  })

  it('überschätzt den Platz nicht', () => {
    // Was hineingerechnet wird, muss auch hineinpassen.
    const h = 113
    expect(tilesThatFit(h) * TILE_HEIGHT).toBeLessThanOrEqual(h)
  })
})

describe('Rasterhilfen', () => {
  it('erkennt den heutigen Tag', () => {
    const now = DateTime.fromISO('2026-09-11T12:00:00')
    expect(isTodayCell({ date: DateTime.fromISO('2026-09-11T08:00:00') }, now)).toBe(true)
    expect(isTodayCell({ date: DateTime.fromISO('2026-09-12T08:00:00') }, now)).toBe(false)
  })

  it('unterscheidet Tage des Nachbarmonats', () => {
    const month = DateTime.fromISO('2026-09-01')
    expect(isInMonth({ date: DateTime.fromISO('2026-09-15') }, month)).toBe(true)
    expect(isInMonth({ date: DateTime.fromISO('2026-08-31') }, month)).toBe(false)
  })
})
