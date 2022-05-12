import { FullPage, GeneralDiv, StyledA, StyledH3 } from "../../GeneralStyles";
import {
  ContatoCard,
  StyledGit,
  StyledInstagram,
  StyledLinkedin,
} from "./Contato.styles";

const Contato = () => {
  return (
    <FullPage>
      <ContatoCard>
        <GeneralDiv>
          <StyledH3>Minhas redes sociais:</StyledH3>
        </GeneralDiv>
        <GeneralDiv>
          <StyledA href="https://www.linkedin.com/in/nathalia-duarte-a12076231/">
            <StyledLinkedin />
          </StyledA>
        </GeneralDiv>
        <GeneralDiv>
          <StyledA href="https://github.com/bathybathy">
            <StyledGit />
          </StyledA>
        </GeneralDiv>
        <GeneralDiv>
          <StyledA href="https://www.instagram.com/nathybathy/">
            <StyledInstagram />
          </StyledA>
        </GeneralDiv>
      </ContatoCard>
    </FullPage>
  );
};

export default Contato;
