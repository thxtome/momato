import { createReducer, createAction } from '@reduxjs/toolkit';

const DELETE_TOMATO_REQUEST = createAction('DELETE_TOMATO_REQUEST');
const DELETE_TOMATO_SUCCEED = createAction('DELETE_TOMATO_SUCCEED');
const DELETE_TOMATO_FAILED = createAction('DELETE_TOMATO_FAILED');
const DELETE_TOMATO_CLEAR = createAction('DELETE_TOMATO_CLEAR');
const DELETE_TEMP_TOMATO = createAction('DELETE_TEMP_TOMATO');

export const deleteTomatoActions = {
  DELETE_TOMATO_REQUEST,
  DELETE_TOMATO_SUCCEED,
  DELETE_TOMATO_FAILED,
  DELETE_TOMATO_CLEAR,
  DELETE_TEMP_TOMATO,
};

const initialState = {
  isTomatoDeleteSucceed: false,
  data: null,
};

const reducer = createReducer(initialState, {
  [DELETE_TOMATO_REQUEST]: (state, action) => {
    return { ...state };
  },

  [DELETE_TEMP_TOMATO]: (state, action) => {
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

  [DELETE_TOMATO_SUCCEED]: (state, action) => {
    return { ...state, isTomatoDeleteSucceed: true };
  },

  [DELETE_TOMATO_FAILED]: (state, action) => {
    return { ...state, isTomatoDeleteSucceed: false };
  },

  [DELETE_TOMATO_CLEAR]: (state, action) => {
    return { ...state, isTomatoDeleteSucceed: false };
  },
});

export default reducer;
