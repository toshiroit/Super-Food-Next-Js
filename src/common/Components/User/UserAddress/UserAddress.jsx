import Link from "next/link";

export default function UserAddress() {
  return (
    <div className="content">
      <div className="title">
        <h4>
          <i className="fa-solid fa-location-dot fa-size" /> Quản lí địa chỉ
        </h4>
        <Link href={"/user"}>
          <a>
            <i id="showMenuUserIdx" className="fa-solid fa-bars" />
          </a>
        </Link>
      </div>
      <div className="content__address">
        <ul className="content__address___main">
          <li className="content__address___main____item root">
            <div className="title">
              <h4>
                <i className="fa-solid fa-location-dot" /> Địa chỉ gốc
              </h4>
            </div>
            <div className="content">
              <div className="content__name tw">
                <span>
                  <i className="fa-solid fa-signature fa-size" /> Họ và tên :{" "}
                  <b>Đậu Văn Nam </b>
                </span>
              </div>
              <div className="content__phone tw">
                <span>
                  <i className="fa-solid fa-phone fa-size" />
                  Số điện thoại : <b>0947.712.857</b>
                </span>
              </div>
              <div className="content__address tw">
                <span>
                  <i className="fa-solid fa-location-dot fa-size" />
                  Địa chỉ :<b>24/71 Hà huy tập , ......... ,...........</b>
                </span>
              </div>
            </div>
            <div className="btn">
              <button>
                <i className="fa-solid fa-eye fa-size" /> Xem chi tiết
              </button>
            </div>
          </li>
          <li className="content__address___main____item">
            <div className="title">
              <h4>
                <i className="fa-solid fa-location-dot" /> Địa chỉ 1
              </h4>
            </div>
            <div className="content">
              <div className="content__name tw">
                <span>
                  <i className="fa-solid fa-signature fa-size" /> Họ và tên :{" "}
                  <b>Đậu Văn Nam </b>
                </span>
              </div>
              <div className="content__phone tw">
                <span>
                  <i className="fa-solid fa-phone fa-size" />
                  Số điện thoại : <b>0947.712.857</b>
                </span>
              </div>
              <div className="content__address tw">
                <span>
                  <i className="fa-solid fa-location-dot fa-size" />
                  Địa chỉ :<b>24/71 Hà huy tập , ......... ,...........</b>
                </span>
              </div>
            </div>
            <div className="btn">
              <button>
                <i className="fa-solid fa-eye fa-size" /> Xem chi tiết
              </button>
            </div>
          </li>
          <li className="content__address___main____item">
            <div className="title">
              <h4>
                <i className="fa-solid fa-location-dot" /> Địa chỉ 1
              </h4>
            </div>
            <div className="content">
              <div className="content__name tw">
                <span>
                  <i className="fa-solid fa-signature fa-size" /> Họ và tên :{" "}
                  <b>Đậu Văn Nam </b>
                </span>
              </div>
              <div className="content__phone tw">
                <span>
                  <i className="fa-solid fa-phone fa-size" />
                  Số điện thoại : <b>0947.712.857</b>
                </span>
              </div>
              <div className="content__address tw">
                <span>
                  <i className="fa-solid fa-location-dot fa-size" />
                  Địa chỉ :<b>24/71 Hà huy tập , ......... ,...........</b>
                </span>
              </div>
            </div>
            <div className="btn">
              <button>
                <i className="fa-solid fa-eye fa-size" /> Xem chi tiết
              </button>
            </div>
          </li>
        </ul>
        <div className="content__address___not">
          <div className="title">
            <h4>
              <i className="fa-solid fa-triangle-exclamation" /> Lưu ý
            </h4>
          </div>
          <ul className="main">
            <li className="main__item">
              <p>
                <b>1:</b>Địa chi của bạn là đia chỉ giao hàng của bạn , Địa chỉ
                giao hàng phải đúng với địa chỉ của bạn đang ở đề giao đúng nơi
                bạn ở
              </p>
            </li>
            <li className="main__item">
              <p>
                <b>2:</b>1 tài khoản chi được hỗ trợ tối đa 3 địa chỉ . 1 địa
                chỉ chính , 2 địa chỉ phụ
              </p>
            </li>
            <li className="main__item">
              <p>
                <b>3:</b> Việc cung cấp địa chỉ ảo hoặc có tình sẽ bị kiểm tra
                tài khoản và khóa vĩnh viễn nếu vi phạm
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
