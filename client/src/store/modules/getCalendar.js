import { createAction, createReducer } from '@reduxjs/toolkit';

const GET_CALENDAR_REQUEST = createAction('GET_CALENDAR_REQUEST');
const GET_CALENDAR_SUCCEED = createAction('GET_CALENDAR_SUCCEED');
const GET_CALENDAR_CLEAR = createAction('GET_CALENDAR_CLEAR');
const GET_CALENDAR_FAILED = createAction('GET_CALENDAR_FAILED');

export const getCalendarActions = {
  GET_CALENDAR_REQUEST,
  GET_CALENDAR_SUCCEED,
  GET_CALENDAR_CLEAR,
  GET_CALENDAR_FAILED,
};

const initialState = {
  tomatoOfDate: [],
  isUpdated: false,
  isCalendarLoading: false,
};

const reducer = createReducer(initialState, {
  [GET_CALENDAR_REQUEST]: (state, action) => {
    return { ...state, tomatoOfDates: [] };
  },

  [GET_CALENDAR_FAILED]: (state, action) => {
    return { ...state, tomatoOfDates: [] };
  },

  [GET_CALENDAR_SUCCEED]: (state, action) => {
    return {
      ...state,
      tomatoOfDates: action.payload.tomatoOfDates,
      isUpdated: true,
    };
  },

  [GET_CALENDAR_CLEAR]: (state, action) => {
    return { ...state, tomatoOfDates: [], isUpdated: false };
  },
});

export default reducer;
