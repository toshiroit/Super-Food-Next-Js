export const RouterLinkConfig = {
  //*Trang chủ của web
  //*
  index: "/",

  //*Xem thông tin sản phẩm
  //*
  productDetailL: (nameProduct) => {
    return `/product/${nameProduct}`;
  },

  //**Giỏ hàng  */
  cart: "/cart",
  //*Xem thông tin của Shop bán hàng
  //*
  shopIndex: (nameShop) => {
    return `/shop/${nameShop}?tow=shop`;
  },
  shopAllProduct: (nameShop) => {
    return `/shop/${nameShop}?tow=product`;
  },
  shopCategory: (nameShop) => {
    return `/shop/${nameShop}?tow=category`;
  },
  shopInfo: (nameShop) => {
    return `/shop/${nameShop}?tow=info`;
  },
};
