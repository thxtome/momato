import { createAction, createReducer } from "@reduxjs/toolkit";

const MEMBER_UPDATE_REQUEST = createAction("MEMBER_UPDATE_REQUEST");
const MEMBER_UPDATE_SUCCEED = createAction("MEMBER_UPDATE_SUCCEED");
const MEMBER_UPDATE_SUCCEED_CLEAR = createAction("MEMBER_UPDATE_SUCCEED_CLEAR");

export const memberUpdateActions = {
  MEMBER_UPDATE_REQUEST,
  MEMBER_UPDATE_SUCCEED,
  MEMBER_UPDATE_SUCCEED_CLEAR,
};

const initialState = {
  isUpdateSucceed: false,
};

const reducer = createReducer(initialState, {
  [MEMBER_UPDATE_REQUEST]: (state, action) => {
    return { ...state };
  },
  [MEMBER_UPDATE_SUCCEED]: (state, action) => {
    return { ...state, isUpdateSucceed: true };
  },
  [MEMBER_UPDATE_SUCCEED_CLEAR]: (state, action) => {
    return { ...state, isUpdateSucceed: false };
  },
});

export default reducer;
