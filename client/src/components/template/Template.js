import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Box, Modal } from "@material-ui/core";
import Modals from "../common/Modal";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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
  }));

  const Template = ({template}) => {
      const classes = useStyles();
      console.log({template})
      return (
          <div classname={classes.root}>
            <Paper elevation={0} className={classes.paper}>
              <Box className={classes.name} flexGrow={1}>
                <Typography flexGrow={1} className={classes.name} variant="h4">
                  <Modals template={template}>{template.templateName}</Modals>
                </Typography>
                <Typography variant="h6">
                  {template.templateContent}
                </Typography>
              </Box>
              <Typography className={classes.delete} variant="h6">삭제</Typography>
            </Paper>
          </div>
      );
  }

  export default Template;