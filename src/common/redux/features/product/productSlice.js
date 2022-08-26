const { createSlice } = require("@reduxjs/toolkit");
const { getProductByName } = require("./productThunks");

const productSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    productDetail: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProduct: (state, action) => {
      if (action.payload.nameProduct) {
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductByName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductByName.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(getProductByName.fulfilled, (state, action) => {
      state.loading = false;
      state.productDetail = action.product;
      state.error = null;
    });
  },
});
export const { getProduct } = productSlice.actions;
export default productSlice.reducer;
