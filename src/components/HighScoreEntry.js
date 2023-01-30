import StyledHighScoreEntry from '../styles/HighScoreEntry.styled.js'

function HighScoreEntry({ score }) {
  return (
    <StyledHighScoreEntry>
      <p>Place: {score.place}</p>
      <p>Name: {score.name}</p>
      <p>Time: {score.time}</p>
    </StyledHighScoreEntry>
  )
}

export default HighScoreEntry
