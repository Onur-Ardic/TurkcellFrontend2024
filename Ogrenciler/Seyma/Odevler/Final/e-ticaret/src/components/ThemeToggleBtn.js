'use client'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const ThemeToggleBtn = () => {
  const { isDarkMode, toggleTheme } = useState();

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="toggle-button"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <MoonIcon className="icon" />
      ) : (
        <SunIcon className="icon" />
      )}
    </button>
  );
};

export default ThemeToggleBtn;