import { call, put, takeEvery } from "redux-saga/effects";
import * as api from "./api";
import { signupActions } from "../store/modules/signup.js";
import { tomatoAddActions } from "../store/modules/tomatoAdd";
import { tomatoEditActions } from "../store/modules/tomatoEdit";
import { tomatoDeleteActions } from "../store/modules/tomatoDelete";
import { tomatoActions } from "../store/modules/tomato.js";
import { loginActions } from "../store/modules/login.js";
import { calendarActions } from "../store/modules/calendar";
import { memberUpdateActions } from "../store/modules/memberUpdate";
import errorDispacher from "../error/errorDispacher";

function* tomatoAddSaga(action) {
  try {
    const response = yield call(api.tomatoAdd, action.payload.data);
    yield put(tomatoAddActions.TOMATO_ADD_SUCCEED({ response }));
  } catch (e) {
    yield put({ type: "TOMATO_ADD_FAILED", message: e.message });
  }
}

function* tomatoEditSaga(action) {
  try {
    const response = yield call(api.tomatoEdit, action.payload.data);
    yield put(tomatoEditActions.TOMATO_EDIT_SUCCEED({ response }));
  } catch (e) {
    yield put({ type: "TOMATO_EDIT_FAILED", message: e.message });
  }
}

function* tomatoDeleteSaga(action) {
  try {
    const response = yield call(api.tomatoDelete, action.payload.data);
    yield put(tomatoDeleteActions.TOMATO_DELETE_SUCCEED({ response }));
  } catch (e) {
    yield put({ type: "TOMATO_DELETE_FAILED", message: e.message });
  }
}

function* tomatoSaga(action) {
  try {
    const response = yield call(api.tomato, action.payload.date);
    yield put(
      tomatoActions.TOMATO_SUCCEED({ tomatos: response.data.data.result })
    );
  } catch (e) {
    yield put({ type: "TOMATO_FAILED", message: e.message });
  }
}

function* loginSaga(action) {
  try {
    const response = yield call(api.login, action.payload.member);
    yield put(loginActions.LOGIN_SUCCEEDED({ response }));
  } catch (e) {
    errorDispacher(e.response.data.error);
  }
}

function* logoutSaga(action) {
  try {
    const response = yield call(api.logout, localStorage.getItem("auth"));
    yield put(loginActions.LOGOUT_SUCCEEDED({ response }));
  } catch (e) {
    yield put(loginActions.LOGOUT_FAILED({ e }));
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

function* memberInfoSaga(action) {
  try {
    const response = yield call(api.getMemberInfo);
    console.log(response)
    yield put(
      loginActions.MEMBERINFO_SUCCEED({ memberInfo: response.data.data.result })
    );
  } catch (e) {
    console.dir(e);
    errorDispacher(e.response.data.error);
  }
}

function* memberUpdateSaga(action) {
  try {
    const response = yield call(api.updateMember, action.payload.member);
    yield put(memberUpdateActions.MEMBER_UPDATE_SUCCEED({ response }));
  } catch (e) {
    console.dir(e);
    errorDispacher(e.response.data.error);
  }
}

function* getCalendarSaga(action) {
  try {
    const response = yield call(api.getCalendar, action.payload.yearAndMonth);
    yield put(
      calendarActions.CALENDAR_SUCCEED({
        tomatoOfDates: response.data.data.result,
      })
    );
  } catch (e) {
    console.log(e);
  }
}

function* baseSaga() {
  yield takeEvery(loginActions.LOGIN, loginSaga);
  yield takeEvery(loginActions.LOGOUT, logoutSaga);
  yield takeEvery(signupActions.SIGNUP_REQUEST, signupSaga);
  yield takeEvery(tomatoAddActions.TOMATO_ADD_REQUEST, tomatoAddSaga);
  yield takeEvery(tomatoEditActions.TOMATO_EDIT_REQUEST, tomatoEditSaga);
  yield takeEvery(tomatoDeleteActions.TOMATO_DELETE_REQUEST, tomatoDeleteSaga);
  yield takeEvery(tomatoActions.TOMATO_REQUEST, tomatoSaga);
  yield takeEvery(calendarActions.CALENDAR_REQUEST, getCalendarSaga);
  yield takeEvery(memberUpdateActions.MEMBER_UPDATE_REQUEST, memberUpdateSaga);
  yield takeEvery(loginActions.MEMBERINFO_REQUEST, memberInfoSaga);
}

export default baseSaga;
