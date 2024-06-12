import { createContext, useState, useEffect, useContext } from "react";
import { PropTypes } from "prop-types";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const values = { counter, setCounter };
  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
};

CounterProvider.propTypes = { children: PropTypes.node.isRequired };
export const useCounter = () => useContext(CounterContext);
