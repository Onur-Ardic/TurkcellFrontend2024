import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

const Counter = () => {
  const count = useSelector((state) => state.count); //Redux store'dan durumu seçmek için kullanılır burada state.count değerini alır
  const dispatch = useDispatch(); //Redux store'a increment ve decrement aksiyonlarını göndermek için kullanılır

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
