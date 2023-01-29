import styled from 'styled-components'


const offset = 2;

const StyledPopup = styled.div`
    background-color: ${props=> props.type === 'warning' ? 'red' : 'green'};
    color: white;
    padding: 10px;
    height: 120px;
    width: 320px;
    position: absolute;
    top: ${props => props.showAt.y + offset}%;
    left: ${props => props.showAt.x + offset}%;
    z-index: 2;
    opacity: 0.9;
    text-align: center;
    font-size: 1.5em;
    border-radius: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default StyledPopup
