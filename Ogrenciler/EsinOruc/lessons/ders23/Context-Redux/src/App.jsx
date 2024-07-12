import { useState } from "react";
import "./App.css";
import { useTheme } from "./context/ThemeContext";
import Button from "./components/Button";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <div className={`app ${theme}`}>
        <Button />
      </div>
    </>
  );
}

export default App;
