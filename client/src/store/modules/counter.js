import { createAction, createReducer } from "@reduxjs/toolkit";

const TOMATO_LOAD_FAILD = createAction("TOMATO_LOAD_FAILD");
const TOMATO_LOAD_SUCCED = createAction("TOMATO_LOAD_SUCCED");
const TOMATO_START_SUCCED = createAction("TOMATO_START_SUCCED");
const TOMATO_STOP_SUCCED = createAction("TOMATO_STOP_SUCCED");
const TOMATO_RESET_SUCCED = createAction("TOMATO_RESET_SUCCED");
const ADD_TIME = createAction("ADD_TIME");
const OPEN_SOCKET_SUCCEED = createAction("OPEN_SOCKET_SUCCEED");
const CLOSE_SOCKET = createAction("CLOSE_SOCKET");

export const counterActions = {
  TOMATO_LOAD_SUCCED,
  TOMATO_LOAD_FAILD,
  TOMATO_START_SUCCED,
  TOMATO_STOP_SUCCED,
  TOMATO_RESET_SUCCED,
  ADD_TIME,
  OPEN_SOCKET_SUCCEED,
  CLOSE_SOCKET,
};

const initialState = {
  fullTime: 0,
  timePassed: 0,
  isGoing: false,
  isLodaSucced: false,
  isConnected: false,
  isLoaded: false,
};

const reducer = createReducer(initialState, {
  [TOMATO_LOAD_SUCCED]: (state, action) => {
    console.log(action);
    return {
      ...state,
      isLoaded: true,
      fullTime: action.payload.fullTime,
    };
  },

  [TOMATO_LOAD_FAILD]: (state, action) => {
    return { ...state };
  },

  [TOMATO_START_SUCCED]: (state, action) => {
    return { ...state, isGoing: true };
  },

  [TOMATO_STOP_SUCCED]: (state, action) => {
    return { ...state, isGoing: false };
  },

  [TOMATO_RESET_SUCCED]: (state, action) => {
    return { ...state, timePassed: 0, isGoing: false };
  },

  [ADD_TIME]: (state, action) => {
    return { ...state, timePassed: state.timePassed + 1 };
  },

  [OPEN_SOCKET_SUCCEED]: (state, action) => {
    return { ...state, isConnected: true };
  },

  [CLOSE_SOCKET]: (state, action) => {
    return {
      ...state,
      fullTime: 0,
      timePassed: 0,
      isGoing: false,
      isLodaSucced: false,
      isConnected: false,
      isLoaded: false,
    };
  },
});

export default reducer;
