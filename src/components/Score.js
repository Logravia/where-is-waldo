import SearchTime from './SearchTime'

function Score({startTime, found, total, gameEnded}) {
 return (
   <div>
     <SearchTime startTime={startTime} gameEnded = {gameEnded}/>
     <p>Characters found: {found}</p>
     <p>Characters yet to be found: {total}</p>
   </div>
 )
}

export default Score
