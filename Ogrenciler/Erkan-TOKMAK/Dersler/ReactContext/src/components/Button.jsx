import React from 'react'
import { useTheme } from '../context/ThemeContext'
import '../Button.css'

const Button = () => {

    const { theme, setTheme } = useTheme();
  return (
    <div>
        <button className='btn' onClick={
            () => setTheme(theme === "dark" ? "light" : "dark")
        }>Change Theme </button>
    </div>
  )
}

export default Button