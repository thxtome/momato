import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Paper, Box, Button } from "@material-ui/core"
import Modals from "../common/Modal"

const useStyles = makeStyles((theme) => ({
  root: {
    flexgrow: 1,
  },
  paper: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(5),
  },
  name: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
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
        <Box className={classes.name} flexgrow={1}>
          <Typography flexgrow={1} className={classes.name} variant="h4">
            <Modals type="template" template={template}>
              {template.templateName}
            </Modals>
          </Typography>
          <Typography variant="h6">{template.templateComment}</Typography>
        </Box>
        <Button type="button" onClick={templateDeleteRequest}>
          삭제
        </Button>
      </Paper>
    </div>
  )
}

export default Template
