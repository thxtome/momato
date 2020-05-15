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
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import RestoreIcon from "@material-ui/icons/Restore";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
    maxWidth: "215px",
    maxHeight: "215px",
    width: "20%",
    height: "auto",
    marginRight: "20px",
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

  fontSize: {
    fontSize: "10rem",
  },

  fontSizeMobile: {
    fontSize: "5rem",
  },

  iconSize: {
    fontSize: "10rem",
  },

  iconSizeMobile: {
    fontSize: "5rem",
  },

  finishIcon: {
    fontSize: "10rem",
    color: "seagreen",
  },

  finishIconMobile: {
    fontSize: "5rem",
    color: "seagreen",
  },

  finishMsg: {
    fontSize: "6rem",
  },

  finishMsgMobile: {
    fontSize: "3rem",
  },
}));

const finishNotify = (target) => {
  let message =
    target === "regularTime"
      ? "집중시간이 끝났습니다! 휴식 시간을 가져보세요."
      : "휴식시간이 끝났습니다! 새로운 집중 시간을 가져보세요.";
  let options = {
    body: message,
    icon: "/images/homeMade.png",
  };
  if (!("Notification" in window)) {
    alert("브라우저가 알림을 지원하지 않습니다.");
  } else if (Notification.permission === "granted") {
    var notification = new Notification("MOMATO", options);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("MOMATO", options);
      }
    });
  }
};

const Counter = (props) => {
  const matches = useMediaQuery("(min-width:700px)");
  const {
    timePassed,
    leftTime,
    isGoing,
    target,
    startTimer,
    stopTimer,
    resetTimer,
    finishTimer,
    addTime,
    loadTomato,
    openConnection,
    closeConnection,
    isConnected,
    isLoaded,
    isFinished,
    loadTempTomato,
    tempTomatoSave,
    finishTempTimer,
  } = props;

  const isLogin = props.location.state.isLogin;
  const tomatoIdx = props.location.state.tomatoIdx;

  //처음 페이지 생성시
  useEffect(() => {
    //로그인이 되어있으면 소켓을 연다
    if (isLogin) {
      openConnection();
    }

    //페이지를 새로고침시 유지가 안 되기때문에 비회원은 따로 처리
    const handleRefresh = (e) => {
      if (e.keyCode == 116 && !isLogin) {
        tempTomatoSave(tomatoIdx);
      }
    };
    document.addEventListener("keydown", handleRefresh);

    //페이지를 나가거나 이동시 처리
    //로그인이 되어있으면 연결을 종료하고 로그인이 안되어있으면 임시토마토에 저장
    return isLogin
      ? () => {
          document.removeEventListener("keydown", handleRefresh);
          closeConnection();
        }
      : () => {
          document.removeEventListener("keydown", handleRefresh);
          tempTomatoSave(tomatoIdx);
        };
  }, []);

  //매번 렌더시
  useEffect(() => {
    //타이머가 작동상태이면
    if (isGoing === true) {
      //시간이 다 됐는지 확인하고
      if (timePassed >= leftTime) {
        finishNotify(target);
        stopTimer(target);

        //로그인이 되어있으면
        if (isLogin) {
          finishTimer(target);
          //로그인이 안 되어있으면
        } else {
          finishTempTimer(tomatoIdx);
        }
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

  //연결상태와 토마토 로드상태 따라 렌더
  useEffect(() => {
    //연결은 됐는데 로드가 안 됐으면
    //토마토를 로드함
    if (isLogin) {
      if (isConnected && !isLoaded) {
        loadTomato(tomatoIdx);
      }
      //로그인이 안됐으면서 로드가 안 됐으면 임시 토마토를 로드한다.
    } else {
      if (!isLoaded) {
        loadTempTomato(tomatoIdx);
      }
    }
  }, [isConnected, isLoaded]);

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
            src={
              target === "regularTime"
                ? "/images/homeMade.png"
                : "/images/rest.gif"
            }
          ></Avatar>
          <Typography
            className={matches ? classes.fontSize : classes.fontSizeMobile}
            variant={"body1"}
          >
            {`
            ${
              (leftTime - timePassed) / 60 > 10
                ? Math.floor((leftTime - timePassed) / 60)
                : `0${Math.floor((leftTime - timePassed) / 60)}`
            }:${
              (leftTime - timePassed) % 60 >= 10
                ? (leftTime - timePassed) % 60
                : `0${(leftTime - timePassed) % 60}`
            }
            `}
          </Typography>
        </Box>
      </Box>
      {isFinished ? (
        <Box className={classes.btnDetailBox} component={"div"}>
          <CheckCircleOutlineIcon
            className={matches ? classes.finishIcon : classes.finishIconMobile}
          ></CheckCircleOutlineIcon>
          <Typography
            className={matches ? classes.finishMsg : classes.finishMsgMobile}
            variant={"body1"}
          >
            재배완료
          </Typography>
        </Box>
      ) : (
        <Box className={classes.btnDetailBox} component={"div"}>
          <Box component={"div"}>
            {isGoing ? (
              <IconButton
                onClick={() => {
                  stopTimer(target);
                }}
              >
                <PauseCircleFilledIcon
                  className={
                    matches ? classes.iconSize : classes.iconSizeMobile
                  }
                ></PauseCircleFilledIcon>
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  startTimer(target);
                }}
              >
                <PlayCircleFilledWhiteIcon
                  className={
                    matches ? classes.iconSize : classes.iconSizeMobile
                  }
                ></PlayCircleFilledWhiteIcon>
              </IconButton>
            )}
          </Box>

          <Box component={"div"}>
            <IconButton
              onClick={() => {
                resetTimer(target);
              }}
            >
              <RestoreIcon
                className={matches ? classes.iconSize : classes.iconSizeMobile}
              ></RestoreIcon>
            </IconButton>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default Counter;
