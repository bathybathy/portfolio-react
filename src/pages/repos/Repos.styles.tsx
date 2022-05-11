import styled from "styled-components";
import { Theme } from "../../Theme";

export const ReposCard = styled.div`
  width: 800px;
  margin: 30px;
`;
export const ReposGrid = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px;
  row-gap: 20px;
  column-gap: 35px;
  align-items: center;
  justify-content: space-evenly;
`;
export const ReposDivItem = styled.div`
  width: 250px;
  height: 200px;
  border: ${Theme.cardBorder};
  border-radius: 16px;
  padding: 10px;
  background-color: ${Theme.color.cardBackground};
  box-shadow: ${Theme.boxShadow};;
`;
export const StyledA = styled.a`
  text-decoration: none;
  color: ${Theme.color.highlight};
`;

export const StyledH3 = styled.h3`
  padding: 0;
`;

