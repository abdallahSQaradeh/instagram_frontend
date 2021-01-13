/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { SendRounded } from "@material-ui/icons";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import PropTypes from "prop-types";

import styled from "styled-components";
import PostComment from "./postComment/postComment.component";
import useStyles from "./style";
import CommentItem from "./commentItem/commentItem.component";

const getImageSize = (src) => {
  let width = 0;
  let height = 0;
  const img = new Image();
  img.src = src;
  img.onload = function () {
    width = this.width;
    height = this.height;
    return [width, height];
  };
  return img.onload();
};

export default function Post(props) {
  const { src } = props;

  const [imageSize, setImageSize] = useState({});
  const [saved, setSaved] = useState(false);
  const [comments, setComments] = useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = useState(false);
  const classes = useStyles(props);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleLikeClick = () => {
    setLiked(!liked);
  };
  const handlePostAComment = (comment) => {
    const newComments = [...comments];
    newComments.push(comment);
    setComments(newComments);
  };
  const handleSave = () => {
    setSaved(!saved);
  };
  useEffect(() => {
    const [width, height] = getImageSize(src);
    setImageSize({ width, height });
  }, [src]);

  const StyledCardMedia = styled(CardMedia)`
    padding-top: ${(imageSize.height / imageSize.width) * 100}%;
  `;
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img
              src={src}
              alt="user"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title="user"
      />
      <div className={classes.mediaContainer} />
      <StyledCardMedia className={classes.media} image={src} />
      <CardActions disableSpacing className={classes.postActions}>
        <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
          {liked ? (
            <FavoriteIcon style={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>

        <IconButton aria-label="send">
          <SendRounded className={classes.send} liked={liked} />
        </IconButton>
        <IconButton aria-label="comment">
          <ChatBubbleOutlineRoundedIcon />
        </IconButton>
        <IconButton
          aria-label="share"
          className={clsx(classes.expand, classes.black)}
          aria-expanded={expanded}
          onClick={handleSave}
        >
          {saved ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
        </IconButton>
      </CardActions>
      <CardContent className={classes.content}>
        <Typography
          variant="body2"
          color="textPrimary"
          component="p"
          noWrap={!expanded}
          className={classes.description}
        >
          <Typography
            component="span"
            color="textPrimary"
            className={classes.user}
          >
            {`user `}
          </Typography>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          more
        </IconButton>
      </CardContent>

      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        {content}
          </Collapse> */}
      <CardContent className={classes.comments}>
        <div>
          {comments.map((comment, xc) => {
            return (
              <CommentItem
                author="user"
                text={comment}
                key={`${`${xc}s`} 22es`}
              />
            );
          })}
        </div>
      </CardContent>
      <Divider />
      <CardContent className={classes.postFooter}>
        <PostComment click={handlePostAComment} />
      </CardContent>
    </Card>
  );
}
Post.propTypes = {
  src: PropTypes.string.isRequired,
};
