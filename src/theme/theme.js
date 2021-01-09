import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#0094F4",
    },
    text: {
      primary: "#000",
      secondary: "#979797", // #DBDBDB
    },
  },
  typography: {
    fontFamily:
      ' -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    h6: {
      fontSize: "17px",
      lineHeight: "20px",
      fontWeight: 600,
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "16px",
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: "12px",
        lineHeight: "18px",
      },
    },
    MuiButton: {
      contained: {
        "& .Mui-disabled": {
          backgroundColor: "#000",
        },
      },
    },
  },
});
