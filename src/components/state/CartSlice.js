import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
  totalProducts: 0,
  total: 0,
};

export const cartSlice = createSlice({
  // The name of our reducer
  name: "cart",
  // The initial state of our reducer
  initialState,
  // These are the actions that will be made available
  reducers: {
    addToCart: (state, action) => {
      // state.item.push(action.payload);
      // state.total = state.total + action.payload.price;
      const product = state.item.find((i) => i.id === action.payload.id);

      if (product) {
        product.amount++;
      } else {
        state.item.push({ ...action.payload, amount: 1 });
      }
      state.total += action.payload.price;
      state.totalProducts++;
    },
    removeProduct: (state, action) => {
      const product = state.item.find((i) => i.id === action.payload.id);

      if (product) {
        state.item.splice(state.item.indexOf(product), 1);
        state.total -= product.price * product.amount;
        state.totalProducts -= product.amount;
      }
    },
    increase: (state, action) => {
      const product = state.item.find((i) => i.id === action.payload.id);

      if (product) {
        product.amount++;
        state.total += action.payload.price;
        state.totalProducts++;
      }
    },
    decrease: (state, action) => {
      const product = state.item.find((i) => i.id === action.payload.id);

      if (product) {
        product.amount--;
        state.totalProducts--;
        state.total -= action.payload.price;

        if (product.amount === 0) {
          state.item.splice(state.item.indexOf(product), 1);
        }
      }
    },
    clearCart: (state) => {
      state.item = [];
      state.total = 0;
      state.totalProducts = 0;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeProduct, increase, decrease, clearCart } =
  cartSlice.actions;
