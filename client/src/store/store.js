import { combineReducers, createStore, applyMiddleware } from "redux"
import loginReducer from "./modules/login"
import signupReducer from "./modules/signup"
import calendarReducer from "./modules/calendar"
import tomatoAddReducer from "./modules/tomatoAdd"
import tomatoEditReducer from "./modules/tomatoEdit"
import tomatoDeleteReducer from "./modules/tomatoDelete"
import counterReducer from "./modules/counter"
import tomatoReducer from "./modules/tomato"
import memberUpdateReducer from "./modules/memberUpdate"
import templateReducer from "./modules/template"
import templateAddReducer from "./modules/templateAdd"
import templateEditReducer from "./modules/templateEdit"
import templateDeleteReducer from "./modules/templateDelete"
import findPassReducer from "./modules/findPass"
import withdrawReducer from "./modules/withdraw"
import createSagaMiddleware from "redux-saga"
import saga from "../lib/saga"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  loginReducer,
  signupReducer,
  tomatoAddReducer,
  tomatoReducer,
  tomatoEditReducer,
  tomatoDeleteReducer,
  calendarReducer,
  memberUpdateReducer,
  templateReducer,
  templateAddReducer,
  templateEditReducer,
  templateDeleteReducer,
  counterReducer,
  findPassReducer,
  withdrawReducer,
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga)

export default store
