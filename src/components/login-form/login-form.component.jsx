import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Link,
  Typography,
  Grid,
} from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import classNames from "classnames";
import * as yup from "yup";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import deepClone from "lodash.clonedeep";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axiosAuth from "../../axios/auth";
import style from "./login-form.module.css";

import useStyles from "../sign-up-form/style";
import Divider from "../UI/Divider/Divider.component";
import * as actionTypes from "../../redux/actionTypes";
import useFacebook from "../../hooks/useFacebook";

const signupSchema = yup.object().shape({
  emailOrNumber: yup.string().email().required("please provide a valid email"),
  password: yup.string().required().min(5),
});

export default function LoginForm() {
  const classes = useStyles();
  const history = useHistory();
  const loginFacebook = useFacebook();
  const dispatch = useDispatch();
  const [emailOrNumber, setEmailOrNumber] = useState("");
  const [password, setPassword] = useState("");
  const [allValid, setAllValid] = useState(false);
  const [serverValidation, setServerValidation] = useState(true);
  const [fieldStatus, setFieldStatus] = useState({
    emailOrNumber: {
      valid: false,
      show: false,
    },

    password: {
      valid: false,
      show: false,
    },
    allValid: false,
  });
  const [values, setValues] = useState({
    showPassword: false,
  });
  useEffect(() => {
    const formData = { emailOrNumber, password };
    signupSchema
      .isValid(formData)
      .then((v) => {
        setAllValid(v);
      })
      .catch((err) => {
        setAllValid(err);
      });
  }, [emailOrNumber, password]);
  const responseFacebook = (response) => {
    loginFacebook(response, history);
  };
  const validateField = (name, value) => {
    const showIconClone = deepClone(fieldStatus);
    yup
      .reach(signupSchema, name)
      .validate(value)
      .then((validField) => {
        showIconClone[name].valid = true;
      })

      .catch((err) => {
        showIconClone[name].valid = false;
      });

    setFieldStatus(showIconClone);
  };
  const handleFocus = (e) => {
    const { name } = e.target;
    const showIconClone = deepClone(fieldStatus);
    showIconClone[name].show = false;
    setFieldStatus(showIconClone);
  };
  const handleLoseFocus = (e) => {
    const { name, value } = e.target;
    const showIconClone = deepClone(fieldStatus);
    if (value.length === 0) showIconClone[name].show = false;
    else showIconClone[name].show = true;
    setFieldStatus(showIconClone);
  };
  /**/

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const setter = {
    emailOrNumber: setEmailOrNumber,
    password: setPassword,
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setter[name](value);
    validateField(name, value);
  };
  /* const getCookieValue = (name) =>
    document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)?.pop() || ""; */
  const handleSubmit = (e) => {
    e.preventDefault();

    axiosAuth
      .post("login/", { email: emailOrNumber, password })
      .then((response) => {
        dispatch({ type: actionTypes.AUTH_USER, user: response.data.user });

        setServerValidation(true);
        return response;
      })
      .then((s) => {
        history.replace("");
      })
      .catch((error) => {
        dispatch({ type: actionTypes.CANCEL_AUTH_USER });
        setServerValidation(false);
      });
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.inputContainer}>
        <TextField
          onFocus={handleFocus}
          onBlur={handleLoseFocus}
          className={classes.textField}
          fullWidth
          variant="outlined"
          size="small"
          label="Phone number, username, or email"
          type="text"
          name="emailOrNumber"
          value={emailOrNumber}
          onChange={handleChange}
          InputProps={
            fieldStatus.emailOrNumber.show
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton disableRipple>
                        {fieldStatus.emailOrNumber.valid ? (
                          <CheckCircleIcon />
                        ) : (
                          <HighlightOffIcon color="error" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : null
          }
        />
      </div>
      <div className={style.inputContainer}>
        <TextField
          onBlur={handleLoseFocus}
          onFocus={handleFocus}
          className={classes.textField}
          fullWidth
          variant="outlined"
          size="small"
          label="Password"
          type={values.showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  disableRipple
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className={classNames(style.container, style.mTop)}>
        <Button
          size="small"
          disabled={!allValid && true}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.disabledButton}
        >
          Log In
        </Button>
      </div>
      {!serverValidation && (
        <div className={style.container}>
          <p className={style.serverErrors}>
            * it seems your email and/or password are incorrect
          </p>
        </div>
      )}

      <div className={classNames(style.container, style.mDivider)}>
        <Divider>OR</Divider>
      </div>
      <div>
        <Grid container justify="center">
          <Grid item>
            <FacebookLogin
              appId="420032525765818"
              autoLoad
              callback={responseFacebook}
              render={(renderProps) => (
                <Link
                  className={classNames(
                    classes.btnText,
                    classes.nonDecoration,
                    style.loginFacebook
                  )}
                  variant="body2"
                  onClick={renderProps.onClick}
                >
                  <Grid container spacing={1} alignItems="center">
                    <Grid item className={style.loginFacebook}>
                      <FacebookIcon />
                    </Grid>
                    <Grid item className={style.loginFacebook}>
                      Log in with Facebook
                    </Grid>
                  </Grid>
                </Link>
              )}
            />
          </Grid>
        </Grid>
      </div>
      <div className={style.forgotPasswordContainer}>
        <Typography
          variant="body2"
          align="center"
          className={style.forgotPassword}
        >
          <Link
            className={classNames(style.forgotPassword, classes.nonDecoration)}
            style={{
              color: " #385185",
            }}
          >
            Forgot password?
          </Link>
        </Typography>
      </div>
    </form>
  );
}
