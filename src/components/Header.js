import StyledHeader from '../styles/Header.styled'
import StyledInfoControl from '../styles/InfoControl.styled'
import Title from './Title'
import Score from './Score'
import SearchHints from './SearchHints'

function Header({found, total, chars, startTime, gameStarted}) {
 return (
   <StyledHeader>
     <Title/>
     {gameStarted ? <SearchHints chars={chars}/> : null}
     <StyledInfoControl>
       <Score found={found} total={total} startTime={startTime}/>
     </StyledInfoControl>
   </StyledHeader>
 )
}

export default Header
