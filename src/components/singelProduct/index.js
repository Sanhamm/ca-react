import React from "react";
import useApi from "../../hooks/useApi";
import { URL } from "../../utils/urls";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/cartSlice";
import { Rate } from "antd";
import { ButtonStyled } from "../Button/style";

const SingelProductListing = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({ name: data.title, price: data.discountedPrice }));
    console.log(data.title, data.discountedPrice);
  };

  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isError } = useApi(URL + id);
  if (!data) {
    return "There seem to be a problem";
  }
  if (isLoading) {
    return "Loading..";
  }
  if (isError) {
    console.error(isError);
  }

  console.log(data);

  return (
    <div>
      <img src={data.imageUrl} alt={data.title} />
      <h1>{data.title}</h1>
      {data.price === data.discountedPrice ? (
        <h3>{data.discountedPrice}</h3>
      ) : (
        <h3>
          <s>{data.price}</s>
          {data.discountedPrice}
        </h3>
      )}
      <p>{data.description}</p>
      <Rate disabled defaultValue={data.rating} />
      <ButtonStyled onClick={handleAdd}>Add to cart</ButtonStyled>
    </div>
  );
};

export default SingelProductListing;
