import { createAction, createReducer } from '@reduxjs/toolkit';

const START_GET_LOADING = createAction('START_GET_LOADING');
const START_PUT_LOADING = createAction('START_PUT_LOADING');
const START_DELETE_LOADING = createAction('START_DELETE_LOADING');
const START_POST_LOADING = createAction('START_POST_LOADING');
const START_MEMBER_LOADING = createAction('START_MEMBER_LOADING');
const FINISH_GET_LOADING = createAction('FINISH_GET_LOADING');
const FINISH_PUT_LOADING = createAction('FINISH_PUT_LOADING');
const FINISH_DELETE_LOADING = createAction('FINISH_DELETE_LOADING');
const FINISH_POST_LOADING = createAction('FINISH_POST_LOADING');
const FINISH_MEMBER_LOADING = createAction('FINISH_MEMBER_LOADING');

export const loadingActions = {
  START_POST_LOADING,
  START_GET_LOADING,
  START_PUT_LOADING,
  START_DELETE_LOADING,
  START_MEMBER_LOADING,
  FINISH_POST_LOADING,
  FINISH_GET_LOADING,
  FINISH_PUT_LOADING,
  FINISH_DELETE_LOADING,
  FINISH_MEMBER_LOADING,
};

const initialState = {
  isPostLoading: false,
  isGetLoading: false,
  isPutLoading: false,
  isDeleteLoading: false,
  isMemberLoading: false,
};

const reducer = createReducer(initialState, {
  [START_POST_LOADING]: (state, action) => {
    return { ...state, isPostLoading: true };
  },
  [START_GET_LOADING]: (state, action) => {
    return { ...state, isGetLoading: true };
  },
  [START_PUT_LOADING]: (state, action) => {
    return { ...state, isPutLoading: true };
  },
  [START_DELETE_LOADING]: (state, action) => {
    return { ...state, isDeleteLoading: true };
  },
  [START_MEMBER_LOADING]: (state, action) => {
    return { ...state, isMemberLoading: true };
  },
  [FINISH_POST_LOADING]: (state, action) => {
    return { ...state, isPostLoading: false };
  },
  [FINISH_GET_LOADING]: (state, action) => {
    return { ...state, isGetLoading: false };
  },
  [FINISH_PUT_LOADING]: (state, action) => {
    return { ...state, isPutLoading: false };
  },
  [FINISH_DELETE_LOADING]: (state, action) => {
    return { ...state, isDeleteLoading: false };
  },
  [FINISH_MEMBER_LOADING]: (state, action) => {
    return { ...state, isMemberLoading: false };
  },
});

export default reducer;
