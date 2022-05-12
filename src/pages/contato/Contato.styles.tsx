import styled from "styled-components";
import { Theme } from "../../Theme";
import {AiFillLinkedin, AiFillGithub, AiOutlineInstagram} from "react-icons/ai"

export const ContatoCard = styled.div`
  display: flex;
  flex-direction: column;
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

export const StyledLinkedin = styled(AiFillLinkedin)`
    font-size: 20px;
`

export const StyledGit = styled(AiFillGithub)`
    
`
export const StyledInstagram = styled(AiOutlineInstagram)`
    
`
