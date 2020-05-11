import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
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
  finishIcon: {
    color: "seagreen",
  },
}));

const Tomato = ({
  isLogin,
  templateIdx,
  tomatoDelete,
  tomatoTempDelete,
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
    //로그인이면 서버에 요청
    if (isLogin) {
      tomatoDelete(tomatoIdx);
      getTomatoList(data);

      //아니면 리듀서에 요청
    } else {
      tomatoTempDelete(tomatoIdx);
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
                        isLogin,
                        tempTomato: isLogin ? null :{
                          templateIdx,
                          tomatoName,
                          tomatoLeftRegular,
                          tomatoLeftBreak,
                          tomatoIdx,
                          tomatoFullRegular,
                          tomatoFullBreak,
                          tomatoCanStart,
                        },
                      },
                    }}
                  >
                    <PlayCircleFilledWhiteIcon />
                  </Link>
                </IconButton>
              ) : (
                <CheckCircleOutlineIcon className={classes.finishIcon} />
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
                tomatoCanStart={tomatoCanStart}
              />
            </Typography>
            <Typography variant="caption">
              남은시간 : {Math.floor(tomatoLeftRegular / 60)}분
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
