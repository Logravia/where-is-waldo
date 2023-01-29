import StyledPopup from '../styles/Popup.styled'

function Popup ({data, showAt}) {
  return (
    <StyledPopup type={data.type} showAt={showAt}>
      <p>{data.message}</p>
    </StyledPopup>
  )
}

export default Popup
