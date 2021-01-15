import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginBottom: 60,
    width: "935px",
    display: "flex",
    flex: "0 1 935px",
    minWidth: "500px",
    border: "1px solid #dbdbdb",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "380px",
    },
  },
  user: {
    fontWeight: "500",
  },
  description: {
    fontWeight: 400,
  },
  media: {
    paddingTop: "56%", // "56.25%", // 16:9
    width: "100%",
    height: "100%",
    OObjectFit: "cover",
  },
  expand: {
    fontSize: "16px",
    margin: 0,
    color: "#dbdbdb",
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    display: "none",
  },
  black: {
    color: "#000",
  },
  avatar: {
    backgroundColor: red[500],
  },
  send: {
    transform: "rotate(-50deg)",
    marginBottom: 4,
  },
  content: {
    paddingBottom: 0,
    paddingTop: 0,
  },
  comments: {
    paddingTop: 0,
    paddingBottom: "4px",
  },
  postActions: {
    padding: "0 16px 0 0",
  },
  postFooter: {
    padding: "0 0 0 16px",
  },
  horizontalMore: {
    fontSize: "1.5rem",
  },
  postHeader: {
    fontWeight: "bold",
  },
}));
