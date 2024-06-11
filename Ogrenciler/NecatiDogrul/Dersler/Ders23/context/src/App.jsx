import React from "react";
import Button from "./components/Button";
import { useTheme } from "./context/ThemeContext";
import "./App.css";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>Tema Değiştirme Uygulaması</h1>
      <Button />
      <Button></Button>
    </div>
  );
}

export default App;
