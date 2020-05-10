import { createAction, createReducer } from "@reduxjs/toolkit";

const TOMATO_LOAD_FAILD = createAction("TOMATO_LOAD_FAILD");
const TOMATO_LOAD_SUCCED = createAction("TOMATO_LOAD_SUCCED");
const TOMATO_START_SUCCED = createAction("TOMATO_START_SUCCED");
const TOMATO_STOP_SUCCED = createAction("TOMATO_STOP_SUCCED");
const TOMATO_RESET_SUCCED = createAction("TOMATO_RESET_SUCCED");
const TOMATO_BREAK_TIME_FINISH_SUCCED = createAction(
  "TOMATO_BREAK_TIME_FINISH_SUCCED"
);
const TOMATO_REGULAR_TIME_FINISH_SUCCED = createAction(
  "TOMATO_REGULAR_TIME_FINISH_SUCCED"
);
const TOMATO_FINISH_FAILD = createAction("TOMATO_FINISH_FAILD");
const OPEN_SOCKET_SUCCEED = createAction("OPEN_SOCKET_SUCCEED");
const CLOSE_SOCKET = createAction("CLOSE_SOCKET");
const ADD_TIME = createAction("ADD_TIME");

export const counterActions = {
  TOMATO_LOAD_SUCCED,
  TOMATO_LOAD_FAILD,
  TOMATO_START_SUCCED,
  TOMATO_STOP_SUCCED,
  TOMATO_RESET_SUCCED,
  TOMATO_BREAK_TIME_FINISH_SUCCED,
  TOMATO_REGULAR_TIME_FINISH_SUCCED,
  TOMATO_FINISH_FAILD,
  OPEN_SOCKET_SUCCEED,
  CLOSE_SOCKET,
  ADD_TIME,
};

const initialState = {
  fullTime: 0,
  leftTime: 0,
  timePassed: 0,
  target: null,
  isGoing: false,
  isLodaSucced: false,
  isConnected: false,
  isLoaded: false,
  isFinished: false,
};

const reducer = createReducer(initialState, {
  [TOMATO_LOAD_SUCCED]: (state, action) => {
    console.log(action);
    return {
      ...state,
      fullTime: action.payload.fullTime,
      isLoaded: true,
      leftTime: action.payload.leftTime,
      target: action.payload.target,
    };
  },

  [TOMATO_LOAD_FAILD]: (state, action) => {
    console.log(action);
    return { ...state };
  },

  [TOMATO_START_SUCCED]: (state, action) => {
    console.log(action);
    return { ...state, isGoing: true };
  },

  [TOMATO_STOP_SUCCED]: (state, action) => {
    console.log(action);
    return { ...state, isGoing: false };
  },

  [TOMATO_RESET_SUCCED]: (state, action) => {
    console.log(action);
    return {
      ...state,
      timePassed: 0,
      isGoing: false,
      leftTime: state.fullTime,
    };
  },

  [TOMATO_REGULAR_TIME_FINISH_SUCCED]: (state, action) => {
    console.log(action);
    return {
      ...state,
      fullTime: action.payload.breakTime,
      leftTime: action.payload.breakTime,
      timePassed: 0,
      target: "breakTime",
    };
  },

  [TOMATO_BREAK_TIME_FINISH_SUCCED]: (state, action) => {
    console.log(action);
    return { ...state, isFinished: true };
  },

  [ADD_TIME]: (state, action) => {
    console.log(action);
    return { ...state, timePassed: state.timePassed + 1 };
  },

  [OPEN_SOCKET_SUCCEED]: (state, action) => {
    console.log(action);
    return { ...state, isConnected: true };
  },

  [CLOSE_SOCKET]: (state, action) => {
    console.log(action);
    return {
      fullTime: 0,
      leftTime: 0,
      timePassed: 0,
      isGoing: false,
      isLodaSucced: false,
      isConnected: false,
      isLoaded: false,
    };
  },
});

export default reducer;
