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
    MuiLink: {
      underlineHover: "none",
    },

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
        "&.Mui-disabled": {
          backgroundColor: "#B2DFFC",
          color: "#fff",
          textTransform: "none",
        },
      },
      root: {
        "&.Mui-disabled": {
          color: "#B2DFFC",
          fontSize: "12px",
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: 0,
        margin: "12px",
        color: "#262626",
        fontSize: "1.8rem",
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: "1.8rem",
      },
    },
    MuiCardContent: {
      root: {
        padding: "0 16px",
        "&:last-child": {
          paddingBottom: 0,
        },
      },
    },
    MuiCardActions: {
      root: {
        padding: "0 16px",
      },
    },
    /* MuiCssBaseline: {
      "@global": {
        // override the pseudo-classes
        ".Mui-disabled": { background: "#000" },
        ".Mui-selected": { background: "red" },
      },
    }, */
  },
});
