import styled from "styled-components";

export const DivCart = styled.div`
  display: flex;
  margin-bottom: 10px;
  background-color: #fffaf6;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

export const DeleteCart = styled.p`
  margin: auto;
  cursor: pointer;
  border-radius: 5px;
  padding: 0px 3px;

  &:hover {
    color: white;
    background-color: black;
  }
`;
