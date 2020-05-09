import { createReducer, createAction } from "@reduxjs/toolkit";


const TEMPLATE_REQUEST = createAction("TEMPLATE_REQUEST");
const TEMPLATE_SUCCEED = createAction("TEMPLATE_SUCCEED");
const TEMPLATE_FAILED = createAction("TEMPLATE_FAILED");

export const templateActions = { TEMPLATE_REQUEST, TEMPLATE_SUCCEED, TEMPLATE_FAILED};

const initialState = {
    isTemplateSucceed: false,
    templates: [],
};

const reducer = createReducer(initialState, {
    [TEMPLATE_REQUEST]: (state, action) => {
        return { ...state, action };
    },

    [TEMPLATE_SUCCEED]: (state, action) => {
        const templates = action.payload.templates;
        return { ...state, templates: templates };
    },

    [TEMPLATE_FAILED]: (state, action) => {
        return { ...state, isTemplateSucceed: false };
    },
});

export default reducer;