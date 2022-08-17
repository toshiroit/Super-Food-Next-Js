const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth-slice",
  initialState: {
    isLogin: false,
    isRegister: false,
    errors: {},
    error: "",
    loading: false,
  },
  reducers: {
    setAuthLoadingState: (state, action) => {
      state.loading = action.payload.loading;
    },
  },
  extraReducers: {},
});
