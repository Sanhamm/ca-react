import React from "react";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { URL } from "../../utils/urls";
import Button from "../Button";
import { CardStyle, DivGrid, Img } from "./style";

const ProductsListing = () => {
  const { data, isLoading, isError } = useApi(URL);

  if (isLoading) {
    return "Loadin...";
  }
  if (isError) {
    console.log(isError);
  }

  console.log(data);

  return (
    <DivGrid>
      {data.map((items, idx, idDisc, idImg) => {
        return (
          <CardStyle cover={<Img alt='example' src={items.imageUrl} />}>
            <h1 key={idx}>{items.title}</h1>
            <p key={idDisc}>{items.description}</p>
            <Link to={`/Product/${items.id}`}>
              <Button children='Show More'></Button>
            </Link>
          </CardStyle>
        );
      })}
    </DivGrid>
  );
};

export default ProductsListing;
