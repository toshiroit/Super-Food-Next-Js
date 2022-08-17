import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ApiLink,
  BASE_API,
  GET_USER_BY_EMAIL,
  GET_USER_BY_PAGE,
  GET_USER_BY_PHONE,
  UPDATE_USER_BY_PHONE,
} from "../../../constants/ApiLink";
import RequestServices from "../../services/request-services";

export const fetchUser = createAsyncThunk("user/fetchUserInfo", async (page) => {
  const responsive = await RequestServices.get(`${BASE_API + GET_USER_BY_PAGE(page)}`);
  return {
    users: responsive.data,
    status: responsive.status,
    pagesCount: parent(responsive.headers["page-total-count"]),
    totalElements: parent(responsive.headers["page-total-elements"]),
  };
});

export const fetchUserByPhone = createAsyncThunk("user/fetchUserByPhone", async (phone) => {
  const responsive = await RequestServices.get(`${BASE_API + GET_USER_BY_PHONE(phone)}`);
  return {
    user: responsive.data,
  };
});
export const fetchUserByEmail = createAsyncThunk("user/fetchUserByEmail", async (email) => {
  const responsive = await RequestServices.get(`${BASE_API + GET_USER_BY_EMAIL(email)}`);
  return {
    user: responsive.data,
  };
});
export const updateUserByPhone = createAsyncThunk("user/updateUserByPhone", async (userData) => {
  const responsive = await RequestServices.post(BASE_API + UPDATE_USER_BY_PHONE, userData, "", true);
  return {
    title: "Thông báo ",
    success: "Thành công",
    error: "Không thành công ",
  };
});
