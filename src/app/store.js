import { configureStore, combineReducers  } from "@reduxjs/toolkit";

import todoReducer from '../features/todo/todoSlice';
import counterReducer from "../features/counter/counterSlice";


const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});



export default store;

