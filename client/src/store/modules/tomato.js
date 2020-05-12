import { createReducer, createAction } from "@reduxjs/toolkit";

const TOMATO_REQUEST = createAction("TOMATO_REQUEST");
const TOMATO_TEMP_REQUEST = createAction("TOMATO_TEMP_REQUEST");
const TOMATO_SUCCEED = createAction("TOMATO_SUCCEED");
const TOMATO_FAILED = createAction("TOMATO_FAILED");

export const tomatoActions = {
  TOMATO_REQUEST,
  TOMATO_TEMP_REQUEST,
  TOMATO_SUCCEED,
  TOMATO_FAILED,
};

const initialState = {
  isTomatoSucceed: false,
  tomatos: [],
  date: null,
};

const reducer = createReducer(initialState, {
  [TOMATO_REQUEST]: (state, action) => {
    return { ...state, data: action.payload.data };
  },

  [TOMATO_TEMP_REQUEST]: (state, action) => {
    let tomatos = JSON.parse(sessionStorage.getItem("tomatos"));
    tomatos = tomatos ? tomatos : [];
    return { ...state, tomatos };
  },

  [TOMATO_SUCCEED]: (state, action) => {
    const tomatos = action.payload.tomatos;
    return {
      ...state,
      tomatos: tomatos,
      isTomatoSucceed: true,
    };
  },

  [TOMATO_FAILED]: (state, action) => {
    return { ...state, isTomatoSucceed: false };
  },
});

export default reducer;
