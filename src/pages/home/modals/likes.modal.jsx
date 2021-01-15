import React from "react";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";

import Dialog from "@material-ui/core/Dialog";
import {
  makeStyles,
  Divider,
  DialogTitle,
  DialogActions,
  IconButton,
  Grid,
  Typography,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { Close } from "@material-ui/icons";
import UserCardItem from "../../../components/user-card-item/user-card-item.component";

const useStyles = makeStyles((theme) => {
  return {
    dialog: {
      width: "400px",
      borderRadius: "15px",
      maxHeight: "440px",
      overflowY: "scroll",
      [theme.breakpoints.down("xs")]: {
        width: "260px",
        borderRadius: "10px",
      },
    },
    listItem: {
      justifyContent: "center",
    },
    removePadding: {
      padding: 0,
    },
  };
});
export default function SimpleDialog(props) {
  const { /* onClose, selectedValue, */ open, setLikesModal } = props;
  const classes = useStyles();
  const handleClose = () => {
    setLikesModal(false);
  };

  return (
    <Modal open={open} disableBackdropClick={false}>
      <Dialog
        aria-labelledby="simple-dialog-title"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle className={classes.removePadding}>
          <DialogActions className={classes.removePadding}>
            <Grid item xs={5} />
            <Grid container justify="flex-end" xs={2}>
              <Typography variant="h5">Likes</Typography>
            </Grid>
            <Grid container justify="flex-end" xs={5}>
              <IconButton size="medium" onClick={handleClose}>
                <Close fontSize="20px" />
              </IconButton>
            </Grid>
          </DialogActions>
        </DialogTitle>
        <Divider />
        <List className={classes.dialog}>
          <UserCardItem btnType="contained" btnText="follow" />
          <UserCardItem btnType="contained" btnText="follow" />
          <UserCardItem btnType="contained" btnText="follow" />
          <UserCardItem btnType="contained" btnText="follow" />
          <UserCardItem btnType="contained" btnText="follow" />
          <UserCardItem btnType="contained" btnText="follow" />
          <UserCardItem btnType="contained" btnText="follow" />
          <UserCardItem btnType="contained" btnText="follow" />
          <Divider />
        </List>
      </Dialog>
    </Modal>
  );
}
SimpleDialog.propTypes = {
  // onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  // selectedValue: PropTypes.string.isRequired,
  setLikesModal: PropTypes.func.isRequired,
};
