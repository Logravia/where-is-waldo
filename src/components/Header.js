import StyledHeader from '../styles/Header.styled'
import StyledInfoControl from '../styles/InfoControl.styled'
import Controls from './Controls'
import Title from './Title'
import Score from './Score'
import SearchHints from './SearchHints'

function Header({time, found, total, newCanvas, chars}) {
 return (
   <StyledHeader>
     <Title/>
     <SearchHints chars={chars}/>
     <StyledInfoControl>
       <Controls newCanvas={newCanvas}></Controls>
       <Score time={time} found={found} total={total}></Score>
     </StyledInfoControl>
   </StyledHeader>
 )
}

export default Header
