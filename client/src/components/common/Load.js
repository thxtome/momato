import React from "react"
import { makeStyles, Box } from "@material-ui/core"
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles((theme) => ({
  root: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "fixed",
    textAlign: "center",
    zIndex: 1900,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  //   box: {
  //     backgroundColor: "#E9E9E9",
  //     width: "65px",
  //     height: "65px",
  //     opacity: 0.5,
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     borderRadius: "10px",
  //   },
  circular: {
    "& > *": {
      opacity: 0.5,
    },
  },
}))

const Load = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <CircularProgress className={classes.circular} color="secondary" />
    </Box>
  )
}

export default Load
