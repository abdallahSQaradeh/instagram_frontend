/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core";
import Initial from "./Initial";
import Cropper from "./image-cropper.component";
import getCroppedImg from "./cropImage";

const useStyles = makeStyles(
  makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
    },
  }))
);
export default function ImageUploadCard(props) {
  const [mainState, setMainState] = useState("initial");
  const [selectedFile, setSelectedFile] = useState(null);
  const { cardName, setImageSrc } = props;
  const classes = useStyles();
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const handleUploadClick = (event) => {
    try {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = (e) => {
        setSelectedFile(reader.result);
        setImageSrc(reader.result);
      };

      setMainState("uploaded");
      setSelectedFile(event.target.files[0]);
      console.log(setSelectedFile, zoom, setZoom, crop, setCrop);
    } catch (e) {
      console.log(e);
    }

    // setPostInfo({ src: event.target.files[0] });
  };

  const onCropComplete = useCallback(
    async (croppedArea, _croppedAreaPixels) => {
      setCroppedAreaPixels(_croppedAreaPixels);
      try {
        const croppedImageR = await getCroppedImg(
          selectedFile,
          croppedAreaPixels
        );
        console.log("donee", { croppedImage });
        setCroppedImage(croppedImageR);
        setImageSrc(croppedImageR);
      } catch (e) {
        console.error(e);
      }
    },
    [croppedAreaPixels, croppedImage, selectedFile, setImageSrc]
  );

  /* const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []); */

  /* const imageResetHandler = (event) => {
    console.log("Click!");
    setMainState("initial");
    setSelectedFile(null);
    setImageUploaded(0);
  }; */

  return (
    <>
      <div className={classes.root}>
        <Card className={cardName}>
          {(mainState === "initial" && (
            <Initial handleUploadClick={handleUploadClick} />
          )) ||
            (mainState === "uploaded" && (
              <Cropper
                src={selectedFile}
                zoom={zoom}
                setZoom={setZoom}
                crop={crop}
                setCrop={setCrop}
                onCropComplete={onCropComplete}
              />
            ))}
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
