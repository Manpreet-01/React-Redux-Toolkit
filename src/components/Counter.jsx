import React, {useRef} from "react";
import {useSelector, useDispatch} from "react-redux";

import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice";

function Counter(){
  const countState = useSelector(state => state.counter);
  const count = countState.count;
  
  const dispatch = useDispatch();
  const inpEle = useRef();
  
  const handleIncrementClick = () => {
    dispatch(increment());
  }
  
  const handleDecrementClick = () => {
    dispatch(decrement());
  }
  
  const handleIncrementByAmountClick = () => {
    const amount = parseInt(inpEle.current?.value);
    if(isNaN(amount)) return;
    
    dispatch(incrementByAmount(amount));
  }
  
  return (
    <>
      <p>count: {count}</p>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>
      
      <br />
      Increment By: <input ref={inpEle} />
      <button onClick={handleIncrementByAmountClick}>Increment</button>
    </>
  )
}

export default Counter;