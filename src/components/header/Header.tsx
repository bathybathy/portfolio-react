import { ListNav, StyledHeader, StyledNav } from "./Header.styles";
import LinkNav from "./LinkNav";

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <ListNav>
          <LinkNav pathLink="/" text="Home" />
          <LinkNav pathLink="/repos" text="Projetos" />
        </ListNav>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
