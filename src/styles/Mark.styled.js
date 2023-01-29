import styled from 'styled-components'


const StyledMark = styled.div`
   position: absolute;
   width: 95%;
   top: ${props => props.showAt.y}%;
   left: ${props => props.showAt.x}%;
   width: 1px;
   height: 1px;
   display: flex;
   justify-content: center;
   align-items: center;

`
export default StyledMark
