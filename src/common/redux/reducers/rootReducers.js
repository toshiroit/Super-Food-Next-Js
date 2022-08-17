import { combineReducers } from "@reduxjs/toolkit";
import SearchSlice from "../features/Search/SearchSlice";
import showDisplaySlice from "../features/showDisplay/showDisplaySlice";
import showMenuMobile from "../features/showDisplay/showMenuMobile";
import showSearchDisplaySlice from "../features/showDisplay/showSearchDisplaySlice";
import UserSlice from "../features/User/userSlice";

export default combineReducers({
  showDisplaySlice,
  UserSlice,
  showSearchDisplaySlice,
  showMenuMobile,
  SearchSlice,
});
