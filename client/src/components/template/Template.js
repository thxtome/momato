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

const Template = ({ template }) => {
  const classes = useStyles()
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
        <Button type="button">삭제</Button>
      </Paper>
    </div>
  )
}

export default Template
