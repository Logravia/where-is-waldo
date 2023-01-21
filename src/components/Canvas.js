import { useState } from 'react';
import CharSelector from './CharSelector'
import StyledCanvas from '../styles/Canvas.styled'
import {withinRectangle} from '../helper'

function Canvas({img, chars, getCharArea}) {

  let [showPopUp, setShowPopUp] = useState(false)
  let [clickCoords, setClickCoords] = useState(undefined)

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
    setShowPopUp(true);
  }

  async function handleSelection(charName) {
    const rectangle = await getCharArea(charName);

    if (withinRectangle(clickCoords, rectangle)) {
      // note that it is a success
      console.log("You got it", clickCoords);
      setShowPopUp(false);
    } else {
     // note that it is a failure
      console.log("Nope!", clickCoords);
      setShowPopUp(false);
    }
  }

  return (
    <StyledCanvas onClick={handleClick}>
      <img alt="" src={img} />
      {showPopUp ? <CharSelector showAt={clickCoords} chars={chars} handleSelection={handleSelection}/> : null}
    </StyledCanvas>
  )
}

export default Canvas
