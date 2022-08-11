
const { createSlice } = require("@reduxjs/toolkit");

let isPhone = true;
let isSend = true;
let isCheckCode = true;
const UserSlice = createSlice({
  name: "isLoginUser",
  initialState: {
    isSendCode: false,
    isInfo: false,
    isPhoneLogin: false,
    isCheckCode: false,
    phoneSave: null
  },
  reducers: {
    loginUser: (state, action) => {
      /** Check Phone User Database **/
      if (isPhone) {
        if (isSend) {
          state = {
            ...state,
            isPhoneLogin: true,
            isSendCode: true,
            phoneSave: action.payload.phone
          }
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
            isCheckCode: true
          }
        }
      }
      return state;
    },
    confirmRegUser: (state, action) => {
      if (action.payload.valueUser) {
        state = {
          ...state,
          isSendCode: false,
          isInfo: false,
          isPhoneLogin: false,
          isCheckCode: false,
          phoneSave: null
        }

      }
      return state;
    }
  }
});

export const { loginUser, sendCode, confirmRegUser } = UserSlice.actions;
export default UserSlice.reducer;
