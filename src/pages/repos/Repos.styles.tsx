import styled from "styled-components";

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
  border: 1px solid #dcdede;
  border-radius: 16px;
  padding: 10px;
  background-color: #f6f8f9;
`;
export const StyledA = styled.a`
  text-decoration: none;
  color: #f25757;
`;
export const StyledSpan = styled.span`
  color: #4a4e69;
`;
export const StyledH3 = styled.h3`
  padding: 0;
`;
export const StyledP = styled.p`
  color: #4a4e69;
`;
