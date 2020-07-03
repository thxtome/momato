import { createReducer, createAction } from '@reduxjs/toolkit';

const EDIT_TOMATO_REQUEST = createAction('EDIT_TOMATO_REQUEST');
const EDIT_TOMATO_SUCCEED = createAction('EDIT_TOMATO_SUCCEED');
const EDIT_TOMATO_FAILED = createAction('EDIT_TOMATO_FAILED');
const EDIT_TOMATO_CLEAR = createAction('EDIT_TOMATO_CLEAR');
const EDIT_TEMP_TOMATO = createAction('EDIT_TEMP_TOMATO');

export const editTomatoActions = {
  EDIT_TOMATO_REQUEST,
  EDIT_TOMATO_SUCCEED,
  EDIT_TOMATO_FAILED,
  EDIT_TOMATO_CLEAR,
  EDIT_TEMP_TOMATO,
};

const initialState = {
  isTomatoEditSucceed: false,
  data: null,
};

const reducer = createReducer(initialState, {
  [EDIT_TOMATO_REQUEST]: (state, action) => {
    return { ...state, action };
  },

  [EDIT_TEMP_TOMATO]: (state, action) => {
    //수정된 토마토를 액션으로부터 받고
    const editedTomato = action.payload.editedTempTomato;
    //세션에 있는 토마토배열을 가져와서
    let tomatos = JSON.parse(sessionStorage.getItem('tomatos'));
    tomatos = tomatos ? tomatos : [];

    //수정한후에 세션에 다시 넣어줌
    sessionStorage.setItem(
      'tomatos',
      JSON.stringify(
        tomatos.map(tomato => {
          if (tomato.tomatoIdx === editedTomato.tomatoIdx) {
            tomato = {
              ...tomato,
              tomatoName: editedTomato.tomatoName,
              tomatoFullRegular: editedTomato.tomatoFullRegular,
              tomatoLeftRegular: editedTomato.tomatoFullRegular,
              tomatoFullBreak: editedTomato.tomatoFullBreak,
              tomatoLeftBreak: editedTomato.tomatoFullBreak,
            };
          }
          return tomato;
        }),
      ),
    );

    return { ...state, action };
  },

  [EDIT_TOMATO_SUCCEED]: (state, action) => {
    return { ...state, isTomatoEditSucceed: true };
  },

  [EDIT_TOMATO_FAILED]: (state, action) => {
    return { ...state, isTomatoEditSucceed: false };
  },

  [EDIT_TOMATO_CLEAR]: (state, action) => {
    return { ...state, isTomatoEditSucceed: false };
  },
});

export default reducer;
