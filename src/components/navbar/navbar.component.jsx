import React, { useState } from "react";
import { Grid, IconButton } from "@material-ui/core";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

import ExploreRoundedIcon from "@material-ui/icons/ExploreRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styles from "./navbar.module.css";
import InstagramLogo from "../../assets/instagram_logo.svg.png";

export default function Navbar() {
  const [icons, setIcons] = useState({
    home: false,
    send: false,
    explore: false,
    favorite: false,
    profile: false,
  });
  const handleIconClick = (e) => {
    console.log(e);
    const { name } = e.target.parentElement;
    const copy = { ...icons };
    const keys = Object.keys(copy);
    const newKeys = keys.reduce((acc, current) => {
      acc[current] = false;
      return acc;
    }, {});
    newKeys[name] = true;

    setIcons(newKeys);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          wrap="wrap"
        >
          <Grid item xs={4} className={styles.shrink}>
            <img src={InstagramLogo} alt="logo" className={styles.logo} />
          </Grid>
          <Grid item xs={3}>
            <input type="search" />
          </Grid>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            xs={4}
            wrap="nowrap"
          >
            <Grid item>
              <IconButton
                onClick={handleIconClick}
                disableRipple
                disableFocusRipple
                disableTouchRipple
                name="home"
              >
                {icons.home ? <HomeRoundedIcon /> : <HomeOutlinedIcon />}
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={handleIconClick} name="send">
                {icons.send ? <SendRoundedIcon /> : <SendOutlinedIcon />}
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={handleIconClick} name="explore">
                {icons.explore ? (
                  <ExploreRoundedIcon />
                ) : (
                  <ExploreOutlinedIcon />
                )}
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={handleIconClick} name="favorite">
                {icons.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={handleIconClick} name="profile">
                <AccountCircleIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </nav>
  );
}
