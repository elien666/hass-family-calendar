import styled from 'styled-components'
import Weather from './weather'
import Hvv from './hvv'
import Garage from './garage'
import Laundry from './laundry'

const Div = styled.div`
  padding: 0 0 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    justify-content: flex-start;
  }
  
  > * + * {
    margin-top: 24px;
  }
  
  h2 {
    font-size: 32px;
    font-weight: 400;
  }
  
  .two-cols {
    display: flex;

    @media only screen and (max-width: 1200px) {
      margin-top: 3rem;
    }
    
    > * {
      width: 50%;
    }
    
    > *:nth-child(1) {
      padding-right: 6px;
    }

    > *:nth-child(2) {
      padding-left: 6px;
    }
  }
`

const Sidebar = ({ pin }) => {
  return (
    <Div>
      <Weather pin={pin} />
      <Hvv />
      <div className={'two-cols'}>
        <Garage />
        <Laundry />
      </div>
    </Div>
  )
}

export default Sidebar