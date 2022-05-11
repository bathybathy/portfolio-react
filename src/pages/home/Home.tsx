import { CardHome, DivIcons, ImgHome } from "./Home.styles";
import { useContext, useEffect } from "react";
import { GitContext, IGitContext } from "../../context/GitContext";
import { FullPage, GeneralDiv } from "../../GeneralStyles";
import { MdLocationCity, MdOutlineWork } from "react-icons/md";

const Home = () => {
  const { getInfo, dataGit } = useContext(GitContext) as IGitContext;

  useEffect(() => {
    getInfo();
  }, []);
  return (
      <FullPage>
    <CardHome>
      <GeneralDiv>
        <ImgHome src={dataGit.avatar_url} />
      </GeneralDiv>
      <GeneralDiv>
        <h1>Olá, meu nome é {dataGit.name}.</h1>
        <p>{dataGit.bio}.</p>
        <DivIcons>
        <span>
          <MdLocationCity />
          {dataGit.location}
        </span>
        <span>
          <MdOutlineWork />
          {dataGit.company}
        </span>
        </DivIcons>
      </GeneralDiv>
      <GeneralDiv></GeneralDiv>
    </CardHome>
    </FullPage>
  );
};

export default Home;
