export const BASE_API = "localhost:8080/api/v1/";

//product
export const GET_PRODUCT_BY_PAGE = (page) => `products?page=${page}`;
export const GET_PRODUCT_BY_CURRENT_PAGE = (page) => `products?page=${page};`;
export const GET_ALL_PRODUCT = "products";
export const SEARCH_PRODUCT = "products/search";

//user
export const GET_USER_BY_PAGE = (page) => `users?page=${page}`;
export const GET_USER_BY_PHONE = (phone) => `user/?phone=${phone}`;
export const GET_USER_BY_EMAIL = (email) => `user/?email=${email}`;
export const UPDATE_USER_BY_PHONE = `user/update`;

//auth
export const AUTH_REFRESH_TOKEN = "auth/refresh-token";
export const AUTH_LOGIN = "auth/login";
export const AUTH_REGISTRATION = "auth/registration";
export const AUTH_LOGOUT = "auth/logout";
export const AUTH_FORGOT = "auth/forgot";
export const AUTH_EDIT_PASSWORD = "auth/edit/password";
export const AUTH_REGISTRATION_ACTIVE = "registration/active";
export const AUTH_USER_BY_TOKEN = "user/me";
