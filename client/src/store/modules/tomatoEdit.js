import { createReducer, createAction } from "@reduxjs/toolkit";

const TOMATO_EDIT_REQUEST = createAction("TOMATO_EDIT_REQUEST");
const TOMATO_EDIT_SUCCEED = createAction("TOMATO_EDIT_SUCCEED");
const TOMATO_EDIT_FAILED = createAction("TOMATO_EDIT_FAILED");
const TOMATO_EDIT_CLEAR = createAction("TOMATO_EDIT_CLEAR");

export const tomatoEditActions = {
  TOMATO_EDIT_REQUEST,
  TOMATO_EDIT_SUCCEED,
  TOMATO_EDIT_FAILED,
  TOMATO_EDIT_CLEAR,
};

const initialState = {
  isTomatoEditSucceed: false,
  data: null,
};

const reducer = createReducer(initialState, {
  [TOMATO_EDIT_REQUEST]: (state, action) => {
    return { ...state };
  },

  [TOMATO_EDIT_SUCCEED]: (state, action) => {
    return { ...state, isTomatoEditSucceed: true };
  },

  [TOMATO_EDIT_FAILED]: (state, action) => {
    return { ...state, isTomatoEditSucceed: false };
  },

  [TOMATO_EDIT_CLEAR]: (state, action) => {
    return { ...state, isTomatoEditSucceed: false };
  },
});

export default reducer;
