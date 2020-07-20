import { createAction, createReducer } from '@reduxjs/toolkit';

const FIND_PASS_REQUEST = createAction('FIND_PASS_REQUEST');
const FIND_PASS_SUCCEED = createAction('FIND_PASS_SUCCEED');
const FIND_PASS_SUCCEED_CLEAR = createAction('FIND_PASS_SUCCEED_CLEAR');
const FIND_PASS_FAILED = createAction('FIND_PASS_FAILED');

export const findPassActions = {
  FIND_PASS_REQUEST,
  FIND_PASS_SUCCEED,
  FIND_PASS_SUCCEED_CLEAR,
  FIND_PASS_FAILED,
};

const initialState = {
  isFindPassSucceed: false,
  isFindPassLoading: false,
};

const reducer = createReducer(initialState, {
  [FIND_PASS_REQUEST]: (state, action) => {
    return { ...state, action };
  },

  [FIND_PASS_SUCCEED]: (state, action) => {
    return { ...state, isFindPassSucceed: true };
  },

  [FIND_PASS_SUCCEED_CLEAR]: (state, action) => {
    return { ...state, isFindPassSucceed: false };
  },

  [FIND_PASS_FAILED]: (state, action) => {
    return { ...state, isFindPassLoading: false };
  },
});

export default reducer;
