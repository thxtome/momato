import React, { useState, useEffect } from "react";
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
  const {
    timePassed,
    fullTime,
    isGoing,
    startTimer,
    stopTimer,
    resetTimer,
    addTime,
    loadTomato,
    openConnection,
    closeConnection,
    isConnected,
    isLoaded,
  } = props;

  //처음 페이지 생성시
  useEffect(() => {
    //토마토의 정보를 로드함
    openConnection();
    //페이지를 나가거나 이동시 연결을 종료한다.
    return () => {
      closeConnection();
    };
  }, []);

  //매번 렌더시
  useEffect(() => {
    //타이머가 작동상태이면
    if (isGoing === true) {
      //시간이 다 됐는지 확인하고
      if (timePassed === fullTime) {
        stopTimer();
      }

      //1초마다 시간을 더하는 액션을 보냄
      const key = setTimeout(() => {
        addTime();
      }, 1000);
      return () => {
        clearTimeout(key);
      };
    }
  });

  //매번 렌더시
  useEffect(() => {
    if (isConnected && !isLoaded) {
      console.log("load");
      loadTomato(props.location.state.tomato.tomatoIdx);
    }
  });

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
              (fullTime - timePassed) / 60 > 10
                ? Math.floor((fullTime - timePassed) / 60)
                : `0${Math.floor((fullTime - timePassed) / 60)}`
            }:
            ${
              (fullTime - timePassed) % 60 >= 10
                ? (fullTime - timePassed) % 60
                : `0${(fullTime - timePassed) % 60}`
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
                stopTimer();
              }}
            >
              <PauseCircleFilledIcon
                className={classes.btnDetail}
              ></PauseCircleFilledIcon>
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                startTimer();
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
              resetTimer();
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
