import styled from 'styled-components'

const radius = 30;

const StyledMark = styled.div`
   position: absolute;
   border-style: solid;
   top: ${props => props.showAt.y-radius}px;
   left: ${props => props.showAt.x-radius}px;
   width: ${radius*2}px;
   height: ${radius*2}px;
   border-radius: 100%;
   border-color: green;
   border-width: 8px;
   box-sizing: border-box;
`
export default StyledMark
