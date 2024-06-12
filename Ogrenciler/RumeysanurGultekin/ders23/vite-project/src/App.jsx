import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './context/Header'
import { ThemeContext } from './context/ThemeContext.jsx'
import Button from './components/Button.jsx'



function App() {
  
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
  })

  return (
    <ThemeContext.Provider value= {{countData, count, theme}}>
      <Header />
      <Button  />
    </ThemeContext.Provider>
  )
}

export default App
