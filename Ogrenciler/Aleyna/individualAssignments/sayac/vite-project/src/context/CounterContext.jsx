import { createContext, useState, useEffect, useContext } from "react";
import { PropTypes } from "prop-types";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(
    Number(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const values = { count, setCount };

  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCounter = () => useContext(CounterContext);
