import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from './api';
import { signupActions } from '../store/modules/signup.js';
import { tomatoAddActions } from '../store/modules/tomatoAdd';
import { tomatoEditActions } from '../store/modules/tomatoEdit';
import { tomatoDeleteActions } from '../store/modules/tomatoDelete';
import { tomatoActions } from '../store/modules/tomato.js';
import { loginActions } from '../store/modules/login.js';
import { calendarActions } from '../store/modules/calendar';
import { memberUpdateActions } from '../store/modules/memberUpdate';
import { templateActions } from '../store/modules/template';
import { templateAddActions } from '../store/modules/templateAdd';
import { templateEditActions } from '../store/modules/templateEdit';
import { templateDeleteActions } from '../store/modules/templateDelete';
import { findPassActions } from '../store/modules/findPass';
import { withdrawActions } from '../store/modules/withdraw';
import errorDispacher from '../error/errorDispacher';

function* tomatoAddSaga(action) {
  try {
    const response = yield call(api.tomatoAdd, action.payload.data);
    yield put(tomatoAddActions.TOMATO_ADD_SUCCEED({ response }));
  } catch (e) {
    errorDispacher(e);
    yield put(tomatoActions.TOMATO_FAILED());
  }
}

function* tomatoEditSaga(action) {
  try {
    const response = yield call(api.tomatoEdit, action.payload.data);
    yield put(tomatoEditActions.TOMATO_EDIT_SUCCEED({ response }));
  } catch (e) {
    console.dir(e);
    errorDispacher(e);
    yield put({ type: 'TOMATO_EDIT_FAILED', message: e.message });
  }
}

function* tomatoDeleteSaga(action) {
  try {
    const response = yield call(api.tomatoDelete, action.payload.data);
    yield put(tomatoDeleteActions.TOMATO_DELETE_SUCCEED({ response }));
  } catch (e) {
    console.dir(e);
    errorDispacher(e);
    yield put({ type: 'TOMATO_DELETE_FAILED', message: e.message });
  }
}

function* tomatoSaga(action) {
  try {
    const response = yield call(api.getTomato, action.payload.data);
    yield put(tomatoActions.TOMATO_SUCCEED({ tomatos: response.data.data.result }));
  } catch (e) {
    errorDispacher(e);
    yield put({ type: 'TOMATO_FAILED', message: e.message });
  }
}

function* templateSaga(action) {
  try {
    const response = yield call(api.template, action);
    yield put(templateActions.TEMPLATE_SUCCEED({ templates: response.data.data.result }));
  } catch (e) {
    errorDispacher(e);
    yield put(templateActions.TEMPLATE_FAILED());
  }
}

function* templateAddSaga(action) {
  try {
    const response = yield call(api.templateAdd, action.payload.data);
    yield put(templateAddActions.TEMPLATE_ADD_SUCCEED({ response }));
  } catch (e) {
    console.dir(e);
    errorDispacher(e);
    yield put({ type: 'TEMPLATE_ADD_FAILED', message: e.message });
  }
}

function* templateEditSaga(action) {
  try {
    const response = yield call(api.updateTemplate, action.payload);
    yield put(templateEditActions.TEMPLATE_EDIT_SUCCEED({ response }));
  } catch (e) {
    console.dir(e);
    errorDispacher(e);
    yield put({ type: 'TEMPLATE_EDIT_FAILED', message: e.message });
  }
}

function* templateDeleteSaga(action) {
  try {
    const response = yield call(api.removeTemplate, action.payload.data);
    yield put(templateDeleteActions.TEMPLATE_DELETE_SUCCEED({ response }));
  } catch (e) {
    console.dir(e);
    errorDispacher(e);
    yield put({ type: 'TEMPLATE_DELETE_FAILED', message: e.message });
  }
}

function* loginSaga(action) {
  try {
    const response = yield call(api.login, action.payload.member);
    yield put(loginActions.LOGIN_SUCCEEDED({ response }));
  } catch (e) {
    console.dir(e);
    errorDispacher(e);
  }
}

function* logoutSaga(action) {
  try {
    const response = yield call(api.logout, action.payload.auth);
    yield put(loginActions.LOGOUT_SUCCEEDED({ response }));
  } catch (e) {
    console.dir(e);
    errorDispacher(e);
    yield put(loginActions.LOGOUT_FAILED({ e }));
  }
}

function* signupSaga(action) {
  try {
    const response = yield call(api.signup, action.payload.member);
    yield put(signupActions.SIGNUP_SUCCEED({ response }));
  } catch (e) {
    console.dir(e);
    errorDispacher(e);
    yield put(signupActions.SIGNUP_FAILED({ message: e.message }));
  }
}

function* memberInfoSaga(action) {
  try {
    const response = yield call(api.getMemberInfo);
    yield put(loginActions.MEMBERINFO_SUCCEED({ memberInfo: response.data.data.result }));
  } catch (e) {
    errorDispacher(e);
    yield put(loginActions.MEMBERINFO_FAILED());
  }
}

function* memberUpdateSaga(action) {
  try {
    const response = yield call(api.updateMember, action.payload.member);
    yield put(memberUpdateActions.MEMBER_UPDATE_SUCCEED({ response }));
  } catch (e) {
    console.dir(e);
    errorDispacher(e);
  }
}

function* findPassSaga(action) {
  try {
    const response = yield call(api.findPass, action.payload);
    yield put(findPassActions.FIND_PASS_SUCCEED({ response }));
  } catch (e) {
    console.dir(e);
    errorDispacher(e);
  }
}

function* withdrawSaga(action) {
  try {
    const response = yield call(api.withdraw, action.payload);
    console.log(response);
    yield put(withdrawActions.WITHDRAW_SUCCEED({ response }));
  } catch (e) {
    console.dir(e);
    errorDispacher(e);
  }
}

function* getCalendarSaga(action) {
  try {
    const response = yield call(api.getCalendar, action.payload.yearAndMonth);
    yield put(
      calendarActions.CALENDAR_SUCCEED({
        tomatoOfDates: response.data.data.result,
      }),
    );
  } catch (e) {
    yield put(calendarActions.CALENDAR_FAILED());
  }
}

function* baseSaga() {
  yield takeEvery(loginActions.LOGIN_REQUEST, loginSaga);
  yield takeEvery(loginActions.LOGOUT_REQUEST, logoutSaga);
  yield takeEvery(signupActions.SIGNUP_REQUEST, signupSaga);
  yield takeEvery(tomatoAddActions.TOMATO_ADD_REQUEST, tomatoAddSaga);
  yield takeEvery(tomatoEditActions.TOMATO_EDIT_REQUEST, tomatoEditSaga);
  yield takeEvery(tomatoDeleteActions.TOMATO_DELETE_REQUEST, tomatoDeleteSaga);
  yield takeEvery(tomatoActions.TOMATO_REQUEST, tomatoSaga);
  yield takeEvery(calendarActions.CALENDAR_REQUEST, getCalendarSaga);
  yield takeEvery(memberUpdateActions.MEMBER_UPDATE_REQUEST, memberUpdateSaga);
  yield takeEvery(loginActions.MEMBERINFO_REQUEST, memberInfoSaga);
  yield takeEvery(templateActions.TEMPLATE_REQUEST, templateSaga);
  yield takeEvery(templateAddActions.TEMPLATE_ADD_REQUEST, templateAddSaga);
  yield takeEvery(templateEditActions.TEMPLATE_EDIT_REQUEST, templateEditSaga);
  yield takeEvery(templateDeleteActions.TEMPLATE_DELETE_REQUEST, templateDeleteSaga);
  yield takeEvery(findPassActions.FIND_PASS_REQUEST, findPassSaga);
  yield takeEvery(withdrawActions.WITHDRAW_REQUEST, withdrawSaga);
}

export default baseSaga;
