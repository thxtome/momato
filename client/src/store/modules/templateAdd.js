import { createReducer, createAction } from '@reduxjs/toolkit';

const TEMPLATE_ADD_REQUEST = createAction('TEMPLATE_ADD_REQUEST');
const TEMPLATE_ADD_SUCCEED = createAction('TEMPLATE_ADD_SUCCEED');
const TEMPLATE_ADD_FAILED = createAction('TEMPLATE_ADD_FAILED');
const TEMPLATE_ADD_CLEAR = createAction('TEMPLATE_ADD_CLEAR');

export const templateAddActions = {
  TEMPLATE_ADD_REQUEST,
  TEMPLATE_ADD_SUCCEED,
  TEMPLATE_ADD_FAILED,
  TEMPLATE_ADD_CLEAR,
};

const initialState = {
  isTemplateAddSucceed: false,
  data: null,
};

const reducer = createReducer(initialState, {
  [TEMPLATE_ADD_REQUEST]: (state, action) => {
    return { ...state };
  },

  [TEMPLATE_ADD_SUCCEED]: (state, action) => {
    return { ...state, isTemplateAddSucceed: true };
  },

  [TEMPLATE_ADD_FAILED]: (state, action) => {
    return { ...state, isTemplateAddSucceed: false };
  },

  [TEMPLATE_ADD_CLEAR]: (state, action) => {
    return { ...state, isTemplateAddSucceed: false };
  },
});

export default reducer;
