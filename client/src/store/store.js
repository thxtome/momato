import { combineReducers, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./modules/login";
import signupReducer from "./modules/signup";
import createSagaMiddleware from "redux-saga";
import saga from "../lib/saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  loginReducer,
  signupReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;
