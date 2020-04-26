import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as api from "./api";

function* loginSaga(action) {
  try {
    const data = yield call(api.login, action.payload);
    console.log(data.headers);
    yield put({ type: "LOGIN_SUCCEEDED", data: data });
  } catch (e) {
    yield put({ type: "LOGIN_FAILED", message: e.message });
  }
}

function* baseSaga() {
  yield takeEvery("LOGIN", loginSaga);
}

export default baseSaga;
