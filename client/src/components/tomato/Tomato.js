import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    maxHeight: "20px",
    display: "flex",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    alignItems: "center",
  },
  name: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

const Tomato = ({ name }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box component={"div"}>
              <IconButton aria-label="start">
                <PlayCircleFilledWhiteIcon />
              </IconButton>
            </Box>
            <Typography className={classes.name} variant="h6">
              {name}
            </Typography>
            <Typography variant="caption"> 남은시간 : 18분</Typography>
            <Box component={"div"}>
              <IconButton aria-label="start">
                <DeleteIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tomato;
