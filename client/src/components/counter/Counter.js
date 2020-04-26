import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import RestoreIcon from "@material-ui/icons/Restore";

const useStyles = makeStyles((theme) => ({
  Container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 1600,
  },
  closeBtnBox: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "10px",
  },

  countDetailBox: {
    width: "100%",
    height: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  countDetail: {
    width: "30%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  tomatoImg: {
    width: "215px",
    height: "215px",
    marginRight: "20px",
  },

  time: {
    fontSize: "10rem",
  },

  countDetail: {
    width: "100%",
    height: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  btnDetailBox: {
    width: "100%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  btnDetail: {
    fontSize: "10rem",
  },
}));

const Counter = (props) => {
  const [fullTime, setFullTime] = useState(1500);
  const [time, setTime] = useState(0);
  const [isGoing, setIsGoing] = useState(false);

  useEffect(() => {
    if (isGoing === true) {
      const key = setTimeout(() => {
        setTime(time + 1);
      }, 1000);
      return () => {
        clearTimeout(key);
      };
    }
  });

  const start = () => {
    setIsGoing(true);
  };

  const stop = () => {
    setIsGoing(false);
  };

  const restore = () => {
    setTime(0);
    setIsGoing(false);
  };

  //뒤로가기
  const goBack = () => {
    props.history.goBack();
  };

  const classes = useStyles();
  return (
    <Paper className={classes.Container}>
      <Box className={classes.closeBtnBox} component={"div"}>
        <Button variant="contained" color="secondary" onClick={goBack}>
          나가기
        </Button>
      </Box>

      <Box className={classes.countDetailBox} component={"div"}>
        <Box className={classes.countDetail} component={"div"}>
          <Avatar
            className={classes.tomatoImg}
            src="/images/homeMade.png"
          ></Avatar>
          <Typography className={classes.time} variant={"body1"}>
            {`
            ${
              (fullTime - time) / 60 > 10
                ? Math.floor((fullTime - time) / 60)
                : `0${(fullTime - time) / 60}`
            }:
            ${
              (fullTime - time) % 60 > 10
                ? (fullTime - time) % 60
                : `0${(fullTime - time) % 60}`
            }
            `}
          </Typography>
        </Box>
      </Box>

      <Box className={classes.btnDetailBox} component={"div"}>
        <Box component={"div"}>
          {isGoing ? (
            <IconButton
              onClick={() => {
                stop();
              }}
            >
              <PauseCircleFilledIcon
                className={classes.btnDetail}
              ></PauseCircleFilledIcon>
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                start();
              }}
            >
              <PlayCircleFilledWhiteIcon
                className={classes.btnDetail}
              ></PlayCircleFilledWhiteIcon>
            </IconButton>
          )}
        </Box>

        <Box component={"div"}>
          <IconButton
            onClick={() => {
              restore();
            }}
          >
            <RestoreIcon className={classes.btnDetail}></RestoreIcon>
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default Counter;
