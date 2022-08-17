import React, { useRef } from "react";
import { useSelector } from "react-redux";
import LoginCode from "./LoginCode/LoginCode";
import LoginConfirmInfo from "./LoginConfirmInfo/LoginConfirmInfo";
import LoginForm from "./LoginForm/LoginForm";

export default function Login() {
  const isLogin = useSelector((state) => state.UserSlice);
  const isDisplayLogin = useSelector((state) => state.showDisplaySlice.display);
  const data = useRef();
  return (
    <>
      {isLogin.isCheck.isPhoneLogin && isLogin.isCheck.isSendCode ? (
        isLogin.isCheck.isCheckCode ? (
          <LoginConfirmInfo />
        ) : (
          <LoginCode />
        )
      ) : (
        <LoginForm />
      )}
    </>
  );
}
