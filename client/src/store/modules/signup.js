import { createAction, createReducer } from "@reduxjs/toolkit";

const SIGNUP_REQUEST = createAction("SIGNUP_REQUEST");
const SIGNUP_SUCCEED = createAction("SIGNUP_SUCCEED");
const SIGNUP_FAILED = createAction("SIGNUP_FAILED");

export const signupActions = { SIGNUP_REQUEST, SIGNUP_SUCCEED, SIGNUP_FAILED };

const initialState = {
  isSignupSucceed: false,
  member: null,
};

const reducer = createReducer(initialState, {
  [SIGNUP_REQUEST]: (state, action) => {
    return state;
  },
  [SIGNUP_SUCCEED]: (state, action) => {
    console.log(action);
    return { ...state, isSignupSucceed: true };
  },
  [SIGNUP_FAILED]: (state, action) => {
    console.log(action);
    return { state };
  },
});

export default reducer;
