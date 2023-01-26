import { useEffect, useState } from 'react';
import {format} from 'date-fns'

function SearchTime({ startTime, endTime }) {

  let [timePassed, setTimePassed] = useState('00:00')

  function updatePassedTime() {
    let timeDiff = Date.now() - startTime
    let dateObj = new Date(timeDiff)
    setTimePassed(format(dateObj, 'mm:ss'))
  }

  useEffect(() => {
    if (startTime === undefined) { return; }

    let interval = setInterval(() => {
      updatePassedTime()
    }, 1000)

    return ()=>{clearInterval(interval); console.log("I was unmounted")}
  }, [startTime])

  return (

    <p>Time spent searching: {timePassed}</p>
  )
}

export default SearchTime
