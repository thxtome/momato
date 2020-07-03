import { createReducer, createAction } from '@reduxjs/toolkit';

const ADD_TOMATO_REQUEST = createAction('ADD_TOMATO_REQUEST');
const ADD_TOMATO_SUCCEED = createAction('ADD_TOMATO_SUCCEED');
const ADD_TOMATO_FAILED = createAction('ADD_TOMATO_FAILED');
const ADD_TOMATO_CLEAR = createAction('ADD_TOMATO_CLEAR');
const ADD_TEMP_TOMATO = createAction('ADD_TEMP_TOMATO');

export const addTomatoActions = {
  ADD_TOMATO_REQUEST,
  ADD_TOMATO_SUCCEED,
  ADD_TOMATO_FAILED,
  ADD_TOMATO_CLEAR,
  ADD_TEMP_TOMATO,
};

const initialState = {
  isTomatoAddSucceed: false,
  data: null,
};

const reducer = createReducer(initialState, {
  [ADD_TOMATO_REQUEST]: (state, action) => {
    return { ...state };
  },

  [ADD_TEMP_TOMATO]: (state, action) => {
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

  [ADD_TOMATO_SUCCEED]: (state, action) => {
    return { ...state, isTomatoAddSucceed: true };
  },

  [ADD_TOMATO_FAILED]: (state, action) => {
    return { ...state, isTomatoAddSucceed: false };
  },

  [ADD_TOMATO_CLEAR]: (state, action) => {
    return { ...state, isTomatoAddSucceed: false };
  },
});

export default reducer;
