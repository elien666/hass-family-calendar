import { mdiGarageVariant } from '@mdi/js'
import Icon from '@mdi/react'
import styled from 'styled-components'
import useGarageDoor from '../utils/use-garage-door'

const Div = styled.div`
  padding-bottom: 12px;
  
  h2 {
    margin: 1.5rem 0 1rem;
    padding: 0;
  }
  
  > div {
    display: flex;
    align-items: center;
    
    span {
      margin-left: 1rem;
    }
  }
`

const toPresentation = (state) => {
  const map = {
    'unknown': 'In Bewegung oder halb-offen',
    'open': 'Offen',
    'closed': 'Geschlossen'
  }
  return map[state]
}

const Garage = () => {

  const garageDoor = useGarageDoor()

  return (
    <Div>
      <h2>Garage</h2>
      <div>
        <Icon path={mdiGarageVariant} size={'3rem'} color='#ffffff'/>
        <span>{toPresentation(garageDoor)}</span>
      </div>
    </Div>
  )
}

export default Garage