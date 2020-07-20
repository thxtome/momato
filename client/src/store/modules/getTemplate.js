import { createReducer, createAction } from '@reduxjs/toolkit';

const GET_TEMPLATE_REQUEST = createAction('GET_TEMPLATE_REQUEST');
const GET_TEMPLATE_SUCCEED = createAction('GET_TEMPLATE_SUCCEED');
const GET_TEMPLATE_FAILED = createAction('GET_TEMPLATE_FAILED');
const GET_TEMPLATE_CLEAR = createAction('GET_TEMPLATE_CLEAR');

export const getTemplateActions = {
  GET_TEMPLATE_REQUEST,
  GET_TEMPLATE_SUCCEED,
  GET_TEMPLATE_FAILED,
  GET_TEMPLATE_CLEAR,
};

const initialState = {
  isTemplateSucceed: false,
  isTemplateLoading: false,
  templates: [],
};

const reducer = createReducer(initialState, {
  [GET_TEMPLATE_REQUEST]: (state, action) => {
    return { ...state, action };
  },

  [GET_TEMPLATE_SUCCEED]: (state, action) => {
    const templates = action.payload.templates;
    return { ...state, templates: templates };
  },

  [GET_TEMPLATE_FAILED]: (state, action) => {
    return { ...state, isTemplateSucceed: false };
  },

  [GET_TEMPLATE_CLEAR]: (state, action) => {
    return { ...state, isTemplateSucceed: false };
  },
});

export default reducer;
