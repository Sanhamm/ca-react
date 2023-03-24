import styled from "styled-components";
import { Card } from "antd";

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
`;

export const ProsentOff = styled.h3`
  background-color: red;
  width: 30%;
  text-align: center;
`;
