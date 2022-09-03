const { createSlice } = require("@reduxjs/toolkit");
const { getProductByName, getProductByCode } = require("./productThunks");

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
    // Get product By Name
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
    // Get product By Name End

    // Get Product By Code
    builder.addCase(getProductByCode.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductByCode.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error
    });
    builder.addCase(getProductByCode.fulfilled, (state, action) => {
      state.loading = false;
      state.productDetail = action.payload.product
    })

  },
});
export const { getProduct } = productSlice.actions;
export default productSlice.reducer;
