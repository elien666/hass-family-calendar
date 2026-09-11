import { describe, it, expect } from 'vitest'
import { DateTime } from 'luxon'
import {
  layoutDayEvents,
  laneGeometry,
  spanMultiDayEvents,
  toDecimalHour,
  hourToOffset,
  currentHourOffset,
  DAY_START_HOUR,
  HOUR_HEIGHT,
} from '../../utils/day-layout'

/** Termin mit Uhrzeiten, wie ihn Home Assistant liefert. */
const timed = (summary, start, end) => ({
  summary,
  start: { dateTime: `2026-09-10T${start}:00+02:00` },
  end: { dateTime: `2026-09-10T${end}:00+02:00` },
})

/**
 * Erwartete Dezimalstunde eines ISO-Zeitpunkts in der lokalen Zone.
 *
 * toDecimalHour liefert bewusst die lokale Wanduhrzeit — der Kalender zeigt
 * Termine so an, wie die Familie sie liest. Die Erwartung wird deshalb aus
 * derselben Zone abgeleitet statt als feste Zahl gesetzt: Sonst hängt der
 * Test an der Zeitzone der Maschine und schlägt in UTC fehl.
 */
const localHour = (iso) => {
  const dt = DateTime.fromISO(iso)
  return dt.hour + dt.minute / 60
}

describe('toDecimalHour', () => {
  it('rechnet Minuten in Bruchteile um', () => {
    expect(toDecimalHour('2026-09-10T17:30:00+02:00'))
      .toBeCloseTo(localHour('2026-09-10T17:30:00+02:00'))
    expect(toDecimalHour('2026-09-10T16:45:00+02:00'))
      .toBeCloseTo(localHour('2026-09-10T16:45:00+02:00'))
  })

  it('gibt bei ungültiger Eingabe null zurück', () => {
    expect(toDecimalHour('kaputt')).toBeNull()
    expect(toDecimalHour(undefined)).toBeNull()
  })
})

describe('layoutDayEvents — Position aus der Uhrzeit', () => {
  it('setzt den Abstand nach der Startzeit', () => {
    const [ item ] = layoutDayEvents([ timed('Training', '17:30', '19:30') ])
    const start = localHour('2026-09-10T17:30:00+02:00')
    expect(item.top).toBeCloseTo((start - DAY_START_HOUR) * HOUR_HEIGHT)
  })

  it('leitet die Höhe aus der Dauer ab', () => {
    const [ item ] = layoutDayEvents([ timed('Training', '17:30', '19:30') ])
    expect(item.height).toBeCloseTo(2 * HOUR_HEIGHT)
  })

  it('gibt kurzen Terminen eine lesbare Mindesthöhe', () => {
    // 30 Minuten wären rechnerisch 31px — zu wenig für Titel plus Uhrzeit.
    const [ item ] = layoutDayEvents([ timed('Klavier', '15:30', '16:00') ])
    expect(item.height).toBeGreaterThanOrEqual(26)
  })

  it('sortiert nach Startzeit, unabhängig von der Eingabereihenfolge', () => {
    // Die Kalender antworten unsortiert.
    const result = layoutDayEvents([
      timed('Spät', '19:30', '22:00'),
      timed('Früh', '09:15', '10:00'),
    ])
    expect(result.map((r) => r.event.summary)).toEqual([ 'Früh', 'Spät' ])
  })
})

describe('layoutDayEvents — Überlappungen', () => {
  it('legt überlappende Termine in getrennte Spuren', () => {
    // Der reale Donnerstag: 45 Minuten Überschneidung.
    const result = layoutDayEvents([
      timed('Athletik', '16:45', '18:45'),
      timed('Technik', '18:00', '20:00'),
    ])
    expect(result[0].lane).toBe(0)
    expect(result[1].lane).toBe(1)
    expect(result[0].lanes).toBe(2)
  })

  it('nutzt eine Spur mehrfach, wenn sich Termine nicht überschneiden', () => {
    const result = layoutDayEvents([
      timed('Vormittag', '09:00', '10:00'),
      timed('Nachmittag', '15:00', '16:00'),
    ])
    expect(result.every((r) => r.lane === 0)).toBe(true)
    expect(result[0].lanes).toBe(1)
  })

  it('behandelt direkt aneinandergrenzende Termine nicht als Überlappung', () => {
    const result = layoutDayEvents([
      timed('Erst', '17:30', '19:30'),
      timed('Dann', '19:30', '22:00'),
    ])
    expect(result.every((r) => r.lane === 0)).toBe(true)
  })
})

describe('layoutDayEvents — Randfälle', () => {
  it('klemmt Termine vor dem Achsenbeginn an den oberen Rand', () => {
    const [ item ] = layoutDayEvents([ timed('Frühschicht', '04:00', '08:00') ])
    expect(item.top).toBe(0)
  })

  it('verkraftet einen Termin über Mitternacht', () => {
    const event = {
      summary: 'Nachtschicht',
      start: { dateTime: '2026-09-10T22:00:00+02:00' },
      end: { dateTime: '2026-09-11T06:00:00+02:00' },
    }
    const [ item ] = layoutDayEvents([ event ])
    expect(item.height).toBeGreaterThan(0)
  })

  it('überspringt Termine ohne Startzeit', () => {
    expect(layoutDayEvents([ { summary: 'Kaputt' } ])).toHaveLength(0)
  })

  it('verträgt leere Eingaben', () => {
    expect(layoutDayEvents([])).toEqual([])
    expect(layoutDayEvents(undefined)).toEqual([])
  })
})

describe('laneGeometry', () => {
  /** Prozentwert aus einem calc()-Ausdruck ziehen. */
  const pct = (value) => parseFloat(value.match(/([\d.]+)%/)?.[1] ?? '0')

  it('gibt einem einzelnen Termin die volle Spaltenbreite', () => {
    const { left, width } = laneGeometry(0, 1)
    expect(left).toBe('3px')
    expect(pct(width)).toBe(100)
  })

  it('stellt zwei Termine nebeneinander statt übereinander', () => {
    // Der häufigste Fall; vorher überdeckte die vordere Kachel die hintere.
    const first = laneGeometry(0, 2)
    const second = laneGeometry(1, 2)
    expect(pct(first.width)).toBe(50)
    expect(pct(second.width)).toBe(50)
    expect(pct(first.left)).toBe(0)
    expect(pct(second.left)).toBe(50)
  })

  it('lässt zwei nebeneinanderliegende Kacheln nicht überlappen', () => {
    const first = laneGeometry(0, 2)
    const second = laneGeometry(1, 2)
    expect(pct(first.left) + pct(first.width)).toBeLessThanOrEqual(pct(second.left))
  })

  it('gibt Kacheln ab drei Spuren mehr Breite als den reinen Anteil', () => {
    // Ein Drittel wäre zu schmal für einen lesbaren Titel.
    const { width } = laneGeometry(0, 3)
    expect(pct(width)).toBeGreaterThan(100 / 3)
  })

  it('beginnt die erste Spur immer am linken Rand', () => {
    [ 1, 2, 3, 5 ].forEach((lanes) => {
      expect(pct(laneGeometry(0, lanes).left)).toBe(0)
    })
  })

  it('ordnet die Spuren von links nach rechts', () => {
    const lefts = [ 0, 1, 2, 3, 4 ].map((lane) => pct(laneGeometry(lane, 5).left))
    expect(lefts).toEqual([ ...lefts ].sort((a, b) => a - b))
  })

  it('hält alle Kacheln innerhalb der Spalte', () => {
    [ 2, 3, 4, 5 ].forEach((lanes) => {
      for (let lane = 0; lane < lanes; lane += 1) {
        const { left, width } = laneGeometry(lane, lanes)
        expect(pct(left) + pct(width)).toBeLessThanOrEqual(100.5)
      }
    })
  })

  it('verträgt fehlende Angaben', () => {
    expect(() => laneGeometry(0, 0)).not.toThrow()
    expect(() => laneGeometry(0, undefined)).not.toThrow()
  })
})

describe('spanMultiDayEvents', () => {
  const day = (allDay) => ({ date: DateTime.now(), allDay, events: [] })

  it('fasst denselben Termin über mehrere Tage zu einem Balken zusammen', () => {
    // Die Datenschicht dupliziert mehrtägige Termine pro Tag.
    const trip = { uid: 'trip-1', summary: 'Björn in Kopenhagen' }
    const week = [ day([]), day([]), day([ trip ]), day([ trip ]), day([ trip ]), day([]), day([]) ]
    const spans = spanMultiDayEvents(week, () => true)
    expect(spans).toHaveLength(1)
    expect(spans[0].startIndex).toBe(2)
    expect(spans[0].span).toBe(3)
  })

  it('lässt eintägige Termine mit Spanne 1 stehen', () => {
    const week = [ day([ { uid: 'x', summary: 'Bürotag' } ]), day([]) ]
    expect(spanMultiDayEvents(week, () => true)[0].span).toBe(1)
  })

  it('filtert nach dem Prädikat', () => {
    const week = [ day([ { uid: 'a', summary: 'Behalten' }, { uid: 'b', summary: 'Weg' } ]) ]
    const spans = spanMultiDayEvents(week, (e) => e.summary === 'Behalten')
    expect(spans).toHaveLength(1)
  })

  it('nutzt den Titel, wenn keine uid vorliegt', () => {
    const week = [ day([ { summary: 'Ohne uid' } ]), day([ { summary: 'Ohne uid' } ]) ]
    expect(spanMultiDayEvents(week, () => true)[0].span).toBe(2)
  })
})

describe('currentHourOffset', () => {
  it('liefert den Abstand für eine Uhrzeit im Fenster', () => {
    const now = DateTime.fromISO('2026-09-11T11:37:00')
    expect(currentHourOffset(now)).toBeCloseTo(hourToOffset(11 + 37 / 60))
  })

  it('gibt außerhalb des Zeitfensters null zurück', () => {
    // Nachts gibt es keine Jetzt-Linie zu zeichnen.
    expect(currentHourOffset(DateTime.fromISO('2026-09-11T03:00:00'))).toBeNull()
  })
})
