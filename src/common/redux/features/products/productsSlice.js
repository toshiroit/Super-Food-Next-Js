const { createSlice } = require("@reduxjs/toolkit");
const { fetchProducts, fetchProductsByFilterParams } = require("./productsThunks");

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    products: [],
    pageCount: 1,
    totalElement: 0,
    loading: false,
    error: null,
  },
  reducers: {
    setProduct: (state, action) => {
      if (action.payload.products) {
        state.products = action.payload.products;
        state.loading = true;
      } else {
        state.products = [];
      }
    },
    removeProduct: (state, action) => {
      if (action.payload.codeProduct) {
        state.products = state.products.filter((product) => product.codeProduct !== action.payload.codeProduct);
        state.loading = true;
      }
    },
    restState: () => {
      return state;
    },
  },
  extraReducers: (builder) => {
    /** Get API Redux - Thunk */
    /** Get Products */
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.items;
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      (state.error = "Error"), (state.loading = false);
    });

    /** Get Products By Name */
    builder.addCase(fetchProductsByFilterParams.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsByFilterParams.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchProductsByFilterParams.fulfilled, (state, action) => {
      state.products = action.payload.items;
      state.pageCount = action.payload.pagesCount;
      state.totalElement = action.payload.totalElements;
      state.loading = false;
    });
  },
});
