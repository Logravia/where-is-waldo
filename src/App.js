import { useState, useEffect } from 'react';
import Canvas from './components/Canvas'
import StyledApp from './styles/App.styled'
import canvas from './imgs/canvas.jpg'
import Header from './components/Header'
import placeholder from './imgs/pidgey.png'

function App() {

  let [canvasImg, setCanvasImg] = useState(undefined);
  let [chars, setChars] = useState([]);
  let [time, setTime] = useState(0);
  let [foundNum, setFoundNum] = useState(0);
  let [totalToFind, setTotalToFind] = useState(0);

  async function fetchCanvasData(name) {
    console.log("Loading canvas named: ", name);
    return { chars: [{img: placeholder, name: "Pidgey" }], canvasImg: canvas };
  }

  async function setCanvasData(name) {
    let data = await fetchCanvasData(name);
    setCanvasImg(data.canvasImg);
    setChars(data.chars);
  }

  async function getCharArea(charName) {
    return {minX: 725, minY: 221, maxX: 821, maxY: 263};
  }

  useEffect(()=>{
    setCanvasData("pool-party");
  }, [])

  return (
    <StyledApp>
      <Header time={time} found={foundNum} total={totalToFind} chars={chars}/>
      <Canvas img={canvasImg} chars={chars} getCharArea={getCharArea}/>
    </StyledApp>
  );
}

export default App;
