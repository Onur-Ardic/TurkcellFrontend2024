import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'

const Button = () => {
  const { countData, count, theme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={countData}>
          count is {count}
        </button>
        <p>
          React Context Homework
        </p>
    </div>
        
    
  )
}

export default Button