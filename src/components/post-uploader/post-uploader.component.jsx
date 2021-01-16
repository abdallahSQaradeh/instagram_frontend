/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import SearchIcon from "@material-ui/icons/Search";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800],
    },
  },
  cardHeader: {
    textalign: "center",
    align: "center",
    backgroundColor: "white",
  },
  input: {
    display: "none",
  },
  title: {
    color: blue[800],
    fontWeight: "bold",
    fontFamily: "Montserrat",
    align: "center",
  },
  button: {
    color: blue[900],
    margin: 10,
  },
  secondaryButton: {
    color: "gray",
    margin: 10,
  },
  typography: {
    margin: theme.spacing.unit * 2,
    backgroundColor: "default",
  },

  searchRoot: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },
  searchIconButton: {
    padding: 10,
  },
  searchDivider: {
    width: 1,
    height: 28,
    margin: 4,
  },
}));

export default function ImageUploadCard(props) {
  const [mainState, setMainState] = useState("initial"); // initial, search, gallery, uploaded
  const [imageUploaded, setImageUploaded] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const { cardName, setImageSrc } = props;
  const classes = useStyles();

  const handleUploadClick = (event) => {
    console.log(event, "here----------------------------");
    const file = event.target.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);
    console.log("hree is reader", reader);
    reader.onloadend = function (e) {
      setSelectedFile([reader.result]);
      setImageSrc(reader.result);
      console.log(url, imageUploaded, reader, "---------------------------"); // Would see a path?
    };

    setMainState("uploaded");
    setSelectedFile(event.target.files[0]);
    // setPostInfo({ src: event.target.files[0] });
    setImageUploaded(1);
  };

  const handleImageSearch = (url) => {
    const filename = url.substring(url.lastIndexOf("/") + 1);
    console.log(filename, url, "we are here");
    setMainState("uploaded");
    setSelectedFile(url);
    setImageSrc(url);
    setImageUploaded(true);
  };

  const handleSearchClose = (event) => {
    // console.log(filename);
    setMainState("initial");
  };

  const renderSearchState = () => {
    return (
      <Paper className={classes.searchRoot} elevation={1}>
        <InputBase className={classes.searchInput} placeholder="Image URL" />
        <IconButton
          className={classes.button}
          aria-label="Search"
          onClick={handleImageSearch}
        >
          <SearchIcon />
        </IconButton>
        <Divider className={classes.searchDivider} />
        <IconButton
          color="primary"
          className={classes.secondaryButton}
          aria-label="Close"
          onClick={handleSearchClose}
        >
          <CloseIcon />
        </IconButton>
      </Paper>
    );
  };

  const renderUploadedState = () => {
    return (
      <>
        <CardActionArea onClick={imageResetHandler}>
          <img
            width="100%"
            className={classes.media}
            src={selectedFile}
            alt="ss"
          />
        </CardActionArea>
      </>
    );
  };

  const imageResetHandler = (event) => {
    console.log("Click!");
    setMainState("initial");
    setSelectedFile(null);
    setImageUploaded(0);
  };

  const renderInitialState = () => {
    return (
      <>
        <CardContent>
          <Grid container justify="center" alignItems="center">
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              type="file"
              onChange={handleUploadClick}
            />
            <IconButton>
              <label htmlFor="contained-button-file">
                <Fab component="span" className={classes.button}>
                  <AddPhotoAlternateIcon />
                </Fab>
              </label>
            </IconButton>
          </Grid>
        </CardContent>
      </>
    );
  };
  return (
    <>
      <div className={classes.root}>
        <Card className={cardName}>
          {(mainState === "initial" && renderInitialState()) ||
            (mainState === "search" && renderSearchState()) ||
            // (mainState === "gallery" && renderGalleryState()) ||
            (mainState === "uploaded" && renderUploadedState())}
        </Card>
      </div>
    </>
  );
}

ImageUploadCard.propTypes = {
  cardName: PropTypes.string,
  setImageSrc: PropTypes.func.isRequired,
};
ImageUploadCard.defaultProps = {
  cardName: "",
};
