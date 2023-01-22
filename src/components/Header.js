import StyledHeader from '../styles/Header.styled'
import StyledInfoControl from '../styles/InfoControl.styled'
import Controls from './Controls'
import Title from './Title'
import Score from './Score'

function Header({time, found, total, newCanvas}) {
 return (
   <StyledHeader>
     <Title></Title>
     <StyledInfoControl>
       <Controls newCanvas={newCanvas}></Controls>
       <Score time={time} found={found} total={total}></Score>
     </StyledInfoControl>
   </StyledHeader>
 )
}

export default Header
