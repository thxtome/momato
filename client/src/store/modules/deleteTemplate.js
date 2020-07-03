import { createReducer, createAction } from '@reduxjs/toolkit';

const DELETE_TEMPLATE_REQUEST = createAction('DELETE_TEMPLATE_REQUEST');
const DELETE_TEMPLATE_SUCCEED = createAction('DELETE_TEMPLATE_SUCCEED');
const DELETE_TEMPLATE_FAILED = createAction('DELETE_TEMPLATE_FAILED');
const DELETE_TEMPLATE_CLEAR = createAction('DELETE_TEMPLATE_CLEAR');

export const deleteTemplateActions = {
  DELETE_TEMPLATE_REQUEST,
  DELETE_TEMPLATE_SUCCEED,
  DELETE_TEMPLATE_FAILED,
  DELETE_TEMPLATE_CLEAR,
};

const initialState = {
  isTemplateDeleteSucceed: false,
  data: null,
};

const reducer = createReducer(initialState, {
  [DELETE_TEMPLATE_REQUEST]: (state, action) => {
    return { ...state };
  },

  [DELETE_TEMPLATE_SUCCEED]: (state, action) => {
    return { ...state, isTemplateDeleteSucceed: true };
  },

  [DELETE_TEMPLATE_FAILED]: (state, action) => {
    return { ...state, isTemplateDeleteSucceed: false };
  },

  [DELETE_TEMPLATE_CLEAR]: (state, action) => {
    return { ...state, isTemplateDeleteSucceed: false };
  },
});

export default reducer;
