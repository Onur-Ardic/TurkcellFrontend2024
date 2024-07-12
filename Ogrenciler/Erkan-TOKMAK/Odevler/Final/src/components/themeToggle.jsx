"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../lib/features/theme/themeSlice';
import { FaSun, FaMoon } from 'react-icons/fa';
import { IconContainer, ToggleButton } from '@/styles/ComponentStyle';


const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);


  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <ToggleButton onClick={handleToggle} darkMode={darkMode}>
      <IconContainer>
        {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
      </IconContainer>
    </ToggleButton>
  );
};

export default ThemeToggle;