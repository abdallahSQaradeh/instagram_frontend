import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";

import UserCardItem from "../../../components/user-card-item/user-card-item.component";

const useStyles = makeStyles({
  footerItem: {
    fontSize: "11px",
    lineHeight: "18px",
    fontWeight: 400,
  },
  noPadding: {
    paddingLeft: 0,
    paddingRight: 0,
  },
});
export default function PrefSuggestion(props) {
  const classes = useStyles();
  const footerItems = [
    "About",
    "Help",
    "PressAPI",
    "Jobs",
    "Privacy",
    "Terms",
    "Locations",
    "Top Accounts",
    "Hashtags",
    "Language",
  ];

  return (
    <Grid direction="column" container xs={12}>
      <Grid item xs={12}>
        <List>
          <UserCardItem btnText="switch" avatarSize={7} />
          <ListItem>
            <ListItemText>
              <Typography variant="h6" component="p" color="textSecondary">
                Suggestion For You
              </Typography>
            </ListItemText>
            <Link>
              <Typography color="textPrimary">See All</Typography>
            </Link>
          </ListItem>
          <UserCardItem btnText="follow" avatarSize={5} />
          <UserCardItem btnText="follow" avatarSize={5} />
          <UserCardItem btnText="follow" avatarSize={5} />
          <UserCardItem btnText="follow" avatarSize={5} />
          <UserCardItem btnText="follow" avatarSize={5} />
        </List>
      </Grid>
      <ListItem className={classes.noPadding}>
        <Grid container>
          {footerItems.map((item, itx) => {
            return (
              <Grid item key={`${itx + 99}+cx`}>
                <Typography
                  className={classes.footerItem}
                  color="textSecondary"
                  variant="body2"
                >
                  {item}
                  {itx === footerItems.length - 1 ? (
                    ""
                  ) : (
                    <span style={{ margin: "0 .25em 0 .25em" }}>&bull;</span>
                  )}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </ListItem>
      <ListItem className={classes.noPadding}>
        <ListItemText>
          <Typography className={classes.footerItem} color="textSecondary">
            © 2021 INSTAGRAM FROM FACEBOOK
          </Typography>
        </ListItemText>
      </ListItem>
    </Grid>
  );
}
