import React from "react";
import { Typography, Grid, Link } from "@material-ui/core";
import { ReactComponent as AppStore } from "../../assets/apple-app-store-badge.svg";
import { ReactComponent as AndroidStore } from "../../assets/google-play-badge.svg";
import style from "./get-app.module.css";

export default function GetApp() {
  return (
    <>
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
    </>
  );
}
