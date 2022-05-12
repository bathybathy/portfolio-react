import { CardHome, DivIcons, ImgHome, StyledH1, StyledSpanHighlight } from "./Home.styles";
import { useContext, useEffect } from "react";
import { GitContext } from "../../context/GitContext";
import { FullPage, GeneralDiv, StyledP, StyledSpan } from "../../GeneralStyles";
import { MdLocationCity, MdOutlineWork } from "react-icons/md";
import { Block } from 'notiflix'
import { IGitContext } from "../../context/GitContext.models";

const Home = () => {
  const { getInfo, dataGit } = useContext(GitContext) as IGitContext ;

  useEffect(() => {
    Block.circle('.homeCard')
    getInfo();
  }, []);
  return (
    <FullPage>
      <CardHome className="homeCard">
        <GeneralDiv>
          <ImgHome src={dataGit.avatar_url} />
        </GeneralDiv>
        <GeneralDiv>
          <StyledH1>Olá, meu nome é <StyledSpanHighlight >{dataGit.name}</StyledSpanHighlight>.</StyledH1>
          <StyledP>{dataGit.bio}</StyledP>
          <DivIcons>
            <StyledSpan>
              <MdLocationCity />
              {dataGit.location}
            </StyledSpan>
            <StyledSpan>
              <MdOutlineWork />
              {dataGit.company}
            </StyledSpan>
          </DivIcons>
        </GeneralDiv>
        <GeneralDiv></GeneralDiv>
      </CardHome>
    </FullPage>
  );
};

export default Home;
