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
  disabledButton: {
    backgroundColor: "#0094F4",
    margin: "10px 0px",
    "&.disabled": {
      color: "white",
      backgroundColor: "#B2DFFC",
    },
  },
  moreTextInfo: {
    fontSize: "12px",
    lineHeight: "16px",
    margin: "15px 0px",
  },
  textField: {
    backgroundColor: "#fafafa",
  },
}));
