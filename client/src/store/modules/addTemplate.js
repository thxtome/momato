import { createReducer, createAction } from '@reduxjs/toolkit';

const ADD_TEMPLATE_REQUEST = createAction('ADD_TEMPLATE_REQUEST');
const ADD_TEMPLATE_SUCCEED = createAction('ADD_TEMPLATE_SUCCEED');
const ADD_TEMPLATE_FAILED = createAction('ADD_TEMPLATE_FAILED');
const ADD_TEMPLATE_CLEAR = createAction('ADD_TEMPLATE_CLEAR');

export const addTemplateActions = {
  ADD_TEMPLATE_REQUEST,
  ADD_TEMPLATE_SUCCEED,
  ADD_TEMPLATE_FAILED,
  ADD_TEMPLATE_CLEAR,
};

const initialState = {
  isTemplateAddSucceed: false,
  data: null,
};

const reducer = createReducer(initialState, {
  [ADD_TEMPLATE_REQUEST]: (state, action) => {
    return { ...state };
  },

  [ADD_TEMPLATE_SUCCEED]: (state, action) => {
    return { ...state, isTemplateAddSucceed: true };
  },

  [ADD_TEMPLATE_FAILED]: (state, action) => {
    return { ...state, isTemplateAddSucceed: false };
  },

  [ADD_TEMPLATE_CLEAR]: (state, action) => {
    return { ...state, isTemplateAddSucceed: false };
  },
});

export default reducer;
