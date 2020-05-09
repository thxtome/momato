import { createReducer, createAction } from "@reduxjs/toolkit";

const TOMATO_REQUEST = createAction("TOMATO_REQUEST");
const TOMATO_TEMP_REQUEST = createAction("TOMATO_TEMP_REQUEST");
const TOMATO_SUCCEED = createAction("TOMATO_SUCCEED");
const TOMATO_FAILED = createAction("TOMATO_FAILED");

export const tomatoActions = { TOMATO_REQUEST, TOMATO_TEMP_REQUEST, TOMATO_SUCCEED, TOMATO_FAILED };

const initialState = {
  isTomatoSucceed: false,
  tomatos: [],
  date: null,
};

const tempTomatos = () => {
  let tempTomatos = [];
  let tempTomato = {};
  let key = 0;
  let index;
  while(tempTomatos.length !== sessionStorage.length){
    index = sessionStorage.getItem(String(key));
    if (index === null) {
      key++;
      continue;
    }
    tempTomato = JSON.parse(sessionStorage.getItem(String(key)));
    tempTomatos.push(tempTomato);
    key++;
  }
    return tempTomatos;
};

const reducer = createReducer(initialState, {
  [TOMATO_REQUEST]: (state, action) => {
    console.log(action.payload.data);
    return { ...state, data: action.payload.data };
  },

  [TOMATO_TEMP_REQUEST]: (state, action) => {
    const tomatos = tempTomatos();
    return {...state, tomatos: tomatos,};
  },

  [TOMATO_SUCCEED]: (state, action) => {
    const tomatos = action.payload.tomatos;
    return {
      ...state, tomatos: tomatos, isTomatoSucceed: true};
  },

  [TOMATO_FAILED]: (state, action) => {
    return { ...state, isTomatoSucceed: false };
  },
});

export default reducer;
