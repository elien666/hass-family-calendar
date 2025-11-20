#!/usr/bin/env node
// Fix merry-timeline package.json module field
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const merryTimelinePath = path.join(
  __dirname,
  '..',
  'node_modules',
  '.pnpm',
  'merry-timeline@0.5.0',
  'node_modules',
  'merry-timeline',
  'package.json'
)

// Try to find the package in various locations
const possiblePaths = [
  merryTimelinePath,
  path.join(__dirname, '..', 'node_modules', 'merry-timeline', 'package.json'),
]

let packageJsonPath = null
for (const p of possiblePaths) {
  if (fs.existsSync(p)) {
    packageJsonPath = p
    break
  }
}

if (!packageJsonPath) {
  console.log('merry-timeline not found, skipping fix')
  process.exit(0)
}

try {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
  
  // Check if fix is needed
  if (packageJson.module === 'index.js' && fs.existsSync(path.join(path.dirname(packageJsonPath), 'index.js'))) {
    console.log('merry-timeline package.json already correct or fix not needed')
    process.exit(0)
  }
  
  // Update module field
  packageJson.module = 'index.js'
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
  console.log('Fixed merry-timeline package.json module field')
} catch (error) {
  console.warn('Could not fix merry-timeline:', error.message)
  process.exit(0) // Don't fail the install
}

