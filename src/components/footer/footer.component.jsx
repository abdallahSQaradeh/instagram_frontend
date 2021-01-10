import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    fontSize: "12px",
    fontWeight: 400,
    marginBottom: "52px",
    marginTop: "25px",
  },
  footerItem: {
    lineHeight: "14px",
    margin: "0 8px 12px 8px",
    color: theme.palette.text.secondary,
  },
  copyRightContainer: {
    margin: "12px 0",
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.footerContainer}
      >
        <Grid item xs={12} container justify="center">
          <Grid item className={classes.footerItem}>
            About
          </Grid>
          <Grid item className={classes.footerItem}>
            Blog
          </Grid>
          <Grid item className={classes.footerItem}>
            Jobs
          </Grid>
          <Grid item className={classes.footerItem}>
            Help
          </Grid>
          <Grid item className={classes.footerItem}>
            API
          </Grid>
          <Grid item className={classes.footerItem}>
            Privacy
          </Grid>
          <Grid item className={classes.footerItem}>
            Terms
          </Grid>
          <Grid item className={classes.footerItem}>
            Top Accounts
          </Grid>
          <Grid item className={classes.footerItem}>
            Hashtags
          </Grid>
          <Grid item className={classes.footerItem}>
            Locations
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          className={classes.copyRightContainer}
          justify="center"
        >
          <Grid item className={classes.footerItem}>
            English
          </Grid>
          <Grid item className={classes.footerItem}>
            © 2021 Instagram from Facebook
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
