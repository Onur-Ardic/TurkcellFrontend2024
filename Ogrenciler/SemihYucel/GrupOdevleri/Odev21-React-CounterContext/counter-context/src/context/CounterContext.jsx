import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const useCounter = () => {
  return useContext(CounterContext);
};

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
