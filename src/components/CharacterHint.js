import StyledCharacterHint from '../styles/CharacterHint.styled'

function CharacterHint ({char}) {
  return (
    <StyledCharacterHint>
      <img alt="" src={char.img} />
      <p>{char.name}</p>
    </StyledCharacterHint>
  )
}

export default CharacterHint
