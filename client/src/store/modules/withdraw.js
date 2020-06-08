import { createAction, createReducer } from "@reduxjs/toolkit"

const WITHDRAW_REQUEST = createAction("WITHDRAW_REQUEST")
const WITHDRAW_SUCCEED = createAction("WITHDRAW_SUCCEED")
const WITHDRAW_SUCCEED_CLEAR = createAction("WITHDRAW_SUCCEED_CLEAR")

export const withdrawActions = {
  WITHDRAW_REQUEST,
  WITHDRAW_SUCCEED,
  WITHDRAW_SUCCEED_CLEAR,
}

const initialState = {
  isWithdrawSucceed: false,
}

const reducer = createReducer(initialState, {
  [WITHDRAW_REQUEST]: (state, action) => {
    return { ...state, action }
  },
  [WITHDRAW_SUCCEED]: (state, action) => {
    return { ...state, isWithdrawSucceed: true }
  },
  [WITHDRAW_SUCCEED_CLEAR]: (state, action) => {
    return { ...state, isWithdrawSucceed: false }
  },
})

export default reducer
