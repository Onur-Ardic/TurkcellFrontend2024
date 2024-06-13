import "./App.css";
import Button from "./components/Button";
import ShowInfo from "./components/ShowInfo";
import Theme from "./components/Theme";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <ShowInfo />
      <Button />
      <Theme />
    </div>
  );
}

export default App;
