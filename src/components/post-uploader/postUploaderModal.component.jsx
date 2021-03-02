import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import {
  Avatar,
  DialogContentText,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { InfoOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import PostUploader from "./post-uploader.component";
import * as actionTypes from "../../redux/actionTypes";

const useStyles = makeStyles({
  dialogTitle: {
    textAlign: "center",
    minWidth: "400px",
  },

  margin: {
    margin: 2,
  },
  avatar: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
    border: "none",
  },
});
export default function PostUploaderModal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState({});
  const [caption, setCaption] = useState("");
  const handleClose = () => {
    dispatch({ type: actionTypes.CLOSE_POST_UPLOAD_MODAL });
  };
  const handlePost = () => {
    dispatch({
      type: actionTypes.ADD_POST,
      post: { src: imageSrc, caption },
    });
    dispatch({ type: actionTypes.CLOSE_POST_UPLOAD_MODAL });
  };
  useEffect(() => {}, []);
  const handleCaptionChange = (e) => {
    const { value } = e.target;
    setCaption(value);
  };
  return (
    <div>
      <Dialog
        open
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={classes.dialog}
      >
        <DialogTitle
          className={classes.dialogTitle}
          id="alert-dialog-slide-title"
        >
          <Grid container alignItems="center">
            <Grid>
              <Avatar xs={1}> x</Avatar>
            </Grid>
            <Grid xs={10}>New Post</Grid>
          </Grid>
          <Grid xs={1} />
        </DialogTitle>
        <DialogContent>
          <Grid container direction="column">
            <Grid
              xs={12}
              container
              className={clsx(classes.margin, classes.captionContainer)}
            >
              <TextField
                id="outlined-multiline-static"
                multiline
                variant="outlined"
                placeholder="write a caption"
                fullWidth
                onChange={handleCaptionChange}
                className={clsx(classes.captionText)}
                rowsMax={5}
                color="primary"
                value={caption}
              />
            </Grid>
            <Grid xs={12}>
              <PostUploader setImageSrc={setImageSrc} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogContentText align="center">
          <Grid
            container
            style={{
              width: "340px",
              margin: "auto",
            }}
          >
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
              wrap="nowrap"
            >
              <Grid item xs={1} justify="flex-end" container>
                <InfoOutlined />
              </Grid>
              <Grid item xs={7} container justify="flex-start">
                <Typography variant="body2">
                  click on the image to reset or to choose another one
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePost} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
