import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
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

const signupSchema = yup.object().shape({
  emailOrNumber: yup.string().email().required("please provide a valid email"),
  fullName: yup.string().min(10).required("at least 10 character"),
  username: yup
    .string()
    .required()
    .min(5)
    .matches(/^[A-z][A-z0-9]*$/, "atl least one letter, one number"),
  password: yup.string().required().min(5),
});

export default function SignUpForm(props) {
  const classes = useStyles();
  const [emailOrNumber, setEmailOrNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [allValid, setAllValid] = useState(false);
  const [fieldStatus, setFieldStatus] = useState({
    emailOrNumber: {
      valid: false,
      show: false,
    },
    fullName: {
      valid: false,
      show: false,
    },
    username: {
      valid: false,
      show: false,
    },
    password: {
      valid: false,
      show: false,
    },
    allValid: false,
  });
  // const [submitted, setSubmitted]=useState(false)
  const [values, setValues] = useState({
    showPassword: false,
  });
  useEffect(() => {
    const formData = { emailOrNumber, fullName, username, password };
    signupSchema
      .isValid(formData)
      .then((v) => {
        setAllValid(v);
      })
      .catch((err) => {
        setAllValid(err);
      });
  }, [emailOrNumber, password, username, fullName]);
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
    username: setUsername,
    password: setPassword,
    fullName: setFullName,
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setter[name](value);
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* 
     signupSchema
      .validate(formData, { abortEarly: false })
      .then(() => setValid(true))
      .catch((err) => {
         console.dir(err);
        const Errors = err.inner.reduce((acc, current) => {
          acc[current.path] = current.message;
          return acc;
        }, {}); 
      }); */
  };
  return (
    <form onSubmit={handleSubmit}>
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
          onFocus={handleFocus}
          onBlur={handleLoseFocus}
          className={classes.textField}
          fullWidth
          variant="outlined"
          size="small"
          label="Mobile Number or Email"
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
          label="Full Name"
          type="text"
          name="fullName"
          value={fullName}
          onChange={handleChange}
          InputProps={
            fieldStatus.fullName.show
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton disableRipple>
                        {fieldStatus.fullName.valid ? (
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
