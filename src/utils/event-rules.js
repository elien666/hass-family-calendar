/**
 * Regelwerk zur Einordnung von Kalendereinträgen.
 *
 * Die Termine liegen alle in einem gemeinsamen Familienkalender, deshalb wird
 * die Zuordnung aus dem Titel gelesen. Die Regeln sind mit dem Nutzer abgestimmt
 * und an 437 echten Terminen geprüft (Stand 11.9.2026: 70 % Person, 67 % Aktivität).
 *
 * 1. Name im Titel          -> Personenfarbe
 * 2. "Name in/bei Ort"      -> Abwesenheit (Name muss am Titelanfang stehen)
 * 3. Hockey                 -> Norell (Sync-Vermerk, ersatzweise Titelbegriffe)
 * 4. Aktivität             -> Symbol, damit auch Hayo (5) den Termin erkennt
 *
 * Regel 1 und 4 laufen unabhängig: Ein Termin trägt Personenfarbe UND Symbol.
 */

export const PERSONS = {
  bjoern: { label: 'Björn', color: '#3f8a6e', tile: '#2b4f43' },
  swantje: { label: 'Swantje', color: '#7d6bb0', tile: '#413761' },
  norell: { label: 'Norell', color: '#4a90b8', tile: '#31485a' },
  hayo: { label: 'Hayo', color: '#d98c3f', tile: '#56412a' },
  family: { label: 'Familie', color: '#5a5a62', tile: '#3a3a44' },
}

/** Abwesenheit hebt sich bewusst von Björns Personenfarbe ab: Es geht nicht um
 *  seinen Termin, sondern darum, dass er fehlt. */
export const AWAY_STYLE = { color: '#c9553d', tile: '#4a2b25', text: '#f0b4a6' }

const NAME_PATTERNS = [
  // "Bjoern" als ASCII-Ersatzschreibweise mit abdecken.
  [ 'bjoern', /Bj(?:ö|o|oe)rn/i ],
  [ 'swantje', /Swantje/i ],
  [ 'norell', /Norell/i ],
  [ 'hayo', /Hayo/i ],
]

/** Regel 2: Der Name MUSS am Titelanfang stehen. Diese Verankerung trennt
 *  "Björn in Kopenhagen" von "Weihnachtssingen in der Christuskirche". */
const AWAY_PATTERN = /^\s*(Bj(?:ö|o|oe)rn|Swantje|Norell|Hayo)\s+(in|bei|@)\s+\S/i

/** Regel 3: Die Hockeytermine kommen per Sync und nennen Norell nicht im Titel. */
const HOCKEY_SYNC_PATTERN = /Sync aus Hockey Norell/i

/** Regel 4: Reihenfolge zählt — der erste Treffer gewinnt. */
const ACTIVITIES = [
  { key: 'hockey', pattern: /🏑|WU10|MTHC|hockey/i, icon: '🏑', label: 'Hockey' },
  { key: 'schwimmen', pattern: /schwimm/i, icon: '🏊', label: 'Schwimmen' },
  { key: 'geburtstag', pattern: /geburtstag|🎂/i, icon: '🎂', label: 'Geburtstag' },
  { key: 'schule', pattern: /🏫|schul|klasse\s*\d|elternabend|elternnachmittag|GBS/i, icon: '🎒', label: 'Schule' },
  { key: 'kita', pattern: /kita|vorschul/i, icon: '🧸', label: 'Kita' },
  { key: 'arzt', pattern: /arzt|hausarzt|physio|blutabnahme|impf|zahn/i, icon: '🩺', label: 'Arzt' },
  { key: 'musik', pattern: /klavier|musikschule/i, icon: '🎹', label: 'Musik' },
  // Irma ist die Haushaltshilfe, keine Kinderbetreuung.
  { key: 'haushalt', pattern: /^Irma/i, icon: '🧹', label: 'Haushalt' },
  { key: 'betreuung', pattern: /Oma-Tag|Opa-Tag/i, icon: '👵', label: 'Betreuung' },
]

/** Abfuhrtermine heißen im Kalender z.B. "Abfuhr gelbe Wertstofftonne/-sack".
 *  In einer Tagesspalte ist das zu lang — Farbpunkt plus ein Wort genügt. */
const WASTE_BINS = [
  { pattern: /gelbe?\s+(wertstoff|sack)/i, label: 'Gelber Sack', color: '#c9a227' },
  { pattern: /bio/i, label: 'Bio', color: '#5c8a3a' },
  { pattern: /papier|blaue/i, label: 'Papier', color: '#3f74b0' },
  { pattern: /restmüll|schwarze/i, label: 'Restmüll', color: '#6e6e78' },
]

/**
 * Kürzt überlange Titel für die Anzeige. Der Kalendereintrag selbst bleibt
 * unverändert — gekürzt wird nur, was auf dem Tablet dargestellt wird.
 */
export const displayTitle = (summary) => {
  const text = (summary || '').trim()
  if (!/^Abfuhr/i.test(text)) return text
  const bin = WASTE_BINS.find(({ pattern }) => pattern.test(text))
  return bin ? bin.label : text.replace(/^Abfuhr\s+/i, '')
}

/** Farbpunkt für Abfuhrtermine, sonst null. */
export const wasteColor = (summary) => {
  const text = (summary || '').trim()
  if (!/^Abfuhr/i.test(text)) return null
  const bin = WASTE_BINS.find(({ pattern }) => pattern.test(text))
  return bin ? bin.color : null
}

/**
 * Ordnet einen Termin ein.
 *
 * @param {{summary?: string, description?: string}} event Rohes HA-Kalenderobjekt
 * @returns {{persons: string[], primary: string, away: string|null,
 *            activity: string|null, icon: string|null, title: string,
 *            wasteColor: string|null}}
 */
export const classifyEvent = (event) => {
  const summary = (event && event.summary) || ''
  const description = (event && event.description) || ''

  // Regel 4 zuerst, damit die Aktivität unabhängig von der Person feststeht.
  const activity = ACTIVITIES.find(({ pattern }) => pattern.test(summary)) || null

  // Regel 1
  const persons = NAME_PATTERNS
    .filter(([ , pattern ]) => pattern.test(summary))
    .map(([ id ]) => id)

  // Regel 3: Hockey gehört Norell, auch wenn der Titel ihn nicht nennt.
  const isHockey = activity && activity.key === 'hockey'
  if ((HOCKEY_SYNC_PATTERN.test(description) || isHockey) && !persons.includes('norell')) {
    persons.push('norell')
  }

  // Regel 2
  const awayMatch = summary.match(AWAY_PATTERN)
  const away = awayMatch
    ? (/^bj/i.test(awayMatch[1]) ? 'bjoern' : awayMatch[1].toLowerCase())
    : null

  return {
    persons,
    // Bei mehreren Namen färbt der erste Treffer; die Reihenfolge von
    // NAME_PATTERNS ist damit bewusst stabil.
    primary: persons[0] || 'family',
    away,
    activity: activity ? activity.key : (away ? 'abwesend' : null),
    icon: away ? '✈️' : (activity ? activity.icon : null),
    title: displayTitle(summary),
    wasteColor: wasteColor(summary),
  }
}

export default classifyEvent
