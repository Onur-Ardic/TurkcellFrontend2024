import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(()=>{
        localStorage.setItem("theme",theme);
    },[theme]);

    const values = { theme, setTheme };
  return (
    <div>
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    </div>
  )
}

export const useTheme = () => useContext(ThemeContext);