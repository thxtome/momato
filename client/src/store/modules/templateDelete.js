import { createReducer, createAction } from "@reduxjs/toolkit";

const TEMPLATE_DELETE_REQUEST = createAction("TEMPLATE_DELETE_REQUEST");
const TEMPLATE_DELETE_SUCCEED = createAction("TEMPLATE_DELETE_SUCCEED");
const TEMPLATE_DELETE_FAILED = createAction("TEMPLATE_DELETE_FAILED");
const TEMPLATE_DELETE_CLEAR = createAction("TEMPLATE_DELETE_CLEAR");

export const templateDeleteActions = {
  TEMPLATE_DELETE_REQUEST,
  TEMPLATE_DELETE_SUCCEED,
  TEMPLATE_DELETE_FAILED,
  TEMPLATE_DELETE_CLEAR,
};

const initialState = {
  isTemplateDeleteSucceed: false,
  data: null,
};

const reducer = createReducer(initialState, {
  [TEMPLATE_DELETE_REQUEST]: (state, action) => {
    return { ...state };
  },

  [TEMPLATE_DELETE_SUCCEED]: (state, action) => {
    return { ...state, isTemplateDeleteSucceed: true };
  },

  [TEMPLATE_DELETE_FAILED]: (state, action) => {
    return { ...state, isTemplateDeleteSucceed: false };
  },

  [TEMPLATE_DELETE_CLEAR]: (state, action) => {
    return { ...state, isTemplateDeleteSucceed: false };
  },
});

export default reducer;
