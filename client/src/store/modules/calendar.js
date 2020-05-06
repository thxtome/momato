import { createAction, createReducer } from "@reduxjs/toolkit";

const CALENDAR_REQUEST = createAction("CALENDAR_REQUEST");
const CALENDAR_SUCCEED = createAction("CALENDAR_SUCCEED");
const CALENDAR_CLEAR = createAction("CALENDAR_CLEAR");

export const calendarActions = {
  CALENDAR_REQUEST,
  CALENDAR_SUCCEED,
  CALENDAR_CLEAR,
};

const initialState = {
  tomatoOfDate: [],
  isUpdated: false,
};

const reducer = createReducer(initialState, {
  [CALENDAR_REQUEST]: (state, action) => {
    return { ...state, tomatoOfDates: [] };
  },

  [CALENDAR_SUCCEED]: (state, action) => {
    return {
      ...state,
      tomatoOfDates: action.payload.tomatoOfDates,
      isUpdated: true,
    };
  },

  [CALENDAR_CLEAR]: (state, action) => {
    return { ...state, tomatoOfDates: [], isUpdated: false };
  },
});

export default reducer;
