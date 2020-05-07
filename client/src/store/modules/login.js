import { createAction, createReducer } from "@reduxjs/toolkit";

const LOGIN = createAction("LOGIN");
const LOGIN_SUCCEEDED = createAction("LOGIN_SUCCEEDED");
const LOGIN_FAILED = createAction("LOGIN_FAILED");
const LOGIN_FAILED_CLEAR = createAction("LOGIN_FAILED_CLEAR");
const LOGOUT = createAction("LOGOUT");
const LOGOUT_SUCCEEDED = createAction("LOGOUT_SUCCEEDED");
const LOGOUT_FAILED = createAction("LOGOUT_FAILED");

export const loginActions = {
  LOGIN,
  LOGIN_SUCCEEDED,
  LOGOUT,
  LOGOUT_SUCCEEDED,
  LOGIN_FAILED,
};

const initialState = {
  isLogin: false,
  member: null,
};

const reducer = createReducer(initialState, {
  [LOGIN]: (state, action) => {
    return { state };
  },
  
  [LOGIN_SUCCEEDED]: (state, action) => {
    const auth = action.payload.response.headers.authorization;
    localStorage.setItem("auth", auth);
    localStorage.removeItem("key");
    sessionStorage.clear();
    return { ...state, isLogin: true };
  },

  [LOGIN_FAILED]: (state, action) => {
    return { ...state, isLogin: false };
  },

  [LOGOUT]: (state, action) => {
    return { state };
  },

  [LOGOUT_SUCCEEDED]: (state, action) => {
    localStorage.removeItem("auth");
    return { ...state, isLogin: false };
  },

  [LOGOUT_FAILED]: (state, action) => {
    return { ...state, isLogin: true };
  },
});

export default reducer;
