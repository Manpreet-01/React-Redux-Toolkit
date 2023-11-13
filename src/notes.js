npm install @reduxjs/toolkit
npm install react-redux


// store reducers useSelector useDispatch

// create a store.js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  // place reducer here
});


// slice means reducer which is a function

//create a slice file eg. todoslice.js
import {creatSlice} from "@reduxjs/toolkit";

// create a initial state
const initialState = {
  todos: [
    {id:1, text: "Hello World!"},
  ],
}

// export created slice
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), 
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});


// export all reduces and actions
export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;



//main.jsx setup
import React from 'react'
import ReactDOM from 'react-dom/client'

import {Provider} from 'react-redux';
import {store} from './app/store';

import App from './App.jsx';
import './index.css';


// wrap the whole app with <Provider store={store}> component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)


// get the current state
const todos = useSelector(state => state.todos);

// change the state with reducers only
const dispatch = useDispatch();

// syntax: dispatch(reducerName(data)) 
// reducerName -> reducer.type,  data -> action.payload

dispatch(addTodo(input));
dispatch(removeTodo(todo.id))