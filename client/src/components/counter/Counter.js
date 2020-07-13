import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RestoreIcon from '@material-ui/icons/Restore';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import errorDispacher from '../../error/errorDispacher';
import { WEBSOCKET_CONNECTED_STATE } from '../../lib/socketApi';
import bell from '../../sounds/bell.mp3';
import { toast } from 'react-toastify';
import { isMobile } from 'react-device-detect';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  Container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1600,
  },
  closeBtnBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '10px',
  },

  countDetailBox: {
    width: '100%',
    height: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tomatoImg: {
    maxWidth: '215px',
    maxHeight: '215px',
    width: '20%',
    height: 'auto',
    marginRight: '20px',
  },

  countDetail: {
    width: '100%',
    height: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnDetailBox: {
    width: '100%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnDetail: {
    fontSize: '10rem',
  },

  fontSize: {
    fontSize: '10rem',
  },

  fontSizeMobile: {
    fontSize: '5rem',
  },

  iconSize: {
    fontSize: '10rem',
  },

  iconSizeMobile: {
    fontSize: '5rem',
  },

  finishIcon: {
    fontSize: '10rem',
    color: 'seagreen',
  },

  finishIconMobile: {
    fontSize: '5rem',
    color: 'seagreen',
  },

  finishMsg: {
    fontSize: '6rem',
  },

  finishMsgMobile: {
    fontSize: '3rem',
  },

  notificationAllow: {
    display: 'none',
    marginRight: '5px',
  },

  notificationNotAllow: {
    marginRight: '5px',
  },
}));

const Counter = props => {
  const matches = useMediaQuery('(min-width:700px)');
  const {
    timePassed,
    leftTime,
    isGoing,
    target,
    connectState,
    isLoaded,
    isFinished,
    startTimer,
    stopTimer,
    resetTimer,
    finishTimer,
    addTime,
    loadTomato,
    openConnection,
    closeConnection,
    reConnect,
    reload,
    unexpectedClose,
    timeoutClose,
    loadTempTomato,
    saveTempTomato,
    finishTempTimer,
    finishTimerOnReconnecting,
  } = props;
  const state = props.location.state ? props.location.state : { isLogin: false };
  const isLogin = state.isLogin;
  const tomatoIdx = state.tomatoIdx;

  //알림지원여부
  const [isNotificationSupport, setIsNotificationSupport] = useState(true);
  const [isNotificationAllow, setIsNotificationAllow] = useState(false);
  const [visibilityState, setVisibilityState] = useState(true);

  //재연결 인터벌 키
  const [reConnectIntevalKey, setReConnectIntevalKey] = useState(null);

  //자동연결종료키
  const [hiddenKey, setHiddenKey] = useState(null);

  const updateVisibility = () => {
    setVisibilityState(isVisibility());
  };

  //화면상태 반환
  const isVisibility = () => {
    console.log(document.visibilityState);
    if (document.visibilityState === 'hidden') {
      return false;
    }
    return true;
  };

  const onHidden = () => {
    let key = setTimeout(() => {
      timeoutNotification();
      stopTimer(target);
      timeoutClose();
    }, 280000);
    setHiddenKey(key);
  };

  const onVisible = () => {
    //연결이 끊어졌으면 재연결시도
    if (connectState === WEBSOCKET_CONNECTED_STATE.TIMEOUT_CLOSE) {
      console.log('재연결시도');
      openConnection();
      return;
    }
    //연결이 끊어지지 않았으면 이벤트 취소
    clearTimeout(hiddenKey);
  };

  const timeoutNotification = () => {
    if (isNotificationSupport) {
      showNotification('비활성화 후 5분이 경과하면 타이머가 정지됩니다.');
    } else {
      showToast('비활성화 후 5분이 경과하면 타이머가 정지됩니다.');
    }
  };

  //알림 허용 및 띄우기=====================================================================================================
  const showNotification = msg => {
    Notification.requestPermission(result => {
      if (result === 'granted') {
        setIsNotificationAllow(true);
        navigator.serviceWorker.ready.then(function (registration) {
          registration.showNotification('MOMATO', {
            body: msg,
            icon: '/images/homeMade.png',
            vibrate: [200],
          });
        });
      } else {
        alert('백그라운드 실행시 알림이 오지 않습니다.');
      }
    });
  };

  //최초의 알림 허용 판단 및 요청========================================================================================
  const notificationAllow = () => {
    //허용상태를 보고
    switch (Notification.permission) {
      //첫 요청일 때
      case 'default':
        showNotification('알림이 허용되었습니다.');
        break;

      //이미 허용일때
      case 'granted':
        setIsNotificationAllow(true);
        break;

      //거절일 떄
      case 'denied':
        setIsNotificationAllow(false);
        break;

      default:
        break;
    }
  };

  //완료시 알람=====================================================================================
  const sendFinish = target => {
    let msg =
      target === 'regularTime'
        ? '집중시간이 끝났습니다! 휴식 시간을 가져보세요.'
        : '휴식시간이 끝났습니다! 새로운 집중 시간을 가져보세요.';

    if (isNotificationSupport && Notification.permission === 'granted') {
      showNotification(msg);
    } else {
      showToast(msg);
    }
  };

  //메세지 반환 함수==============================================================================================================
  const notificationMsg = () => {
    return !isNotificationSupport
      ? '브라우저가 알림을 지원하지 않습니다.'
      : isNotificationAllow
      ? ''
      : '알림 허용시 백그라운드에서도 알림을 받을 수 있습니다.';
  };

  //종료토스트==============================================================================================================
  const showToast = msg => {
    toast.info(msg, {
      position: toast.POSITION.TOP_CENTER,
    });
    new Audio(bell).play();
  };

  //시간 계산 함수==============================================================================================================
  const calTime = () => {
    let minute = (leftTime - timePassed) / 60;
    let second = (leftTime - timePassed) % 60;
    minute = minute < 0 ? 0 : minute;
    second = second < 0 ? 0 : second;
    return `
    ${minute >= 10 ? Math.floor(minute) : `0${Math.floor(minute)}`}:${second >= 10 ? second : `0${second}`}
    `;
  };

  //버튼클릭시 연결상태확인 =======================================================================================
  const beforeBtnClick = fn => {
    //로그인이 안되어있거나 로그인이 되어있으면 연결이 되어있어야 실행
    if (!isLogin || connectState === WEBSOCKET_CONNECTED_STATE.CONNECTED) {
      fn();
    } else {
      errorDispacher({
        message: 'Socket Connection Error',
      });
    }
  };

  //최초마운트시=========================================================================================================================
  useEffect(() => {
    if (!tomatoIdx) {
      props.history.replace('/');
      return;
    }

    let whenComponentUnmount;

    //로그인이 되어있으면 소켓을 연다
    if (isLogin) {
      document.addEventListener('freeze', event => {
        console.log('얼음');
      });

      document.addEventListener('resume', event => {
        console.log('땡');
      });
      openConnection();
      document.addEventListener('visibilitychange', updateVisibility);

      whenComponentUnmount = () => {
        document.removeEventListener('visibilitychange', updateVisibility);
        closeConnection();
      };
    } else {
      //비로그인시 새로고침 이벤트 추기
      const handleRefresh = e => {
        if (e.keyCode === 116 && !isLogin) {
          saveTempTomato(tomatoIdx);
        }
      };
      document.addEventListener('keydown', handleRefresh);

      whenComponentUnmount = () => {
        document.removeEventListener('keydown', handleRefresh);
        saveTempTomato(tomatoIdx);
      };
    }

    //알림을 지원하는 브라우저가 아니면 알림지원을 false로 놓는다.
    if (!('Notification' in window)) {
      setIsNotificationSupport(false);
    } else {
      //아니면 알림 허용 판단 및 요청을 한다
      notificationAllow();
    }

    //페이지를 나가거나 이동시 처리
    //로그인이 되어있으면 연결을 종료하고 로그인이 안되어있으면 임시토마토에 저장
    return () => {
      whenComponentUnmount();
    };
  }, []);

  //타이머기능=========================================================================================================================
  useEffect(() => {
    //타이머가 작동상태가 아니면 리턴
    if (!isGoing) {
      return;
    }

    //시간이 남았으면 리턴
    if (timePassed < leftTime) {
      //1초마다 시간을 더하는 액션을 보냄
      const key = setTimeout(() => {
        addTime();
      }, 1000);

      return () => {
        clearTimeout(key);
      };
    }

    //완료 알림
    sendFinish(target);

    //로그인이 안되어있으면
    if (!isLogin) {
      finishTempTimer(tomatoIdx);
      return;
    }

    //로그인이 되어있으면서 연결상태면 정상처리
    if (connectState === WEBSOCKET_CONNECTED_STATE.CONNECTED) {
      finishTimer(target);
    } else {
      //로그인이 되어있으면서 연결이 안되어있을 때 처리
      console.log('재연결시도');
      finishTimerOnReconnecting();
    }
  }, [isGoing, timePassed]);

  //토마토로드기능=========================================================================================================================
  useEffect(() => {
    //토마토를 로드가 됐거나 정상접근이 아니면 생략
    if (isLoaded || !tomatoIdx) {
      return;
    }

    //로그인이 안됐으면서 로드가 안 됐으면 임시 토마토를 로드한다.
    if (!isLogin) {
      loadTempTomato(tomatoIdx);
      return;
    }

    //로그인과 연결을 만족할 떄 처리
    if (connectState === WEBSOCKET_CONNECTED_STATE.CONNECTED) {
      loadTomato(tomatoIdx);
    }
  }, [connectState, isLoaded]);

  //연결상태관리=========================================================================================================
  useEffect(() => {
    //비로그인상태시 리턴
    if (!isLogin) {
      return;
    }
    //재연결시도중일때
    if (connectState === WEBSOCKET_CONNECTED_STATE.RECONNECTING) {
      function getTimeStamp() {
        var d = new Date();
        var s =
          leadingZeros(d.getFullYear(), 4) +
          '-' +
          leadingZeros(d.getMonth() + 1, 2) +
          '-' +
          leadingZeros(d.getDate(), 2) +
          ' ' +
          leadingZeros(d.getHours(), 2) +
          ':' +
          leadingZeros(d.getMinutes(), 2) +
          ':' +
          leadingZeros(d.getSeconds(), 2);

        return s;
      }

      function leadingZeros(n, digits) {
        var zero = '';
        n = n.toString();

        if (n.length < digits) {
          for (let i = 0; i < digits - n.length; i++) zero += '0';
        }
        return zero + n;
      }

      let cnt = 0;

      console.log('연결시도', getTimeStamp());

      //재연결 시도
      let key = setInterval(() => {
        //5회 시도시 연결 오류로 간주
        if (cnt++ === 5) {
          clearInterval(key);
          errorDispacher({
            message: 'Socket Connection Error',
          });
          unexpectedClose();
          return;
        }
        reConnect();
      }, 4000);

      //키값 보관
      setReConnectIntevalKey(key);

      //언마운트시 인터벌 제거
      return () => {
        clearInterval(key);
      };
    }

    //재연결이 성공했을 때(연결성공으로 바뀌고 load가 true상태이면 재연결 성공으로 간주)
    if (connectState === WEBSOCKET_CONNECTED_STATE.CONNECTED && isLoaded) {
      clearInterval(reConnectIntevalKey);
      let reloadData = {
        leftTime: leftTime - timePassed,
        target,
        isGoing,
        isFinished,
        tomatoIdx,
      };
      reload(reloadData);
    }
  }, [connectState]);

  useEffect(() => {
    //알림을 지원하면서 모바일이면 안드로이드 기기를 뜻함
    if (!(isNotificationSupport && isMobile)) {
      return;
    }

    if (isVisibility()) {
      onVisible();
    } else {
      onHidden();
    }
  }, [visibilityState]);

  //뒤로가기
  const goBack = () => {
    props.history.goBack();
  };

  const classes = useStyles();
  return (
    <Paper className={classes.Container}>
      <Box className={classes.closeBtnBox} component={'div'}>
        {isNotificationAllow && isNotificationSupport ? (
          ''
        ) : (
          <Button className={classes.notificationNotAllow} variant='contained' color='primary'>
            {notificationMsg()}
          </Button>
        )}
        <Button variant='contained' color='secondary' onClick={goBack}>
          나가기
        </Button>
      </Box>

      <Box className={classes.countDetailBox} component={'div'}>
        <Box className={classes.countDetail} component={'div'}>
          <Avatar
            className={classes.tomatoImg}
            src={target === 'regularTime' ? '/images/homeMade.png' : '/images/rest.gif'}
          ></Avatar>
          <Typography className={matches ? classes.fontSize : classes.fontSizeMobile} variant={'body1'}>
            {calTime()}
          </Typography>
        </Box>
      </Box>
      {isFinished ? (
        <Box className={classes.btnDetailBox} component={'div'}>
          <CheckCircleOutlineIcon
            className={matches ? classes.finishIcon : classes.finishIconMobile}
          ></CheckCircleOutlineIcon>
          <Typography className={matches ? classes.finishMsg : classes.finishMsgMobile} variant={'body1'}>
            재배완료
          </Typography>
        </Box>
      ) : (
        <Box className={classes.btnDetailBox} component={'div'}>
          <Box component={'div'}>
            {isGoing ? (
              <IconButton
                onClick={() => {
                  beforeBtnClick(() => stopTimer(target));
                }}
              >
                <PauseCircleFilledIcon
                  className={matches ? classes.iconSize : classes.iconSizeMobile}
                ></PauseCircleFilledIcon>
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  beforeBtnClick(() => startTimer(target));
                }}
              >
                <PlayCircleFilledWhiteIcon
                  className={matches ? classes.iconSize : classes.iconSizeMobile}
                ></PlayCircleFilledWhiteIcon>
              </IconButton>
            )}
          </Box>

          <Box component={'div'}>
            <IconButton onClick={() => beforeBtnClick(() => resetTimer(target))}>
              <RestoreIcon className={matches ? classes.iconSize : classes.iconSizeMobile}></RestoreIcon>
            </IconButton>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default Counter;
