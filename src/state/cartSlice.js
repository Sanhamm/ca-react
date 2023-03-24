import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
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
      state.item.push(action.payload);
      state.total = state.total + action.payload.price;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
