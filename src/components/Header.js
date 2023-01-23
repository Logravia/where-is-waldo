import StyledHeader from '../styles/Header.styled'
import StyledInfoControl from '../styles/InfoControl.styled'
import Stopwatch from './Stopwatch'
import Title from './Title'
import Score from './Score'
import SearchHints from './SearchHints'

function Header({found, total, newCanvas, chars}) {
 return (
   <StyledHeader>
     <Title/>
     <SearchHints chars={chars}/>
     <StyledInfoControl>
       <Stopwatch/>
       <Score found={found} total={total}></Score>
     </StyledInfoControl>
   </StyledHeader>
 )
}

export default Header
