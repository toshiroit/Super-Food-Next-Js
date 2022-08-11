import Link from "next/link";

export default function UserInfo() {
  return (
    <div className="content">
      <div className="title">
        <h4>Thông tin tài khoản</h4>
        <Link href={"/user"}>
          <a>
            <i id="showMenuUserIdx" className="fa-solid fa-bars" />
          </a>
        </Link>
      </div>
      <div className="wp">
        <div className="avatar inline">
          <picture>
            <img src="/images/avatar_nam.jpg" alt="" />
          </picture>
          <i className="fa-solid fa-pen fa-size" />
        </div>
        <ul className="infoUser inline">
          <li className="infoUser__item">
            <label htmlFor="">
              <i className="fa-solid fa-signature fa-size" />
              Tên người dùng
            </label>
            <input type="text" placeholder="Thêm tên người dùng " />
          </li>
          <li className="infoUser__item">
            <label htmlFor="">
              <i className="fa-solid fa-calendar-days fa-size" />
              Ngày sinh
            </label>
            <div className="date">
              <select name="" id="">
                <option value={1}>Ngày</option>
              </select>
              <select name="" id="">
                <option value={1}>Tháng</option>
              </select>
              <select name="" id="">
                <option value={1}>Năm</option>
              </select>
            </div>
          </li>
          <li className="infoUser__item">
            <label htmlFor="">
              <i className="fa-solid fa-genderless fa-size" />
              Giới tính
            </label>
            <div className="checkSex">
              <div className="checkSex__item">
                <input type="radio" name="" id="" />
                <span>Nam </span>
              </div>
              <div className="checkSex__item">
                <input type="radio" name="" id="" />
                <span>Nữ </span>
              </div>
            </div>
          </li>
          <li className="infoUser__item">
            <div className="qt">
              <label htmlFor="">
                <i className="fa-solid fa-earth-africa fa-size" />
                Quốc tịch
              </label>
              <input
                type="text"
                name=""
                disabled=""
                placeholder="Tìm quốc tịch "
              />
              <button id="showEarthAddress">CHỌN QUỐC GIA</button>
            </div>
          </li>
          <div className="save">
            <button>
              <i className="fa-solid fa-floppy-disk fa-size" />
              Cập nhật thông tin
            </button>
          </div>
        </ul>
        <ul className="infoUser inline">
          <div className="bow">
            <span className="textFxBow">Số điện thoại / Thư điện tử</span>
            <li className="infoUser__item">
              <label htmlFor="">
                <i className="fa-solid fa-square-envelope fa-size" />
                Địa chỉ thư điện tử
              </label>
              <div className="ipn">
                <input type="text" defaultValue="Đậu Văn Nam " />
                <button type="button">Cập nhât</button>
              </div>
            </li>
            <li className="infoUser__item">
              <label htmlFor="">
                <i className="fa-solid fa-phone fa-size" /> Số điện thoại
              </label>
              <div className="ipn">
                <input type="text" defaultValue="Đậu Văn Nam " />
                <button type="button">Cập nhật</button>
              </div>
            </li>
          </div>
          <div className="bow">
            <span className="textFxBow">Bảo mật / Bảo mật cấp 2</span>
            <li className="infoUser__item">
              <label htmlFor="">
                <i className="fa-solid fa-lock fa-size" />
                Mật khẩu cấp 1
              </label>
              <div className="ipn">
                <input type="password" defaultValue="##########" disabled="" />
                <button type="button">Thiết lập</button>
              </div>
            </li>
            <li className="infoUser__item">
              <label htmlFor="">
                <i className="fa-solid fa-lock fa-size" />
                Mật khẩu cấp 2
              </label>
              <div className="ipn">
                <input type="password" defaultValue="##########" disabled="" />
                <button type="button">Thiết lập</button>
              </div>
            </li>
          </div>
          <div className="bow">
            <span className="textFxBow">Liên kết mạng xã hội </span>
            <li className="infoUser__item">
              <div className="ipn mxh">
                <h4 className="lkmxh face">
                  <i className="fa-brands fa-facebook fa-size" />
                  Facebook
                </h4>
                <button type="button">Cập nhât</button>
              </div>
            </li>
            <li className="infoUser__item">
              <div className="ipn mxh">
                <h4 className="lkmxh zalo">
                  <i className="fa-solid fa-comment fa-size" />
                  Zalo
                </h4>
                <button type="button">Cập nhât</button>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
