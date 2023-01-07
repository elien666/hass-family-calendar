import styled from 'styled-components'
import clsx from 'clsx'

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
  
  &.visible {
    visibility: visible;
  }
  
  .content {
    background-color: #1c1c1c;
    border-radius: 4px;
    width: 80vw;
    padding: 12px 24px;
    
    h2 {
      margin: 0;
      padding: 0;
    }
  }
`

const Overlay = ({ visible, children }) => {

 return (
   <Div className={clsx({ visible })}>
     <div className={'content'} onClick={(event) => event.stopPropagation()}>
       {children}
     </div>
   </Div>
 )
}

export default Overlay