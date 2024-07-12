"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/slices/darkSlice";
import { useEffect } from "react";

const ToggleThemeButton = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "black" : "white";
    document.body.style.color = darkMode ? "white" : "black";
  }, [darkMode]);

  return (
    <button
      className="btn border-0 ps-3 bg-white"
      onClick={() => dispatch(toggleTheme())}
    >
      {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ToggleThemeButton;
