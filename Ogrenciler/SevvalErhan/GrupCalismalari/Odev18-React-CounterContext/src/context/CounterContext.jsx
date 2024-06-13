import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CounterContext = createContext();

const initialState = {
  count: parseInt(localStorage.getItem('counter')) || 0
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count > 0 ? state.count - 1 : 0 };
    default:
      return state;
  }
};

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  useEffect(() => {
    localStorage.setItem('counter', state.count);
  }, [state.count]);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
