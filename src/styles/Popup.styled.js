import styled from 'styled-components'

const StyledPopup = styled.div`
    background-color: ${props=> props.type === 'warning' ? 'red' : 'green'};
    color: white;
    padding: 10px;
    height: 120px;
    width: 320px;
    position: absolute;
    top: 60px;
    z-index: 2;
`

export default StyledPopup
