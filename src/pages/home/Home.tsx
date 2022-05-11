import { CardHome, ImgHome } from "./Home.styles";
import { useContext, useEffect } from "react";
import { GitContext, IGitContext } from "../../context/GitContext";
import { GeneralDiv } from "../../GeneralStyles";

const Home = () => {
  const { getInfo, dataGit } = useContext(GitContext) as IGitContext;

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <CardHome>
      <GeneralDiv>
        <ImgHome src={dataGit.avatar_url} />
      </GeneralDiv>
      <GeneralDiv>
        <h1>Olá, meu nome é {dataGit.name}.</h1>
        <p>
          {dataGit.bio}.
        </p>
      </GeneralDiv>
    </CardHome>
  );
};

export default Home;
