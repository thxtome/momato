import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color: "black",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
}));

const AppMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="tomato" className={classes.link}>
          <MenuItem onClick={handleClose}>오늘의토마토</MenuItem>
        </Link>
        <Link to="calendar" className={classes.link}>
          <MenuItem onClick={handleClose}>토마토달력</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>토마토 텃밭</MenuItem>
      </Menu>
    </>
  );
};

export default AppMenu;
