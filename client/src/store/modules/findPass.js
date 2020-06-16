import { createAction, createReducer } from '@reduxjs/toolkit';

const FIND_PASS_REQUEST = createAction('FIND_PASS_REQUEST');
const FIND_PASS_SUCCEED = createAction('FIND_PASS_SUCCEED');
const FIND_PASS_SUCCEED_CLEAR = createAction('FIND_PASS_SUCCEED_CLEAR');

export const findPassActions = {
  FIND_PASS_REQUEST,
  FIND_PASS_SUCCEED,
  FIND_PASS_SUCCEED_CLEAR,
};

const initialState = {
  isFindPassSucceed: false,
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
});

export default reducer;
