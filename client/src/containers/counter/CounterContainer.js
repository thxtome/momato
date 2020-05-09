import Counter from "../../components/counter/Counter";
import { connect } from "react-redux";
import { counterActions } from "../../store/modules/counter";
import SockJsClient from "sockjs-client";

let countSocket = undefined;

//소켓을 구독함
const socketSubscribe = (dispatch) => {
  countSocket.onmessage = (e) => {
    console.log(e);
    const response = JSON.parse(e.data);

    switch (response.action) {
      case "connection":
        dispatch(counterActions.OPEN_SOCKET_SUCCEED());
        break;

      case "load":
        dispatch(
          counterActions.TOMATO_LOAD_SUCCED({
            fullTime: response.data.tomatoLeftRegular,
          })
        );
        break;

      case "start":
        dispatch(counterActions.TOMATO_START_SUCCED());
        break;

      case "stop":
        dispatch(counterActions.TOMATO_STOP_SUCCED());
        break;

      case "reset":
        dispatch(counterActions.TOMATO_RESET_SUCCED());
        break;

      default:
        break;
    }
  };
};

const mapStateToProps = (state) => {
  const {
    fullTime,
    isGoing,
    timePassed,
    isConnected,
    isLoaded,
  } = state.counterReducer;
  return { fullTime, isGoing, timePassed, isConnected, isLoaded };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTime: () => {
      dispatch(counterActions.ADD_TIME());
    },

    loadTomato: (tomatoIdx) => {
      if (countSocket) {
        countSocket.send(JSON.stringify({ action: "load", tomatoIdx }));
      } else {
        dispatch(counterActions.TOMATO_LOAD_FAILD());
      }
    },

    startTimer: () => {
      if (countSocket) {
        countSocket.send(
          JSON.stringify({ target: "regularTime", action: "start" })
        );
      } else {
        dispatch(counterActions.TOMATO_START_FAILD());
      }
    },

    stopTimer: () => {
      if (countSocket) {
        countSocket.send(
          JSON.stringify({
            action: "stop",
            target: "regularTime",
          })
        );
      } else {
        dispatch(counterActions.TOMATO_STOP_FAILD());
      }
    },

    resetTimer: () => {
      if (countSocket) {
        countSocket.send(
          JSON.stringify({ target: "regularTime", action: "reset" })
        );
      } else {
        dispatch(counterActions.TOMATO_RESET_FAILD());
      }
    },

    //소켓을 열고 구독신청함
    openConnection: () => {
      console.log(11);
      countSocket = new SockJsClient("http://localhost:8080/tomatoTimer");
      socketSubscribe(dispatch, ownProps);
    },

    //소켓을 닫음
    closeConnection: () => {
      if (countSocket) {
        countSocket.close();
      }
      dispatch(counterActions.CLOSE_SOCKET());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
