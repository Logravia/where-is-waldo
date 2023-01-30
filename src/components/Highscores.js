import StyledHighScores from '../styles/HighScores.styled.js'
import HighScoreEntry from './HighScoreEntry';

function HighScores({scores}) {

  function sortedScores() {
    //TODO sort scores
    return scores
  }

  return (
    <StyledHighScores>
      {sortedScores.map(score=><HighScoreEntry score={score} key={score.id}/>)}
    </StyledHighScores>
  )
}

export default HighScores
