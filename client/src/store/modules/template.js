import { createReducer, createAction } from "@reduxjs/toolkit"

const TEMPLATE_REQUEST = createAction("TEMPLATE_REQUEST")
const TEMPLATE_SUCCEED = createAction("TEMPLATE_SUCCEED")
const TEMPLATE_FAILED = createAction("TEMPLATE_FAILED")
const TEMPLATE_CLEAR = createAction("TEMPLATE_CLEAR")

export const templateActions = { TEMPLATE_REQUEST, TEMPLATE_SUCCEED, TEMPLATE_FAILED, TEMPLATE_CLEAR }

const initialState = {
  isTemplateSucceed: false,
  isTemplateLoading: false,
  templates: [],
}

const reducer = createReducer(initialState, {
  [TEMPLATE_REQUEST]: (state, action) => {
    return { ...state, action, isTemplateLoading: true }
  },

  [TEMPLATE_SUCCEED]: (state, action) => {
    const templates = action.payload.templates
    return { ...state, templates: templates, isTemplateLoading: false }
  },

  [TEMPLATE_FAILED]: (state, action) => {
    return { ...state, isTemplateSucceed: false, isTemplateLoading: false }
  },

  [TEMPLATE_CLEAR]: (state, action) => {
    return { ...state, isTemplateSucceed: false }
  },
})

export default reducer
