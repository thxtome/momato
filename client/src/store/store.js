import { combineReducers, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./modules/login";
import createSagaMiddleware from "redux-saga";
import saga from "../lib/saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  loginReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;
