import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  subtitleHint: {
    margin: "0 40px 10px",
  },
  btnText: {
    textTransform: "none",
  },
  facebook: {
    backgroundColor: "#0094F4",
    "&:hover": {
      backgroundColor: "#0094F4",
    },
  },
  whiteColor: {
    color: "#fff",
  },

  moreTextInfo: {
    fontSize: "12px",
    lineHeight: "16px",
    margin: "15px 0px",
  },
  textField: {
    backgroundColor: "#fafafa",
  },
  nonDecoration: {
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
    },
  },
  disabledButton: {
    "&.Mui-disabled": {
      backgroundColor: "#B2DFFC",
      color: "#fff",
      textTransform: "none",
    },

    /* margin: "10px 0px",
    "&.disabled": {
      color: "white",
      backgroundColor: "#B2DFFC",
    }, */
  },
}));
