import { describe, it, expect } from 'vitest'
import classifyEvent, { displayTitle, wasteColor } from '../../utils/event-rules'

/** Kürzel: Die Regeln lesen nur summary und description. */
const ev = (summary, description) => ({ summary, description })

describe('Regel 1 — Name im Titel', () => {
  it('erkennt den Namen unabhängig von der Position', () => {
    expect(classifyEvent(ev('Swantje Schwimmen')).primary).toBe('swantje')
    expect(classifyEvent(ev('Klavier üben Norell')).primary).toBe('norell')
  })

  it('fällt ohne Namen auf die Familienfarbe zurück', () => {
    // Haushaltstermine sollen neutral bleiben, das ist kein Erkennungsfehler.
    expect(classifyEvent(ev('Heizung')).primary).toBe('family')
    expect(classifyEvent(ev('Auto HU / TÜV')).persons).toEqual([])
  })

  it('sammelt mehrere Namen', () => {
    const result = classifyEvent(ev('Zahnarzt Hayo und Norell'))
    expect(result.persons).toContain('hayo')
    expect(result.persons).toContain('norell')
  })

  it('erkennt Björn auch ohne Umlaut', () => {
    expect(classifyEvent(ev('Bjoern Termin')).primary).toBe('bjoern')
  })
})

describe('Regel 2 — Abwesenheit', () => {
  it('erkennt "Name in Ort"', () => {
    expect(classifyEvent(ev('Björn in Kopenhagen')).away).toBe('bjoern')
    expect(classifyEvent(ev('Swantje in Berlin')).away).toBe('swantje')
  })

  it('erkennt "bei" und toleriert Zwischentext', () => {
    // So steht es tatsächlich im Kalender.
    expect(classifyEvent(ev('Björn bei Mars in Bremen')).away).toBe('bjoern')
  })

  it('ignoriert "in" ohne vorangestellten Namen', () => {
    // Der klassische Fehlalarm, den die Verankerung am Titelanfang verhindert.
    expect(classifyEvent(ev('Weihnachtssingen in der Christuskirche')).away).toBeNull()
    expect(classifyEvent(ev('Start Vorschulkinder in Kita')).away).toBeNull()
  })

  it('zählt Bürotag nicht als Abwesenheit', () => {
    // Bewusste Entscheidung des Nutzers: Bürotag heißt arbeiten, nicht weg sein.
    const result = classifyEvent(ev('Swantje Bürotag'))
    expect(result.away).toBeNull()
    expect(result.primary).toBe('swantje')
  })

  it('setzt bei Abwesenheit das Flugzeug-Symbol', () => {
    expect(classifyEvent(ev('Björn in Nashville')).icon).toBe('✈️')
  })
})

describe('Regel 3 — Hockey gehört Norell', () => {
  it('erkennt Norell am Sync-Vermerk, auch ohne Namen im Titel', () => {
    const result = classifyEvent(ev('🏑 Training Mo. WU10', 'Treffen: 17:15\n(Sync aus Hockey Norell Kalender)'))
    expect(result.primary).toBe('norell')
    expect(result.icon).toBe('🏑')
  })

  it('greift ersatzweise auf Titelbegriffe zurück', () => {
    // Diese zehn Termine tragen keinen Sync-Vermerk.
    expect(classifyEvent(ev('WU10 3. Spieltag')).persons).toContain('norell')
    expect(classifyEvent(ev('🏑 Sommerfest MTHC')).persons).toContain('norell')
    expect(classifyEvent(ev('Hockeycamp Norell')).persons).toContain('norell')
  })

  it('führt Norell nicht doppelt, wenn der Name schon im Titel steht', () => {
    const result = classifyEvent(ev('Hockeycamp Norell'))
    expect(result.persons.filter((p) => p === 'norell')).toHaveLength(1)
  })
})

describe('Regel 4 — Aktivitätssymbole', () => {
  it.each([
    [ 'Hayo Schwimmen', '🏊' ],
    [ 'Norell Geburtstag', '🎂' ],
    [ 'Elternabend Norell im Klassenraum', '🎒' ],
    [ 'Impfung Hayo', '🩺' ],
    [ 'Norell Klavier', '🎹' ],
    [ 'Oma-Tag', '👵' ],
  ])('%s bekommt %s', (summary, icon) => {
    expect(classifyEvent(ev(summary)).icon).toBe(icon)
  })

  it('führt Irma als Haushalt, nicht als Kinderbetreuung', () => {
    const result = classifyEvent(ev('Irma'))
    expect(result.activity).toBe('haushalt')
    expect(result.icon).toBe('🧹')
    expect(result.persons).toEqual([])
  })

  it('vergibt Personenfarbe und Symbol gleichzeitig', () => {
    // Der Kern der Regel: beides, nicht entweder/oder.
    const result = classifyEvent(ev('Swantje Schwimmen'))
    expect(result.primary).toBe('swantje')
    expect(result.icon).toBe('🏊')
  })
})

describe('Abfuhrtitel kürzen', () => {
  it.each([
    [ 'Abfuhr gelbe Wertstofftonne/-sack', 'Gelber Sack', '#c9a227' ],
    [ 'Abfuhr grüne Biotonne', 'Bio', '#5c8a3a' ],
    [ 'Abfuhr blaue Papiertonne', 'Papier', '#3f74b0' ],
    [ 'Abfuhr schwarze Restmülltonne', 'Restmüll', '#6e6e78' ],
  ])('%s wird zu "%s"', (summary, label, color) => {
    expect(displayTitle(summary)).toBe(label)
    expect(wasteColor(summary)).toBe(color)
  })

  it('lässt andere Titel unangetastet', () => {
    expect(displayTitle('Hayo Schwimmen')).toBe('Hayo Schwimmen')
    expect(wasteColor('Hayo Schwimmen')).toBeNull()
  })
})

describe('Robustheit', () => {
  it('verträgt fehlende Felder', () => {
    expect(() => classifyEvent({})).not.toThrow()
    expect(() => classifyEvent(null)).not.toThrow()
    expect(classifyEvent({}).primary).toBe('family')
  })
})
