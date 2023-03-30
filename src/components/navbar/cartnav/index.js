import React from "react";
import CartImg from "./imageCart";
import PriceCart from "./priceCart";
import { DivCart, DeleteCart } from "./style";
import TitleCart from "./titleCart";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../state/CartSlice";
import AmountCart from "./amountCart";

const CartNav = ({ products }) => {
  const dispatch = useDispatch();
  console.log(products);
  const handleRemove = () => {
    dispatch(
      removeProduct({
        id: products.id,
        price: products.price,
      })
    );
  };

  return (
    <DivCart>
      <CartImg img={products.img} />
      <TitleCart title={products.name} />
      <PriceCart price={products.price} />
      <AmountCart products={products} />
      <DeleteCart onClick={handleRemove}>X</DeleteCart>
    </DivCart>
  );
};

export default CartNav;
