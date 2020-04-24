import { combineReducers , createStore, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./modules/login";

const rootReducer = combineReducers({
  loginReducer
});


const store = createStore( rootReducer );

export default store;
