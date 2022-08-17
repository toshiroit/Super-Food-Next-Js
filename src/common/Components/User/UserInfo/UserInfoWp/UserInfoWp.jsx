import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserByPhone } from "../../../../redux/features/User/userThunks";

export default function UserInfoWp() {
  const dispatch = useDispatch();
  const [valueContact, setValueContact] = useState({
    email: "",
    phone: "",
  });
  const [valueUser, setValueUser] = useState({
    avatar: "",
    fullName: "",
    date: {
      day: "",
      month: "",
      five: "",
    },
    sex: null,
    earth: "",
  });

  /** Update user By by phone */
  const onSubmitUser = (e) => {
    e.preventDefault();
    dispatch(updateUserByPhone(valueUser));
  };

  /** Set value user */
  const onChangeUser = (e) => {
    if (e.target.name === "day" || e.target.name === "month" || e.target.name === "five") {
      setValueUser({
        ...valueUser,
        date: {
          ...valueUser.date,
          [e.target.name]: e.target.value,
        },
      });
    } else {
      setValueUser({
        ...valueUser,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <>
      <div className="avatar inline">
        <picture>
          <img src="/images/avatar_nam.jpg" alt="" />
        </picture>
        <i className="fa-solid fa-pen fa-size" />
      </div>
      <ul className="infoUser inline">
        <form onSubmit={onSubmitUser} onChange={onChangeUser}>
          <li className="infoUser__item">
            <label htmlFor="">
              <i className="fa-solid fa-signature fa-size" />
              Tên người dùng
            </label>
            <input type="text" name="fullName" placeholder="Thêm tên người dùng " />
          </li>
          <li className="infoUser__item">
            <label htmlFor="">
              <i className="fa-solid fa-calendar-days fa-size" />
              Ngày sinh
            </label>
            <div className="date">
              <select name="day" id="">
                <option value={-1}>Ngày</option>
                <option value={1}>1</option>
              </select>
              <select name="month" id="">
                <option value={-1}>Tháng</option>
                <option value={1}>1</option>
              </select>
              <select name="five" id="">
                <option value={-1}>Năm</option>
                <option value={2020}>2020</option>
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
                <input type="radio" name="sex" value="1" id="" />
                <span>Nam </span>
              </div>
              <div className="checkSex__item">
                <input type="radio" name="sex" value="0" id="" />
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
              <input type="text" name="earth" disabled="" placeholder="Tìm quốc tịch " />
              <button id="showEarthAddress">CHỌN QUỐC GIA</button>
            </div>
          </li>
          <div className="save">
            <button type="submit">
              <i className="fa-solid fa-floppy-disk fa-size" />
              Cập nhật thông tin
            </button>
          </div>
        </form>
      </ul>
    </>
  );
}
