import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterLinkConfig } from "../../constants/RouterLink";
import {
  showDisplay,
  hideDisplay,
} from "../../redux/features/showDisplay/showDisplaySlice";

import Login from "../Login/Login";

export default function Header() {
  const isDisplayLogin = useSelector((state) => state.showDisplaySlice.display);
  const dispatch = useDispatch();
  const [showLogin, setLogin] = useState(false);
  const isShowLogin = (isDisplay) => {
    dispatch(showDisplay());
  };
  return (
    <>
      {isDisplayLogin ? <Login /> : <> </>}
      <div className="navbar">
        <div className="navbar__top">
          <div className="container">
            <ul className="topbar">
              <li className="topbar__item">
                <p className="topbar__item___text">
                  Trở thành đổi tác với Super Shipping
                </p>
                <i className="fa-solid fa-handshake fa-size" />
              </li>
              <li className="topbar__item">
                <p className="topbar__item___text">
                  Tiết kiệp hơn với ứng dụng
                </p>
                <i className="fa-solid fa-mobile-screen fa-size" />
              </li>
              <li className="topbar__item">
                <p className="topbar__item___text">Chăm sóc khách hàng</p>
                <i className="fa-solid fa-mug-hot fa-size" />
              </li>
              <li className="topbar__item">
                <p className="topbar__item___text">Khám phá</p>
                <i className="fa-solid fa-basket-shopping fa-size" />
              </li>
              <li className="topbar__item">
                <p className="topbar__item___text">Trợ giúp</p>
                <i className="fa-solid fa-circle-question fa-size" />
              </li>
              <li className="topbar__item language">
                <picture>
                  <img src="/images/vi_VN.png" className="img-language" alt="" />

                </picture>
                <p className="topbar__item___text">Việt nam</p>
                <i className="fa-solid fa-caret-down fa-size fa-scale-1" />
                <ul className="list">
                  <li className="list__item">
                    <picture>
                      <img
                        src="/images/vi_VN.png"
                        className="img-language"
                        alt=""
                      />
                    </picture>
                    <p>Tiếng việt</p>
                    <i className="fa-solid fa-check fa-size" />
                  </li>
                  <li className="list__item">
                    <picture>
                      <img
                        src="/images/en_US.png"
                        className="img-language"
                        alt=""
                      />
                    </picture>
                    <p>Tiếng anh</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar__bottom">
          <div className="container">
            <div className="bottombar">
              <div className="bottombar__left">
                <Link href={RouterLinkConfig.index}>
                  <a>
                    <div className="logo">
                      <picture>
                        <img src="/images/logo1.jpg" alt="" />
                      </picture>
                    </div>
                  </a>
                </Link>
                <div className="bottombar__left___group">
                  <ul className="menu">
                    <li className="menu__item address">
                      <h4 className="info">Địa chỉ</h4>
                      <p>Đăk Lăk</p>
                      <i className="fa-solid fa-angle-down fa-size" />
                    </li>
                    <li className="menu__item">
                      <p>Bộ sưu tập</p>
                    </li>
                    <li className="menu__item">
                      <p>Ăn uống</p>
                    </li>
                    <li className="menu__item">
                      <p>Khám phá</p>
                    </li>
                    <li className="menu__item">
                      <p>Tin tức</p>
                    </li>
                    <li className="menu__item">
                      <p>Giao hàng</p>
                    </li>
                    <li className="menu__item">
                      <p>Chi nhánh</p>
                    </li>
                    <li className="menu__item">
                      <p>Hõ trợ</p>
                    </li>
                    <li className="menu__item">
                      <p>Báo lỗi</p>
                    </li>
                  </ul>
                  <div className="search">
                    <input
                      type="search"
                      name=""
                      placeholder="Tìm kiếm sản phẩm ........... "
                      id=""
                    />
                    <i className="fa-solid fa-magnifying-glass fa-size fa-search-sett" />
                    <div className="search__list" style={{ display: "none" }}>
                      <div className="wp">
                        <div className="title">
                          <i className="fa-solid fa-signature" />
                          Tìm kiếm sản phẩm
                        </div>
                        <ul className="search__list___wp">
                          <li className="search__list___wp____item">
                            <div className="text">
                              <i className="fa-solid fa-magnifying-glass fa-size" />
                              <p>Tai nghe chơi game gaming</p>
                            </div>
                            <i className="fa-solid fa-xmark" />
                          </li>
                          <div className="search__list___wp____show">
                            <p>Xem thêm</p>
                            <i className="fa-solid fa-chevron-down fa-size" />
                          </div>
                        </ul>
                      </div>
                      <div className="wp">
                        <div className="title">
                          <i className="fa-solid fa-font" />
                          Từ khóa tìm kiếm phổ biến
                        </div>
                        <ul className="keyword">
                          <li className="keyword__item">Sản phẩm hot</li>
                          <li className="keyword__item">Sản phẩm hot</li>
                          <li className="keyword__item">
                            Sản phẩm đang bán chạy
                          </li>
                          <li className="keyword__item">Gà đông tảo</li>
                          <li className="keyword__item">Trà sữa</li>
                          <li className="keyword__item">Cơm chiên</li>
                          <li className="keyword__item">Cơm sinh viên</li>
                          <li className="keyword__item">Cơm 0đ</li>
                        </ul>
                      </div>
                      <div className="wp">
                        <div className="title">
                          <i className="fa-solid fa-list" /> Danh mục phổ biến
                        </div>
                        <ul className="category">
                          <li className="category__item">
                            <span>Lẩu gia đình </span>
                          </li>
                          <li className="category__item">
                            <span>Lẩu gia đình </span>
                          </li>
                          <li className="category__item">
                            <span>Lẩu gia đình </span>
                          </li>
                          <li className="category__item">
                            <span>Lẩu gia đình </span>
                          </li>
                          <li className="category__item">
                            <span>Lẩu gia đình </span>
                          </li>
                          <li className="category__item">
                            <span>Lẩu gia đình </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottombar__right">
                <div className="bottombar__right___userMobile">
                  <div id="menuFixedRootIdx" className="menu">
                    <i className="fa-solid fa-bars fa-size" />
                  </div>
                </div>
                <div className="bottombar__right___user">
                  <Link href={RouterLinkConfig.cart}>
                    <a className="text user">
                      <div className="text cart">
                        <i className="fa-solid fa-basket-shopping fa-size" />
                        <p>Giỏ hàng</p>
                        <h4 className="quality">14</h4>
                      </div>
                    </a>
                  </Link>
                  <div className="text user">
                    <div onClick={() => isShowLogin(true)} className="owp-w1">
                      <i className="fa-size fa-solid fa-user" />
                      <span>Tài khoản</span>
                    </div>
                    {/* <div className="owp-w1 login-active">
                      <i className="fa-size fa-solid fa-user" />
                      <div className="inner">
                        <span className="name">Đâu Văn Nam </span>
                        <div className="woi">
                          <li className="woi__item">Số dư : 0</li>
                        </div>
                      </div>
                      <ul className="info">
                        <li className="info__item">
                          <i className="fa-solid fa-info fa-size-1" />
                          <p>Thông tin tài khoản</p>
                        </li>
                        <li className="info__item">
                          <i className="fa-solid fa-credit-card fa-size-1" />
                          <p>Quản lí thanh toán</p>
                        </li>
                        <li className="info__item">
                          <i className="fa-solid fa-credit-card fa-size-1" />
                          <p>Quản lí địa chỉ</p>
                        </li>
                        <li className="info__item">
                          <i className="fa-solid fa-credit-card fa-size-1" />
                          <p>Quản lí thông tin</p>
                        </li>
                        <li className="info__item">
                          <i className="fa-solid fa-credit-card fa-size-1" />
                          <p>Đồng bộ</p>
                        </li>
                        <li className="info__item">
                          <i className="fa-solid fa-credit-card fa-size-1" />
                          <p>Nạp tiền +</p>
                        </li>
                        <li className="info__item">
                          <i className="fa-solid fa-credit-card fa-size-1" />
                          <p>Quản lí thanh toán</p>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
