import Head from 'next/head'
export default function Home() {
  const data = [
    {
      name: "Set com viet ",
      pricew1: 2000,
      pricew2: 4000,
      buy: 40000,
      km: 24,
      point: 10
    }
  ]
  return (
    <>
      <Head> <title> Trang chủ </title> </Head>
      <div className="bodyIdx">
        <div className="container">
          <div className="category">
            <ul className="category__list">
              <li className="category__list___item">Cơm gà</li>
              <li className="category__list___item">Hải sản</li>
              <li className="category__list___item">Đô tươi sống</li>
              <li className="category__list___item">Cơm gà</li>
              <li className="category__list___item">Cơm gà</li>
              <li className="category__list___item">Cơm gà</li>
            </ul>
          </div>
          <div className="banner">
            <div className="banner__image">
              <div className="banner__image___w">
                <ul className="slider left">
                  <div onclick="plusSlides(-1)" className="slider__left control">
                    <i className="fa-solid fa-angle-left" />
                  </div>
                  <div onclick="plusSlides(1)" className="slider__right control">
                    <i className="fa-solid fa-chevron-right" />
                  </div>
                  {/* Slider tối thiệu phải có 5 ảnh tránh bị delay  */}
                  <li className="slider__item mySlides">
                    <img
                      className="imagewp"
                      src="./public/images/Banner.png"
                      alt=""
                    />
                  </li>
                </ul>
                <div className="right">
                  <div className="image__item">
                    <iframe
                      width="100%"
                      src="https://www.youtube.com/embed/1spY6ibnafE"
                      title="Overlord 4 Episode 1 Preview Trailer #2"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    />
                  </div>
                  <div className="image__item">
                    <img src="./public/images/Banner.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="banner__image___w2">
                <div className="item__image">
                  <img src="./public/images/Banner.png" alt="" />
                </div>
                <div className="item__image">
                  <img
                    src="https://cdn.quantrinhahang.edu.vn/wp-content/uploads/2019/06/fast-food-la-gi.jpg"
                    alt=""
                  />
                </div>
                <div className="item__image">
                  <img
                    src="https://cdn.quantrinhahang.edu.vn/wp-content/uploads/2019/06/fast-food-la-gi.jpg"
                    alt=""
                  />
                </div>
                <div className="item__image">
                  <img
                    src="https://cdn.quantrinhahang.edu.vn/wp-content/uploads/2019/06/fast-food-la-gi.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="gift">
            <div className="gift__content">
              <div className="gift__content___title">
                <h4>
                  <img src="./public/images/discountCode.png" alt="" />
                  Mã giảm giá
                </h4>
                <div className="btn">
                  <div className="btn btnLeft">
                    <i className="fa-solid fa-angle-left fa-size fa-w-left" />
                  </div>
                  <div className="btn btnRight">
                    <i className="fa-solid fa-angle-right fa-size fa-w-right" />
                  </div>
                </div>
              </div>
              <ul className="box-main gift__content___main">
                <li className="box-gift gift__content___main____item">
                  <img
                    src="https://salt.tikicdn.com/cache/w280/ts/banner/27/2e/2e/a7f80a2a24229e382a9a5602353c48c2.png.webp"
                    alt=""
                  />
                </li>
                <li className="box-gift gift__content___main____item">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/11028929/f8b8fa63883a2949cfd83466e43749c702ee46ee.png"
                    alt=""
                  />
                </li>
                <li className="box-gift gift__content___main____item">
                  <img
                    src="https://salt.tikicdn.com/cache/w280/ts/banner/27/2e/2e/a7f80a2a24229e382a9a5602353c48c2.png.webp"
                    alt=""
                  />
                </li>
                <li className="box-gift gift__content___main____item">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/11028929/f8b8fa63883a2949cfd83466e43749c702ee46ee.png"
                    alt=""
                  />
                </li>
                <li className="box-gift gift__content___main____item">
                  <img
                    src="https://salt.tikicdn.com/cache/w280/ts/banner/27/2e/2e/a7f80a2a24229e382a9a5602353c48c2.png.webp"
                    alt=""
                  />
                </li>
                <li className="box-gift gift__content___main____item">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/11028929/f8b8fa63883a2949cfd83466e43749c702ee46ee.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="main">
            <div className="main__wp1">
              <div className="top">
                <div className="main__wp1___title">
                  <h4>
                    <img src="./public/images/4813075.png" alt="" />
                    Gợi ý Menu hôm nay
                  </h4>
                </div>
                <div className="main__wp1___content">
                  <ul className="food">
                    {
                      data.map((item, index) => {
                        return (
                          <div>
                            <li className="food__item active__item">
                              <img
                                src="https://afamilycdn.com/150157425591193600/2022/2/15/1-16449087980291673297311-16449108699981816069985.jpeg"
                                alt=""
                              />
                              <p>Bữa cơm gia đình</p>
                            </li>
                            <li className="food__item">
                              <img
                                src="https://cdn.quantrinhahang.edu.vn/wp-content/uploads/2019/06/fast-food-la-gi.jpg"
                                alt=""
                              />
                              <p>Đồ ăn nhanh</p>
                            </li>
                            <li className="food__item">
                              <img
                                src="https://lauwang.vn/wp-content/uploads/2020/10/LAM03924.jpg"
                                alt=""
                              />
                              <p>Lẩu gia đình</p>
                            </li>
                            <li className="food__item">
                              <img
                                src="https://cdn.tgdd.vn/Files/2020/08/11/1278766/cach-moi-nhanh-va-de-giup-luoc-ga-khong-rach-da-chat-gon-dep-doc-xong-chi-muon-thu-ngay-202201131530578368.jpg"
                                alt=""
                              />
                              <p>Gà luộc</p>
                            </li>
                            <li className="food__item">
                              <img
                                src="https://cdn.tgdd.vn/Files/2020/08/11/1278766/cach-moi-nhanh-va-de-giup-luoc-ga-khong-rach-da-chat-gon-dep-doc-xong-chi-muon-thu-ngay-202201131530578368.jpg"
                                alt=""
                              />
                              <p>Gà luộc</p>
                            </li>

                          </div>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
              <div className="bottom">
                <div className="product">
                  <ul className="product__wp">
                    {
                      data.map((item, index) => {
                        return (
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
                              <p>{item.name}</p>
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
                        )
                      })
                    }


                  </ul>
                  <div className="btnShow">
                    <a href="#" className="show">
                      Xem tất cả
                      <i className="fa-solid fa-chevron-right fa-size" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="main__wp1">
              <div className="downApp">
                <div className="downApp__title">
                  <h4>TẢI ỨNG DỤNG NGAY TRÊN THIẾT BỊ</h4>
                </div>
                <ul className="downApp__content">
                  <li className="downApp__content___item">
                    <img src="https://loship.vn/dist/images/app-ios.png" alt="" />
                  </li>
                  <li className="downApp__content___item">
                    <img src="https://loship.vn/dist/images/app-ios.png" alt="" />
                  </li>
                  <li className="downApp__content___item">
                    <img src="https://loship.vn/dist/images/app-ios.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
