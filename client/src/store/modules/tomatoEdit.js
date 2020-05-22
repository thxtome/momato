import { createReducer, createAction } from "@reduxjs/toolkit"

const TOMATO_EDIT_REQUEST = createAction("TOMATO_EDIT_REQUEST")
const TOMATO_EDIT_SUCCEED = createAction("TOMATO_EDIT_SUCCEED")
const TOMATO_EDIT_FAILED = createAction("TOMATO_EDIT_FAILED")
const TOMATO_EDIT_CLEAR = createAction("TOMATO_EDIT_CLEAR")
const TOMATO_TEMP_EDIT = createAction("TOMATO_TEMP_EDIT")

export const tomatoEditActions = {
  TOMATO_EDIT_REQUEST,
  TOMATO_EDIT_SUCCEED,
  TOMATO_EDIT_FAILED,
  TOMATO_EDIT_CLEAR,
  TOMATO_TEMP_EDIT,
}

const initialState = {
  isTomatoEditSucceed: false,
  data: null,
}

const reducer = createReducer(initialState, {
  [TOMATO_EDIT_REQUEST]: (state, action) => {
    return { ...state, action }
  },

  [TOMATO_TEMP_EDIT]: (state, action) => {
    //수정된 토마토를 액션으로부터 받고
    const editedTomato = action.payload.editedTempTomato
    //세션에 있는 토마토배열을 가져와서
    let tomatos = JSON.parse(sessionStorage.getItem("tomatos"))
    tomatos = tomatos ? tomatos : []

    //수정한후에 세션에 다시 넣어줌
    sessionStorage.setItem(
      "tomatos",
      JSON.stringify(
        tomatos.map((tomato) => {
          if (tomato.tomatoIdx === editedTomato.tomatoIdx) {
            tomato = {
              ...tomato,
              tomatoName: editedTomato.tomatoName,
              tomatoFullRegular: editedTomato.tomatoFullRegular,
              tomatoLeftRegular: editedTomato.tomatoFullRegular,
              tomatoFullBreak: editedTomato.tomatoFullBreak,
              tomatoLeftBreak: editedTomato.tomatoFullBreak,
            }
          }
          return tomato
        })
      )
    )

    return { ...state, action }
  },

  [TOMATO_EDIT_SUCCEED]: (state, action) => {
    return { ...state, isTomatoEditSucceed: true }
  },

  [TOMATO_EDIT_FAILED]: (state, action) => {
    return { ...state, isTomatoEditSucceed: false }
  },

  [TOMATO_EDIT_CLEAR]: (state, action) => {
    return { ...state, isTomatoEditSucceed: false }
  },
})

export default reducer
