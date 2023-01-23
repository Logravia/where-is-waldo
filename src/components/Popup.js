import StyledPopup from '../StyledPopup.styled'

function Popup ({message, type}) {
  return (
    <StyledPopup type={type}>
      <p>{message}</p>
    </StyledPopup>
  )
}

export default Popup
