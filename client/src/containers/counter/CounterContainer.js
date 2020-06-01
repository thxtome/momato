import Counter from "../../components/counter/Counter";
import { connect } from "react-redux";
import { counterActions } from "../../store/modules/counter";
import socketApi from "../../lib/socketApi";

const mapStateToProps = (state) => {
  const {
    fullTime,
    leftTime,
    isGoing,
    timePassed,
    target,
    isConnected,
    isLoaded,
    isFinished,
  } = state.counterReducer;
  return {
    fullTime,
    leftTime,
    isGoing,
    timePassed,
    target,
    isConnected,
    isLoaded,
    isFinished,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const isLogin = ownProps.location.state.isLogin;
  return {
    addTime: () => {
      dispatch(counterActions.ADD_TIME());
    },

    loadTempTomato: (tomatoIdx) => {
      dispatch(counterActions.TEMP_TOMATO_LOAD({ tomatoIdx }));
    },

    loadTomato: (tomatoIdx) => {
      console.log("load");
      socketApi.request({ action: "load", tomatoIdx }, () => {
        dispatch(counterActions.TOMATO_LOAD_FAILD());
      });
    },

    startTimer: isLogin
      ? (target) => {
          console.log("start");
          socketApi.request({ target, action: "start" }, () => {
            dispatch(counterActions.TOMATO_START_FAILD());
          });
        }
      : () => {
          dispatch(counterActions.TOMATO_START_SUCCED());
        },

    stopTimer: isLogin
      ? (target) => {
          console.log("stop");
          socketApi.request({ target, action: "stop" }, () => {
            dispatch(counterActions.TOMATO_STOP_FAILD());
          });
        }
      : () => {
          dispatch(counterActions.TOMATO_STOP_SUCCED());
        },

    resetTimer: isLogin
      ? (target) => {
          console.log("reset");
          socketApi.request({ target, action: "reset" }, () => {
            dispatch(counterActions.TOMATO_RESET_FAILD());
          });
        }
      : () => {
          dispatch(counterActions.TOMATO_RESET_SUCCED());
        },

    finishTimer: (target) => {
      socketApi.request({ target, action: "finish" }, () => {
        dispatch(counterActions.TOMATO_FINISH_FAILD());
      });
    },

    finishTempTimer: (tomatoIdx) => {
      dispatch(counterActions.TEMP_TOMATO_FINISH({ tomatoIdx }));
    },

    //소켓을 열고 구독신청함
    openConnection: isLogin
      ? () => {
          socketApi.openSocket(dispatch);
        }
      : () => {},

    //소켓을 닫음
    closeConnection: isLogin
      ? () => {
          socketApi.closeSocket();
          dispatch(counterActions.CLOSE_SOCKET());
        }
      : () => {},

    //임시토마토 저장
    tempTomatoSave: (tomatoIdx) => {
      dispatch(counterActions.TEMP_TOMATO_SAVE({ tomatoIdx }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
