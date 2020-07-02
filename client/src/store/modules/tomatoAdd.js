import { createReducer, createAction } from '@reduxjs/toolkit';

const TOMATO_ADD_REQUEST = createAction('TOMATO_ADD_REQUEST');
const TOMATO_ADD_SUCCEED = createAction('TOMATO_ADD_SUCCEED');
const TOMATO_ADD_FAILED = createAction('TOMATO_ADD_FAILED');
const TOMATO_ADD_CLEAR = createAction('TOMATO_ADD_CLEAR');
const TOMATO_TEMP_ADD = createAction('TOMATO_TEMP_ADD');

export const tomatoAddActions = {
  TOMATO_ADD_REQUEST,
  TOMATO_ADD_SUCCEED,
  TOMATO_ADD_FAILED,
  TOMATO_ADD_CLEAR,
  TOMATO_TEMP_ADD,
};

const initialState = {
  isTomatoAddSucceed: false,
  data: null,
};

const reducer = createReducer(initialState, {
  [TOMATO_ADD_REQUEST]: (state, action) => {
    return { ...state };
  },

  [TOMATO_TEMP_ADD]: (state, action) => {
    //액션에서 받은 토마토를
    const tempTomato = action.payload.tempTomato;
    //세션에서 토마토 배열을 가져와서
    //배열의 길이를 새로운 토마토의 인덱스로 널음
    //토마토 배열에 추가해서 다시 세션에 넣음
    let tomatos = JSON.parse(sessionStorage.getItem('tomatos'));
    tomatos = tomatos ? tomatos : [];
    tempTomato.tomatoIdx = tomatos.length + 1;
    sessionStorage.setItem('tomatos', JSON.stringify([...tomatos, tempTomato]));
    return { ...state };
  },

  [TOMATO_ADD_SUCCEED]: (state, action) => {
    return { ...state, isTomatoAddSucceed: true };
  },

  [TOMATO_ADD_FAILED]: (state, action) => {
    return { ...state, isTomatoAddSucceed: false };
  },

  [TOMATO_ADD_CLEAR]: (state, action) => {
    return { ...state, isTomatoAddSucceed: false };
  },
});

export default reducer;
