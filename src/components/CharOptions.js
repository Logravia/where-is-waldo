import StyledCharOptions from '../styles/CharOptions.styled'

function CharOptions({ char, handleSelection }) {

  function handleClick(e) {
    e.stopPropagation();
    handleSelection(char.name)
  }

  return (
    <StyledCharOptions onClick={handleClick}>
      <img alt="" src={char.img}/>
      <p>{char.name}</p>
    </StyledCharOptions>
  )
}

export default CharOptions
