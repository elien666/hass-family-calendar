import { describe, it, expect } from 'vitest'
import { transformData } from '../../utils/use-hvv'

describe('use-hvv transformData', () => {

  it('should transform departures into from/to arrays', () => {
    const data = {
      departures: [
        { line: { name: 'U1', direction: 'Norderstedt' }, timeOffset: 5, delay: 60, directionId: 1 },
        { line: { name: 'U1', direction: 'Großhansdorf' }, timeOffset: 3, delay: null, directionId: 6 },
        { line: { name: '171', direction: 'Wandsbek Markt' }, timeOffset: 10, delay: 0, directionId: 1 },
      ],
    }

    const result = transformData(data)

    expect(result.from).toHaveLength(2)
    expect(result.to).toHaveLength(1)
    expect(result.from[0]).toMatchObject({ line: 'U1', direction: 'Norderstedt' })
    expect(result.to[0]).toMatchObject({ line: 'U1', direction: 'Großhansdorf' })
  })

  it('should not crash when departures is undefined', () => {
    const data = { returnCode: 'ERROR_CN_HCI_NO_RESULTS' }

    const result = transformData(data)

    expect(result).toEqual({ from: [], to: [] })
  })

  it('should not crash when data is undefined', () => {
    const result = transformData(undefined)

    expect(result).toEqual({ from: [], to: [] })
  })

  it('should not crash when data is null', () => {
    const result = transformData(null)

    expect(result).toEqual({ from: [], to: [] })
  })

  it('should handle empty departures array', () => {
    const data = { departures: [] }

    const result = transformData(data)

    expect(result).toEqual({ from: [], to: [] })
  })

  it('should sort by realtimeOffset', () => {
    const data = {
      departures: [
        { line: { name: 'U1', direction: 'Norderstedt' }, timeOffset: 15, delay: null, directionId: 1 },
        { line: { name: '171', direction: 'Wandsbek Markt' }, timeOffset: 5, delay: null, directionId: 1 },
        { line: { name: '9', direction: 'Bf. Rahlstedt' }, timeOffset: 10, delay: null, directionId: 1 },
      ],
    }

    const result = transformData(data)

    expect(result.from[0].realtimeOffset).toBe(5)
    expect(result.from[1].realtimeOffset).toBe(10)
    expect(result.from[2].realtimeOffset).toBe(15)
  })

  it('should limit to 3 entries per direction', () => {
    const data = {
      departures: [
        { line: { name: 'U1', direction: 'A' }, timeOffset: 1, delay: null, directionId: 1 },
        { line: { name: 'U1', direction: 'B' }, timeOffset: 2, delay: null, directionId: 1 },
        { line: { name: 'U1', direction: 'C' }, timeOffset: 3, delay: null, directionId: 1 },
        { line: { name: 'U1', direction: 'D' }, timeOffset: 4, delay: null, directionId: 1 },
        { line: { name: 'U1', direction: 'E' }, timeOffset: 5, delay: null, directionId: 1 },
      ],
    }

    const result = transformData(data)

    expect(result.from).toHaveLength(3)
  })
})
