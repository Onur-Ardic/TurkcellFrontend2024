import React, { createContext, useState } from 'react'

export const CountContext = createContext();

const CountProvider = ({children}) => {
    let [count,setCount] = useState(0);

    const increment = () => {
        setCount(++count);
    }
    const decrement = () => {
        setCount(--count);
    }
    const values = {increment,decrement,count}
  return (
    <div>
        <CountContext.Provider value={values}>{children}</CountContext.Provider>
    </div>
  )
}

export default CountProvider;