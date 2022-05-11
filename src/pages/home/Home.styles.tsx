import styled from "styled-components";
import { Theme } from "../../Theme";

export const CardHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  border: ${Theme.cardBorder};
  box-shadow: ${Theme.boxShadow};
  background-color: ${Theme.color.cardBackground};
  border-radius: 8px;
  margin: 20px;
  height: 280px;
  padding: 10px;
`;
export const ImgHome = styled.img`
  width: 200px;
  border: 6px solid ${Theme.color.cardBackground};
  border-radius: 100%;
  margin-right: 20px;
  outline: rgb(224, 224, 224) solid 3px;
`;
export const DivIcons = styled.div`
  display: flex;
  gap: 15px;
  text-align: center;
`;
export const StyledH1 = styled.h1`
  color: ${Theme.color.primaryText};
`;
export const StyledSpanHighlight = styled.span`
  color: ${Theme.color.highlight};
`;
