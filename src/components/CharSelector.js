import {StyledCharSelector} from '../styles/CharSelector.styled'
import CharOptions from './CharOptions'

function CharSelector ({showAt, chars, handleSelection}) {

  return (
    <StyledCharSelector showAt={showAt}>
      {chars.map(char=>
        <CharOptions char={char} key={char.name} handleSelection={handleSelection}/>
      )}
    </StyledCharSelector>
  )
}

export default CharSelector
