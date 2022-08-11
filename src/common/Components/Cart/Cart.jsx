export default function Cart() {
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__content breadcrumb">
          <div className="cart__content___breadcrumb breadcrumb__content">
            <ul className="main">
              <li className="main__item">Supership</li>
              <li className="main__item">Người dùng</li>
              <li className="main__item">Giỏ hàng</li>
            </ul>
          </div>
          <div className="cart__content___main">
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
                      <span>Tất cả ( 13 sản phẩm ) </span>
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
                  <li className="main__item">
                    <div className="main__item___header">
                      <div className="nameShop">
                        <input type="checkbox" name="" id="" />
                        <div className="wo">
                          <i className="fa-solid fa-store" />
                          <span>Cửa hàng lẩu trùng khách </span>
                        </div>
                      </div>
                      <div className="comboGiftShip">
                        <span className="name"> Combo khuyến mãi </span>
                        <p>Mua thêm 10 sản phẩm để được giảm 25%</p>
                      </div>
                    </div>
                    <div className="main__item___main">
                      <div className="productCart">
                        <div className="productCart__checkbox">
                          <input type="checkbox" name="" id="" />
                        </div>
                        <div className="productCart__image">
                          <img
                            src="https://salt.tikicdn.com/cache/w78/ts/product/66/68/47/10c4405af274b68983c13cc6f03281fb.jpg.webp"
                            alt=""
                          />
                        </div>
                        <div className="productCart__name productCart__nameMobile">
                          <p>Lẩu cay trùng khách siêu ngon ( Cay gấp đôi )</p>
                          <div className="productCart__priceMobile">
                            <div className="pricew1">
                              <span>146.000đ</span>
                            </div>
                            <div className="pricew2">
                              <span>130.000đ </span>
                            </div>
                            <div className="salePrice">
                              <span>
                                Giảm giá 43%
                                <i className="fa-solid fa-arrow-trend-down fa-size" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="productCart__name">
                          <p>Lẩu cay trùng khách siêu ngon ( Cay gấp đôi )</p>
                        </div>
                        <div className="productCart__price">
                          <div className="pricew1">
                            <span>146.000đ</span>
                          </div>
                          <div className="pricew2">
                            <span>130.000đ </span>
                          </div>
                          <div className="salePrice">
                            <span>
                              Giảm giá 43%
                              <i className="fa-solid fa-arrow-trend-down fa-size" />
                            </span>
                          </div>
                        </div>
                        <div className="productCart__quality">
                          <div className="inner">
                            <i className="fa-solid fa-minus fa-size" />
                            <input type="number" name="" id="" />
                            <i className="fa-solid fa-plus fa-size" />
                          </div>
                        </div>
                        <div className="productCart__priceResult">
                          <span>450.000đ </span>
                        </div>
                        <div className="productCart__remove">
                          <i className="fa-solid fa-xmark fa-size" />
                        </div>
                      </div>
                    </div>
                    <div className="main__item___footer">
                      <div className="vorcherShop">
                        <div className="inner">
                          <i className="fa-solid fa-gift fa-size" />
                          <span>Vorcher của shop </span>
                          <i className="fa-solid fa-chevron-down fa-size" />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="right">
                <div className="header">
                  <div className="inline">
                    <span>
                      <i className="fa-solid fa-location-dot fa-size" />
                      Giao tới
                    </span>
                    <span>
                      <i className="fa-solid fa-file-invoice fa-size" />
                      Thay đổi
                    </span>
                  </div>
                  <div className="info">
                    <div className="info__name">
                      <span>Đậu Văn Nam </span>
                    </div>
                    <i className="bd" />
                    <div className="info__phone">
                      <span>0948124851</span>
                    </div>
                  </div>
                  <div className="address">
                    <p>
                      Đăk lakw, Phường Tân Lợi, Thành phố Buôn Ma Thuột, Đắk Lắk
                    </p>
                  </div>
                </div>
                <div className="main">
                  <div className="main__gift">
                    <span>
                      <i className="fa-solid fa-gift fa-size" /> Mã giảm giá
                    </span>
                    <span>
                      Có thể chọn (2)
                      <i className="fa-solid fa-circle-info fa-size" />
                    </span>
                  </div>
                  <ul className="main__list">
                    <li className="main__list___item">
                      <div className="image">
                        <img
                          src="https://cdn.tgdd.vn/2020/04/GameApp/image-180x180.png"
                          alt=""
                        />
                      </div>
                      <i className="bd" />
                      <div className="price">
                        <span>Giảm ngay 20k</span>
                      </div>
                      <div className="btn">
                        <button type="submit">Chọn</button>
                      </div>
                    </li>
                    <li className="main__list___item">
                      <div className="image">
                        <img
                          src="https://cdn.tgdd.vn/2020/04/GameApp/image-180x180.png"
                          alt=""
                        />
                      </div>
                      <i className="bd" />
                      <div className="price">
                        <span>Giảm ngay 20k</span>
                      </div>
                      <div className="btn">
                        <button type="submit">Chọn</button>
                      </div>
                    </li>
                    <li className="main__list___item">
                      <div className="image">
                        <img
                          src="https://cdn.tgdd.vn/2020/04/GameApp/image-180x180.png"
                          alt=""
                        />
                      </div>
                      <i className="bd" />
                      <div className="price">
                        <span>Giảm ngay 20k</span>
                      </div>
                      <div className="btn">
                        <button type="submit">Chọn</button>
                      </div>
                    </li>
                  </ul>
                  <div className="main__input">
                    <input
                      placeholder="Mã giảm giá của bạn "
                      type="text"
                      name=""
                      id=""
                    />
                    <button>Áp dụng</button>
                  </div>
                </div>
                <div className="footer">
                  <ul className="price__main">
                    <li className="price__main___item">
                      <span>Tạm tính </span>
                      <span className="boldPrice">439.000 đ</span>
                    </li>
                    <li className="price__main___item">
                      <span>Giảm giá </span>
                      <span className="boldPrice salePrice"> -39.000 đ</span>
                    </li>
                  </ul>
                  <div className="price__result">
                    <h4>Tổng tiền</h4>
                    <div className="w">
                      <span>420.000đ </span>
                      <p>( Đã bao gồm VAT nếu có )</p>
                    </div>
                  </div>
                  <div className="buy">
                    <button type="button" className="btn btn-buy">
                      <i className="fa-solid fa-bag-shopping" /> ĐẶT NGAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
