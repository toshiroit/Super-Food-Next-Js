import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartProductGroup } from "../../redux/features/cart/cartSelects";
import BreadCrumb from "../Breadcrumb/BreadCrumb";
import CartItem from "./CartItem/CartItem";
import CartPay from "./CartPay/CartPay";

export default function Cart() {
  const dataCartRx = useSelector(selectCartProductGroup)
  let dataCartShop = [
    {
      codeShop: "SHOP12471761274",
      nameShop: "Lẩu cay trùng khánh ",
      imageShop: "",
      productCart: [
        {
          code: "PD228124812",
          codeShop: "SH14751WLAW",
          nameShop: "Cửa hàng lẩu trùng khánh ",
          info: "",
          image: "https://salt.tikicdn.com/cache/w78/ts/product/66/68/47/10c4405af274b68983c13cc6f03281fb.jpg.webp",
          nameProduct: "Lẩu trùng khánh cay nhẹ ",
          price: 146000,
          discount: 23,
          quality: 23,
        },
        {
          code: "PD48124612",
          codeShop: "SH14751WLAW",
          nameShop: "Cửa hàng lẩu trùng khánh ",
          info: "",
          image: "https://salt.tikicdn.com/cache/w78/ts/product/66/68/47/10c4405af274b68983c13cc6f03281fb.jpg.webp",
          nameProduct: "Lẩu trùng khánh cay nhẹ ",
          price: 146000,
          discount: 23,
          quality: 23,
        },
      ]
    },
    {
      codeShop: "SHOP12128611741",
      nameShop: "Lẩu cay trùng khánh ",
      imageShop: "",
      productCart: [
        {
          code: "PD961741",
          codeShop: "SH14751WLAW",
          nameShop: "Cửa hàng lẩu trùng khánh ",
          info: "",
          image: "https://salt.tikicdn.com/cache/w78/ts/product/66/68/47/10c4405af274b68983c13cc6f03281fb.jpg.webp",
          nameProduct: "Lẩu trùng khánh cay nhẹ ",
          price: 146000,
          discount: 23,
          quality: 23,
        },
        {
          code: "PD1614812",
          codeShop: "SH14751WLAW",
          nameShop: "Cửa hàng lẩu trùng khánh ",
          info: "",
          image: "https://salt.tikicdn.com/cache/w78/ts/product/66/68/47/10c4405af274b68983c13cc6f03281fb.jpg.webp",
          nameProduct: "Lẩu trùng khánh cay nhẹ ",
          price: 146000,
          discount: 23,
          quality: 23,
        },
      ]
    }
  ]
  const onOrder = (e) => {
    e.preventDefault()
    console.log(dataCartRx)
  }
  const totalProductCart = (dataCartShop) => {
    let sizeProduct = []
    dataCartShop.map(item => {
      item.productCart.map(productCart => {
        sizeProduct.push(productCart)
      })
    })
    return sizeProduct.length
  }
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__content breadcrumb">
          <div className="cart__content___breadcrumb breadcrumb__content">
            <BreadCrumb />
          </div>
          <div className="cart__content___main">
            <form onSubmit={onOrder}>
              <div className="cart__content___main____title">
                <h4>Giỏ hàng</h4>
              </div>
              <div className="cart__content___main____inner">
                <div className="left">
                  <div className="header">
                    <ul className="header__main">
                      <li className="header__main___item">
                        <input type="checkbox" className="" name="" id="" />
                        <label className="check-box" />
                        <span>Tất cả ( {totalProductCart(dataCartShop)} sản phẩm ) </span>
                      </li>
                      <li className="header__main___item price">
                        <span>Đơn giá </span>
                      </li>
                      <li className="header__main___item quality">
                        <span>Số lượng </span>
                      </li>
                      <li className="header__main___item priceResult">
                        <span>Thành tiền </span>
                      </li>
                      <li className="header__main___item remove">
                        <span>
                          <i className="fa-solid fa-delete-left" />
                        </span>
                      </li>
                    </ul>
                  </div>
                  <ul className="main">
                    <CartItem dataCartShop={dataCartShop} />
                  </ul>
                </div>
                <div className="right">
                  <CartPay />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
