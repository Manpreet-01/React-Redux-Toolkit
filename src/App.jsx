import { useState } from 'react'

import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Counter from './components/Counter';

function App(){
  return (
    <>
      <Todos />
      <AddTodo />
      <Counter />
    </>
  )
}

export default App;