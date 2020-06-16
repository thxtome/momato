import { createReducer, createAction } from '@reduxjs/toolkit';

const TOMATO_DELETE_REQUEST = createAction('TOMATO_DELETE_REQUEST');
const TOMATO_DELETE_SUCCEED = createAction('TOMATO_DELETE_SUCCEED');
const TOMATO_DELETE_FAILED = createAction('TOMATO_DELETE_FAILED');
const TOMATO_DELETE_CLEAR = createAction('TOMATO_DELETE_CLEAR');
const TOMATO_TEMP_DELETE = createAction('TOMATO_TEMP_DELETE');

export const tomatoDeleteActions = {
  TOMATO_DELETE_REQUEST,
  TOMATO_DELETE_SUCCEED,
  TOMATO_DELETE_FAILED,
  TOMATO_DELETE_CLEAR,
  TOMATO_TEMP_DELETE,
};

const initialState = {
  isTomatoDeleteSucceed: false,
  data: null,
};

const reducer = createReducer(initialState, {
  [TOMATO_DELETE_REQUEST]: (state, action) => {
    return { ...state };
  },

  [TOMATO_TEMP_DELETE]: (state, action) => {
    //액션에서 토마토 인덱스를 받아서
    const tomatoIdx = action.payload.tomatoIdx;
    //세션에서 가져온 토마토 배열에서
    let tomatos = JSON.parse(sessionStorage.getItem('tomatos'));
    tomatos = tomatos ? tomatos : [];

    //인덱스가 같으면 제거해해서 다시 세션에 넣는다.
    sessionStorage.setItem(
      'tomatos',
      JSON.stringify(
        tomatos.filter(tomato => {
          return tomato.tomatoIdx !== tomatoIdx;
        }),
      ),
    );

    return { ...state };
  },

  [TOMATO_DELETE_SUCCEED]: (state, action) => {
    return { ...state, isTomatoDeleteSucceed: true };
  },

  [TOMATO_DELETE_FAILED]: (state, action) => {
    return { ...state, isTomatoDeleteSucceed: false };
  },

  [TOMATO_DELETE_CLEAR]: (state, action) => {
    return { ...state, isTomatoDeleteSucceed: false };
  },
});

export default reducer;
