import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Modals from "../common/Modal";

const useStyles = makeStyles((theme) => ({
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
  link: {
    color: "inherit",
    textDecoration: "none",
  },
}));

const Tomato = ({
  tomatoDelete,
  getTomatoList,
  getTempTomatoList,
  tomatoName,
  tomatoLeftRegular,
  tomatoIdx,
  tomatoFullRegular,
  tomatoFullBreak,
}) => {
  const classes = useStyles();
  const tomatoDeleteRequest = () => {
    if (localStorage.getItem("auth")) {
      tomatoDelete(tomatoIdx);
      getTomatoList(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      );
    } else {
      sessionStorage.removeItem(tomatoIdx);
      getTempTomatoList();
    }
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box component={"div"}>
              <IconButton aria-label="start">
                <Link className={classes.link} to={"counter"}>
                  <PlayCircleFilledWhiteIcon />
                </Link>
              </IconButton>
            </Box>
            <Typography className={classes.name} variant="h6">
              <Modals
                type="tomatoEdit"
                index={tomatoIdx}
                name={tomatoName}
                fullRegular={tomatoFullRegular}
                fullBreak={tomatoFullBreak}
              />
            </Typography>
            <Typography variant="caption">
              남은시간 : {tomatoLeftRegular / 60}분
            </Typography>
            <Box component={"div"}>
              <IconButton aria-label="start" onClick={tomatoDeleteRequest}>
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
