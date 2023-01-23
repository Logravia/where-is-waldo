import StyledSearchHints from '../styles/SearchHints.styled'
import CharacterHint from './CharacterHint'

function SearchHints ({chars}) {
  return (
  <StyledSearchHints>
    {chars.map(char=><CharacterHint char={char}/>)}
  </StyledSearchHints>
  )
}

export default SearchHints
