import { ListNav, StyledNav } from './Header.styles'
import LinkNav from './LinkNav'

const Header = () => {
  return (
    <StyledNav>
        <ListNav>
            <LinkNav pathLink='/' text='Home' />
        </ListNav>
    </StyledNav>
  )
}

export default Header