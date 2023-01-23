function Score({time, found, total}) {
 return (
   <div>
     <p>Time spent searching: {time}</p>
     <p>Characters found: {found}</p>
     <p>Characters yet to be found: {total}</p>
   </div>
 )
}

export default Score
