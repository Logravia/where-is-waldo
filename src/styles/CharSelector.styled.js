import styled from 'styled-components'

const offset = 1;

export const StyledCharSelector = styled.div`
   position: absolute;
   background: white;
   border-style: solid;
   border-color: white;
   border-width: 15px;
   border-radius: 10px;
   opacity: 0.92;
   top: ${props => props.showAt.y + offset}%;
   left: ${props => props.showAt.x + offset}%;
`
