import { useState, useEffect } from 'react';
import Canvas from './components/Canvas'
import StyledApp from './styles/App.styled'
import canvas from './imgs/canvas.jpg'
import Header from './components/Header'
import placeholder from './imgs/pidgey.png'

function App() {

  let [canvasImg, setCanvasImg] = useState(undefined);
  let [chars, setChars] = useState([]);
  let [foundNum, setFoundNum] = useState(0);
  let [totalToFind, setTotalToFind] = useState(0);
  let [gameStarted, setGameStarted] = useState(false);
  let [gameStartTime, setGameStartTime] = useState(undefined)
  let [gameEndTime, setGameEndTime] = useState(undefined);

  async function fetchCanvasData(name) {
    console.log("Loading canvas named: ", name);
    return { chars: [{img: placeholder, name: "Pidgey" }], canvasImg: canvas };
  }

  async function setCanvasData(name) {
    let data = await fetchCanvasData(name);
    setCanvasImg(data.canvasImg);
    setChars(data.chars);
    setTotalToFind(data.chars.length)
  }

  function startGame() {
    setGameStarted(true)
    setGameStartTime(Date.now());
  }

  async function getCharArea(charName) {
    return {minX: 725, minY: 221, maxX: 821, maxY: 263};
  }

  function removeChar(name) {

    let index = chars.findIndex(char=>char.name===name)
    chars.splice(index, 1);
    setChars([...chars]);
    setFoundNum(prev=>prev+1);
  }

  useEffect(()=>{
    setCanvasData("pool-party");
  }, [])

  return (
    <StyledApp>
      <Header found={foundNum} total={totalToFind} chars={chars} startTime={gameStartTime} endTime={gameEndTime} gameStarted={gameStarted}/>
      <Canvas img={canvasImg} chars={chars} getCharArea={getCharArea} removeChar={removeChar} startGame={startGame} gameStarted={gameStarted}/>
    </StyledApp>
  );
}

export default App;
