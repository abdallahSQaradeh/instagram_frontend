import {
  Grid,
  makeStyles,
  Avatar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { SettingsOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: theme.spacing(20),
    width: theme.spacing(20),
    marginRight: theme.spacing(5),
  },
  editProfile: {
    textTransform: "none",
    backgroundColor: "transparent",
    boxShadow: "none",
    border: "1px solid #dbdbdb",
    fontWeight: 600,
    marginLeft: theme.spacing(1),
  },
  settings: {
    margin: 0,
    marginLeft: theme.spacing(1),
  },
  fitContent: { height: "fit-content" },
  numberOf: {
    marginRight: theme.spacing(1),
    fontWeight: 600,
  },
}));
export default function UserProfileInfo() {
  const classes = useStyles();
  const state = useSelector((storeState) => storeState);
  console.log(state);
  return (
    <header>
      <Grid container justify="space-between">
        <Grid item sm={3} container justify="center" direction="row">
          <Avatar className={classes.avatar}>ss</Avatar>
        </Grid>
        <Grid container sm={8}>
          <Grid item container className={classes.fitContent}>
            <Grid item className={classes.fitContent}>
              <Typography variant="h5">userName</Typography>
            </Grid>
            <Grid item className={classes.fitContent}>
              <Button
                variant="contained"
                size="small"
                className={classes.editProfile}
              >
                Edit Profile
              </Button>
            </Grid>
            <Grid item className={classes.fitContent}>
              <IconButton
                variant="contained"
                size="small"
                className={classes.settings}
              >
                <SettingsOutlined />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container item spacing={3} className={classes.fitContent}>
            <Grid item className={classes.fitContent}>
              <Typography>
                <Typography component="span" className={classes.numberOf}>
                  10
                </Typography>
                posts
              </Typography>
            </Grid>
            <Grid item className={classes.fitContent}>
              <Typography>
                <Typography className={classes.numberOf} component="span">
                  237
                </Typography>
                followers
              </Typography>
            </Grid>
            <Grid item className={classes.fitContent}>
              <Typography>
                <Typography className={classes.numberOf} component="span">
                  {" "}
                  1045
                </Typography>
                following
              </Typography>
            </Grid>
          </Grid>
          <Grid container item direction="column">
            <Grid item>
              <Typography variant="h6">name</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">bio</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
}
