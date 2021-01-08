import React from "react";
import { Link, Typography, makeStyles } from "@material-ui/core";
import style from "./login.module.css";

const useStyles = makeStyles({
  loginBox: {
    margin: "15px",
    fontSize: "14px",
  },
  linkRight: {
    marginLeft: "10px",
  },
});
export default function LoginBox() {
  const classes = useStyles();
  return (
    <div className={style["login-box"]}>
      <Typography variant="body2" className={classes.loginBox}>
        Have an account?
        <Link href="#" onClick={(e) => e.preventDefault()} color="primary">
          {` Login`}
        </Link>
      </Typography>
    </div>
  );
}
