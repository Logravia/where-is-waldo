import styled from 'styled-components'


const StyledMark = styled.div`
   position: absolute;
   top: ${props => props.showAt.y}%;
   left: ${props => props.showAt.x}%;
   width: 1px;
   height: 1px;
   display: flex;
   justify-content: center;
   align-items: center;

   & svg {
      width: 40px;
      height: 40px;
      opacity: 0.6;
      color: red;
   }
`
export default StyledMark
