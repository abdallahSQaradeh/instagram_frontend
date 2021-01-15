import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import style from "./search.module.css";
import useStyle from "./style";

export default function Search() {
  const classes = useStyle();
  return (
    <div className={style.searchField}>
      <input type="search" className={style.search} name="search" />
      <span className={style.searchIcon}>
        <SearchIcon className={classes.searchIcon} />
      </span>
      <span className={style.placeholder}>search</span>
    </div>
  );
}
