import "./App.css";
import Button from "./components/Button";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      Hello Context World
      <Button />
    </div>
  );
}

export default App;
