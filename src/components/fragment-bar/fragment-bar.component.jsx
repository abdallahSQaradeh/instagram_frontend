import { Grid, IconButton, Typography, makeStyles } from "@material-ui/core";
import {
  BookmarkBorderOutlined,
  GridOn,
  LiveTvOutlined,
  AccountBoxOutlined,
} from "@material-ui/icons";
import clsx from "clsx";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  iconButtonLabel: {
    display: "flex",
    flexDirection: "row",
    textTransform: "uppercase",
  },
  iconButton: {
    color: theme.palette.text.secondary,
    margin: "0",
  },
  posts: {
    color: (props) => {
      console.log(props);
      return props.posts
        ? theme.palette.text.primary
        : theme.palette.text.secondary;
    },
  },
  instagramTV: {
    color: (props) =>
      props.instagramTV
        ? theme.palette.text.primary
        : theme.palette.text.secondary,
  },
  saved: {
    color: (props) =>
      props.saved ? theme.palette.text.primary : theme.palette.text.secondary,
  },
  tagged: {
    color: (props) =>
      props.tagged ? theme.palette.text.primary : theme.palette.text.secondary,
  },
  iconsSize: {
    width: ".9rem",
    height: ".9rem",
  },
  labelSize: {
    fontSize: ".7rem",
  },
  fragmentContainer: {
    marginRight: theme.spacing(3),
  },
}));

export default function FragmentBar() {
  const [posts, setPosts] = useState(true);
  const [instagramTV, setInstagramTV] = useState(false);
  const [saved, setSaved] = useState(false);
  const [tagged, setTagged] = useState(false);
  const handlePosts = (e) => {
    setPosts(true);
    setInstagramTV(false);
    setSaved(false);
    setTagged(false);
  };
  const handleInstagramTV = (e) => {
    setPosts(false);
    setInstagramTV(true);
    setSaved(false);
    setTagged(false);
  };
  const handleSaved = (e) => {
    setPosts(false);
    setInstagramTV(false);
    setSaved(true);
    setTagged(false);
  };
  const handleTagged = (e) => {
    setPosts(false);
    setInstagramTV(false);
    setSaved(false);
    setTagged(true);
  };
  const classes = useStyles({
    posts,
    instagramTV,
    saved,
    tagged,
  });
  return (
    <Grid container justify="center" spacing={4} style={{ marginTop: "-1px" }}>
      <Grid
        className={classes.fragmentContainer}
        item
        style={{
          borderTop: posts ? "1px solid black" : null,
          padding: "12px 0px 12px 0px",
        }}
      >
        <IconButton
          size="small"
          className={clsx(classes.iconButton, classes.posts)}
          classes={{ label: classes.iconButtonLabel }}
          onClick={handlePosts}
        >
          <GridOn style={{ width: "0.9rem" }} />
          <Typography className={classes.labelSize} variant="body2">
            {` Posts`}
          </Typography>
        </IconButton>
      </Grid>
      <Grid
        className={classes.fragmentContainer}
        item
        style={{
          borderTop: instagramTV ? "1px solid black" : null,
          padding: "12px 0px 12px 0px",
        }}
      >
        <IconButton
          onClick={handleInstagramTV}
          className={clsx(classes.iconButton, classes.instagramTV)}
          classes={{ label: classes.iconButtonLabel }}
        >
          <LiveTvOutlined style={{ width: "0.9rem" }} />
          <Typography className={classes.labelSize} variant="body2">
            IGTV
          </Typography>
        </IconButton>
      </Grid>
      <Grid
        className={classes.fragmentContainer}
        item
        style={{
          borderTop: saved ? "1px solid black" : null,
          padding: "12px 0px 12px 0px",
        }}
      >
        <IconButton
          onClick={handleSaved}
          className={clsx(classes.iconButton, classes.saved)}
          classes={{ label: classes.iconButtonLabel }}
        >
          <BookmarkBorderOutlined style={{ width: "0.9rem" }} />
          <Typography className={classes.labelSize} variant="body2">
            Saved
          </Typography>
        </IconButton>
      </Grid>
      <Grid
        className={classes.fragmentContainer}
        item
        style={{
          borderTop: tagged ? "1px solid black" : null,
          padding: "12px 0px 12px 0px",
        }}
      >
        <IconButton
          onClick={handleTagged}
          className={clsx(classes.iconButton, classes.tagged)}
          classes={{ label: classes.iconButtonLabel }}
        >
          <AccountBoxOutlined style={{ width: "0.9rem" }} />
          <Typography className={classes.labelSize} variant="body2">
            Tagged
          </Typography>
        </IconButton>
      </Grid>
    </Grid>
  );
}
