import React from "react";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Dialog from "@material-ui/core/Dialog";
import { Typography, makeStyles, Divider } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => {
  return {
    dialog: {
      width: "400px",
      borderRadius: "20px",
      [theme.breakpoints.down("xs")]: {
        width: "260px",
        borderRadius: "10px",
      },
    },
    listItem: {
      justifyContent: "center",
    },
  };
});
export default function SimpleDialog(props) {
  const { /* onClose, selectedValue, */ open, setMore } = props;
  const classes = useStyles();
  const handleClose = () => {
    setMore(false);
  };

  return (
    <Modal open={open} disableBackdropClick={false}>
      <Dialog
        aria-labelledby="simple-dialog-title"
        open={open}
        onClose={handleClose}
      >
        <List className={classes.dialog}>
          <ListItem className={classes.listItem} button onClick={() => {}}>
            <Typography variant="h6" color="error">
              Report
            </Typography>
          </ListItem>
          <Divider />
          <ListItem className={classes.listItem} button onClick={() => {}}>
            <Typography variant="h6" color="error">
              Unfollow
            </Typography>
          </ListItem>
          <Divider />
          <ListItem className={classes.listItem} button onClick={() => {}}>
            <Typography>Go to post</Typography>
          </ListItem>
          <Divider />
          <ListItem className={classes.listItem} button onClick={() => {}}>
            <Typography>Share to...</Typography>
          </ListItem>
          <Divider />
          <ListItem className={classes.listItem} button onClick={() => {}}>
            <Typography>Copy Link</Typography>
          </ListItem>
          <Divider />
          <ListItem className={classes.listItem} button onClick={() => {}}>
            <Typography>Embed</Typography>
          </ListItem>
          <Divider />
          <ListItem
            className={classes.listItem}
            button
            onClick={() => setMore(false)}
          >
            <Typography>Cancel</Typography>
          </ListItem>
        </List>
      </Dialog>
    </Modal>
  );
}
SimpleDialog.propTypes = {
  // onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  // selectedValue: PropTypes.string.isRequired,
  setMore: PropTypes.func.isRequired,
};
