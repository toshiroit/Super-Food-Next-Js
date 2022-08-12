import CommentReplay from "./CommentReplay";
import CommentSendReplay from "./CommentSendReplay";

export default function CommentItem() {
  return (
    <div className="evaluate__point___user">
      <div className="left comment">
        <div className="content">
          <div className="avatar">
            <picture>
              <img
                src="https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-anime-cute.jpg"
                alt=""
              />
            </picture>
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
              <picture>
                <img
                  src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                  alt=""
                />
              </picture>

              <div className="playVideo">
                <i className="fa-size fa-solid fa-video" />
                <span>4:30</span>
              </div>
            </li>
          </ul>
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
        <CommentReplay />
        <div className="repComment" style={{ display: "" }}>

          <CommentSendReplay />
        </div>
      </div>
    </div>
  )
}
