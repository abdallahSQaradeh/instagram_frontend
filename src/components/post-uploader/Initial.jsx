/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  CardContent,
  Fab,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { AddPhotoAlternate } from "@material-ui/icons";
import React from "react";
import PropTypes from "prop-types";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
  button: {
    color: blue[900],
    margin: 10,
  },
}));

export default function Initial(props) {
  const { handleUploadClick } = props;
  const classes = useStyles();
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
                <AddPhotoAlternate />
              </Fab>
            </label>
          </IconButton>
        </Grid>
      </CardContent>
    </>
  );
}

Initial.propTypes = {
  handleUploadClick: PropTypes.func.isRequired,
};
