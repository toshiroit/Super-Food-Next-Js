import { LocalStorage } from "../../../lib/Localstorage/Localstorage";

const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    productsGroup: [],
  },
  reducers: {
    onChaneCartProduct: (state, action) => {
      let productsCart = [];
      if (action.payload.products.length > 0) {
        productsCart = action.payload.products;
        //state.productsGroup = [...state.productsGroup,productsCart]
        return state;
      }
    },
  },
});
export const { onChaneCartProduct } = cartSlice.actions;
export default cartSlice.reducer;
