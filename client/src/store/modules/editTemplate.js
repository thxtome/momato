import { createReducer, createAction } from '@reduxjs/toolkit';

const EDIT_TEMPLATE_REQUEST = createAction('EDIT_TEMPLATE_REQUEST');
const EDIT_TEMPLATE_SUCCEED = createAction('EDIT_TEMPLATE_SUCCEED');
const EDIT_TEMPLATE_FAILED = createAction('EDIT_TEMPLATE_FAILED');
const EDIT_TEMPLATE_CLEAR = createAction('EDIT_TEMPLATE_CLEAR');

export const editTemplateActions = {
  EDIT_TEMPLATE_REQUEST,
  EDIT_TEMPLATE_SUCCEED,
  EDIT_TEMPLATE_FAILED,
  EDIT_TEMPLATE_CLEAR,
};

const initialState = {
  isTemplateEditSucceed: false,
  templates: [],
};

const reducer = createReducer(initialState, {
  [EDIT_TEMPLATE_REQUEST]: (state, action) => {
    return { ...state, action };
  },

  [EDIT_TEMPLATE_SUCCEED]: (state, action) => {
    return { ...state, isTemplateEditSucceed: true };
  },

  [EDIT_TEMPLATE_FAILED]: (state, action) => {
    return { ...state, isTemplateEditSucceed: false };
  },

  [EDIT_TEMPLATE_CLEAR]: (state, action) => {
    return { ...state, isTemplateEditSucceed: false };
  },
});

export default reducer;
