export default function Header() {
  return (
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
              <p className="topbar__item___text">Tiết kiệp hơn với ứng dụng</p>
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
              <img
                src="./public/images/vi_VN.png"
                className="img-language"
                alt=""
              />
              <p className="topbar__item___text">Việt nam</p>
              <i className="fa-solid fa-caret-down fa-size fa-scale-1" />
              <ul className="list">
                <li className="list__item">
                  <img
                    src="./public/images/vi_VN.png"
                    className="img-language"
                    alt=""
                  />
                  <p>Tiếng việt</p>
                  <i className="fa-solid fa-check fa-size" />
                </li>
                <li className="list__item">
                  <img
                    src="./public/images/en_US.png"
                    className="img-language"
                    alt=""
                  />
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
              <div className="logo">
                <img src="/images/logo1.jpg" alt="" />
              </div>
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
                    <i className="fa-solid fa-angle-down fa-size" />
                    <ul className="menu__lv">
                      <li className="menu__lv___item">
                        <p>Đồ ăn nhật cao cấp</p>
                      </li>
                      <li className="menu__lv___item">
                        <p>Trà sữa</p>
                      </li>
                      <li className="menu__lv___item">
                        <p>Cao cấp</p>
                      </li>
                      <li className="menu__lv___item">
                        <p>Đồ ăn nhật cao cấp</p>
                      </li>
                      <li className="menu__lv___item">
                        <p>Trà sữa</p>
                      </li>
                      <li className="menu__lv___item">
                        <p>Cao cấp</p>
                      </li>
                      <li className="menu__lv___item">
                        <p>Đồ ăn nhật cao cấp</p>
                      </li>
                      <li className="menu__lv___item">
                        <p>Trà sữa</p>
                      </li>
                      <li className="menu__lv___item">
                        <p>Cao cấp</p>
                      </li>
                      <li className="menu__lv___item">
                        <p>Đồ ăn nhật cao cấp</p>
                      </li>
                      <li className="menu__lv___item">
                        <p>Trà sữa</p>
                      </li>
                      <li className="menu__lv___item">
                        <p>Cao cấp</p>
                      </li>
                      <li className="menu__lv___item">
                        <p>Đồ ăn nhật cao cấp</p>
                      </li>
                      <li className="menu__lv___item">
                        <p>Trà sữa</p>
                      </li>
                      <li className="menu__lv___item">
                        <p>Cao cấp</p>
                      </li>
                    </ul>
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
                        <li className="keyword__item">Sản phẩm đang bán chạy</li>
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
                <div className="text cart">
                  <i className="fa-solid fa-basket-shopping fa-size" />
                  <p>Giỏ hàng</p>
                  <h4 className="quality">14</h4>
                </div>
                <div className="text user">
                  <div className="owp-w1" style={{ display: "none" }}>
                    <i className="fa-size fa-solid fa-user" />
                    <p>Tài khoản</p>
                  </div>
                  <div className="owp-w1 login-active">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
