import SearchTime from './SearchTime'

function Score({startTime, found, total}) {
 return (
   <div>
     <SearchTime startTime={startTime}/>
     <p>Characters found: {found}</p>
     <p>Characters yet to be found: {total}</p>
   </div>
 )
}

export default Score
