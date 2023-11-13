import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import { removeTodo } from '../features/todo/todoSlice.js';


function Todos(){
  const todosState = useSelector(state => state.todo);
  const todos = todosState.todos;
  
  const dispatch = useDispatch();
  
  return (
    <>
      <div>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </div>
    </>
  )
}

export default Todos;