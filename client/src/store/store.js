import { combineReducers, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./modules/login";
import signupReducer from "./modules/signup";
import tomatoAddReducer from "./modules/tomatoAdd";
import tomatoReducer from "./modules/tomato";
import createSagaMiddleware from "redux-saga";
import saga from "../lib/saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  loginReducer,
  signupReducer,
  tomatoAddReducer,
  tomatoReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;
