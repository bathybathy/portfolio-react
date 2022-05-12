import React from "react";
import { GeneralDiv, StyledA } from "../../GeneralStyles";

import { StyledFooter, StyledGit, StyledInstagram, StyledLinkedin } from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <GeneralDiv >
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
    </StyledFooter>
  );
};

export default Footer;
