function Score({time, found, total}) {
 return (
   <div>
     <p>Time spent searching: {time}</p>
     <p>Cages found: {found}</p>
     <p>Cages yet to find: {total}</p>
   </div>
 )
}

export default Score
