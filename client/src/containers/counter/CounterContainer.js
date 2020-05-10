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
  return {
    addTime: () => {
      dispatch(counterActions.ADD_TIME());
    },

    loadTomato: (tomatoIdx) => {
      socketApi.request({ action: "load", tomatoIdx }, () => {
        dispatch(counterActions.TOMATO_LOAD_FAILD());
      });
    },

    startTimer: (target) => {
      socketApi.request({ target, action: "start" }, () => {
        dispatch(counterActions.TOMATO_START_FAILD());
      });
    },

    stopTimer: (target) => {
      socketApi.request({ target, action: "stop" }, () => {
        dispatch(counterActions.TOMATO_STOP_FAILD());
      });
    },

    resetTimer: (target) => {
      socketApi.request({ target, action: "reset" }, () => {
        dispatch(counterActions.TOMATO_STOP_FAILD());
      });
    },

    finishTimer: (target) => {
      socketApi.request({ target, action: "finish" }, () => {
        dispatch(counterActions.TOMATO_FINISH_FAILD());
      });
    },

    //소켓을 열고 구독신청함
    openConnection: () => {
      socketApi.openSocket(dispatch);
    },

    //소켓을 닫음
    closeConnection: () => {
      socketApi.closeSocket();
      dispatch(counterActions.CLOSE_SOCKET());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
