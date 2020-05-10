import { createReducer, createAction } from "@reduxjs/toolkit";


const TEMPLATE_EDIT_REQUEST = createAction("TEMPLATE_EDIT_REQUEST");
const TEMPLATE_EDIT_SUCCEED = createAction("TEMPLATE_EDIT_SUCCEED");
const TEMPLATE_EDIT_FAILED = createAction("TEMPLATE_EDIT_FAILED");
const TEMPLATE_EDIT_CLEAR = createAction("TEMPLATE_EDIT_CLEAR");

export const templateEditActions = { TEMPLATE_EDIT_REQUEST, TEMPLATE_EDIT_SUCCEED, TEMPLATE_EDIT_FAILED, TEMPLATE_EDIT_CLEAR};

const initialState = {
    isTemplateEditSucceed: false,
    templates: [],
};

const reducer = createReducer(initialState, {
    [TEMPLATE_EDIT_REQUEST]: (state, action) => {
        return { ...state, action };
    },

    [TEMPLATE_EDIT_SUCCEED]: (state, action) => {
        return { ...state, isTemplateEditSucceed: true };
    },
    
    [TEMPLATE_EDIT_FAILED]: (state, action) => {
        return { ...state, isTemplateEditSucceed: false };
    },

    [TEMPLATE_EDIT_CLEAR]: (state, action) => {
        return { ...state, isTemplateEditSucceed: false };
      },
});

export default reducer;