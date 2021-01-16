import React, { useState } from "react";
import {
  Grid,
  IconButton,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Divider,
} from "@material-ui/core";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

import ExploreRoundedIcon from "@material-ui/icons/ExploreRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  AddCircleOutlineOutlined,
  BookmarkBorderRounded,
  CachedTwoTone,
  SettingsOutlined,
} from "@material-ui/icons";
import PropTypes from "prop-types";
import styles from "./navbar.module.css";
import InstagramLogo from "../../assets/instagram_logo.svg.png";
import Search from "../search/search.component";

const useStyles = makeStyles((theme) => ({
  profilePopOver: {
    width: 230,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const { setOpenPost } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [icons, setIcons] = useState({
    home: false,
    send: false,
    explore: false,
    favorite: false,
    profile: false,
  });

  const handleClosePopOver = () => {
    setAnchorEl(null);
  };
  const handleIconClick = (e, name) => {
    console.log(e);
    if (name === "profile") {
      setAnchorEl(e.currentTarget);
    }
    const copy = { ...icons };
    const keys = Object.keys(copy);
    const newKeys = keys.reduce((acc, current) => {
      acc[current] = false;
      return acc;
    }, {});

    newKeys[name] = true;

    setIcons(newKeys);
  };
  const open = Boolean(anchorEl);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          wrap="nowrap"
        >
          <Grid
            item
            xs={2}
            className={styles.shrink}
            container
            justify="flex-start"
          >
            <img src={InstagramLogo} alt="logo" className={styles.logo} />
          </Grid>
          <Grid
            item
            xs={4}
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="searchContainer"
            wrap="nowrap"
          >
            <Grid>
              <Search />
            </Grid>
            <Grid>
              <IconButton
                onClick={() => {
                  setOpenPost(true);
                  console.log("open");
                }}
              >
                <AddCircleOutlineOutlined color="primary" />
              </IconButton>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            xs={4}
            justify="flex-end"
            wrap="nowrap"
          >
            <Grid item>
              <IconButton
                onClick={(e) => handleIconClick(e, "home")}
                disableRipple
                disableFocusRipple
                disableTouchRipple
              >
                {icons.home ? <HomeRoundedIcon /> : <HomeOutlinedIcon />}
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={(e) => handleIconClick(e, "send")}>
                {icons.send ? <SendRoundedIcon /> : <SendOutlinedIcon />}
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={(e) => handleIconClick(e, "explore")}>
                {icons.explore ? (
                  <ExploreRoundedIcon />
                ) : (
                  <ExploreOutlinedIcon />
                )}
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton onClick={(e) => handleIconClick(e, "favorite")}>
                {icons.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                aria-haspopup
                aria-describedby="profilePopOver"
                onClick={(e) => handleIconClick(e, "profile")}
              >
                <AccountCircleIcon />
              </IconButton>
              <Popover
                onClick={handleClosePopOver}
                open={open}
                anchorEl={anchorEl}
                id="profilePopOver"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <List
                  className={classes.profilePopOver}
                  component="nav"
                  aria-label="main mailbox folders"
                >
                  <ListItem button>
                    <ListItemIcon>
                      <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <BookmarkBorderRounded />
                    </ListItemIcon>
                    <ListItemText primary="Saved" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <SettingsOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <CachedTwoTone />
                    </ListItemIcon>
                    <ListItemText primary="Switch Accounts" />
                  </ListItem>
                  <Divider />
                  <ListItem button component="a">
                    <ListItemText primary="Logout" />
                  </ListItem>
                </List>
              </Popover>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  setOpenPost: PropTypes.func,
};

Navbar.defaultProps = {
  setOpenPost: () => {},
};
