import { createAction, createReducer } from "@reduxjs/toolkit";

const LOGIN_CHK = createAction("LOGIN_CHK");
const LOGIN = createAction("LOGIN");
const LOGOUT = createAction("LOGOUT");
const LOGIN_SUCCEEDED = createAction("LOGIN_SUCCEEDED");

export const loginActions = { LOGIN_CHK, LOGIN, LOGOUT, LOGIN_SUCCEEDED };

const initialState = {
  isLogin: false,
  member: null
};

const reducer = createReducer(initialState, {
  [LOGIN_CHK]: (state, action) => state,
  [LOGIN]: (state, action) => {
    return { ...state, isLogin: true };
  },
  
  [LOGOUT]: (state, action) => {
    return { isLogin: false };
  },

  [LOGIN_SUCCEEDED]: (state, action) => {
    const auth = JSON.stringify(action.payload.response.headers.authorization).substring(7);
    sessionStorage.setItem("auth", auth);
    window.location.reload(true);
  },
});

export default reducer;
