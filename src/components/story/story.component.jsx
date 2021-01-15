import React from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import beard from "../../assets/beard.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  largeAvatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  story: {
    width: "80px",
    padding: "0 4px",
  },
}));
export default function Story() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.story}
      xs={2}
      item
      container
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Avatar src={beard} className={classes.largeAvatar} />
      <Typography component="p" variant="body1">
        user
      </Typography>
    </Grid>
  );
}
