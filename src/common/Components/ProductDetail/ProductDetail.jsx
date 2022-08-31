import { useState, useEffect } from "react";
import Link from "next/link";
import { RouterLinkConfig } from "../../constants/RouterLink";
import ProductDetailContent from "./ProductDetailContent/ProductDetailContent";
import ProductDetailComment from "./ProductDetailComment/ProductDetailComment";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getProductByName } from "../../redux/features/product/productThunks";
import { selectProductDetail } from "../../redux/features/product/productSelects";
import { addNotification } from "../../redux/features/notification/notificationSlice";
import { selectNotifications } from "../../redux/features/notification/notificationSelects";
import { v4 } from "uuid";
import NotificationRoot from "../Notification/NotificationRoot";
import BreadCrumb from "../Breadcrumb/BreadCrumb";

export default function ProductDetail() {
  const router = useRouter();
  const dispatch = useDispatch();
  const dataProductDetail = useSelector(selectProductDetail);
  const dataNotification = useSelector(selectNotifications)
  const [maxQuality, setMaxQuality] = useState();
  const [quality, setQuality] = useState(1)
  const [dataBreadcrumb] = useState([
    { name: 'index', link: '/' },
    { name: 'Sản phẩm ', link: '/' },
    { name: `${router.query.name}`, link: `/product/${router.query.name}` },
  ])
  useEffect(() => {
    dispatch(getProductByName(router.query.name, null))
  }, [router.query.name])

  const onChaneQuality = (value) => {
    if (value > 0) {
      setQuality(quality + 1);
    }
    else if (value < 0) {
      if (quality > 1) {
        setQuality(quality - 1);
      }
      else {
        setQuality(quality);

      }
    }
  }
  const onAddCart = () => {
    const value = {
      id: v4(),
      type: "success",
      icon: `<i class="fa-solid fa-bag-shopping icon-success"></i>`,
      message: "Thêm sản phẩm vào giỏ hàng thành công "
    }
    dispatch(addNotification(value))
  }
  return (
    <>
      <NotificationRoot data={dataNotification} />
      <div className="detail">
        <div className="container">
          <div className="detail__content breadcrumb">
            <div className="detail__content___breadcrumb breadcrumb__content">
              <BreadCrumb data={dataBreadcrumb} />
            </div>
            <div className="detail__content___product">
              <div className="common">
                <div className="photo">
                  <div className="photo__box">
                    <div className="image"></div>
                    <div className="videoShow" />
                  </div>
                  <ul className="photo__side">
                    <li className="photo__side___item">
                      <picture>
                        <img src={"http://caresspet.com/wp-content/uploads/2018/10/s16-1024x768.jpg"} alt="" />
                      </picture>
                    </li>
                  </ul>
                </div>
                <div className="info">
                  <div className="info__basic">
                    <div className="categorywp">
                      <div className="wp">
                        <span>
                          Danh mục : <b>Lẩu</b>{" "}
                        </span>
                      </div>
                      <div className="wp">
                        <span>
                          Tên quán : <b>Lẩu</b>{" "}
                        </span>
                      </div>
                    </div>
                    <h1 className="title"></h1>
                    <div className="starBuy">
                      <div className="star ac">
                        <i className="fa-solid fa-star fa-size" />
                        <i className="fa-solid fa-star fa-size" />
                        <i className="fa-solid fa-star fa-size" />
                        <i className="fa-solid fa-star fa-size" />
                        <i className="fa-solid fa-star fa-size" />
                        <p>( 659 Đánh giá của người dùng )</p>
                      </div>
                      <div className="buy ac">
                        <span>Đã bán 12.000+</span>
                      </div>
                    </div>
                    <div className="pricex">
                      <h1 className="pricex__w gt">520.480 Đ</h1>
                      <h3 className="price__w sale">
                        450.000 Đ
                        <div className="opwSale">
                          <span>-43%</span>
                        </div>
                      </h3>
                      <div className="pricex__absGift">
                        <p>
                          <i className="fa-solid fa-gift fa-size" />
                          Áp dụng mã giảm giá 50K - Giảm giá vận chuyển 25%
                        </p>
                      </div>
                    </div>
                    <div className="selectProduct">
                      <h4 className="title">Lựa chọn</h4>
                      <ul className="selectProduct__main">
                        <li className="itemSelect">
                          <b>Không Toping</b>
                        </li>
                        <li className="itemSelect">
                          <b>Không Toping</b>
                        </li>
                        <li className="itemSelect">
                          <b>Không Toping</b>
                        </li>
                        <li className="itemSelect active">
                          <i className="fa-solid fa-check fa-size" />
                          <b>Không bún</b>
                        </li>
                        <li className="itemSelect">
                          <b>Không Toping</b>
                        </li>
                      </ul>
                    </div>
                    <div className="btnProduct">
                      <div className="btnProduct__quality">
                        <span>Số lượng </span>
                        <div className="btnProduct__quality___input">
                          <i onClick={() => onChaneQuality(-1)} className="fa-solid fa-minus fa-size" />
                          <input type="number" name="" defaultValue={quality} id="" />
                          <i onClick={() => onChaneQuality(+1)} className="fa-solid fa-plus fa-size" />
                        </div>
                      </div>
                      <div className="btnProduct__main">
                        <button type="button" className="btn btn-buy">
                          <i className="fa-solid fa-bag-shopping fa-size" />{" "}
                          MUA NGAY
                        </button>
                        <button onClick={onAddCart} type="button" className="btn btn-cart">
                          <i className="fa-solid fa-cart-plus fa-size" />
                          Thêm vào giỏ
                        </button>
                      </div>
                    </div>
                    <div className="selectGift">
                      <h4 className="selectGift__title">Mã giảm giá</h4>
                      <ul className="selectGift__main">
                        <li className="selectGift__main___item">
                          <h3>
                            <i className="fa-solid fa-gift fa-size" /> Giảm
                            25K
                          </h3>
                        </li>
                        <li className="selectGift__main___item">
                          <h3>
                            <i className="fa-solid fa-gift fa-size" /> Giảm
                            25K
                          </h3>
                        </li>
                        <li className="selectGift__main___item">
                          <h3>
                            <i className="fa-solid fa-gift fa-size" /> Giảm
                            25K
                          </h3>
                        </li>
                        <li className="selectGift__main___item">
                          <h3>
                            <i className="fa-solid fa-gift fa-size" /> Giảm
                            25K
                          </h3>
                        </li>
                      </ul>
                      <div className="infoGift">
                        <i className="fa-solid fa-circle-info fa-size" />
                        <ul className="infoGift__main">
                          <li className="infoGift__main___item">
                            Đơn hàng tối thiểu 150k mua được tối đa mỗi món 1
                            phần
                          </li>
                          <li className="infoGift__main___item">
                            Đơn hàng tối thiểu 150k mua được tối đa mỗi món 1
                            phần
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="infoProductwp">
                      <ul className="infoProductwp__main">
                        <li className="infoProductwp__main___item">
                          <h3 className="ti">Người ăn</h3>
                          <p>4 người ăn</p>
                        </li>
                        <li className="infoProductwp__main___item">
                          <h3 className="ti">Thương hiệu</h3>
                          <p>4 người ăn</p>
                        </li>
                        <li className="infoProductwp__main___item">
                          <h3 className="ti">Xuất sứ</h3>
                          <p>4 người ăn</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="viewShop">
                  <h4 className="title">Xem SHOP</h4>
                  <div className="content">
                    <div className="content__avatar">
                      <div className="img">
                        <picture>
                          <img
                            src="https://loanthehongnhan.vn/hinh-anh-anime-doi/imager_29338.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="nameCheck">
                        <div className="check">
                          <i className="fa-solid fa-circle-check fa-size" />
                          <span>Đã kiểm tra </span>
                        </div>
                        <div className="name">
                          <span>Lẩu Bò Hà Duyên</span>
                        </div>
                      </div>
                    </div>
                    <div className="content__info">
                      <ul className="content__info___main">
                        <li className="content__info___main____item">
                          <div className="wp">
                            <span>
                              <i className="fa-solid fa-star fa-size" />
                              Đánh Giá :
                            </span>
                            <b>4.4k</b>
                          </div>
                        </li>
                        <li className="content__info___main____item">
                          <div className="wp">
                            <span>
                              <i className="fa-solid fa-user-clock fa-size" />
                              Theo dõi :
                            </span>
                            <b>4.4k</b>
                          </div>
                        </li>
                        <li className="content__info___main____item">
                          <div className="wp">
                            <span>
                              <i className="fa-solid fa-box fa-size" />
                              Sản phẩm:
                            </span>
                            <b>49.4k</b>
                          </div>
                        </li>
                        <li className="content__info___main____item">
                          <div className="wp">
                            <span>
                              <i className="fa-solid fa-bag-shopping fa-size" />
                              Đã bán :
                            </span>
                            <b>942.4k</b>
                          </div>
                        </li>
                      </ul>
                      <div className="content__info___btnShow">
                        <Link
                          href={RouterLinkConfig.shopIndex(
                            "lau-nha-lam-viet-nam"
                          )}
                        >
                          <a>
                            <button type="button">
                              <i className="fa-solid fa-eye fa-size" />
                              Xem shop
                            </button>
                          </a>
                        </Link>
                        <button type="button">
                          <i className="fa-solid fa-plus fa-size" />
                          Theo dõi
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail__content___wop">
              <ProductDetailContent />
            </div>
            <div className="detail__content___comment">
              <div className="title">
                <h4>
                  <i className="fa-solid fa-comments fa-size" /> Đánh giá từ
                  khách hàng
                </h4>
              </div>
              <div className="evaluate">
                <div className="evaluate__point">
                  <ProductDetailComment />
                </div>
                <div className="evaluate__pagination">
                  <ul className="evaluate__pagination___main">
                    <li className="item prev">
                      <i className="fa-solid fa-angle-left" />
                    </li>
                    <li className="item active">1</li>
                    <li className="item">1</li>
                    <li className="item">1</li>
                    <li className="item">...</li>
                    <li className="item">1</li>
                    <li className="item">1</li>
                    <li className="item">1</li>
                    <li className="item next">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productAbout">
        <div className="container">
          <div className="productAbout__opw">
            <div className="title">
              <h4>Thức ăn đi kèm</h4>
            </div>
          </div>
          <div className="productAbout__product">
            <div className="productAbout__product___overScroll">
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
            </div>
          </div>
        </div>
        <div className="productAbout">
          <div className="container">
            <div className="productAbout__opw">
              <div className="title">
                <h4>Có thể bạn yêu thích</h4>
              </div>
            </div>
            <div className="productAbout__product">
              <div className="productAbout__product___overScroll">
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
}

