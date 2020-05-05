import { createReducer, createAction } from "@reduxjs/toolkit";

const TOMATO_DELETE_REQUEST = createAction("TOMATO_DELETE_REQUEST");
const TOMATO_DELETE_SUCCEED = createAction("TOMATO_DELETE_SUCCEED");
const TOMATO_DELETE_FAILED = createAction("TOMATO_DELETE_FAILED");
const TOMATO_DELETE_CLEAR = createAction("TOMATO_DELETE_CLEAR");

export const tomatoDeleteActions = {
  TOMATO_DELETE_REQUEST,
  TOMATO_DELETE_SUCCEED,
  TOMATO_DELETE_FAILED,
  TOMATO_DELETE_CLEAR,
};

const initialState = {
  isTomatoDeleteSucceed: false,
  data: null,
};

const reducer = createReducer(initialState, {
  [TOMATO_DELETE_REQUEST]: (state, action) => {
    return { ...state };
  },

  [TOMATO_DELETE_SUCCEED]: (state, action) => {
    return { ...state, isTomatoDeleteSucceed: true };
  },

  [TOMATO_DELETE_FAILED]: (state, action) => {
    return { ...state, isTomatoDeleteSucceed: false };
  },

  [TOMATO_DELETE_CLEAR]: (state, action) => {
    return { ...state, isTomatoDeleteSucceed: false };
  },
});

export default reducer;
