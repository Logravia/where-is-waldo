import { useState } from 'react';
import CharSelector from './CharSelector'
import StyledCanvas from '../styles/Canvas.styled'
import {withinRectangle} from '../helper'
import MarkContainer from './MarkContainer'
import Popup from './Popup'

function Canvas({img, chars, getCharArea, removeChar, startGame, gameStarted}) {

  let [showingSelector, setShowingSelector] = useState(false)
  let [showingPopup, setShowingPopup] = useState(false)
  let [popupData, setPopupData] = useState({})
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

  function showPopUp(msg, type, length = 3000) {
    setPopupData({message: msg, type: type})
    setShowingPopup(true)
    setTimeout(_=>setShowingPopup(false), length);
  }

  function handleClick(e) {
    if (chars.length === 0 || !gameStarted){return}

    let coords = captureCoords(e);
    let relative = relativeCoords(e.currentTarget, coords);
    setClickCoords(relative);
    setShowingSelector(!showingSelector);
  }

  async function handleSelection(charName) {
    const rect = await getCharArea(charName);

    if (withinRectangle(clickCoords, rect)) {
      showPopUp("You got it!", "success");
      setShowingSelector(false);

      let [...newMarkedCoords] = markedCoords;
      newMarkedCoords.push(clickCoords);
      setMarkedCoords(newMarkedCoords);
      removeChar(charName);
    } else {
      showPopUp(`Whoops, that ain't ${charName}`, "warning");
      setShowingSelector(false);
    }
  }

  return (
    <StyledCanvas onClick={handleClick}>
      {showingPopup ? <Popup data={popupData} /> : null}
      {gameStarted ? <img alt="" src={img} /> : <h1 onClick={startGame}>Click Here To Start!</h1>}
      {markedCoords.length > 0 ? <MarkContainer locations={markedCoords}/> : null}
      {showingSelector ? <CharSelector showAt={clickCoords} chars={chars} handleSelection={handleSelection}/> : null}
    </StyledCanvas>
  )
}

export default Canvas
