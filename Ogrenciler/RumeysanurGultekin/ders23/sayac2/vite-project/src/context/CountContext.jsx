import {useContext, createContext, useState, useEffect} from 'react'

const CountContext = createContext();

export const CountProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }
    const countData = () => {
    setCount(prevCount => prevCount + 1);
    changeTheme();
  };

    useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <CountContext.Provider value= {{countData, count, theme}}>
      {children}
    </CountContext.Provider>
  )
}

export const useCount = () => useContext(CountContext)