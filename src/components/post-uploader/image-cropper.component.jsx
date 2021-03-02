/* eslint-disable react/forbid-prop-types */
import React, { useState } from "react";
import Cropper from "react-easy-crop";
import PropTypes from "prop-types";
import {
  CardMedia,
  CardActionArea,
  Slider,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    width: "500px",
    height: "500px",
  },
}));
export default function ImageCropper(props) {
  const { src, zoom, setZoom, crop, setCrop, onCropComplete } = props;
  const [aspect] = useState(1 / 1);
  const classes = useStyles();
  const onCropChange = (cropV) => {
    setCrop(cropV);
  };

  const handleZoom = (zoomV) => {
    setZoom(zoomV);
  };

  return (
    <>
      <CardActionArea>
        <CardMedia className={classes.media}>
          <Cropper
            style={{ width: "100%", height: "100%" }}
            image={src}
            zoom={zoom}
            aspect={aspect}
            crop={crop}
            onCropChange={onCropChange}
            onCropComplete={onCropComplete}
            onZoomChange={handleZoom}
          />
        </CardMedia>
      </CardActionArea>
      <div className="controls">
        <Slider
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e, z) => handleZoom(z)}
          classes={{ container: "slider" }}
        />
      </div>
    </>
  );
}

ImageCropper.propTypes = {
  src: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
  crop: PropTypes.object.isRequired,
  setCrop: PropTypes.func.isRequired,
  setZoom: PropTypes.func.isRequired,
  onCropComplete: PropTypes.func.isRequired,
};
