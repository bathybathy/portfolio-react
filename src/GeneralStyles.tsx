import styled from "styled-components";
import { Theme } from "./Theme";

export const GeneralDiv = styled.div`
    
`
export const FullPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 80px);
`
export const StyledSpan = styled.span`
  color: ${Theme.color.primaryText};
`;
export const StyledP = styled.p`
  color: ${Theme.color.primaryText};
`;