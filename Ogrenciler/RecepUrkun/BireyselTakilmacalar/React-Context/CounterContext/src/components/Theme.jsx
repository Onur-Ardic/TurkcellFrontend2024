import React from "react";
import { useTheme } from "../context/ThemeContext";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="themeWrapper p-20">
      <h2 className="header">
        Aktif Tema: <i className="currentTheme">{theme}</i>
      </h2>
      <button
        className="btn"
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      >
        Temayi Degistir
      </button>
    </div>
  );
};

export default Theme;
