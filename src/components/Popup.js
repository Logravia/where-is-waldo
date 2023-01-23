import StyledPopup from '../styles/Popup.styled'

function Popup ({data}) {
  return (
    <StyledPopup type={data.type}>
      <p>{data.message}</p>
    </StyledPopup>
  )
}

export default Popup
