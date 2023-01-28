import { useState, useEffect } from 'react';
import Canvas from './components/Canvas'
import StyledApp from './styles/App.styled'
import canvas from './imgs/canvas.jpg'
import Header from './components/Header'
import VictoryScreen from './components/VictoryScreen'
import { db } from './firebase'
import { collection, getDocs } from "firebase/firestore";


function App() {

  let [canvasImg, setCanvasImg] = useState(undefined);
  let [chars, setChars] = useState([]);
  let [foundNum, setFoundNum] = useState(0);
  let [totalToFind, setTotalToFind] = useState(0);
  let [gameStarted, setGameStarted] = useState(false);
  let [gameEnded, setGameEnded] = useState(false);
  let [gameStartTime, setGameStartTime] = useState(undefined)

  async function fetchCanvasData(name) {
    let chars = []
    const charData = await getDocs(collection(db, name));
    charData.forEach((doc) => {
      chars.push(doc.data())
    });

    return { chars: chars, canvasImg: canvas };
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

  function getCharArea(charName) {
    let location = chars.find(char=>char.name===charName).location;
    console.log("Char location: ", location)
    return location
  }

  function removeChar(name) {
    let index = chars.findIndex(char=>char.name===name)
    chars.splice(index, 1);
    setChars([...chars]);
    setFoundNum(prev=>prev+1);

    if (chars.length === 0) {setGameEnded(true)}
  }

  useEffect(()=>{
    setCanvasData("pool-party");
  }, [])

  return (
    <StyledApp>
      {gameEnded ? <VictoryScreen/> : null}
      <Header found={foundNum} total={totalToFind} chars={chars} startTime={gameStartTime}  gameStarted={gameStarted} gameEnded={gameEnded}/>
      <Canvas img={canvasImg} chars={chars} getCharArea={getCharArea} removeChar={removeChar} startGame={startGame} gameStarted={gameStarted}/>
    </StyledApp>
  );
}

export default App;
