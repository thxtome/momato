import { createAction, createReducer } from "@reduxjs/toolkit";

const LOGIN = createAction("LOGIN");
const LOGOUT = createAction("LOGOUT");
const LOGIN_SUCCEEDED = createAction("LOGIN_SUCCEEDED");
const LOGIN_FAILED = createAction("LOGIN_FAILED");
const LOGIN_FAILED_CLEAR = createAction("LOGIN_FAILED_CLEAR");

export const loginActions = {
  LOGIN,
  LOGOUT,
  LOGIN_SUCCEEDED,
};

const initialState = {
  isLogin: false,
  member: null,
};

const reducer = createReducer(initialState, {
  [LOGIN]: (state, action) => {
    return state;
  },

  [LOGOUT]: (state, action) => {
    return { isLogin: false };
  },

  [LOGIN_SUCCEEDED]: (state, action) => {
    const auth = action.payload.response.headers.authorization;
    localStorage.setItem("auth", auth);
    return { ...state, isLogin: true };
  },
});

export default reducer;
