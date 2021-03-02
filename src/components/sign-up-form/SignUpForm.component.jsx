/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import FacebookIcon from "@material-ui/icons/Facebook";
import classNames from "classnames";
import * as yup from "yup";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import deepClone from "lodash.clonedeep";
import style from "./SignUpForm.module.css";
import useStyles from "./style";
import Divider from "../UI/Divider/Divider.component";
import axiosAuth from "../../axios/auth";
import useFacebook from "../../hooks/useFacebook";

const signupSchema = yup.object().shape({
  email: yup.string().email().required("please provide a valid email"),
  full_name: yup.string().min(10).required("at least 10 character"),
  username: yup
    .string()
    .required()
    .min(5)
    .matches(/^[A-z][A-z0-9]*$/, "atl least one letter, one number"),
  password1: yup.string().min(5).required(),
});

export default function SignUpForm(props) {
  const classes = useStyles();
  const form = useRef(null);
  const history = useHistory();
  const loginFacebook = useFacebook();
  const [serverErrors, setServerErrors] = useState(null);

  const [email, setEmailOrNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword] = useState("");
  const [full_name, setFullName] = useState("");
  const [allValid, setAllValid] = useState(false);
  const [fieldStatus, setFieldStatus] = useState({
    email: {
      valid: false,
      show: false,
    },
    full_name: {
      valid: false,
      show: false,
    },
    username: {
      valid: false,
      show: false,
    },
    password1: {
      valid: false,
      show: false,
    },
    allValid: false,
  });
  // const [submitted, setSubmitted]=useState(false)
  const [values, setValues] = useState({
    showPassword: false,
  });
  const responseFacebook = (response) => {
    loginFacebook(response, history);
  };

  useEffect(() => {
    const formData = { email, full_name, username, password1 };
    signupSchema
      .isValid(formData)
      .then((v) => {
        setAllValid(v);
      })
      .catch((err) => {
        setAllValid(err);
      });
  }, [email, password1, username, full_name]);
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
    email: setEmailOrNumber,
    username: setUsername,
    password1: setPassword,
    full_name: setFullName,
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setter[name](value);
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { email, full_name, username, password1 };
    formData.password2 = formData.password1;

    signupSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        // setValid(true)
        axiosAuth
          .post("registration/", formData)
          .then((response) => {
            if (response.status === 201 || response.status === 200) {
              history.replace("/login");
            }
          })
          .catch((err) => {
            const errors = [];
            for (const key in err.response.data) {
              if (key) {
                errors.push({ error: err.response.data[key][0], key });
              }
            }
            setServerErrors(errors);
          });
      })
      .catch((err) => {
        const Errors = err.inner.reduce((acc, current) => {
          acc[current.path] = current.message;
          return acc;
        }, {});
        return Errors;
      });
  };
  return (
    <form ref={form} onSubmit={handleSubmit}>
      <Typography
        variant="h6"
        align="center"
        className={classes.subtitleHint}
        color="textSecondary"
      >
        Sign up to see photos and videos from your friends.
      </Typography>
      <div className={style.facebook}>
        <FacebookLogin
          appId="420032525765818"
          autoLoad
          callback={responseFacebook}
          render={(renderProps) => (
            <Button
              startIcon={<FacebookIcon />}
              fullWidth
              className={classNames(
                classes.btnText,
                classes.facebook,
                classes.whiteColor
              )}
              onClick={renderProps.onClick}
              variant="contained"
            >
              Log in with Facebook
            </Button>
          )}
        />
      </div>
      <div className={classNames(style.container, style.mDivider)}>
        <Divider>OR</Divider>
      </div>
      <div className={style.inputContainer}>
        <TextField
          onFocus={handleFocus}
          onBlur={handleLoseFocus}
          className={classes.textField}
          fullWidth
          variant="outlined"
          size="small"
          label="Mobile Number or Email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          InputProps={
            fieldStatus.email.show
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton disableRipple>
                        {fieldStatus.email.valid ? (
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
          label="Full Name"
          type="text"
          name="full_name"
          value={full_name}
          onChange={handleChange}
          InputProps={
            fieldStatus.full_name.show
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton disableRipple>
                        {fieldStatus.full_name.valid ? (
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
          label="Username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          InputProps={
            fieldStatus.username.show
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton disableRipple>
                        {fieldStatus.username.valid ? (
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
          name="password1"
          value={password1}
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
      <div className={style.inputContainer}>
        {serverErrors &&
          serverErrors.map((err) => {
            return (
              <p className={style.serverErrors} key={`${err.key}error`}>
                {`*${err.error}`}
              </p>
            );
          })}
      </div>
      <div className={style.container}>
        <Button
          disabled={!allValid && true}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          /* className={{
            contained: {
              "Mui-disabled": classes.disabledButton,
            },
            root: classes.whiteColor,
          }} */
        >
          Sign Up
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
