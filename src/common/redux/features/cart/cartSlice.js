const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    productsGroup: []
  },
  reducers: {
    onChaneCartProduct: (state, action) => {
      let productsCart = []
      if (action.payload.products.length > 0) {
        productsGroup = action.payload.products
      }
    }
  }
})
export const { onChaneCartProduct } = cartSlice.actions
export default cartSlice.reducer
