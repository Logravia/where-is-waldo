import StyledMark from '../styles/Mark.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons'


function Mark({showAt}) {
  return (
    <StyledMark showAt={showAt}>
      <FontAwesomeIcon icon={faCrosshairs}/>
    </StyledMark>
  )
}

export default Mark
