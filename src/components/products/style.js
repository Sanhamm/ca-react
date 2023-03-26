import styled from "styled-components";
import { Card } from "antd";
import Search from "antd/es/transfer/search";

export const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: solid 1px lightgrey;
`;

export const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  margin: auto;
  justify-content: space-around;
  @media (max-width: 1150px) {
    grid-template-columns: 45% 45%;
  }
  @media (max-width: 700px) {
    grid-template-columns: 90%;
  }
`;

export const CardStyle = styled(Card)`
  border-radius: 10px;
  margin: 20px;
  box-shadow: 5px;
`;

export const H1 = styled.h1`
  text-align: center;
  padding: 10px;
  text-decoration: underline;
`;

export const DivTitle = styled.div`
  padding: 20px;
  max-width: 1280px;
`;

export const ProsentOff = styled.h3`
  background-color: red;
  width: 20%;
  text-align: center;
  position: absolute;
  top: 10px;
  border-radius: 5px;
`;

export const SearchBar = styled(Search)`
  height: 30px;
`;
