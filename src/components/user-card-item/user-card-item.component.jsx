/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import {
  makeStyles,
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  ListItemSecondaryAction,
  Button,
  Link,
} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
      maxWidth: "36ch",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
      color: theme.palette.text.secondary,
      fontSize: "0.9rem",
    },
    avatarSize: {
      width: (props) => theme.spacing(props.avatarSize),
      height: (props) => theme.spacing(props.avatarSize),
    },
  };
});
export default function UserCardItem(props) {
  const { btnText, btnType } = props;
  const classes = useStyles(props);

  return (
    <ListItem alignItems="center">
      <ListItemAvatar>
        <Avatar
          className={classes.avatarSize}
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
        />
      </ListItemAvatar>
      <ListItemText
        primary="ahmed Med"
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            Ali Connors
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        {btnType ? (
          <Button size="small" variant={btnType} color="primary">
            {btnText}
          </Button>
        ) : (
          <Link>{btnText}</Link>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
}
UserCardItem.propTypes = {
  btnType: PropTypes.string,
  btnText: PropTypes.string.isRequired,
};
UserCardItem.defaultProps = {
  btnType: "",
};
