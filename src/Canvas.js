function Canvas() {

  function captureCoords(e) {
    let pageCoords = { x: e.pageX, y: e.pageY }
    return pageCoords;
  }

  // Returns coordinates relative to the container that was clicked
  function relativeCoords(container, pageCoords) {
    let selfCoords = container.getBoundingClientRect();

    return {
      x: pageCoords.x - selfCoords.x,
      y: pageCoords.y - selfCoords.y
    }
  }

  function handleClick(e) {
    let coords = captureCoords(e);
    console.log(relativeCoords(e.currentTarget, coords))
    // TODO character selection pop-up, it might be useful to use click coords for the pop-up
    // TODO send to app coords and character selection
    // TODO close character selection pop-up
  }

  return (
    <div className="canvas" onClick={handleClick}>
      TEST
    </div>
  )
}

export default Canvas
