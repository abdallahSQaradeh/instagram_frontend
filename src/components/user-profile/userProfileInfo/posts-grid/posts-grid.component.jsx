import { Grid, Typography } from "@material-ui/core";
import { Favorite, ModeComment } from "@material-ui/icons";
import River from "../../../../assets/rivver.jpg";
import styles from "./style.module.css";

export default function PostsGrid(props) {
  return (
    <Grid
      container
      direction="row"
      style={{ marginTop: 20, height: "auto" }}
      justify="flex-start"
      spacing={2}
      item
    >
      <Grid item xs={4} className={styles.post}>
        <div style={{ width: "100%" }} className={styles.post}>
          <img src={River} alt="sd" className={styles.image} />
          <Grid
            style={{ color: "#fff" }}
            className={styles.postModal}
            justify="center"
            alignItems="center"
            direction="row"
            container
            spacing={1}
          >
            <Grid item container xs={3} alignItems="center">
              <Favorite />
              <Typography component="span">{0}</Typography>
            </Grid>
            <Grid item container xs={3} alignItems="center">
              <ModeComment />
              <Typography component="span">{0}</Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={4} className={styles.post}>
        <div style={{ width: "100%" }} className={styles.post}>
          <img src={River} alt="sd" className={styles.image} />
          <Grid
            style={{ color: "#fff" }}
            className={styles.postModal}
            justify="center"
            alignItems="center"
            direction="row"
            container
            spacing={1}
          >
            <Grid item container xs={3} alignItems="center">
              <Favorite />
              <Typography component="span">{0}</Typography>
            </Grid>
            <Grid item container xs={3} alignItems="center">
              <ModeComment />
              <Typography component="span">{0}</Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={4} className={styles.post}>
        <div style={{ width: "100%" }} className={styles.post}>
          <img src={River} alt="sd" className={styles.image} />
          <Grid
            style={{ color: "#fff" }}
            className={styles.postModal}
            justify="center"
            alignItems="center"
            direction="row"
            container
            spacing={1}
          >
            <Grid item container xs={3} alignItems="center">
              <Favorite />
              <Typography component="span">{0}</Typography>
            </Grid>
            <Grid item container xs={3} alignItems="center">
              <ModeComment />
              <Typography component="span">{0}</Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={4} className={styles.post}>
        <div style={{ width: "100%" }} className={styles.post}>
          <img src={River} alt="sd" className={styles.image} />
          <Grid
            style={{ color: "#fff" }}
            className={styles.postModal}
            justify="center"
            alignItems="center"
            direction="row"
            container
            spacing={1}
          >
            <Grid item container xs={3} alignItems="center">
              <Favorite />
              <Typography component="span">{0}</Typography>
            </Grid>
            <Grid item container xs={3} alignItems="center">
              <ModeComment />
              <Typography component="span">{0}</Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={4} className={styles.post}>
        <div style={{ width: "100%" }} className={styles.post}>
          <img src={River} alt="sd" className={styles.image} />
          <Grid
            style={{ color: "#fff" }}
            className={styles.postModal}
            justify="center"
            alignItems="center"
            direction="row"
            container
            spacing={1}
          >
            <Grid item container xs={3} alignItems="center">
              <Favorite />
              <Typography component="span">{0}</Typography>
            </Grid>
            <Grid item container xs={3} alignItems="center">
              <ModeComment />
              <Typography component="span">{0}</Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={4} className={styles.post}>
        <div style={{ width: "100%" }} className={styles.post}>
          <img src={River} alt="sd" className={styles.image} />
          <Grid
            style={{ color: "#fff" }}
            className={styles.postModal}
            justify="center"
            alignItems="center"
            direction="row"
            container
            spacing={1}
          >
            <Grid item container xs={3} alignItems="center">
              <Favorite />
              <Typography component="span">{0}</Typography>
            </Grid>
            <Grid item container xs={3} alignItems="center">
              <ModeComment />
              <Typography component="span">{0}</Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
