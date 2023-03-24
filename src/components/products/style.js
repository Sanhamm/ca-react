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
`;

export const CardStyle = styled(Card)`
  border-radius: 10px;
  margin: 20px;
`;
