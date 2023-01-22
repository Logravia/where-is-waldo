import { useState } from 'react';
import CharSelector from './CharSelector'
import StyledCanvas from '../styles/Canvas.styled'
import {withinRectangle} from '../helper'
import MarkContainer from './MarkContainer'

function Canvas({img, chars, getCharArea}) {

  let [showPopUp, setShowPopUp] = useState(false)
  let [clickCoords, setClickCoords] = useState(undefined)
  let [markedCoords, setMarkedCoords] = useState([])

  function captureCoords(e) {
    let viewportCoords = { x: e.clientX, y: e.clientY }
    return viewportCoords;
  }

  // Returns coordinates relative to the container that was clicked
  function relativeCoords(container, viewportCoords) {
    let selfCoords = container.getBoundingClientRect();

    return {
      x: viewportCoords.x - selfCoords.x,
      y: viewportCoords.y - selfCoords.y
    }
  }

  function handleClick(e) {
    let coords = captureCoords(e);
    let relative = relativeCoords(e.currentTarget, coords);
    setClickCoords(relative);
    setShowPopUp(!showPopUp);
  }

  async function handleSelection(charName) {
    const rect = await getCharArea(charName);

    if (withinRectangle(clickCoords, rect)) {
      // TODO: note that it is a success
      console.log("You got it", clickCoords);
      setShowPopUp(false);

      let [...newMarkedCoords] = markedCoords;
      newMarkedCoords.push(clickCoords);
      setMarkedCoords(newMarkedCoords);
    } else {
     // note that it is a failure
      console.log("Nope!", clickCoords);
      setShowPopUp(false);
    }
  }

  return (
    <StyledCanvas onClick={handleClick}>
      <img alt="" src={img} />
      {markedCoords.length > 0 ? <MarkContainer locations={markedCoords}/> : null}
      {showPopUp ? <CharSelector showAt={clickCoords} chars={chars} handleSelection={handleSelection}/> : null}
    </StyledCanvas>
  )
}

export default Canvas
