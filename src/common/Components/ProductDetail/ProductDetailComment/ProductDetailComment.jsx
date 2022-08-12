import CommentItem from "./CommentItem/CommentItem";

export default function ProductDetailComment() {
  return (
    <>
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
              <picture>
                <img
                  src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                  alt=""
                />
              </picture>
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
      {/* Item Comment */}
      <CommentItem />

    </>
  )
}
