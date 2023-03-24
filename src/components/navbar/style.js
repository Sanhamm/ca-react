import { Menu } from "antd";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  background-color: #eeeeee;
  max-width: 1280px;
  padding: 5px;
`;

export const Div = styled.div`
  background-color: #eeeeee;
  margin: 0;
`;
export const Ul = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
export const Li = styled(Link)`
  margin-right: 50px;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledMenu = styled(Menu)`
  background-color: #eeeeee;
  justify-content: end;
  max-width: 1280px;
  margin: auto;
`;

export const BurgeMenu = styled(AiOutlineMenuUnfold)`
  font-size: 24px;
  padding: 10px 0px;
  margin-left: 14px;
`;
