import styled from "styled-components";
import { Theme } from "./Theme";

export const GeneralDiv = styled.div`
    
`
export const FullPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 130px);
`
export const StyledSpan = styled.span`
  color: ${Theme.color.primaryText};
`;
export const StyledP = styled.p`
  color: ${Theme.color.primaryText};
`;

export const StyledH3 = styled.h3`
  padding: 0;
`;

export const StyledA = styled.a`
  text-decoration: none;
  color: ${Theme.color.highlight};
`;
