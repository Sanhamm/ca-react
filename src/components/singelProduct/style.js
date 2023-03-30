import styled from "styled-components";

export const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 60% 35%;
  justify-content: space-between;
  max-width: 1280px;
  margin: 30px auto;
  background-color: #fdf2e9;
  border: lightgrey solid 1px;
  border-radius: 5px;

  @media (max-width: 1100px) {
    grid-template-columns: 100%;
    justify-content: center;
    margin: auto;
  }
`;

export const DivImg = styled.div`
  border-radius: 10px;
  height: 550px;
  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    height: 70vh;
  }
`;

export const ImgProduct = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 0px 0px 0px 5px;
`;

export const NewPrice = styled.h3`
  color: red;
`;

export const OneReviewDiv = styled.div`
  background-color: #fdebd0;
  padding: 10px;
  border: solid lightgray 1px;
  border-radius: 10px;
  margin: 20px auto auto auto;
`;

export const ReviewDiv = styled.div`
  padding: 20px;
  border-radius: 5px;
  margin-top: 50px;
  max-width: 1280px;
  margin: 20px auto auto auto;
`;

export const ProdDisc = styled.p`
  width: 90%;
`;

export const DivInfo = styled.div`
  background-color: #fdf2e9;
  border-radius: 5px;
  padding: 20px;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
