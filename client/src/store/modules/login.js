import { createAction, createReducer } from "@reduxjs/toolkit";

const LOGIN_CHK = createAction("LOGIN_CHK");
const LOGIN = createAction("LOGIN");
const LOGOUT = createAction("LOGOUT");

const initialState = {
  isLogin: false,
};

const reducer = createReducer(initialState, {
  [LOGIN_CHK]: (state, action) => state,
  [LOGIN]: (state, action) => {
    return { isLogin: true };
  },
  [LOGOUT]: (state, action) => {
    return { isLogin: false };
  },
});

export default reducer;
