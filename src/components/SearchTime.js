import { useEffect, useState } from 'react';
import { format } from 'date-fns'
import ScoreDataSpan from '../styles/ScoreDataSpan.styled'

function SearchTime({ startTime, gameEnded}) {

  let [timePassed, setTimePassed] = useState('00:00')
  let [interval, saveInterval] = useState(undefined);

  function updatePassedTime() {
    let timeDiff = Date.now() - startTime
    let dateObj = new Date(timeDiff)
    setTimePassed(format(dateObj, 'mm:ss'))
  }


  useEffect(() => {
    if (startTime === undefined) { return; }
    if (gameEnded) {clearInterval(interval); return;}

    saveInterval(setInterval(() => {
      updatePassedTime()
    }, 1000))

    return () => { clearInterval(interval); console.log("I was unmounted", interval) }
  }, [startTime, gameEnded])

  return (

    <p>Time spent searching: <ScoreDataSpan>{timePassed}</ScoreDataSpan></p>
  )
}

export default SearchTime
