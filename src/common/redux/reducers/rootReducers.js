import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import backgroundFixedSlice from "../features/backgroundFixed/backgroundFixedSlice";
import cartSlice from "../features/cart/cartSlice";
import commentSlice from "../features/comment/commentSlice";
import notificationSlice from "../features/notification/notificationSlice";
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
  cartSlice,
  notificationSlice,
  commentSlice,
  backgroundFixedSlice
});
