import React from "react";
import useApi from "../../hooks/useApi";
import { URL } from "../../utils/urls";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/cartSlice";
import { Rate } from "antd";
import { ButtonStyled } from "../Button/style";
import {
  DivGrid,
  DivImg,
  DivInfo,
  ImgProduct,
  NewPrice,
  OneReviewDiv,
  ProdDisc,
  ReviewDiv,
  ReviewH3,
} from "./style";
import styles from "./singeProduct.module.css";
import Prosent from "../../utils/prosent";

const SingelProductListing = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({ name: data.title, price: data.discountedPrice }));
    console.log(data.title, data.discountedPrice);
  };

  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isError } = useApi(URL + id);

  if (isLoading) {
    return "Loading..";
  }
  if (isError) {
    console.error(isError);
  }
  if (!data) {
    return "There seem to be a problem";
  }

  const prosent = Prosent(data.price, data.discountedPrice);

  return (
    <>
      <DivGrid>
        <DivImg>
          <ImgProduct src={data.imageUrl} alt={data.title} />
        </DivImg>
        <DivInfo>
          <h1>{data.title}</h1>
          {data.price === data.discountedPrice ? (
            <h3>{data.discountedPrice},-</h3>
          ) : (
            <>
              <NewPrice>{prosent.prosent}% OFF!</NewPrice>
              <h3>
                <s>{data.price},-</s>
              </h3>

              <NewPrice>{data.discountedPrice},-</NewPrice>
            </>
          )}
          <h3>
            Rating: <Rate disabled defaultValue={data.rating} />
          </h3>
          <ProdDisc className={styles.paddingProduct}>
            {data.description}
          </ProdDisc>
          <ButtonStyled onClick={handleAdd} className={styles.marginButton}>
            Add to cart
          </ButtonStyled>
          <div className={styles.paddingProduct}></div>
        </DivInfo>
      </DivGrid>
      <ReviewDiv>
        <h3>{data.reviews.length <= 1 ? "Review" : "Reviews"}:</h3>
        {data.reviews.map((item, idx) => {
          console.log(item);
          return (
            <OneReviewDiv>
              <Rate disabled defaultValue={item.rating} />
              <p>
                <b>{item.username}</b>
              </p>
              <p>
                "<i>{item.description}</i>"
              </p>
            </OneReviewDiv>
          );
        })}
      </ReviewDiv>
    </>
  );
};

export default SingelProductListing;
