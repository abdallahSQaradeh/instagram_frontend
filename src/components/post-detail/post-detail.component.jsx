import { Divider, IconButton, makeStyles, Modal } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => {
  return {
    closeButton: {
      top: 0,
      right: 0,
      position: "absolute",
    },
  };
});
export default function PostDetail(props) {
  const classes = useStyles();

  const { detailedPost, setDetailedPost } = props;
  const handleClose = () => {
    setDetailedPost(null);
  };

  return (
    <Modal open={detailedPost} onClose={handleClose}>
      <IconButton className={classes.closeButton} onClick={handleClose}>
        <Close />
      </IconButton>
      <Divider />
    </Modal>
  );
}
PostDetail.propTypes = {
  detailedPost: PropTypes.func.isRequired,
  setDetailedPost: PropTypes.func.isRequired,
};
