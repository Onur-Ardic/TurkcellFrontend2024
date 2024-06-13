import React, { useEffect } from "react";
import { useState, useContext, createContext } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [value, setValue] = useState(
    Number(localStorage.getItem("value")) || 0
  );

  useEffect(() => {
    localStorage.setItem("value", value);
  }, [value]);

  const values = { value, setValue };

  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
