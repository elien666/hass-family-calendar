import styled from 'styled-components'
import clsx from 'clsx'
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'

const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.6);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  z-index: 10;
  
  &.visible {
    visibility: visible;
  }
  
  .content {
    background-color: #1c1c1c;
    border-radius: 24px;
    width: 80vw;
    padding: 12px 24px;
    position: relative;
    border: solid 12px rgba(255,255,255,.1);
    
    h2 {
      margin: 0;
      padding: 0;
    }
  }
  .close {
    position: absolute;
    right: -1rem;
    top: -4rem;
    text-align: right;
    cursor: pointer;
    margin: 0 0 2rem 0;
  }
`

const Overlay = ({ visible, children, onClick }) => {

 return (
   <Div className={clsx({ visible })}>
     <div className={'content'} onClick={(event) => event.stopPropagation()}>
      <div className='close'><Icon path={mdiClose} size={2} onClick={onClick}/></div>
       {children}
     </div>
   </Div>
 )
}

export default Overlay