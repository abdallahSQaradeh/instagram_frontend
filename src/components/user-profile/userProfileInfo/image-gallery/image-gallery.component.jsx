/* eslint-disable no-nested-ternary */
// mport { Grid, Typography, makeStyles, Link } from "@material-ui/core";
// import { Favorite, ModeComment } from "@material-ui/icons";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
// import clsx from "clsx";
import styles from "./style.module.css";
import GalleryItem from "../gallery-item/gallery-item.component";

/* const useStyles = makeStyles((theme) => {
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
}); */
export default function PostsGrid(props) {
  // const classes = useStyles();
  const { setDetailedPost } = props;
  const posts = useSelector((state) => state.post.posts);
  /* const postsRows = [];
  let row = [];
  for (let start = 0; start < posts.length; start += 3) {
    row = posts.slice(start, start + 3);
    postsRows.push(row);
  } */
  const handleClickedPost = (post) => {
    setDetailedPost(post);
  };

  return (
    <div className={styles.gallery}>
      {posts.map((post, id) => {
        return (
          <GalleryItem
            src={post.src}
            clickedItem={handleClickedPost}
            key={`g-item${`${id}g-item`}`}
          />
        );
      })}
    </div>
  );
  /* <Grid
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
                </Grid> */
}

PostsGrid.propTypes = {
  setDetailedPost: PropTypes.func.isRequired,
};
