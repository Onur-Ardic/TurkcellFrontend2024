import {createContext, useState, useContext, useEffect } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(localStorage.getItem("counter") || 0);

    useEffect(()=>{
        localStorage.setItem('counter', counter)
    },[counter])

    const values = {counter, setCounter}

  return (<CounterContext.Provider value={values}>{children}</CounterContext.Provider>)
}

export const useCounter = () => useContext(CounterContext)

