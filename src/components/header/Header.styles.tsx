import styled from "styled-components";
import { Link } from "react-router-dom";
import { Theme } from "../../Theme";

export const StyledNav = styled.nav``;
export const ListNav = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  gap: 20px;
  align-items: center;
  height: 80px;
`;
export const ItemNav = styled.li``;
export const StyledHeader = styled.div`
  height: 80px;
  width: 100%;
  background-color: #bcd4e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLinkNav = styled(Link)`
  text-decoration: none;
  color: ${Theme.color.primaryText};
`;
export const ImgNav = styled.img`
  width: 50px;
  border: 3px solid ${Theme.color.cardBackground};
  border-radius: 100%;
  outline: rgb(224, 224, 224) solid 1px;
  margin-right: 30px;
`;
