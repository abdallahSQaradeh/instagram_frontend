import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.css";

export default function Divider({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.border} />
      <span className={styles.content}>{children}</span>
      <div className={styles.border} />
    </div>
  );
}
Divider.propTypes = {
  children: PropTypes.string.isRequired,
};
