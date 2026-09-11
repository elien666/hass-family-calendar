import { describe, it, expect } from 'vitest'
import {
  formatDuration,
  cleanDescription,
  describeRecurrence,
} from '../../components/event-details'

const iso = (time) => `2026-09-10T${time}:00+02:00`

describe('formatDuration', () => {
  it('zeigt kurze Termine in Minuten', () => {
    expect(formatDuration(iso('15:30'), iso('16:00'))).toBe('30 min')
  })

  it('zeigt volle Stunden ohne Minutenanteil', () => {
    expect(formatDuration(iso('16:45'), iso('18:45'))).toBe('2 Std.')
  })

  it('zeigt angebrochene Stunden mit Minuten', () => {
    expect(formatDuration(iso('19:30'), iso('22:00'))).toBe('2:30 Std.')
  })

  it('gibt bei fehlenden oder verdrehten Zeiten null zurück', () => {
    expect(formatDuration(iso('10:00'), undefined)).toBeNull()
    expect(formatDuration(iso('10:00'), iso('10:00'))).toBeNull()
  })
})

describe('cleanDescription', () => {
  it('entfernt die technischen Zeilen des Hockey-Syncs', () => {
    // Genau so liefert der Sync seine Beschreibungen.
    const raw = 'Status: Unbestimmt\n\nTreffen: 17:15 Uhr\n\nSource-UID: 16614@0.0.0.0\n(Sync aus Hockey Norell Kalender)'
    const result = cleanDescription(raw)
    expect(result).toContain('Treffen: 17:15 Uhr')
    expect(result).toContain('Status: Unbestimmt')
    expect(result).not.toContain('Source-UID')
    expect(result).not.toContain('Sync aus')
  })

  it('lässt gewöhnliche Beschreibungen unangetastet', () => {
    const raw = 'Hin HH HBF 7:35, Rück Berlin HBF 16:38'
    expect(cleanDescription(raw)).toBe(raw)
  })

  it('erhält Absätze innerhalb des Textes', () => {
    expect(cleanDescription('Erste Zeile\n\nZweite Zeile')).toBe('Erste Zeile\n\nZweite Zeile')
  })

  it('gibt null zurück, wenn nur technischer Inhalt übrig bliebe', () => {
    // Sonst erschiene eine leere Notiz-Zeile im Overlay.
    expect(cleanDescription('Source-UID: 123\n(Sync aus Hockey Norell Kalender)')).toBeNull()
  })

  it('verträgt leere Eingaben', () => {
    expect(cleanDescription(null)).toBeNull()
    expect(cleanDescription('')).toBeNull()
  })
})

describe('describeRecurrence', () => {
  it.each([
    [ 'FREQ=WEEKLY', 'Jede Woche' ],
    [ 'FREQ=MONTHLY;BYDAY=MO;BYSETPOS=1', 'Jeden Monat' ],
    [ 'FREQ=YEARLY', 'Jedes Jahr' ],
    [ 'FREQ=DAILY', 'Jeden Tag' ],
  ])('macht aus %s "%s"', (rrule, expected) => {
    expect(describeRecurrence(rrule)).toBe(expected)
  })

  it('fällt bei unbekannten Regeln auf eine allgemeine Aussage zurück', () => {
    expect(describeRecurrence('FREQ=HOURLY;INTERVAL=6')).toBe('Wiederkehrend')
  })

  it('gibt ohne Regel null zurück', () => {
    expect(describeRecurrence(null)).toBeNull()
  })
})
