import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Paper, Box, Button } from "@material-ui/core"
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
    alignItems: "center",
    marginRight: theme.spacing(0),
    "& > *": {
      [theme.breakpoints.down("650")]: {
        fontSize: 12,
        margin: theme.spacing(0),
        padding: theme.spacing(0),
      },
    },
  },
  comment: {
    fontSize: 15,
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("650")]: {
      fontSize: 10,
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
}))

const Template = (props) => {
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
          <Typography flexgrow={1} className={classes.name} variant="h4">
            <Modals type="template" template={template}>
              {template.templateName}
            </Modals>
          </Typography>
          <Button className={classes.deleteBtn} type="button" onClick={templateDeleteRequest}>
            삭제
          </Button>
        </Box>
      </Paper>
      <div className={classes.comment}>{template.templateComment}</div>
    </div>
  )
}

export default Template
