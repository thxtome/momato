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
import { Avatar } from "@material-ui/core";

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
  isLogin,
  templateIdx,
  tomatoDelete,
  getTomatoList,
  getTempTomatoList,
  tomatoName,
  tomatoLeftRegular,
  tomatoLeftBreak,
  tomatoIdx,
  tomatoFullRegular,
  tomatoFullBreak,
  tomatoCanStart,
}) => {
  const classes = useStyles();
  let date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);
  if (!templateIdx) {
    templateIdx = 0;
  } else {
    date = "";
  }
  const data = {
    date,
    templateIdx,
  };
  const tomatoDeleteRequest = () => {
    if (localStorage.getItem("auth")) {
      tomatoDelete(tomatoIdx);
      getTomatoList(data);
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
              {tomatoCanStart ? (
                <IconButton aria-label="start">
                  <Link
                    className={classes.link}
                    to={{
                      pathname: `counter`,
                      state: {
                        tomatoIdx,
                      },
                    }}
                  >
                    <PlayCircleFilledWhiteIcon />
                  </Link>
                </IconButton>
              ) : (
                "완료"
              )}
            </Box>
            <Typography className={classes.name} variant="h6">
              <Modals
                type="tomatoEdit"
                templateIdx={templateIdx}
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
