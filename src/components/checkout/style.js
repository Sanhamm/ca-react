import { CheckOutlined, ShoppingOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const ShoppingCheckout = styled(ShoppingOutlined)`
  font-size: 10rem;
  margin: 70px auto;
`;

export const CheckoutDiv = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
`;

export const CheckoutButtonDiv = styled.div`
  justify-content: center;
  margin: 50px;
  display: grid;
  grid-template-columns: 50%;
`;

export const CheckCheckout = styled(CheckOutlined)`
  font-size: 4rem;
  justify-content: center;
`;
