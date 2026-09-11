import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.js'

export default mergeConfig(viteConfig({ mode: 'test' }), defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    // Feste Zeitzone: Der Kalender rechnet Termine in die lokale Zone um, und
    // die CI läuft in UTC. Ohne diese Festlegung schlagen Tests, die eine
    // Wanduhrzeit prüfen, nur auf der CI fehl — lokal (Europe/Berlin) bleiben
    // sie grün, was den Fehler erst im Release-PR sichtbar macht.
    env: { TZ: 'Europe/Berlin' },
    setupFiles: ['./src/__tests__/setup.js'],
    include: ['src/**/*.test.js'],
    exclude: ['node_modules', 'add-on/dist'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json'],
      include: ['src/**/*.{js,jsx}'],
      exclude: ['src/__tests__/**', 'src/fonts/**'],
    },
  },
}))
