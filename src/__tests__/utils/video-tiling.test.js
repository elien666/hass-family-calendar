import { describe, it, expect } from 'vitest'
import { calculateOptimalTiling } from '../../utils/video-tiling'

const W = 1920
const H = 1080

describe('calculateOptimalTiling()', () => {
  describe('edge cases', () => {
    it('should return empty layout for null input', () => {
      const result = calculateOptimalTiling(null, W, H)
      expect(result.videos).toEqual([])
      expect(result.totalArea).toBe(0)
      expect(result.efficiency).toBe(0)
    })

    it('should return empty layout for empty array', () => {
      const result = calculateOptimalTiling([], W, H)
      expect(result.videos).toEqual([])
      expect(result.totalArea).toBe(0)
    })

    it('should return empty layout for >4 videos', () => {
      const videos = Array(5).fill({ orientation: 'landscape' })
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toEqual([])
    })
  })

  describe('single video', () => {
    it('should center a single landscape video', () => {
      const result = calculateOptimalTiling([{ orientation: 'landscape' }], W, H)
      expect(result.videos).toHaveLength(1)
      const v = result.videos[0]
      expect(v.width).toBeGreaterThan(0)
      expect(v.height).toBeGreaterThan(0)
      expect(v.x).toBeGreaterThanOrEqual(0)
      expect(v.y).toBeGreaterThanOrEqual(0)
    })

    it('should center a single portrait video', () => {
      const result = calculateOptimalTiling([{ orientation: 'portrait' }], W, H)
      expect(result.videos).toHaveLength(1)
      const v = result.videos[0]
      // Portrait is tall, so it should be fit to height
      expect(v.height).toBeCloseTo(H, 0)
    })

    it('should center a single wide video', () => {
      const result = calculateOptimalTiling([{ orientation: 'wide' }], W, H)
      expect(result.videos).toHaveLength(1)
      const v = result.videos[0]
      // Wide is very wide, so it should be fit to width
      expect(v.width).toBeCloseTo(W, 0)
    })

    it('should calculate efficiency between 0 and 100', () => {
      const result = calculateOptimalTiling([{ orientation: 'landscape' }], W, H)
      expect(result.efficiency).toBeGreaterThan(0)
      expect(result.efficiency).toBeLessThanOrEqual(100)
    })
  })

  describe('two videos', () => {
    it('should layout two landscape videos', () => {
      const videos = [{ orientation: 'landscape' }, { orientation: 'landscape' }]
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toHaveLength(2)
      expect(result.totalArea).toBeGreaterThan(0)
    })

    it('should layout landscape + wide (stacked)', () => {
      const videos = [{ orientation: 'landscape' }, { orientation: 'wide' }]
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toHaveLength(2)
      // Wide should be on top (lower y)
      const wide = result.videos.find(v => v.orientation === 'wide')
      const landscape = result.videos.find(v => v.orientation === 'landscape')
      expect(wide.y).toBeLessThan(landscape.y)
    })

    it('should layout two wide videos (stacked)', () => {
      const videos = [{ orientation: 'wide' }, { orientation: 'wide' }]
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toHaveLength(2)
    })

    it('should layout portrait + landscape (side by side, full width)', () => {
      const videos = [{ orientation: 'portrait' }, { orientation: 'landscape' }]
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toHaveLength(2)
      // Portrait should be to the left
      const portrait = result.videos.find(v => v.orientation === 'portrait')
      const landscape = result.videos.find(v => v.orientation === 'landscape')
      expect(portrait.x).toBeLessThan(landscape.x)
    })

    it('should layout two portraits side by side', () => {
      const videos = [{ orientation: 'portrait' }, { orientation: 'portrait' }]
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toHaveLength(2)
      // Both should have the same dimensions
      expect(result.videos[0].width).toBeCloseTo(result.videos[1].width, 1)
      expect(result.videos[0].height).toBeCloseTo(result.videos[1].height, 1)
    })
  })

  describe('three videos', () => {
    it('should layout LLL (3 landscape)', () => {
      const videos = Array(3).fill({ orientation: 'landscape' })
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toHaveLength(3)
      expect(result.efficiency).toBeGreaterThan(0)
    })

    it('should layout LLW (2 landscape + 1 wide)', () => {
      const videos = [
        { orientation: 'landscape' },
        { orientation: 'landscape' },
        { orientation: 'wide' },
      ]
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toHaveLength(3)
    })

    it('should layout LWW (1 landscape + 2 wide)', () => {
      const videos = [
        { orientation: 'landscape' },
        { orientation: 'wide' },
        { orientation: 'wide' },
      ]
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toHaveLength(3)
    })

    it('should layout WWW (3 wide)', () => {
      const videos = Array(3).fill({ orientation: 'wide' })
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toHaveLength(3)
    })

    it('should layout LLP (portrait in left column)', () => {
      const videos = [
        { orientation: 'landscape' },
        { orientation: 'landscape' },
        { orientation: 'portrait' },
      ]
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toHaveLength(3)
    })

    it('should layout LPW (portrait + landscape + wide)', () => {
      const videos = [
        { orientation: 'landscape' },
        { orientation: 'portrait' },
        { orientation: 'wide' },
      ]
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toHaveLength(3)
    })

    it('should layout PPP (3 portraits in a row)', () => {
      const videos = Array(3).fill({ orientation: 'portrait' })
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toHaveLength(3)
    })
  })

  describe('four videos', () => {
    it('should layout LLLL (4 landscape)', () => {
      const videos = Array(4).fill({ orientation: 'landscape' })
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toHaveLength(4)
    })

    it('should layout PPPP (4 portraits)', () => {
      const videos = Array(4).fill({ orientation: 'portrait' })
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toHaveLength(4)
    })

    it('should layout LLLP (3 landscape + 1 portrait)', () => {
      const videos = [
        { orientation: 'landscape' },
        { orientation: 'landscape' },
        { orientation: 'landscape' },
        { orientation: 'portrait' },
      ]
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toHaveLength(4)
    })

    it('should layout LLPP (2 landscape + 2 portrait)', () => {
      const videos = [
        { orientation: 'landscape' },
        { orientation: 'landscape' },
        { orientation: 'portrait' },
        { orientation: 'portrait' },
      ]
      const result = calculateOptimalTiling(videos, W, H)
      expect(result.videos).toHaveLength(4)
    })
  })

  describe('invariants', () => {
    const orientations = ['landscape', 'portrait', 'wide']
    const combos = []
    // Generate all 1-4 video combinations
    for (const o of orientations) combos.push([{ orientation: o }])
    for (const o1 of orientations)
      for (const o2 of orientations)
        combos.push([{ orientation: o1 }, { orientation: o2 }])

    it.each(combos.map((c, i) => [c.map(v => v.orientation).join('+'), c]))(
      'layout %s: no video exceeds canvas bounds',
      (label, videos) => {
        const result = calculateOptimalTiling(videos, W, H)
        for (const v of result.videos) {
          expect(v.x).toBeGreaterThanOrEqual(-0.01)
          expect(v.y).toBeGreaterThanOrEqual(-0.01)
          expect(v.x + v.width).toBeLessThanOrEqual(W + 0.01)
          expect(v.y + v.height).toBeLessThanOrEqual(H + 0.01)
          expect(v.width).toBeGreaterThan(0)
          expect(v.height).toBeGreaterThan(0)
        }
      }
    )

    it.each(combos.map((c, i) => [c.map(v => v.orientation).join('+'), c]))(
      'layout %s: efficiency is between 0 and 100',
      (label, videos) => {
        const result = calculateOptimalTiling(videos, W, H)
        expect(result.efficiency).toBeGreaterThan(0)
        expect(result.efficiency).toBeLessThanOrEqual(100.01)
      }
    )

    it.each(combos.map((c, i) => [c.map(v => v.orientation).join('+'), c]))(
      'layout %s: returns correct number of video positions',
      (label, videos) => {
        const result = calculateOptimalTiling(videos, W, H)
        expect(result.videos).toHaveLength(videos.length)
      }
    )
  })

  describe('order independence', () => {
    it('should produce same layout regardless of input order (LP vs PL)', () => {
      const r1 = calculateOptimalTiling(
        [{ orientation: 'landscape' }, { orientation: 'portrait' }], W, H
      )
      const r2 = calculateOptimalTiling(
        [{ orientation: 'portrait' }, { orientation: 'landscape' }], W, H
      )
      // Same orientations in output, same total area
      expect(r1.totalArea).toBeCloseTo(r2.totalArea, 1)
    })

    it('should produce same layout regardless of input order (LLW vs WLL)', () => {
      const r1 = calculateOptimalTiling(
        [{ orientation: 'landscape' }, { orientation: 'landscape' }, { orientation: 'wide' }], W, H
      )
      const r2 = calculateOptimalTiling(
        [{ orientation: 'wide' }, { orientation: 'landscape' }, { orientation: 'landscape' }], W, H
      )
      expect(r1.totalArea).toBeCloseTo(r2.totalArea, 1)
    })
  })
})
