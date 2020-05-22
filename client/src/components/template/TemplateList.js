import React, { useEffect } from "react"
import GrainIcon from "@material-ui/icons/Grain"
import LocalFloristIcon from "@material-ui/icons/LocalFlorist"
import ListItemText from "@material-ui/core/ListItemText"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Collapse from "@material-ui/core/Collapse"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import { makeStyles, useMediaQuery, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  title: {
    "& > *": {
      fontSize: 13,
    },
  },
  linkText: {
    fontSize: 13,
    width: theme.spacing(5),
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: 150,
    height: 20,
    [theme.breakpoints.down("650")]: {
      fontSize: 12,
      width: 90,
      height: 15,
    },
  },
}))

export default function NestedList(props) {
  const classes = useStyles()
  const matches = useMediaQuery("(min-width:800px)")
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  // useEffect(() => {
  //   props.getTemplateList()
  //   if (props.templateDeleteReducer.isTemplateDeleteSucceed) {
  //     props.clearDeleteResult()
  //   } else if (props.templateEditReducer.isTemplateEditSucceed) {
  //     props.clearEditResult()
  //   }
  // }, [props.templateDeleteReducer.isTemplateDeleteSucceed, props.templateEditReducer.isTemplateEditSucceed])
  const templates = props.templateReducer.templates
  return (
    <div>
      <ListItem button onClick={handleClick}>
        {matches ? (
          <ListItemIcon>
            <GrainIcon />
          </ListItemIcon>
        ) : (
          ""
        )}
        <ListItemText primary="토마토 텃밭" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {templates.map((template, index) => (
            <Link
              className={classes.link}
              key={index}
              to={{
                pathname: `template`,
                state: {
                  template,
                },
              }}
              onClick={props.onClose}
            >
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <LocalFloristIcon />
                </ListItemIcon>
                <ListItemText className={classes.title}>
                  <Typography noWrap className={classes.linkText}>
                    {template.templateName}
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
    </div>
  )
}
