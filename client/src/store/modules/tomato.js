import { createReducer, createAction } from "@reduxjs/toolkit";

const TOMATO_REQUEST = createAction("TOMATO_REQUEST");
const TOMATO_SUCCEED = createAction("TOMATO_SUCCEED");
const TOMATO_FAILED = createAction("TOMATO_FAILED");

export const tomatoActions = { TOMATO_REQUEST, TOMATO_SUCCEED, TOMATO_FAILED };

const initialState = {
    isTomatoSucceed: false,
    data: null,
};

const reducer = createReducer(initialState, {
    [TOMATO_REQUEST]: (state, action) => {
      return { ...state };
    },
    [TOMATO_SUCCEED]: (state, action) => {
      const tomatos = action.payload.response.data.data.result;
      return { 
        ...state,
        tomatos,
      };
    },
    [TOMATO_FAILED]: (state, action) => {
      console.log(action);
      return { ...state, isTomatoSucceed: false };
    },
  });
  
  export default reducer;
  