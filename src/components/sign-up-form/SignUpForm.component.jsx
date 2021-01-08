import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import classNames from "classnames";
import style from "./SignUpForm.module.css";
import useStyles from "./style";
import Divider from "../UI/Divider/Divider.component";

export default function SignUpForm(props) {
  const classes = useStyles();
  return (
    <form>
      <Typography
        variant="h6"
        align="center"
        className={classes.subtitleHint}
        color="textSecondary"
      >
        Sign up to see photos and videos from your friends.
      </Typography>
      <div className={style.facebook}>
        <Button
          startIcon={<FacebookIcon />}
          fullWidth
          className={classNames(
            classes.btnText,
            classes.facebook,
            classes.whiteColor
          )}
          variant="contained"
        >
          Log in with Facebook
        </Button>
      </div>
      <div className={classNames(style.container, style.mDivider)}>
        <Divider>OR</Divider>
      </div>
      <div className={style.inputContainer}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          label="Mobile Number or Email"
          type="text"
        />
      </div>
      <div className={style.inputContainer}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          label="Full Name"
          type="text"
        />
      </div>
      <div className={style.inputContainer}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          label="Username"
          type="text"
        />
      </div>
      <div className={style.inputContainer}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          label="Password"
          type="password"
        />
      </div>
      <div className={style.container}>
        <Button
          disabled
          fullWidth
          variant="contained"
          color="primary"
          classes={(classes.disabledButton, classes.whiteColor)}
        >
          Next
        </Button>
      </div>
      <div className={style.container}>
        <Typography
          variant="body2"
          color="textSecondary"
          className={classes.moreTextInfo}
          align="center"
        >
          By signing up, you agree to our Terms . Learn how we collect, use and
          share your data in our Data Policy and how we use cookies and similar
          technology in our Cookies Policy .
        </Typography>
      </div>
    </form>
  );
}
