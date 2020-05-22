import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import Modals from "../common/Modal"
import { Button } from "@material-ui/core"
import AppMenu from "./AppMenu"
import useMediaQuery from "@material-ui/core/useMediaQuery"

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
}))

const Header = (props) => {
  const classes = useStyles()
  const matches = useMediaQuery("(min-width:800px)")
  const logoutRequest = () => {
    props.logout(localStorage.getItem("auth"))
    props.getTempTomatoList()
  }

  return (
    <AppBar className={classes.root} elevation={1}>
      <Toolbar className={classes.toolbar}>
        {matches ? "" : <AppMenu isLogin={props.loginReducer.isLogin} className={classes.appMenu} />}

        <Typography variant="h6" edge="start" className={classes.title}>
          MOMATO
        </Typography>
        {!props.loginReducer.isLogin ? (
          <Modals type="login" />
        ) : (
          <Button
            className={classes.logout}
            onClick={() => {
              logoutRequest()
            }}
          >
            LOGOUT
          </Button>
        )}
        {!localStorage.getItem("auth") ? <Modals type="signup" /> : null}
      </Toolbar>
    </AppBar>
  )
}

export default Header
