import { combineReducers, createStore, applyMiddleware } from 'redux';
import loginReducer from './modules/login';
import signupReducer from './modules/signup';
import counterReducer from './modules/counter';
import getCalendarReducer from './modules/getCalendar';
import getTomatoReducer from './modules/getTomato';
import addTomatoReducer from './modules/addTomato';
import editTomatoReducer from './modules/editTomato';
import deleteTomatoReducer from './modules/deleteTomato';
import getTemplateReducer from './modules/getTemplate';
import addTemplateReducer from './modules/addTemplate';
import editTemplateReducer from './modules/editTemplate';
import deleteTemplateReducer from './modules/deleteTemplate';
import findPassReducer from './modules/findPass';
import withdrawReducer from './modules/withdraw';
import editMemberReducer from './modules/editMember';
import createSagaMiddleware from 'redux-saga';
import saga from '../lib/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  loginReducer,
  signupReducer,
  addTomatoReducer,
  getTomatoReducer,
  editTomatoReducer,
  deleteTomatoReducer,
  getCalendarReducer,
  editMemberReducer,
  getTemplateReducer,
  addTemplateReducer,
  editTemplateReducer,
  deleteTemplateReducer,
  counterReducer,
  findPassReducer,
  withdrawReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;
