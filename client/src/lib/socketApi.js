import { counterActions } from '../store/modules/counter';
import SockJsClient from 'sockjs-client';

export const WEBSOCKET_CONNECTED_STATE = {
  CONNECTED: 1,
  RECONNECTING: 2,
  UNEXPECTED_CLOSE: 3,
  CLOSE: 4,
  TIMEOUT_CLOSE: 5,
};

const url = process.env.NODE_ENV === 'production' ? 'https://www.momato.net:8000' : 'http://localhost:8080';

let countSocket = undefined;

const socketSubscribe = dispatch => {
  countSocket.onmessage = e => {
    const response = JSON.parse(e.data);

    switch (response.data.action) {
      case 'connection':
        dispatch(counterActions.OPEN_SOCKET_SUCCEED());
        break;

      case 'load':
        let param = {
          target: 'regularTime',
          fullTime: response.data.tomato.tomatoFullRegular,
          leftTime: response.data.tomato.tomatoLeftRegular,
        };

        if (!response.data.tomato.tomatoCanStart) {
          param = {
            target: 'breakTime',
            fullTime: response.data.tomato.tomatoFullBreak,
            leftTime: response.data.tomato.tomatoLeftBreak,
          };
        }

        dispatch(counterActions.TOMATO_LOAD_SUCCED(param));
        break;

      case 'reload':
        const isFinished = response.data.reloadData.isFinished;
        const reloadTarget = response.data.reloadData.target;
        if (isFinished) {
          request({ target: reloadTarget, action: 'finish' }, () => {
            dispatch(counterActions.TOMATO_FINISH_FAILD());
          });
        }
        break;

      case 'start':
        dispatch(counterActions.TOMATO_START_SUCCED());
        break;

      case 'stop':
        dispatch(counterActions.TOMATO_STOP_SUCCED());
        break;

      case 'reset':
        dispatch(counterActions.TOMATO_RESET_SUCCED());
        break;

      case 'finish':
        if (response.data.target === 'regularTime') {
          dispatch(
            counterActions.TOMATO_REGULAR_TIME_FINISH_SUCCED({
              breakTime: response.data.tomato.tomatoFullBreak,
            }),
          );
        } else {
          dispatch(counterActions.TOMATO_BREAK_TIME_FINISH_SUCCED());
        }
        break;

      case 'ping':
        countSocket.send(JSON.stringify({ action: 'pong' }));
        break;

      default:
        break;
    }
    //소켓클로즈시 정상 종료가 아니면 재연결처리
    countSocket.onclose = e => {
      if (e.code === 1006 || e.code === 1001) {
        dispatch(counterActions.SOCKET_RECONNECTING());
      }
    };
  };
};

const openSocket = dispatch => {
  countSocket = new SockJsClient(`${url}/tomatoTimer`);
  socketSubscribe(dispatch);
};

const closeSocket = () => {
  countSocket.close();
  countSocket = null;
};

const request = (params, failed) => {
  try {
    if (countSocket) {
      countSocket.send(JSON.stringify(params));
    } else {
      failed();
    }
  } catch (error) {}
};

export default { openSocket, closeSocket, request };
