import React from 'react'
import { useTheme } from '../context/ThemeContext';

function Button() {
    const { theme, setTheme } = useTheme();
  return (
    <div>
        <h2>Aktif Tema: {theme}</h2>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Tema Değiştir
        </button>
    </div>
  )
}

export default Button