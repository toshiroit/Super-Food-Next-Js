import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import cartSlice from "../features/cart/cartSlice";
import ProductSlice from "../features/product/productSlice";
import SearchSlice from "../features/Search/SearchSlice";
import showDisplaySlice from "../features/showDisplay/showDisplaySlice";
import showMenuMobile from "../features/showDisplay/showMenuMobile";
import showSearchDisplaySlice from "../features/showDisplay/showSearchDisplaySlice";
import UserSlice from "../features/User/userSlice";

export default combineReducers({
  showDisplaySlice,
  authSlice,
  UserSlice,
  showSearchDisplaySlice,
  showMenuMobile,
  SearchSlice,
  ProductSlice,
  cartSlice
});
