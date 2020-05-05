import { createReducer, createAction } from "@reduxjs/toolkit";

const TOMATO_REQUEST = createAction("TOMATO_REQUEST");
const TOMATO_SUCCEED = createAction("TOMATO_SUCCEED");
const TOMATO_FAILED = createAction("TOMATO_FAILED");

export const tomatoActions = { TOMATO_REQUEST, TOMATO_SUCCEED, TOMATO_FAILED };

const initialState = {
  isTomatoSucceed: false,
  tomatos: [],
  date: null,
};

const reducer = createReducer(initialState, {
  [TOMATO_REQUEST]: (state, action) => {
    return { ...state, date: action.payload.date };
  },

  [TOMATO_SUCCEED]: (state, action) => {
    const tomatos = action.payload.tomatos;
    return {
      ...state,
      tomatos: tomatos,
    };
  },

  [TOMATO_FAILED]: (state, action) => {
    return { ...state, isTomatoSucceed: false };
  },
});

export default reducer;
