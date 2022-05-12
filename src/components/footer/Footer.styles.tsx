import styled from "styled-components";
import { Theme } from "../../Theme";
import {AiFillLinkedin, AiFillGithub, AiOutlineInstagram} from "react-icons/ai"

export const StyledFooter = styled.footer`
    width: 100%;
    height: 50px;
    background-color: ${Theme.color.primaryText};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`
export const StyledLinkedin = styled(AiFillLinkedin)`
    font-size: 25px;
`

export const StyledGit = styled(AiFillGithub)`
    font-size: 25px;
`
export const StyledInstagram = styled(AiOutlineInstagram)`
    font-size: 25px;
`