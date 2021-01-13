/* eslint-disable react/jsx-wrap-multilines */
import React from "react";

import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import style from "./commentItem.module.css";

const useStyles = makeStyles({
  text: {
    fontWeight: 400,
    fontSize: "0.875rem",
  },
});
export default function CommentItem(props) {
  const classes = useStyles();
  const { author, text } = props;
  return (
    <Typography component="p" className={classes.text}>
      <span className={style.author}>{author}</span>
      {` ${text}`}
    </Typography>
  );
}
CommentItem.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
