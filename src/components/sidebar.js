import styled from 'styled-components'
import Weather from './weather'
import Hvv from './hvv'
import Garage from './garage'

const Div = styled.div`
  padding: 0 0 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  > * + * {
    margin-top: 24px;
  }
  
  h2 {
    font-size: 32px;
    font-weight: 400;
  }
`

const Sidebar = ({ toggleLoading }) => {
  return (
    <Div>
      <Weather toggleLoading={toggleLoading} />
      <Hvv />
      <Garage />
    </Div>
  )
}

export default Sidebar