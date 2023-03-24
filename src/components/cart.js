import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../state/cartSlice";

export const cart = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
