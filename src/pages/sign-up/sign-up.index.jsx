import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import style from "./sign-up.module.css";
import InstagramLogo from "../../assets/instagram_logo.svg.png";
import SignUpForm from "../../components/sign-up-form/SignUpForm.component";
import LoginBox from "../../components/login-box/login-box.component";
import { ReactComponent as AppStore } from "../../assets/apple-app-store-badge.svg";
import { ReactComponent as AndroidStore } from "../../assets/google-play-badge.svg";

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
        <LoginBox />
      </div>
      <div className={style.getApp}>
        <Typography align="center" color="textPrimary" variant="body2">
          Get the app.
        </Typography>
      </div>
      <Grid container spacing={2} justify="center">
        <Grid item xs={4}>
          <Link href="#">
            <AppStore />
          </Link>
        </Grid>
        <Grid item xs={5}>
          <Link href="#">
            <AndroidStore />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
