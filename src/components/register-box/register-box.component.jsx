import React from "react";
import { Link, Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import style from "./registerbox.module.css";

const useStyles = makeStyles({
  loginBox: {
    margin: "15px",
    fontSize: "14px",
  },
  linkRight: {
    marginLeft: "10px",
  },
  nonDecoration: {
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
    },
  },
});
export default function RegisterBox(props) {
  const { text, linkText, url } = props;
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={style["login-box"]}>
      <Typography variant="body2" className={classes.loginBox}>
        {text}
        <Link
          className={classes.nonDecoration}
          href={url}
          onClick={(e) => {
            e.preventDefault();

            linkText === "Sign up" && history.push("/signup");
            linkText === "Login" && history.push("/login");
          }}
          color="primary"
        >
          {` ${linkText}`}
        </Link>
      </Typography>
    </div>
  );
}
RegisterBox.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
