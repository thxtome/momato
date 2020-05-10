import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@material-ui/core"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import GrainIcon from "@material-ui/icons/Grain"
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import { Link } from "react-router-dom"
import Modals from "../common/Modal"
import TemplateListContainer from "../../containers/template/TemplateListContainer"

const drawerWidth = 300

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  userGrade: {
    alignSelf: "center",
    marginBottom: theme.spacing(2),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  gradeComment: {
    color: "#999",
    alignSelf: "center",
  },
  userId: {
    alignSelf: "center",
  },
  clieckedItem: {
    backgroundColor: "#ccc",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  addTemplate: {
    marginLeft: theme.spacing(4),
    width: theme.spacing(25),
    cursor: "pointer",
  },
}))

const useInput = (initVal) => {
  const [value, setValue] = useState(initVal)
  return { value }
}

const Sidebar = (props) => {
  const classes = useStyles()
  const [clieckedIndex, setClieckedIndex] = useState(0)

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <Toolbar />
      <Avatar className={classes.userGrade} src="" />
      <Modals type="info" name={"채채채채채채"} />
      <Typography className={classes.gradeComment} variant="caption" display="block" gutterBottom>
        씨를 뿌린 초보 농사꾼
      </Typography>

      <div className={classes.drawerContainer}>
        <List>
          {["오늘의 토마토", "토마토 달력"].map((text, index) => (
            <Link className={classes.link} key={text} to={index === 0 ? "tomato" : index === 1 ? "calendar" : ""}>
              <ListItem button className={clieckedIndex === index ? classes.clieckedItem : ""} onClick={() => setClieckedIndex(index)}>
                <ListItemIcon>{index === 0 ? <CheckCircleIcon /> : index === 1 ? <EventNoteIcon /> : <></>}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
          <TemplateListContainer />
          <ListItem className={classes.addTemplate}>
            <Modals type="addTemplate" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}

export default Sidebar
