import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  button: {
    display: "block;",
    color: "#000",
    padding: 0,
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
    width: "100%",
    textAlign: "left",
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "#f5f5f5",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {},
    },
  },
}))(MenuItem);

export default function CustomizedMenus(props) {
  const classes = useStyles();
  useEffect(() => {
    props.getTemplateList();
  }, [props.loginReducer.isLogin]);
  const templates = props.templateReducer.templates;
  console.log(templates);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteTemplate = ()=>{
    console.log("aa")
  }

  return (
    <div>
      <Button
        className={classes.button}
        aria-controls="customized-menu"
        // aria-haspopup="true"
        // variant="contained"
        disableRipple
        disableElevation
        // disabled
        onClick={handleClick}
      >
        토마토 텃밭
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {templates.map((template, index) => (
          <Link
            key={index}
            to={{
              pathname: "template",
              state: {
                template,
                deleteTemplate,
              },
            }}
          >
            <StyledMenuItem onClick={handleClose}>
              <ListItemText primary={template.templateName} />
            </StyledMenuItem>
          </Link>
        ))}
      </StyledMenu>
    </div>
  );
}
