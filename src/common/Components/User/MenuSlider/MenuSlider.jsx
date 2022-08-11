import Link from "next/link";
import React from "react";

export default function MenuSlider() {
  return (
    <div className="content">
      <ul className="content__main">
        <div className="content__main___wp">
          <div className="nameFx">
            <span>Tài khoản </span>
          </div>
          <Link href={"/user/info"}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-house-user fa-size" />
                <span>Thông tin tài khoản </span>
              </li>
            </a>
          </Link>
          <Link href={"/user/shop"}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-shop fa-size" />
                <span>Thông tin Shop </span>
              </li>
            </a>
          </Link>
          <Link href={"/user/price"}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-money-bill fa-size" />
                <span>Số dư </span>
              </li>
            </a>
          </Link>
        </div>
        <div className="content__main___wp">
          <div className="nameFx">
            <span>Giao dịch </span>
          </div>
          <Link href={"/user/order"}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-truck-fast fa-size" />
                <span>Đơn hàng </span>
              </li>
            </a>
          </Link>

          <li className="content__main___wp____item">
            <i className="fa-solid fa-bag-shopping fa-size" />
            <span> Đã mua </span>
          </li>
          <li className="content__main___wp____item">
            <i className="fa-solid fa-money-bills fa-size" />
            <span>Đã thanh toán </span>
          </li>
        </div>
        <div className="content__main___wp">
          <div className="nameFx">
            <span>Địa chỉ / Thanh toán </span>
          </div>
          <li className="content__main___wp____item">
            <i className="fa-solid fa-house-user fa-size" />
            <span>Địa chỉ thanh toán </span>
          </li>
          <li className="content__main___wp____item">
            <i className="fa-solid fa-house-user fa-size" />
            <span>Thông tin tài khoản </span>
          </li>
          <li className="content__main___wp____item">
            <i className="fa-solid fa-house-user fa-size" />
            <span>Thông tin tài khoản </span>
          </li>
        </div>
        <div className="content__main___wp">
          <div className="nameFx">
            <span>Bảo mật </span>
          </div>
          <li className="content__main___wp____item">
            <i className="fa-solid fa-house-user fa-size" />
            <span>Thông tin tài khoản </span>
          </li>
          <li className="content__main___wp____item">
            <i className="fa-solid fa-house-user fa-size" />
            <span>Thông tin tài khoản </span>
          </li>
          <li className="content__main___wp____item">
            <i className="fa-solid fa-house-user fa-size" />
            <span>Thông tin tài khoản </span>
          </li>
        </div>
        <div className="content__main___wp">
          <div className="nameFx">
            <span>Thông báo </span>
          </div>
          <li className="content__main___wp____item">
            <i className="fa-solid fa-house-user fa-size" />
            <span>Thông tin tài khoản </span>
          </li>
          <li className="content__main___wp____item">
            <i className="fa-solid fa-house-user fa-size" />
            <span>Thông tin tài khoản </span>
          </li>
          <li className="content__main___wp____item">
            <i className="fa-solid fa-house-user fa-size" />
            <span>Thông tin tài khoản </span>
          </li>
        </div>
      </ul>
    </div>
  );
}
