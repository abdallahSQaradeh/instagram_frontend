import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import style from "./postComment.module.css";

const useStyles = makeStyles({
  post: {
    fontSize: "12px",
  },
});

export default function PostComment(props) {
  const { click } = props;
  const classes = useStyles();
  const [comment, setComment] = useState("");
  const [active, setActive] = useState(false);
  const handleChange = (e) => {
    const { value } = e.target;
    value.length > 0 ? setActive(true) : setActive(false);
    setComment(value);
  };
  return (
    <section className={style.commentSection}>
      <textarea
        type="text"
        placeholder="Add comment"
        className={style.postInput}
        onChange={handleChange}
        value={comment}
      />
      <Button
        color="primary"
        className={classes.post}
        disabled={!active}
        onClick={() => {
          click(comment);
          setComment("");
          setActive(false);
        }}
      >
        post
      </Button>
    </section>
  );
}
PostComment.propTypes = {
  click: PropTypes.func.isRequired,
};
