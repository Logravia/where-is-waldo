import { useState, useEffect } from 'react';
import Canvas from './components/Canvas'
import StyledApp from './styles/App.styled'
import tulips from './imgs/tulips.jpg'

function App() {

  let [canvasImg, setCanvasImg] = useState(undefined);
  let [chars, setChars] = useState([]);

  async function fetchCanvasData(name) {
    console.log("Loading canvas named: ", name);
    return { chars: [{ img: tulips, name: "Cage" }], canvasImg: tulips };
  }

  async function setCanvasData(name) {
    let data = await fetchCanvasData(name);
    setCanvasImg(data.canvasImg);
    setChars(data.chars);
  }

  async function getCharArea(charName) {
    console.log("Get location of", charName)
    return {minX: 0, minY: 0, maxX: 50, maxY: 50};
  }


  useEffect(()=>{
    setCanvasData("Cage");
  }, [])

  return (
    <StyledApp>
      <Canvas img={canvasImg} chars={chars} getCharArea={getCharArea}/>
    </StyledApp>
  );
}

export default App;
