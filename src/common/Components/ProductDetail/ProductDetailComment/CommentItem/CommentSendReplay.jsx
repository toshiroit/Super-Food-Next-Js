export default function CommentSendReplay() {
  return (
    <>
      <div className="repComment__avatar">
        <picture>
          <img
            src="https://loanthehongnhan.vn/hinh-anh-anime-doi/imager_29338.jpg"
            alt=""
          />
        </picture>
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

    </>
  )
}
