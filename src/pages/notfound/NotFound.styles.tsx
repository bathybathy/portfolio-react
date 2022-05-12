import styled from "styled-components";
import { Theme } from "../../Theme";

export const CardNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
  border: ${Theme.cardBorder};
  box-shadow: ${Theme.boxShadow};
  background-color: ${Theme.color.cardBackground};
  border-radius: 8px;
  margin: 20px;
  height: 280px;
  padding: 10px;
`;
