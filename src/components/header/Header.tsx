import { useContext, useEffect } from "react";
import { GitContext, IGitContext } from "../../context/GitContext";
import { GeneralDiv } from "../../GeneralStyles";
import { ImgNav, ListNav, StyledHeader, StyledNav } from "./Header.styles";
import LinkNav from "./LinkNav";

const Header = () => {
  const {getInfo, dataGit} = useContext(GitContext) as IGitContext;

  useEffect(()=>{
    getInfo();
  },[])
  return (
    <StyledHeader>
      <StyledNav>
        <ListNav>
          <LinkNav pathLink="/" text="Home" />
          <LinkNav pathLink="/repos" text="Projetos" />
        </ListNav>
      </StyledNav>
      <GeneralDiv>
          <ImgNav src={dataGit.avatar_url} />
        </GeneralDiv>
    </StyledHeader>
  );
};

export default Header;
