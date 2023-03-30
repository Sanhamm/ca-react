import { Menu } from "antd";
import { AiOutlineMenuUnfold, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  background-color: #eeeeee;
  max-width: 1280px;
  padding: 5px;
`;

export const Div = styled.div`
  background-color: #fdebd0;
`;
export const Ul = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
export const Li = styled.li`
  margin-left: 50px;
  text-decoration: none;
  position: relative;
  text-align: center;
  list-style-type: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: black;
`;

export const StyledMenu = styled(Menu)`
  background-color: #fdebd0;
  justify-content: end;
  max-width: 1280px;
  border-bottom: none;
`;

export const BurgeMenu = styled(AiOutlineMenuUnfold)`
  font-size: 2rem;
  padding: 10px 0px;
  margin-left: 14px;
`;

export const ShoppingCart = styled(AiOutlineShoppingCart)`
  text-decoration: none;
  font-size: 2.2rem;
  margin-right: 30px;
  list-style-type: none;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const CartLength = styled.p`
  position: absolute;
  font-size: 1rem;
  top: -27px;
  left: 8px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const CartLengthDiv = styled.div`
  background-color: red;
  position: absolute;
  left: 22px;
  border-radius: 360px;
  width: 25px;
  height: 25px;
  top: -6px;
`;

export const Logo = styled.h3`
  margin: auto;
  text-align: center;
  padding-top: 10px;
  font-size: 3rem;
`;

export const MobileCart = styled(Link)`
  font-size: 1.2rem;

  @media (min-width: 700px) {
    display: none;
  }
`;
