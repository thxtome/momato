import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Modals from "../common/Modal";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 1299,
    display: "flex",
    borderRadius: 0,
    backgroundColor: "white",
    height: "50px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: "center",
    color: "black",
  },
  login: {
    color: "black",
  },
  toolbar: {
    minHeight: "100%",
  },
  logout: {
    color: "black",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const logoutRequest = () => {
    props.logout();
    props.getTempTomatoList();
  }

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" edge="start" className={classes.title}>
          MOMATO
        </Typography>
        { localStorage.getItem("auth") === null ? (
          <Modals type="login" />
        ) : (
          <Button className={classes.logout} onClick={() => {logoutRequest();}} >
            로그아웃
          </Button>
        )}
        <Modals type="signup" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
