import { createAction, createReducer } from "@reduxjs/toolkit";

const LOGIN_REQUEST = createAction("LOGIN_REQUEST");
const LOGIN_SUCCEEDED = createAction("LOGIN_SUCCEEDED");
const LOGIN_FAILED = createAction("LOGIN_FAILED");
const LOGIN_FAILED_CLEAR = createAction("LOGIN_FAILED_CLEAR");
const LOGOUT_REQUEST = createAction("LOGOUT_REQUEST");
const LOGOUT_SUCCEEDED = createAction("LOGOUT_SUCCEEDED");
const LOGOUT_FAILED = createAction("LOGOUT_FAILED");
const MEMBERINFO_REQUEST = createAction("MEMBERINFO_REQUEST");
const MEMBERINFO_SUCCEED = createAction("MEMBERINFO_SUCCEED");

export const loginActions = {
  LOGIN_REQUEST,
  LOGIN_SUCCEEDED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCEEDED,
  LOGIN_FAILED,
  MEMBERINFO_REQUEST,
  MEMBERINFO_SUCCEED,
};

const initialState = {
  isLogin: false,
  memberInfo: null,
  auth: null,
};

const reducer = createReducer(initialState, {
  [LOGIN_REQUEST]: (state, action) => {
    return { ...state };
  },

  [LOGIN_SUCCEEDED]: (state, action) => {
    const auth = action.payload.response.headers.authorization;
    localStorage.setItem("auth", auth);
    return { ...state, isLogin: true, auth };
  },

  [LOGIN_FAILED]: (state, action) => {
    return { ...state, isLogin: false };
  },

  [LOGOUT_REQUEST]: (state, action) => {
    return { ...state };
  },

  [LOGOUT_SUCCEEDED]: (state, action) => {
    localStorage.removeItem("auth");
    return { ...state, isLogin: false, memberInfo: null };
  },

  [LOGOUT_FAILED]: (state, action) => {
    return { ...state, isLogin: true };
  },

  [MEMBERINFO_REQUEST]: (state, action) => {
    return { ...state };
  },

  [MEMBERINFO_SUCCEED]: (state, action) => {
    return { ...state, memberInfo: action.payload.memberInfo, isLogin: true };
  },
});

export default reducer;
