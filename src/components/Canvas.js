import { useState, useEffect } from 'react';
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
  let [imgRes, setImgRes] = useState({width: 0, height: 0});

  useEffect(() => {
    function noteImgRes() {
      let newImg = new Image();

      newImg.onload = function () {
        let height = newImg.height;
        let width = newImg.width;
        setImgRes({ width: width, height: height })
      }

      newImg.src = img;
    }

    noteImgRes();
  }, [img])

  function captureCoords(e) {
    let viewportCoords = { x: e.clientX, y: e.clientY }
    return viewportCoords;
  }


  function scaledImgSize(img) {
    return {width: img.width, height: img.height}
  }

  // Returns coordinates
  function clickedOnImgWhere(container, viewportCoords) {
    let scaledImg = container.firstChild;
    let selfCoords = scaledImg.getBoundingClientRect();
    let ratio = (imgRes.width/scaledImgSize(scaledImg).width)

    return {
      x: (viewportCoords.x - selfCoords.x) * ratio,
      y: (viewportCoords.y - selfCoords.y) * ratio
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
    let relative = clickedOnImgWhere(e.currentTarget, coords);
    setClickCoords(relative);
    setShowingSelector(!showingSelector);
  }

  async function handleSelection(charName) {
    const rect = getCharArea(charName);




    console.log("You clicked here:", clickCoords);

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
