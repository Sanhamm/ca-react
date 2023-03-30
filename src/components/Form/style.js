import styled from "styled-components";
import { ButtonStyled } from "../Button/style";

export const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 50%;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 300px;

  input,
  textarea {
    margin: 10px;
    padding: 10px;
    font-size: 1rem;
    outline: none;
    border: 2px solid whitesmoke;

    &:focus {
      border: 2px solid black;
    }
  }
  span {
    padding: 10px;
    color: red;
  }
`;

export const FormBtn = styled(ButtonStyled)`
  margin-top: 20px;
  padding: 10px;
  background-color: white;
  font-size: 1rem;
  &:hover {
    background: whitesmoke;
  }
  &:active {
    background-color: white;
  }
`;
