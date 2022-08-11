import React, { useRef } from "react";
import { useSelector } from "react-redux";
import LoginCode from "./LoginCode/LoginCode";
import LoginConfimInfo from "./LoginConfimInfo/LoginConfimInfo";
import LoginForm from "./LoginForm/LoginForm";

export default function Login() {
  const isLogin = useSelector((state) => state.UserSlice);
  const data = useRef()

  return (
    <>
      {isLogin.isPhoneLogin && isLogin.isSendCode ? (
        isLogin.isCheckCode ?
          (
            <LoginConfimInfo />
          )
          : < LoginCode />

      ) : (
        <LoginForm />
      )}
    </>
  );
}

