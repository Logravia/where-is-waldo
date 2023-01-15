import React, { useState } from 'react';
import CharSelector from './CharSelector'
import StyledCanvas from '../styles/Canvas.styled'

function Canvas({chars, image}) {

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
    console.log(relative)
    setClickCoords(relative);
    setShowPopUp(true);
    console.log("Hi")
  }

  function selectionDone(selected) {

  }

  return (
    <StyledCanvas onClick={handleClick}>
      <h1>Test</h1>
      {showPopUp ? <CharSelector showAt={clickCoords} chars={chars} /> : null}
    </StyledCanvas>
  )
}

export default Canvas
