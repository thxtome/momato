import { createAction, createReducer } from '@reduxjs/toolkit';

const LOGIN_REQUEST = createAction('LOGIN_REQUEST');
const LOGIN_SUCCEEDED = createAction('LOGIN_SUCCEEDED');
const LOGIN_FAILED = createAction('LOGIN_FAILED');
const LOGIN_FAILED_CLEAR = createAction('LOGIN_FAILED_CLEAR');
const LOGOUT_REQUEST = createAction('LOGOUT_REQUEST');
const LOGOUT_SUCCEEDED = createAction('LOGOUT_SUCCEEDED');
const LOGOUT_FAILED = createAction('LOGOUT_FAILED');
const GET_MEMBERINFO_REQUEST = createAction('GET_MEMBERINFO_REQUEST');
const GET_MEMBERINFO_SUCCEED = createAction('GET_MEMBERINFO_SUCCEED');
const GET_MEMBERINFO_FAILED = createAction('GET_MEMBERINFO_FAILED');

export const loginActions = {
  LOGIN_REQUEST,
  LOGIN_SUCCEEDED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCEEDED,
  LOGIN_FAILED,
  GET_MEMBERINFO_REQUEST,
  GET_MEMBERINFO_SUCCEED,
  GET_MEMBERINFO_FAILED,
};

const initialState = {
  isLogin: false,
  isMemberLoading: false,
  memberInfo: null,
  auth: null,
};

const reducer = createReducer(initialState, {
  [LOGIN_REQUEST]: (state, action) => {
    return { ...state };
  },

  [LOGIN_SUCCEEDED]: (state, action) => {
    const auth = action.payload.response.headers.authorization;
    localStorage.setItem('auth', auth);
    return { ...state, isLogin: true, auth };
  },

  [LOGIN_FAILED]: (state, action) => {
    return { ...state, isLogin: false };
  },

  [LOGOUT_REQUEST]: (state, action) => {
    return { ...state };
  },

  [LOGOUT_SUCCEEDED]: (state, action) => {
    localStorage.removeItem('auth');
    return { ...state, isLogin: false, memberInfo: null };
  },

  [LOGOUT_FAILED]: (state, action) => {
    return { ...state, isLogin: true };
  },

  [GET_MEMBERINFO_REQUEST]: (state, action) => {
    return { ...state, isMemberLoading: true };
  },

  [GET_MEMBERINFO_SUCCEED]: (state, action) => {
    return { ...state, memberInfo: action.payload.memberInfo, isLogin: true, isMemberLoading: false };
  },

  [GET_MEMBERINFO_FAILED]: (state, action) => {
    return { ...state, isMemberLoading: false };
  },
});

export default reducer;
