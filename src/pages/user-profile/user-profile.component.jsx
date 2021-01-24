import { Divider, Grid, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { useState } from "react";
import FragmentBar from "../../components/fragment-bar/fragment-bar.component";
// import PostGridList from "../../components/user-profile/userProfileInfo/posts-container/posts-container";
import Posts from "../../components/user-profile/userProfileInfo/posts-grid/posts-grid.component";
import UserInformation from "../../components/user-profile/userProfileInfo/userProfileInfo.component";
import PostUploaderModal from "../../components/post-uploader/postUploaderModal.component";
import PostDetailModal from "../../components/post-detail/post-detail.component";

const useStyles = makeStyles((theme) => {
  return {
    userProfileContainer: {
      maxWidth: 935,
      width: "calc(100% - 40px)",
      padding: "30px 20px",
      margin: "0 auto 30px",
    },
    divider: {
      marginTop: 20,
    },
  };
});
export default function UserProfile(props) {
  const { setOpenPost, openPost } = props;
  const [detailedPost, setDetailedPost] = useState(null);
  const classes = useStyles();
  return (
    <Grid container className={classes.userProfileContainer} direction="column">
      <Grid item container>
        <UserInformation />
      </Grid>
      <Grid>Stories</Grid>
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        className={classes.divider}
      />
      <FragmentBar />
      <div style={{ marginTop: 10 }}>
        <Posts setDetailedPost={setDetailedPost} />
      </div>
      {openPost ? <PostUploaderModal setOpenPost={setOpenPost} /> : null}
      {detailedPost ? (
        <PostDetailModal
          detailedPost={() => detailedPost}
          setDetailedPost={setDetailedPost}
        />
      ) : null}
    </Grid>
  );
}
UserProfile.propTypes = {
  setOpenPost: PropTypes.bool.isRequired,
  openPost: PropTypes.bool.isRequired,
};
