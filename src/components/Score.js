import SearchTime from './SearchTime'
import ScoreDataSpan from '../styles/ScoreDataSpan.styled'

function Score({startTime, found, total, gameEnded}) {
 return (
   <div>
     <SearchTime startTime={startTime} gameEnded = {gameEnded}/>
     <p>Characters found: <ScoreDataSpan>{found}</ScoreDataSpan></p>
     <p>Characters yet to be found: <ScoreDataSpan>{total}</ScoreDataSpan></p>
   </div>
 )
}

export default Score
