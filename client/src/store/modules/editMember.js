import { createAction, createReducer } from '@reduxjs/toolkit';

const EDIT_MEMBER_REQUEST = createAction('EDIT_MEMBER_REQUEST');
const EDIT_MEMBER_SUCCEED = createAction('EDIT_MEMBER_SUCCEED');
const EDIT_MEMBER_SUCCEED_CLEAR = createAction('EDIT_MEMBER_SUCCEED_CLEAR');
const EDIT_MEMBER_CLEAR = createAction('EDIT_MEMBER_CLEAR');

export const editMemberActions = {
  EDIT_MEMBER_REQUEST,
  EDIT_MEMBER_SUCCEED,
  EDIT_MEMBER_SUCCEED_CLEAR,
  EDIT_MEMBER_CLEAR,
};

const initialState = {
  isUpdateSucceed: false,
};

const reducer = createReducer(initialState, {
  [EDIT_MEMBER_REQUEST]: (state, action) => {
    return { ...state };
  },
  [EDIT_MEMBER_SUCCEED]: (state, action) => {
    return { ...state, isUpdateSucceed: true };
  },
  [EDIT_MEMBER_SUCCEED_CLEAR]: (state, action) => {
    return { ...state, isUpdateSucceed: false };
  },
  [EDIT_MEMBER_CLEAR]: (state, action) => {
    return { ...state, isUpdateSucceed: false };
  },
});

export default reducer;
