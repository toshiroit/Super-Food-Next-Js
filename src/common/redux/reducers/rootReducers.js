import { combineReducers } from "@reduxjs/toolkit";
import showDisplaySlice from "../features/showDisplay/showDisplaySlice";
import UserSlice from "../features/User/UserSlice";

export default combineReducers({
  showDisplaySlice,
  UserSlice,
});
