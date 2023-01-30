import StyledVictoryScreen from '../styles/VictoryScreen.styled'
import SubmitScore from './SubmitScore'

function VictoryScreen ({time, submitScore}) {
  return (
    <StyledVictoryScreen>
      <h1>You won! Congratulations!</h1>
      <SubmitScore time={time} submitScore={submitScore}/>
    </StyledVictoryScreen>
  )
}

export default VictoryScreen
