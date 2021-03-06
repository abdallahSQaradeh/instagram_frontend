import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./login.module.css";
import RegisterBox from "../../components/register-box/register-box.component";
import GetApp from "../../components/get-app/get-app.component";
import InstagramLogo from "../../assets/instagram_logo.svg.png";
import LoginForm from "../../components/login-form/login-form.component";
import * as actionTypes from "../../redux/actionTypes";

export default function Login(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: actionTypes.HIDE_NAVBAR });
  }, [dispatch]);
  return (
    <div className={style.login}>
      <div className={style.form}>
        <div className={style.logoContainer}>
          <img src={InstagramLogo} alt="instagram" className={style.logo} />
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
      <div>
        <RegisterBox text="Don't have an account?" url="#" linkText="Sign up" />
      </div>
      <GetApp />
    </div>
  );
}
