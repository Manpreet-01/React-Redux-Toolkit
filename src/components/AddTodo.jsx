import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';

import { addTodo } from "../features/todo/todoSlice";

function AddTodo(){
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  
  function addTodoHandler(e){
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  }
  
  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={input} onChange={(e) => setInput(e.target.value)}
        />
        <button>AddTodo</button>
      </form>
    </>
  )
}

export default AddTodo;