import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as api from "./api";
import { signupActions } from "../store/modules/signup.js";

function* loginSaga(action) {
  try {
    const response = yield call(api.login, action.payload);
    yield put({ type: "LOGIN_SUCCEEDED", data: response });
  } catch (e) {
    yield put({ type: "LOGIN_FAILED", message: e.message });
  }
}

function* signupSaga(action) {
  try {
    const response = yield call(api.signup, action.payload.member);
    yield put(signupActions.SIGNUP_SUCCEED({ response }));
  } catch (e) {
    yield put(signupActions.SIGNUP_FAILED({ message: e.message }));
  }
}

function* baseSaga() {
  yield takeEvery("LOGIN", loginSaga);
  yield takeEvery(signupActions.SIGNUP_REQUEST, signupSaga);
}

export default baseSaga;
