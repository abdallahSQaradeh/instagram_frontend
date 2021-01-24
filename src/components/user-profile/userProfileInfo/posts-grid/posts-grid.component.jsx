/* eslint-disable no-nested-ternary */
import { Grid, Typography, makeStyles, Link } from "@material-ui/core";
import { Favorite, ModeComment } from "@material-ui/icons";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./style.module.css";

const useStyles = makeStyles((theme) => {
  return {
    col: {
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2),
      },
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(0.5),
      },
      "&.MuiGrid-item": {
        // padding: "inherit",
      },
    },
  };
});
export default function PostsGrid(props) {
  const classes = useStyles();
  const { setDetailedPost } = props;
  const posts = useSelector((state) => state.posts);
  const postsRows = [];
  let row = [];
  for (let start = 0; start < posts.length; start += 3) {
    row = posts.slice(start, start + 3);
    postsRows.push(row);
  }
  const handleClickedPost = (post) => {
    setDetailedPost(post);
  };

  return (
    <>
      {postsRows.map((currentRow, id) => {
        return (
          <Grid
            key={`${id + 1}row`}
            container
            direction="row"
            style={{
              margin: 0,
              marginTop: 2,
              maxHeight: 293,
              overflow: "hidden",
              flex: "0 0 auto",
            }}
            justify="flex-start"
            spacing={1}
            item
          >
            {currentRow.map((post, i) => (
              <Grid
                item
                xs={4}
                key={`${i + id + 33}_post`}
                className={clsx(styles.post, classes.col)}
              >
                <div
                  style={{ width: "100%" }}
                  className={styles["post-composition"]}
                >
                  <Link onClick={() => handleClickedPost(post)}>
                    <img src={post.src} alt="sd" className={styles.image} />
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
                  </Link>
                </div>
              </Grid>
            ))}
          </Grid>
        );
      })}
    </>
  );
}
PostsGrid.propTypes = {
  setDetailedPost: PropTypes.func.isRequired,
};
