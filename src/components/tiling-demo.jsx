import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { calculateOptimalTiling } from '../utils/video-tiling'

// Screen size presets
const SCREEN_PRESETS = [
  { name: 'Full HD', width: 1920, height: 1080 },
  { name: 'HD', width: 1366, height: 768 },
  { name: 'QHD', width: 2560, height: 1440 },
  { name: '4K', width: 3840, height: 2160 },
  { name: 'Amazon Fire HD 7"', width: 1280, height: 800 },
  { name: 'Custom', width: null, height: null }
]

// Test scenarios for all permutations
const TEST_SCENARIOS = [
  // 1 video scenarios
  { name: '1 Video - Landscape', videos: [{ orientation: 'landscape' }] },
  { name: '1 Video - Portrait', videos: [{ orientation: 'portrait' }] },
  { name: '1 Video - Wide', videos: [{ orientation: 'wide' }] },
  
  // 2 video scenarios
  { name: '2 Videos - LL', videos: [{ orientation: 'landscape' }, { orientation: 'landscape' }] },
  { name: '2 Videos - LP', videos: [{ orientation: 'landscape' }, { orientation: 'portrait' }] },
  { name: '2 Videos - LW', videos: [{ orientation: 'landscape' }, { orientation: 'wide' }] },
  { name: '2 Videos - PP', videos: [{ orientation: 'portrait' }, { orientation: 'portrait' }] },
  { name: '2 Videos - PW', videos: [{ orientation: 'portrait' }, { orientation: 'wide' }] },
  { name: '2 Videos - WW', videos: [{ orientation: 'wide' }, { orientation: 'wide' }] },
  
  // 3 video scenarios
  { name: '3 Videos - LLL', videos: [{ orientation: 'landscape' }, { orientation: 'landscape' }, { orientation: 'landscape' }] },
  { name: '3 Videos - LLP', videos: [{ orientation: 'landscape' }, { orientation: 'landscape' }, { orientation: 'portrait' }] },
  { name: '3 Videos - LLW', videos: [{ orientation: 'landscape' }, { orientation: 'landscape' }, { orientation: 'wide' }] },
  { name: '3 Videos - LPW', videos: [{ orientation: 'landscape' }, { orientation: 'portrait' }, { orientation: 'wide' }] },
  { name: '3 Videos - LPP', videos: [{ orientation: 'landscape' }, { orientation: 'portrait' }, { orientation: 'portrait' }] },
  { name: '3 Videos - LWW', videos: [{ orientation: 'landscape' }, { orientation: 'wide' }, { orientation: 'wide' }] },
  { name: '3 Videos - PPP', videos: [{ orientation: 'portrait' }, { orientation: 'portrait' }, { orientation: 'portrait' }] },
  { name: '3 Videos - PWW', videos: [{ orientation: 'portrait' }, { orientation: 'wide' }, { orientation: 'wide' }] },
  { name: '3 Videos - WWW', videos: [{ orientation: 'wide' }, { orientation: 'wide' }, { orientation: 'wide' }] },
  
  // 4 video scenarios
  { name: '4 Videos - LLLL', videos: [{ orientation: 'landscape' }, { orientation: 'landscape' }, { orientation: 'landscape' }, { orientation: 'landscape' }] },
  { name: '4 Videos - LLLP', videos: [{ orientation: 'landscape' }, { orientation: 'landscape' }, { orientation: 'landscape' }, { orientation: 'portrait' }] },
  { name: '4 Videos - LLPP', videos: [{ orientation: 'landscape' }, { orientation: 'landscape' }, { orientation: 'portrait' }, { orientation: 'portrait' }] },
  { name: '4 Videos - LPPP', videos: [{ orientation: 'landscape' }, { orientation: 'portrait' }, { orientation: 'portrait' }, { orientation: 'portrait' }] },
  { name: '4 Videos - PPPP', videos: [{ orientation: 'portrait' }, { orientation: 'portrait' }, { orientation: 'portrait' }, { orientation: 'portrait' }] },
  { name: '4 Videos - LLLW', videos: [{ orientation: 'landscape' }, { orientation: 'landscape' }, { orientation: 'landscape' }, { orientation: 'wide' }] },
  { name: '4 Videos - LLWW', videos: [{ orientation: 'landscape' }, { orientation: 'landscape' }, { orientation: 'wide' }, { orientation: 'wide' }] },
  { name: '4 Videos - LWWW', videos: [{ orientation: 'landscape' }, { orientation: 'wide' }, { orientation: 'wide' }, { orientation: 'wide' }] },
  { name: '4 Videos - WWWW', videos: [{ orientation: 'wide' }, { orientation: 'wide' }, { orientation: 'wide' }, { orientation: 'wide' }] }
]

// Color mapping for orientations
const ORIENTATION_COLORS = {
  landscape: '#4A90E2',
  portrait: '#50C878',
  wide: '#FF8C42'
}

const ORIENTATION_LABELS = {
  landscape: 'L',
  portrait: 'P',
  wide: 'W'
}

const Container = styled.div`
  padding: 24px;
  background-color: #1c1c1c;
  color: #ffffff;
  min-height: 100vh;
  font-family: Lato, Helvetica, sans-serif;
`

const Header = styled.h1`
  margin: 0 0 24px 0;
  font-size: 2rem;
`

const ControlsPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #2a2a2a;
  border-radius: 8px;
`

const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Label = styled.label`
  font-size: 0.9rem;
  color: #cccccc;
`

const Select = styled.select`
  padding: 8px 12px;
  background-color: #3a3a3a;
  color: #ffffff;
  border: 1px solid #555;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #4A90E2;
  }
`

const Input = styled.input`
  padding: 8px 12px;
  background-color: #3a3a3a;
  color: #ffffff;
  border: 1px solid #555;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #4A90E2;
  }
`

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4A90E2;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #357ABD;
  }
  
  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const ScenarioButton = styled.button`
  padding: 6px 12px;
  background-color: ${props => props.active ? '#4A90E2' : '#3a3a3a'};
  color: #ffffff;
  border: 1px solid ${props => props.active ? '#4A90E2' : '#555'};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.active ? '#357ABD' : '#4a4a4a'};
  }
`

const CanvasContainer = styled.div`
  position: relative;
  background-color: #000000;
  border: 2px solid #555;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`

const VideoPlaceholder = styled.div`
  position: absolute;
  background-color: ${props => ORIENTATION_COLORS[props.orientation] || '#666'};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  box-sizing: border-box;
  transition: all 0.3s ease;
`

const VideoLabel = styled.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 4px;
`

const VideoDimensions = styled.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-align: center;
`

const MetricsPanel = styled.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const MetricLabel = styled.div`
  font-size: 0.85rem;
  color: #cccccc;
`

const MetricValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4A90E2;
`

const ScenariosSection = styled.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
`

const ScenariosTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 1.2rem;
`

const VideoControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const VideoControlRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const OrientationButton = styled.button`
  padding: 6px 12px;
  background-color: ${props => props.active ? ORIENTATION_COLORS[props.orientation] : '#3a3a3a'};
  color: #ffffff;
  border: 1px solid ${props => props.active ? ORIENTATION_COLORS[props.orientation] : '#555'};
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: ${props => props.active ? ORIENTATION_COLORS[props.orientation] : '#4a4a4a'};
  }
`

const TilingDemo = () => {
  const [canvasWidth, setCanvasWidth] = useState(1920)
  const [canvasHeight, setCanvasHeight] = useState(1080)
  const [selectedPreset, setSelectedPreset] = useState('Full HD')
  const [customWidth, setCustomWidth] = useState('')
  const [customHeight, setCustomHeight] = useState('')
  const [videos, setVideos] = useState([{ orientation: 'landscape' }])
  const [selectedScenario, setSelectedScenario] = useState(null)

  // Calculate layout when videos or canvas size changes
  const layout = useMemo(() => {
    return calculateOptimalTiling(videos, canvasWidth, canvasHeight)
  }, [videos, canvasWidth, canvasHeight])

  const handlePresetChange = (presetName) => {
    const preset = SCREEN_PRESETS.find(p => p.name === presetName)
    if (preset && preset.width && preset.height) {
      setCanvasWidth(preset.width)
      setCanvasHeight(preset.height)
      setSelectedPreset(presetName)
      setCustomWidth('')
      setCustomHeight('')
    } else if (presetName === 'Custom') {
      setSelectedPreset('Custom')
    }
  }

  const handleCustomSize = () => {
    const width = parseInt(customWidth)
    const height = parseInt(customHeight)
    if (width > 0 && height > 0) {
      setCanvasWidth(width)
      setCanvasHeight(height)
    }
  }

  const handleScenarioSelect = (scenario) => {
    setVideos(scenario.videos)
    setSelectedScenario(scenario.name)
  }

  const handleVideoCountChange = (count) => {
    const newVideos = []
    for (let i = 0; i < count; i++) {
      newVideos.push(videos[i] || { orientation: 'landscape' })
    }
    setVideos(newVideos)
    setSelectedScenario(null)
  }

  const handleVideoOrientationChange = (index, orientation) => {
    const newVideos = [...videos]
    newVideos[index] = { orientation }
    setVideos(newVideos)
    setSelectedScenario(null)
  }

  // Scale factor for display (to fit on screen)
  const scale = Math.min(1, Math.min(window.innerWidth * 0.9 / canvasWidth, (window.innerHeight - 400) / canvasHeight))

  return (
    <Container>
      <Header>Video Tiling Algorithm Demo</Header>
      
      <ControlsPanel>
        <ControlGroup>
          <Label>Screen Size Preset</Label>
          <Select value={selectedPreset} onChange={(e) => handlePresetChange(e.target.value)}>
            {SCREEN_PRESETS.map(preset => (
              <option key={preset.name} value={preset.name}>{preset.name}</option>
            ))}
          </Select>
        </ControlGroup>

        {selectedPreset === 'Custom' && (
          <>
            <ControlGroup>
              <Label>Custom Width</Label>
              <Input
                type="number"
                value={customWidth}
                onChange={(e) => setCustomWidth(e.target.value)}
                placeholder="Width"
                min="100"
              />
            </ControlGroup>
            <ControlGroup>
              <Label>Custom Height</Label>
              <Input
                type="number"
                value={customHeight}
                onChange={(e) => setCustomHeight(e.target.value)}
                placeholder="Height"
                min="100"
              />
            </ControlGroup>
            <ControlGroup>
              <Label>&nbsp;</Label>
              <Button onClick={handleCustomSize}>Apply Custom Size</Button>
            </ControlGroup>
          </>
        )}

        <ControlGroup>
          <Label>Number of Videos</Label>
          <Select value={videos.length} onChange={(e) => handleVideoCountChange(parseInt(e.target.value))}>
            <option value="1">1 Video</option>
            <option value="2">2 Videos</option>
            <option value="3">3 Videos</option>
            <option value="4">4 Videos</option>
          </Select>
        </ControlGroup>

        {videos.map((video, index) => (
          <ControlGroup key={index}>
            <Label>Video {index + 1} Orientation</Label>
            <ButtonGroup>
              <OrientationButton
                active={video.orientation === 'landscape'}
                orientation="landscape"
                onClick={() => handleVideoOrientationChange(index, 'landscape')}
              >
                Landscape
              </OrientationButton>
              <OrientationButton
                active={video.orientation === 'portrait'}
                orientation="portrait"
                onClick={() => handleVideoOrientationChange(index, 'portrait')}
              >
                Portrait
              </OrientationButton>
              <OrientationButton
                active={video.orientation === 'wide'}
                orientation="wide"
                onClick={() => handleVideoOrientationChange(index, 'wide')}
              >
                Wide
              </OrientationButton>
            </ButtonGroup>
          </ControlGroup>
        ))}
      </ControlsPanel>

      <ScenariosSection>
        <ScenariosTitle>Test Scenarios</ScenariosTitle>
        <ButtonGroup>
          {TEST_SCENARIOS.map(scenario => (
            <ScenarioButton
              key={scenario.name}
              active={selectedScenario === scenario.name}
              onClick={() => handleScenarioSelect(scenario)}
            >
              {scenario.name}
            </ScenarioButton>
          ))}
        </ButtonGroup>
      </ScenariosSection>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
        <CanvasContainer
          style={{
            width: `${canvasWidth * scale}px`,
            height: `${canvasHeight * scale}px`
          }}
        >
          {layout.videos.map((video, index) => (
            <VideoPlaceholder
              key={index}
              orientation={video.orientation}
              style={{
                left: `${video.x * scale}px`,
                top: `${video.y * scale}px`,
                width: `${video.width * scale}px`,
                height: `${video.height * scale}px`
              }}
            >
              <VideoLabel>
                {ORIENTATION_LABELS[video.orientation]} {index + 1}
              </VideoLabel>
              <VideoDimensions>
                {Math.round(video.width)} × {Math.round(video.height)}
              </VideoDimensions>
            </VideoPlaceholder>
          ))}
        </CanvasContainer>
      </div>

      <MetricsPanel>
        <Metric>
          <MetricLabel>Canvas Size</MetricLabel>
          <MetricValue>{canvasWidth} × {canvasHeight}</MetricValue>
        </Metric>
        <Metric>
          <MetricLabel>Total Area Used</MetricLabel>
          <MetricValue>{Math.round(layout.totalArea).toLocaleString()} px²</MetricValue>
        </Metric>
        <Metric>
          <MetricLabel>Efficiency</MetricLabel>
          <MetricValue>{layout.efficiency.toFixed(2)}%</MetricValue>
        </Metric>
        <Metric>
          <MetricLabel>Display Scale</MetricLabel>
          <MetricValue>{(scale * 100).toFixed(1)}%</MetricValue>
        </Metric>
      </MetricsPanel>
    </Container>
  )
}

export default TilingDemo

