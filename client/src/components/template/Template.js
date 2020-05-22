import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Paper, Box, IconButton } from "@material-ui/core"
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"
import Modals from "../common/Modal"

const useStyles = makeStyles((theme) => ({
  root: {
    flexgrow: 1,
    display: "absolute",
  },
  paper: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    display: "flex",
    p: 1,
    alignItems: "center",
    "& > *": {
      [theme.breakpoints.down("650")]: {
        fontSize: 14,
        margin: theme.spacing(0),
        padding: theme.spacing(0),
      },
    },
  },
  templateName: {
    flexgrow: 1,
    p: 1,
  },
  comment: {
    fontSize: 15,
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("650")]: {
      fontSize: 11,
      marginLeft: theme.spacing(2),
      marginBottom: theme.spacing(3),
    },
  },
  deleteBtn: {
    "& > *": {
      [theme.breakpoints.down("650")]: {
        fontSize: 10,
        margin: theme.spacing(0),
        padding: theme.spacing(0),
      },
    },
  },
  btnDiv: {
    width: 10,
  },
}))

const Template = (props) => {
  console.log(props.history)
  const classes = useStyles()
  const template = props.template
  const data = {
    templateIdx: 0,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
  }
  const templateDeleteRequest = () => {
    props.deleteTemplate(template.templateIdx)
    props.getTemplateList()
  }
  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Box className={classes.name}>
          <Box className={classes.templateName}>
            <Typography variant="h4">
              <Modals history={props.history} type="template" template={template}>
                {template.templateName}
              </Modals>
            </Typography>
          </Box>
          <Box component={"div"} className={classes.btnDiv}>
            <IconButton className={classes.deleteBtn} aria-label="start" onClick={templateDeleteRequest}>
              <DeleteOutlineIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>
      <div className={classes.comment}>{template.templateComment}</div>
    </div>
  )
}

export default Template
