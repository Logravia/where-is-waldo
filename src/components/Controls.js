function Controls({startTimer, resetTimer}) {
  return (
    <div>
      <button onClick={_=>startTimer("Start")}>Start</button>
      <button onClick={_=>resetTimer("Reset")}>Reset</button>
    </div>
  )
}

export default Controls
