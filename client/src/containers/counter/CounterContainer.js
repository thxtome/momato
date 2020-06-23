import Counter from '../../components/counter/Counter';
import { connect } from 'react-redux';
import { counterActions } from '../../store/modules/counter';
import socketApi from '../../lib/socketApi';

const mapStateToProps = state => {
  const { fullTime, leftTime, isGoing, timePassed, target, connectState, isLoaded, isFinished } = state.counterReducer;
  return {
    fullTime,
    leftTime,
    isGoing,
    timePassed,
    target,
    connectState,
    isLoaded,
    isFinished,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const state = ownProps.location.state ? ownProps.location.state : { isLogin: false };
  const isLogin = state.isLogin ? true : false;
  return {
    addTime: () => {
      dispatch(counterActions.ADD_TIME());
    },

    loadTempTomato: tomatoIdx => {
      dispatch(counterActions.TEMP_TOMATO_LOAD({ tomatoIdx }));
    },

    loadTomato: tomatoIdx => {
      socketApi.request({ action: 'load', tomatoIdx }, () => {
        dispatch(counterActions.TOMATO_LOAD_FAILD());
      });
    },

    startTimer: isLogin
      ? target => {
          console.log('start');
          socketApi.request({ target, action: 'start' }, () => {
            dispatch(counterActions.TOMATO_START_FAILD());
          });
        }
      : () => {
          dispatch(counterActions.TOMATO_START_SUCCED());
        },

    stopTimer: isLogin
      ? target => {
          socketApi.request({ target, action: 'stop' }, () => {
            dispatch(counterActions.TOMATO_STOP_FAILD());
          });
        }
      : () => {
          dispatch(counterActions.TOMATO_STOP_SUCCED());
        },

    resetTimer: isLogin
      ? target => {
          socketApi.request({ target, action: 'reset' }, () => {
            dispatch(counterActions.TOMATO_RESET_FAILD());
          });
        }
      : () => {
          dispatch(counterActions.TOMATO_RESET_SUCCED());
        },

    finishTimer: target => {
      dispatch(counterActions.TOMATO_STOP_SUCCED());
      socketApi.request({ target, action: 'finish' }, () => {
        dispatch(counterActions.TOMATO_FINISH_FAILD());
      });
    },

    finishTempTimer: tomatoIdx => {
      dispatch(counterActions.TOMATO_STOP_SUCCED());
      dispatch(counterActions.TEMP_TOMATO_FINISH({ tomatoIdx }));
    },

    finishTimerOnReconnecting: () => {
      dispatch(counterActions.TOMATO_STOP_ON_RECONNECTING());
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

    reConnect: isLogin
      ? () => {
          socketApi.openSocket(dispatch);
        }
      : () => {},

    reload: reloadData => {
      socketApi.request({ action: 'reload', reloadData });
    },

    unexpectedClose: () => {
      dispatch(counterActions.UNEXPECTED_SOCKET_CLOSED());
    },

    //임시토마토 저장
    tempTomatoSave: tomatoIdx => {
      dispatch(counterActions.TEMP_TOMATO_SAVE({ tomatoIdx }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
