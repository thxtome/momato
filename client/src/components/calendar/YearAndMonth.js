import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },
  paper: {
    boxShadow: "none",
  },
  
}));

const YearAndMonth = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Box className={classes.root} component={"div"}>
          <IconButton aria-label="left">
            <KeyboardArrowLeftIcon />
          </IconButton>
          <Box component={"div"}>
            <Typography variant={"h4"}>2020</Typography>
          </Box>
          <Box component={"div"}>
            <Typography variant={"h2"}>04</Typography>
          </Box>
          <IconButton aria-label="right">
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
        <Box component={"div"}></Box>
        <Box component={"div"}></Box>
      </Grid>

      <Grid item xs={6}>
        <Box className={classes.root} component={"div"}>
          <Typography variant={"h4"}>이달의 토마토</Typography>
          <Avatar className={classes.tomatoImg} src="/images/homeMade.png" />
          <Typography variant={"h4"}>10</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default YearAndMonth;
