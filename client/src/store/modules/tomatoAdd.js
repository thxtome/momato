import { createReducer, createAction } from "@reduxjs/toolkit";

const TOMATO_ADD_REQUEST = createAction("TOMATO_ADD_REQUEST");
const TOMATO_ADD_SUCCEED = createAction("TOMATO_ADD_SUCCEED");
const TOMATO_ADD_FAILED = createAction("TOMATO_ADD_FAILED");
const TOMATO_ADD_CLEAR = createAction("TOMATO_ADD_CLEAR");

export const tomatoAddActions = {
  TOMATO_ADD_REQUEST,
  TOMATO_ADD_SUCCEED,
  TOMATO_ADD_FAILED,
  TOMATO_ADD_CLEAR,
};

const initialState = {
  isTomatoAddSucceed: false,
  data: null,
};

const reducer = createReducer(initialState, {
  [TOMATO_ADD_REQUEST]: (state, action) => {
    return { ...state };
  },

  [TOMATO_ADD_SUCCEED]: (state, action) => {
    console.log(action);
    return { ...state, isTomatoAddSucceed: true };
  },

  [TOMATO_ADD_FAILED]: (state, action) => {
    console.log(action);
    return { ...state, isTomatoAddSucceed: false };
  },

  [TOMATO_ADD_CLEAR]: (state, action) => {
    return { ...state, isTomatoAddSucceed: false };
  },
});

export default reducer;
