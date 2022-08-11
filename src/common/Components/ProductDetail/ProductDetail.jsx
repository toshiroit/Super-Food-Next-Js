import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { RouterLinkConfig } from "../../constants/RouterLink";
export default function ProductDetail({ data }) {
  return (
    <>
      <>
        <div className="detail">
          <div className="container">
            <div className="detail__content breadcrumb">
              <div className="detail__content___breadcrumb breadcrumb__content">
                <ul className="main">
                  <li className="main__item">Supership</li>
                  <li className="main__item">Sản phẩm</li>
                  <li className="main__item">Set cơm việt</li>
                </ul>
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
                          <img src={""} alt="" />
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
                            <i className="fa-solid fa-minus fa-size" />
                            <input type="number" name="" id="" />
                            <i className="fa-solid fa-plus fa-size" />
                          </div>
                        </div>
                        <div className="btnProduct__main">
                          <button type="button" className="btn btn-buy">
                            <i className="fa-solid fa-bag-shopping fa-size" />{" "}
                            MUA NGAY
                          </button>
                          <button type="button" className="btn btn-cart">
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
                <div className="title">
                  <h4>
                    <i className="fa-solid fa-book" /> Thông tin và hướng dẫn sử
                    dụng
                  </h4>
                </div>
                <div className="table">
                  <ul className="table__select">
                    <li className="table__select___item active">Mô tả</li>
                    <li className="table__select___item">Mô tả</li>
                    <li className="table__select___item">Mô tả</li>
                    <li className="table__select___item">Mô tả</li>
                  </ul>
                  <div className="table__content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias adipisci nisi asperiores corrupti officiis sapiente
                      magnam, neque blanditiis ducimus accusantium est soluta
                      dolore obcaecati quibusdam voluptates dolores quas modi
                      dignissimos! Sint maxime, culpa ipsum eos repellendus vel
                      nihil suscipit commodi quibusdam mollitia laboriosam
                      consequatur placeat distinctio nostrum necessitatibus et
                      libero praesentium sapiente veniam eligendi atque. Fuga
                      natus consectetur neque quo.
                    </p>
                  </div>
                </div>
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
                    <div className="evaluate__point___user evaluate__point___top">
                      <div className="left">
                        <div className="title">
                          <h4>4.9</h4>
                          <div className="w">
                            <div className="star">
                              <i className="fa-solid fa-star fa-size" />
                              <i className="fa-solid fa-star fa-size" />
                              <i className="fa-solid fa-star fa-size" />
                              <i className="fa-solid fa-star fa-size" />
                              <i className="fa-solid fa-star fa-size" />
                            </div>
                            <span>1041+ nhận xét </span>
                          </div>
                        </div>
                        <ul className="point">
                          <li className="point__item">
                            <div className="star">
                              <i className="fa-size fa-solid fa-star" />
                              <i className="fa-size fa-solid fa-star" />
                              <i className="fa-size fa-solid fa-star" />
                              <i className="fa-size fa-solid fa-star" />
                              <i className="fa-size fa-solid fa-star" />
                            </div>
                            <div className="wp">
                              <div className="wp__after" />
                            </div>
                            <div className="text">
                              <span>914.914+</span>
                            </div>
                          </li>
                          <li className="point__item">
                            <div className="star">
                              <i className="fa-size fa-solid fa-star" />
                              <i className="fa-size fa-solid fa-star" />
                              <i className="fa-size fa-solid fa-star" />
                              <i className="fa-size fa-solid fa-star" />
                              <i className="fa-size fa-solid fa-star not-active" />
                            </div>
                            <div className="wp" />
                            <div className="text">
                              <span>12.000+</span>
                            </div>
                          </li>
                          <li className="point__item">
                            <div className="star">
                              <i className="fa-size fa-solid fa-star" />
                              <i className="fa-size fa-solid fa-star" />
                              <i className="fa-size fa-solid fa-star" />
                              <i className="fa-size fa-solid fa-star not-active" />
                              <i className="fa-size fa-solid fa-star not-active" />
                            </div>
                            <div className="wp" />
                            <div className="text">
                              <span>912</span>
                            </div>
                          </li>
                          <li className="point__item">
                            <div className="star">
                              <i className="fa-size fa-solid fa-star" />
                              <i className="fa-size fa-solid fa-star" />
                              <i className="fa-size fa-solid fa-star not-active" />
                              <i className="fa-size fa-solid fa-star not-active" />
                              <i className="fa-size fa-solid fa-star not-active" />
                            </div>
                            <div className="wp" />
                            <div className="text">
                              <span>120</span>
                            </div>
                          </li>
                          <li className="point__item">
                            <div className="star">
                              <i className="fa-size fa-solid fa-star" />
                              <i className="fa-size fa-solid fa-star not-active" />
                              <i className="fa-size fa-solid fa-star not-active" />
                              <i className="fa-size fa-solid fa-star not-active" />
                              <i className="fa-size fa-solid fa-star not-active" />
                            </div>
                            <div className="wp" />
                            <div className="text">
                              <span>40</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="right">
                        <div className="title">
                          <h4>Tất cả hình ảnh (6)</h4>
                        </div>
                        <ul className="image">
                          <li className="image__item">
                            <img
                              src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                              alt=""
                            />
                          </li>
                          <li className="image__item">
                            <img
                              src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                              alt=""
                            />
                          </li>
                          <li className="image__item">
                            <img
                              src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                              alt=""
                            />
                          </li>
                          <li className="image__item">
                            <img
                              src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                              alt=""
                            />
                          </li>
                          <li className="image__item">
                            <img
                              src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                              alt=""
                            />
                          </li>
                          <li className="image__item">
                            <img
                              src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                              alt=""
                            />
                          </li>
                          <li className="image__item">
                            <img
                              src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                              alt=""
                            />
                          </li>
                        </ul>
                        <div className="sort">
                          <h3 className="w">Lọc theo :</h3>
                          <ul className="sort__main">
                            <li className="sort__main___item active">
                              5 <i className="fa-solid fa-star fa-size" />
                            </li>
                            <li className="sort__main___item">
                              4 <i className="fa-solid fa-star fa-size" />
                            </li>
                            <li className="sort__main___item">
                              3 <i className="fa-solid fa-star fa-size" />
                            </li>
                            <li className="sort__main___item">
                              2 <i className="fa-solid fa-star fa-size" />
                            </li>
                            <li className="sort__main___item">
                              1 <i className="fa-solid fa-star fa-size" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="evaluate__point___user">
                      <div className="left">
                        <div className="content">
                          <div className="avatar">
                            <img
                              src="https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-anime-cute.jpg"
                              alt=""
                            />
                          </div>
                          <div className="name">
                            <h3 className="w">Đậu Văn Nam</h3>
                            <div className="star">
                              <i className="fa-solid fa-star fa-size" />
                              <i className="fa-solid fa-star fa-size" />
                              <i className="fa-solid fa-star fa-size" />
                              <i className="fa-solid fa-star fa-size" />
                              <i className="fa-solid fa-star fa-size not-active" />
                            </div>
                            <div className="date">
                              <span>
                                <i className="fa-solid fa-clock" /> 2022-10-20 |
                                16:40:13
                              </span>
                            </div>
                            <div className="like">
                              <i className="fa-solid fa-thumbs-up fa-size" />
                              <b>49</b>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="right">
                        <div className="title">
                          <span>Hài lòng </span>
                          <div className="check">
                            <i className="fa-solid fa-circle-check fa-size" />
                            <span>Đã kiểm tra </span>
                          </div>
                        </div>
                        <div className="comment">
                          <div className="comment__text">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Beatae nesciunt dolor tempore, veritatis
                              iure libero! Laboriosam aliquid ullam odio
                              repudiandae quos voluptatem voluptates, recusandae
                              necessitatibus molestias perspiciatis. A, ab
                              tempore. Numquam eveniet assumenda modi repellat
                              quas, itaque expedita nulla magnam veniam. Animi
                              maiores, sit dicta sed ea officia asperiores
                              aliquam, voluptate, quam ducimus optio? Error
                              perspiciatis quas animi iste totam. Quae obcaecati
                              ad deserunt adipisci tempore perspiciatis atque?
                              Quaerat eaque assumenda ex esse, rem veritatis
                              ullam reprehenderit officiis! Alias quam ratione
                              minima sint voluptatibus distinctio cupiditate!
                              Assumenda iste voluptatem eos. Beatae, est
                              mollitia fugiat nostrum ab ipsam esse, maiores
                              doloremque praesentium quam officia optio. Iusto
                              non at, ea minus optio nostrum odio repudiandae
                              illo provident debitis voluptate doloribus
                              necessitatibus suscipit.
                            </p>
                          </div>
                          <ul className="comment__image">
                            <li className="comment__image___item video">
                              <img
                                src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                                alt=""
                              />
                              <div className="playVideo">
                                <i className="fa-size fa-solid fa-video" />
                                <span>4:30</span>
                              </div>
                            </li>
                            <li className="comment__image___item">
                              <img
                                src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                                alt=""
                              />
                            </li>
                            <li className="comment__image___item">
                              <img
                                src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                                alt=""
                              />
                            </li>
                            <li className="comment__image___item">
                              <img
                                src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                                alt=""
                              />
                            </li>
                            <li className="comment__image___item">
                              <img
                                src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                                alt=""
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="playVideo displayNone" style={{}}>
                          <video width="100%" height={500} controls="">
                            <source src="movie.mp4" type="video/mp4" />
                            <source src="movie.ogg" type="video/ogg" />
                            Not Found
                          </video>
                        </div>
                        <div className="btnComment">
                          <div className="btnComment__content">
                            <button className="btnLike" type="button">
                              <i className="fa-solid fa-thumbs-up fa-size" />
                              Thích
                            </button>
                            <button className="btnRep" type="button">
                              <i className="fa-solid fa-comment-dots fa-size" />
                              Phản hồi
                            </button>
                          </div>
                        </div>
                        <div className="repComment" style={{ display: "none" }}>
                          <div className="repComment__avatar">
                            <img
                              src="https://loanthehongnhan.vn/hinh-anh-anime-doi/imager_29338.jpg"
                              alt=""
                            />
                          </div>
                          <div className="repComment__content">
                            <div className="title">
                              Lẩu bồ Hà Duyên
                              <i className="fa-solid fa-circle-check fa-size" />
                            </div>
                            <form action="http://localhost:8080/">
                              <div className="text">
                                <textarea
                                  className="text__comment"
                                  name=""
                                  id=""
                                  defaultValue={""}
                                />
                              </div>
                              <button className="btnRep" type="button">
                                <i className="fa-solid fa-paper-plane" /> Phản
                                hồi
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="evaluate__point___user">
                      <div className="left">
                        <div className="content">
                          <div className="avatar">
                            <img
                              src="https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-anime-cute.jpg"
                              alt=""
                            />
                          </div>
                          <div className="name">
                            <h3 className="w">Đậu Văn Nam</h3>
                            <div className="star">
                              <i className="fa-solid fa-star fa-size" />
                              <i className="fa-solid fa-star fa-size" />
                              <i className="fa-solid fa-star fa-size" />
                              <i className="fa-solid fa-star fa-size" />
                              <i className="fa-solid fa-star fa-size not-active" />
                            </div>
                            <div className="date">
                              <span>
                                <i className="fa-solid fa-clock" /> 2022-10-20 |
                                16:40:13
                              </span>
                            </div>
                            <div className="like">
                              <i className="fa-solid fa-thumbs-up fa-size" />
                              <b>49</b>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="right">
                        <div className="title">
                          <span>Không hài lòng </span>
                          <ul className="repDis">
                            <li className="repDis__item">
                              Sản phẩm không giống mô tả
                            </li>
                            <li className="repDis__item">Sản phảm bị lỗi</li>
                            <li className="repDis__item">Sản phảm bị lỗi</li>
                          </ul>
                          <div className="check">
                            <i className="fa-solid fa-circle-check fa-size" />
                            <span>Đã kiểm tra </span>
                          </div>
                        </div>
                        <div className="comment">
                          <div className="comment__text">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Beatae nesciunt dolor tempore, veritatis
                              iure libero! Laboriosam aliquid ullam odio
                              repudiandae quos voluptatem voluptates, recusandae
                              necessitatibus molestias perspiciatis. A, ab
                              tempore. Numquam eveniet assumenda modi repellat
                              quas, itaque expedita nulla magnam veniam. Animi
                              maiores, sit dicta sed ea officia asperiores
                              aliquam, voluptate, quam ducimus optio? Error
                              perspiciatis quas animi iste totam. Quae obcaecati
                              ad deserunt adipisci tempore perspiciatis atque?
                              Quaerat eaque assumenda ex esse, rem veritatis
                              ullam reprehenderit officiis! Alias quam ratione
                              minima sint voluptatibus distinctio cupiditate!
                              Assumenda iste voluptatem eos. Beatae, est
                              mollitia fugiat nostrum ab ipsam esse, maiores
                              doloremque praesentium quam officia optio. Iusto
                              non at, ea minus optio nostrum odio repudiandae
                              illo provident debitis voluptate doloribus
                              necessitatibus suscipit.
                            </p>
                          </div>
                          <ul className="comment__image">
                            <li className="comment__image___item video">
                              <img
                                src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                                alt=""
                              />
                              <div className="playVideo">
                                <i className="fa-size fa-solid fa-video" />
                                <span>4:30</span>
                              </div>
                            </li>
                            <li className="comment__image___item">
                              <img
                                src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                                alt=""
                              />
                            </li>
                            <li className="comment__image___item">
                              <img
                                src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                                alt=""
                              />
                            </li>
                            <li className="comment__image___item">
                              <img
                                src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                                alt=""
                              />
                            </li>
                            <li className="comment__image___item">
                              <img
                                src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                                alt=""
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="playVideo displayNone" style={{}}>
                          <video width="100%" height={500} controls="">
                            <source src="movie.mp4" type="video/mp4" />
                            <source src="movie.ogg" type="video/ogg" />
                            Not Found
                          </video>
                        </div>
                        <div className="btnComment">
                          <div className="btnComment__content">
                            <button className="btnLike" type="button">
                              <i className="fa-solid fa-thumbs-up fa-size" />
                              Thích
                            </button>
                            <button className="btnRep" type="button">
                              <i className="fa-solid fa-comment-dots fa-size" />
                              Phản hồi
                            </button>
                          </div>
                        </div>
                        <div className="repComment">
                          <div className="repComment__avatar">
                            <img
                              src="https://loanthehongnhan.vn/hinh-anh-anime-doi/imager_29338.jpg"
                              alt=""
                            />
                          </div>
                          <div className="repComment__content">
                            <div className="title">
                              Lẩu bồ Hà Duyên
                              <i className="fa-solid fa-circle-check fa-size" />
                              <b>2022-10-20 | 10:43:54 </b>
                            </div>
                            <div className="text">
                              <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsa magni neque at! Sed
                                facere placeat eveniet ratione asperiores
                                voluptatibus quis ipsum tempore! Exercitationem
                                ducimus velit culpa minima, soluta nulla
                                architecto. Odit tempore dignissimos impedit
                                deleniti id ad molestiae. Atque assumenda
                                voluptatum officiis facere veritatis, veniam vel
                                doloremque illo tempora corrupti repellat
                                cupiditate velit dolore, consequatur, ducimus
                                error quaerat voluptate deserunt! Error sequi
                                repudiandae eum optio, id modi quia dicta
                                suscipit voluptate quasi explicabo, nemo quos
                                doloremque, repellendus iure! Voluptate vel
                                porro autem nulla inventore quis incidunt
                                veniam, laborum ratione ea. Nisi voluptates
                                consequuntur tempore optio deserunt labore aut
                                dolore quia molestias? Ipsam, eveniet odit
                                quaerat eaque numquam aspernatur dolorem
                                ratione, aperiam impedit aliquid pariatur
                                asperiores natus excepturi animi suscipit
                                maxime.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
      </>
      )
    </>
  );
}
