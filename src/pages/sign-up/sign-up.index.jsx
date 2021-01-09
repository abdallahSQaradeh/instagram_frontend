import React from "react";
import style from "./sign-up.module.css";
import InstagramLogo from "../../assets/instagram_logo.svg.png";
import SignUpForm from "../../components/sign-up-form/SignUpForm.component";
import RegisterBox from "../../components/register-box/register-box.component";
import GetApp from "../../components/get-app/get-app.component";

export default function SignUp(props) {
  return (
    <div className={style["sign-up"]}>
      <div className={style.form}>
        <div className={style.logoContainer}>
          <img src={InstagramLogo} alt="instagram" className={style.logo} />
        </div>
        <div>
          <SignUpForm />
        </div>
      </div>
      <div>
        <RegisterBox text="Have an account?" url="#" linkText="Login" />
      </div>
      <GetApp />
    </div>
  );
}
