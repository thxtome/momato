import { createReducer, createAction } from '@reduxjs/toolkit';

const GET_TOMATO_REQUEST = createAction('GET_TOMATO_REQUEST');
const GET_TEMP_TOMATO_REQUEST = createAction('GET_TEMP_TOMATO_REQUEST');
const GET_TOMATO_SUCCEED = createAction('GET_TOMATO_SUCCEED');
const GET_TOMATO_FAILED = createAction('GET_TOMATO_FAILED');

export const getTomatoActions = {
  GET_TOMATO_REQUEST,
  GET_TEMP_TOMATO_REQUEST,
  GET_TOMATO_SUCCEED,
  GET_TOMATO_FAILED,
};

const initialState = {
  isTomatoSucceed: false,
  isTomatoLoading: false,
  tomatos: [],
  date: null,
};

const reducer = createReducer(initialState, {
  [GET_TOMATO_REQUEST]: (state, action) => {
    return { ...state, data: action.payload.data, isTomatoLoading: true };
  },

  [GET_TEMP_TOMATO_REQUEST]: (state, action) => {
    let tomatos = JSON.parse(sessionStorage.getItem('tomatos'));
    tomatos = tomatos ? tomatos : [];
    return { ...state, tomatos };
  },

  [GET_TOMATO_SUCCEED]: (state, action) => {
    const tomatos = action.payload.tomatos;
    return {
      ...state,
      tomatos: tomatos,
      isTomatoSucceed: true,
      isTomatoLoading: false,
    };
  },

  [GET_TOMATO_FAILED]: (state, action) => {
    return { ...state, isTomatoSucceed: false, isTomatoLoading: false };
  },
});

export default reducer;
