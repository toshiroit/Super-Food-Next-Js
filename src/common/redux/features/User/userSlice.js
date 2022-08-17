import { fetchUser, fetchUserByEmail, fetchUserByPhone, updateUserByPhone } from "./userThunks";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

let isPhone = true;
let isSend = true;
let isCheckCode = true;

export const regUserThunk = createAsyncThunk("user/register", {});
const UserSlice = createSlice({
  name: "isLoginUser",
  initialState: {
    user: {
      codeUser: "",
      fullName: "",
      userName: "",
      passWord: "",
      address: {
        full: "",
        city: "",
        province: "",
        district: "",
      },
      status: "",
      phone: null,
    },
    users: [],
    isCheck: {
      isSendCode: false,
      isInfo: false,
      isPhoneLogin: false,
      isCheckCode: false,
    },
    error: null,
    phoneSave: null,
    loading: false,
    pagesCount: 0,
    totalElements: 0,
  },
  reducers: {
    setUser: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    },
    loginUser: (state, action) => {
      /** Check Phone User Database **/
      if (isPhone) {
        if (isSend) {
          state = {
            ...state,
            user: {
              ...state.user,
              phone: action.payload.phone,
            },
            isCheck: {
              ...state.isCheck,
              isPhoneLogin: true,
              isSendCode: true,
            },
          };
        }
      }
      return state;
    },
    sendCode: (state, action) => {
      /** Check Phone User Login **/
      if (action.payload.code) {
        if (isCheckCode) {
          state = {
            ...state,
            isCheck: {
              ...state.isCheck,
              isCheckCode: true,
            },
          };
        }
      }
      console.log(state);
      return state;
    },
    updateUser: (state, action) => {
      if (action.payload.valueUser) {
      }
    },
    confirmRegUser: (state, action) => {
      if (action.payload.valueUser) {
        console.log(action.payload.valueUser);
        state = {
          ...state,
          isSendCode: false,
          isInfo: false,
          isPhoneLogin: false,
          isCheckCode: false,
          phoneSave: null,
        };
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    /** Fetch User Redux Thunk */
    builder.addCase(fetchUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.users = action.payload.users;
      state.pagesCount = action.payload.pagesCount;
      state.totalElements = action.payload.totalElements;
    });

    /**Fetch User By Phone */
    builder.addCase(fetchUserByPhone.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUserByPhone.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });
    builder.addCase(fetchUserByPhone.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.pagesCount = action.payload.pagesCount;
      state.totalElements = action.payload.totalElements;
    });

    /** Fetch User By Email */
    builder.addCase(fetchUserByEmail.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUserByEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });
    builder.addCase(fetchUserByEmail.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.pagesCount = action.payload.pagesCount;
      state.totalElements = action.payload.totalElements;
    });

    /**Update user By Phone */
    builder.addCase(updateUserByPhone.pending, (state, action) => {
      console.log("DANG LOADING");
      state.loading = true;
    });
    builder.addCase(updateUserByPhone.rejected, (state, action) => {
      console.log("Error", action.error);
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(updateUserByPhone.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.pagesCount = action.payload.pagesCount;
      state.totalElements = action.payload.totalElements;
    });
  },
});

export const { setUser, loginUser, sendCode, confirmRegUser } = UserSlice.actions;
export default UserSlice.reducer;
