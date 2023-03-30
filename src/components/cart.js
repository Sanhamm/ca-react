import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./state/CartSlice";

export const cart = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
