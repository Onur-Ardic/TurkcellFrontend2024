import "./App.css";
import { useTheme } from "./context/ThemeContext";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className={'app ${theme}'}></div>

    </>
  );
}

export default App;
