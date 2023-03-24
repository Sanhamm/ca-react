import React from "react";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import Prosent from "../../utils/prosent";
import { URL } from "../../utils/urls";
import Button from "../Button";
import { NewPrice } from "../singelProduct/style";
import { CardStyle, DivGrid, DivTitle, H1, Img, ProsentOff } from "./style";

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
    <>
      <DivTitle>
        <H1>Our Products</H1>
      </DivTitle>
      <DivGrid>
        {data.map((items, idx, idDisc, idImg) => {
          const prosent = Prosent(items.price, items.discountedPrice);
          console.log(prosent);
          return (
            <CardStyle cover={<Img alt='example' src={items.imageUrl} />}>
              <h1 key={idx}>{items.title}</h1>
              <p key={idDisc}>{items.description}</p>
              {items.price === items.discountedPrice ? (
                <h3>{items.discountedPrice},-</h3>
              ) : (
                <>
                  <ProsentOff>{prosent.prosent}% OFF!</ProsentOff>

                  <NewPrice>{items.discountedPrice},-</NewPrice>
                  <p>Førpris {items.price},-</p>
                </>
              )}
              <Link to={`/Product/${items.id}`}>
                <Button children='Show More'></Button>
              </Link>
            </CardStyle>
          );
        })}
      </DivGrid>
    </>
  );
};

export default ProductsListing;