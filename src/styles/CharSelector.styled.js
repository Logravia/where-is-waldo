import styled from 'styled-components'

export const StyledCharSelector = styled.div`
   position: absolute;
   border-style: solid;
   top: ${props => props.showAt.y + 5}px;
   left: ${props => props.showAt.x + 5}px;
`
