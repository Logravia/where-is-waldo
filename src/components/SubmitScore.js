import {useState} from 'react'
import { format } from 'date-fns'
import StyledSubmitScore from '../styles/SubmitScore.styled'

const scoreFormat = 'mm:ss:SSS'

function SubmitScore({time, submitScore}) {

  let [name, setName] = useState("");

  function noteChange(e) {
    let inputVal = e.currentTarget.value;
    setName(inputVal);
  }

  function formatedTime(){
    let dateObj = new Date(time);
    return format(dateObj, scoreFormat);
  }

  return (
    <StyledSubmitScore>
      <p>Your times is {formatedTime()}</p>
      <input name="" type="text" value={name} onChange={noteChange}/>
      <button onClick={_=>{submitScore(name)}}>Submit</button>
    </StyledSubmitScore>
  )
}

export default SubmitScore
