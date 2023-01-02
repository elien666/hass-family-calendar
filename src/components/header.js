import Icon from '@mdi/react'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import styled from 'styled-components'
import { DateTime } from 'luxon'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = ({ startDate, setStartDate }) => {
  return (
    <Div>
      <h1>{startDate.toLocaleString(DateTime.DATE_MED)}</h1>
      <div>
        <Icon path={mdiChevronLeft}
              size={'32px'}
              color='#ffffff'
              onClick={() => setStartDate((date) => date.minus({ days: 7 }))}/>
        <Icon path={mdiChevronRight}
              size={'32px'}
              color='#ffffff'
              onClick={() => setStartDate((date) => date.plus({ days: 7 }))}/>
      </div>
    </Div>
  )
}

export default Header