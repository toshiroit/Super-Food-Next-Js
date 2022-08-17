import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API, GET_PRODUCT_BY_CURRENT_PAGE, GET_PRODUCT_BY_PAGE } from "../../../constants/ApiLink";
import { RouterLinkConfig } from "../../../constants/RouterLink";
import RequestServices from "../../services/request-services";

export const fetchProductsByFilterParams = createAsyncThunk("products/fetchFilterProducts", async (filter) => {
  const responsive = await RequestServices.post(
    `${BASE_API + GET_PRODUCT_BY_CURRENT_PAGE(filter.currentPage)}`,
    filter,
  );
  return {
    items: responsive.data,
    pagesCount: parent(responsive.headers["page-total-count"]),
    totalElements: parent(responsive.headers["page-total-elements"]),
  };
});

export const fetchProducts = createAsyncThunk("product/fetchProducts", async (page) => {
  const responsive = await RequestServices.get(`${BASE_API + GET_PRODUCT_BY_PAGE(page)}`);
  return {
    items: responsive.data,
    pagesCount: parent(responsive.headers["page-total-count"]),
    totalElements: parent(responsive.headers["page-total-elements"]),
  };
});
