import { createAction, createReducer } from '@reduxjs/toolkit';
import { WEBSOCKET_CONNECTED_STATE } from '../../lib/socketApi';

//로그인시 소켓에 요청하거나 응답받는 액션
const TOMATO_LOAD_FAILD = createAction('TOMATO_LOAD_FAILD');
const TOMATO_LOAD_SUCCED = createAction('TOMATO_LOAD_SUCCED');
const TOMATO_START_SUCCED = createAction('TOMATO_START_SUCCED');
const TOMATO_STOP_SUCCED = createAction('TOMATO_STOP_SUCCED');
const TOMATO_STOP_ON_RECONNECTING = createAction('TOMATO_STOP_ON_RECONNECTING');
const TOMATO_RESET_SUCCED = createAction('TOMATO_RESET_SUCCED');
const TOMATO_BREAK_TIME_FINISH_SUCCED = createAction('TOMATO_BREAK_TIME_FINISH_SUCCED');
const TOMATO_REGULAR_TIME_FINISH_SUCCED = createAction('TOMATO_REGULAR_TIME_FINISH_SUCCED');
const TOMATO_FINISH_FAILD = createAction('TOMATO_FINISH_FAILD');
const OPEN_SOCKET_SUCCEED = createAction('OPEN_SOCKET_SUCCEED');
const UNEXPECTED_SOCKET_CLOSED = createAction('UNEXPECTED_SOCKET_CLOSED');
const SOCKET_RECONNECTING = createAction('SOCKET_RECONNECTING');
const CLOSE_SOCKET = createAction('CLOSE_SOCKET');
const ADD_TIME = createAction('ADD_TIME');

//비로그인시 액션
const TEMP_TOMATO_LOAD = createAction('TEMP_TOMATO_LOAD');
const TEMP_TOMATO_FINISH = createAction('TEMP_TOMATO_FINISH');
const SAVE_TEMP_TOMATO = createAction('SAVE_TEMP_TOMATO');

export const counterActions = {
  TOMATO_LOAD_SUCCED,
  TOMATO_LOAD_FAILD,
  TOMATO_START_SUCCED,
  TOMATO_STOP_SUCCED,
  TOMATO_STOP_ON_RECONNECTING,
  TOMATO_RESET_SUCCED,
  TOMATO_BREAK_TIME_FINISH_SUCCED,
  TOMATO_REGULAR_TIME_FINISH_SUCCED,
  TOMATO_FINISH_FAILD,
  OPEN_SOCKET_SUCCEED,
  SOCKET_RECONNECTING,
  UNEXPECTED_SOCKET_CLOSED,
  CLOSE_SOCKET,
  ADD_TIME,
  TEMP_TOMATO_LOAD,
  TEMP_TOMATO_FINISH,
  SAVE_TEMP_TOMATO,
};

const initialState = {
  fullTime: 0,
  leftTime: 0,
  timePassed: 0,
  target: 'regularTime',
  isGoing: false,
  isLodaSucced: false,
  connectState: WEBSOCKET_CONNECTED_STATE.CLOSE,
  isLoaded: false,
  isFinished: false,
  currentTime: null,
  isTimerLoading: false,
};

const reducer = createReducer(initialState, {
  [TOMATO_LOAD_SUCCED]: (state, action) => {
    return {
      ...state,
      fullTime: action.payload.fullTime,
      isLoaded: true,
      leftTime: action.payload.leftTime,
      target: action.payload.target,
    };
  },

  [TEMP_TOMATO_LOAD]: (state, action) => {
    const tomato = JSON.parse(sessionStorage.getItem('tomatos')).filter(tom => {
      return tom.tomatoIdx === action.payload.tomatoIdx;
    })[0];

    const target = tomato.tomatoCanStart ? 'regularTime' : 'breakTime';
    const fullTime = tomato.tomatoCanStart ? tomato.tomatoFullRegular : tomato.tomatoFullBreak;
    const leftTime = tomato.tomatoCanStart ? tomato.tomatoLeftRegular : tomato.tomatoLeftBreak;

    return {
      ...state,
      fullTime: fullTime,
      leftTime: leftTime,
      target: target,
      isLoaded: true,
    };
  },

  [TOMATO_LOAD_FAILD]: (state, action) => {
    return { ...state };
  },

  [TOMATO_START_SUCCED]: (state, action) => {
    return { ...state, isGoing: true, currentTime: new Date().getTime() };
  },

  [TOMATO_STOP_SUCCED]: (state, action) => {
    return { ...state, isGoing: false, startTime: null };
  },

  [TOMATO_STOP_ON_RECONNECTING]: state => {
    return { ...state, isGoing: false };
  },

  [TOMATO_RESET_SUCCED]: (state, action) => {
    return {
      ...state,
      timePassed: 0,
      isGoing: false,
      leftTime: state.fullTime,
    };
  },

  [TOMATO_REGULAR_TIME_FINISH_SUCCED]: (state, action) => {
    return {
      ...state,
      fullTime: action.payload.breakTime,
      leftTime: action.payload.breakTime,
      timePassed: 0,
      target: 'breakTime',
    };
  },

  [TOMATO_BREAK_TIME_FINISH_SUCCED]: (state, action) => {
    return {
      ...state,
      isFinished: true,
      leftTime: 0,
      timePassed: 0,
    };
  },

  [TEMP_TOMATO_FINISH]: (state, action) => {
    if (state.target === 'regularTime') {
      let breakTime;
      const tomatoIdx = action.payload.tomatoIdx;
      const tomatos = JSON.parse(sessionStorage.getItem('tomatos')).map(tomato => {
        if (tomato.tomatoIdx === tomatoIdx) {
          tomato.tomatoCanStart = 0;
          breakTime = tomato.tomatoFullBreak;
        }
        return tomato;
      });
      sessionStorage.setItem('tomatos', JSON.stringify(tomatos));
      return {
        ...state,
        fullTime: breakTime,
        leftTime: breakTime,
        timePassed: 0,
        target: 'breakTime',
      };
    } else {
      return { ...state, isFinished: true, timePassed: 0, leftTime: 0 };
    }
  },

  [ADD_TIME]: (state, action) => {
    const timePassed = Math.round(state.timePassed + (new Date().getTime() - state.currentTime) / 1000);
    return { ...state, currentTime: new Date().getTime(), timePassed };
  },

  [OPEN_SOCKET_SUCCEED]: (state, action) => {
    return {
      ...state,
      connectState: WEBSOCKET_CONNECTED_STATE.CONNECTED,
      isTimerLoading: false,
    };
  },

  [UNEXPECTED_SOCKET_CLOSED]: (state, action) => {
    return {
      ...state,
      isGoing: false,
      isFinished: false,
      connectState: WEBSOCKET_CONNECTED_STATE.UNEXPECTED_CLOSE,
      isTimerLoading: false,
    };
  },

  [SOCKET_RECONNECTING]: (state, action) => {
    return {
      ...state,
      connectState: WEBSOCKET_CONNECTED_STATE.RECONNECTING,
      isTimerLoading: true,
    };
  },

  [CLOSE_SOCKET]: (state, action) => {
    return {
      fullTime: 0,
      leftTime: 0,
      timePassed: 0,
      target: 'regularTime',
      isGoing: false,
      isLodaSucced: false,
      connectState: WEBSOCKET_CONNECTED_STATE.CLOSE,
      isLoaded: false,
      isFinished: false,
      currentTime: null,
    };
  },

  //인덱스를 가지고 토마토를 가져와서 타겟에 따라 남은 시간을 수정하고 다시 세션에 넣어준다.
  [SAVE_TEMP_TOMATO]: (state, action) => {
    const tomatoIdx = action.payload.tomatoIdx;
    const tomatos = JSON.parse(sessionStorage.getItem('tomatos')).map(tomato => {
      if (tomato.tomatoIdx === tomatoIdx) {
        if (state.target === 'regularTime') {
          tomato.tomatoLeftRegular = state.leftTime - state.timePassed;
        } else {
          tomato.tomatoLeftBreak = state.leftTime - state.timePassed;
        }
      }
      return tomato;
    });
    sessionStorage.setItem('tomatos', JSON.stringify(tomatos));
    return {
      ...state,
      fullTime: 0,
      leftTime: 0,
      timePassed: 0,
      target: null,
      isGoing: false,
      isLodaSucced: false,
      connectState: WEBSOCKET_CONNECTED_STATE.CLOSE,
      isLoaded: false,
      isFinished: false,
      currentTime: null,
    };
  },
});

export default reducer;
