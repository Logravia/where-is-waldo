import StyledCharOptions from '../styles/CharOptions.styled'

function CharOptions({ char, handleSelection }) {
  return (
    <StyledCharOptions onClick={_=>handleSelection(char.name)}>
      <img alt="" src={char.img}/>
      <p>{char.name}</p>
    </StyledCharOptions>
  )
}

export default CharOptions
