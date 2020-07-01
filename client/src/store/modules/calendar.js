import { createAction, createReducer } from '@reduxjs/toolkit';

const CALENDAR_REQUEST = createAction('CALENDAR_REQUEST');
const CALENDAR_SUCCEED = createAction('CALENDAR_SUCCEED');
const CALENDAR_CLEAR = createAction('CALENDAR_CLEAR');
const CALENDAR_FAILED = createAction('CALENDAR_FAILED');

export const calendarActions = {
  CALENDAR_REQUEST,
  CALENDAR_SUCCEED,
  CALENDAR_CLEAR,
  CALENDAR_FAILED,
};

const initialState = {
  tomatoOfDate: [],
  isUpdated: false,
  isCalendarLoading: false,
};

const reducer = createReducer(initialState, {
  [CALENDAR_REQUEST]: (state, action) => {
    return { ...state, tomatoOfDates: [], isCalendarLoading: true };
  },

  [CALENDAR_FAILED]: (state, action) => {
    return { ...state, tomatoOfDates: [], isCalendarLoading: false };
  },

  [CALENDAR_SUCCEED]: (state, action) => {
    return {
      ...state,
      tomatoOfDates: action.payload.tomatoOfDates,
      isUpdated: true,
      isCalendarLoading: false,
    };
  },

  [CALENDAR_CLEAR]: (state, action) => {
    return { ...state, tomatoOfDates: [], isUpdated: false };
  },
});

export default reducer;
