import styled from 'styled-components'

const StyledCanvas = styled.div`
    position: relative;
    width: 85%;
    text-align: center;

    &>img {
        width: 100%;
        border-style: solid;
        border-width: 0px;
        box-sizing: border-box;
        border-radius: 50px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`
export default StyledCanvas
