import { useTheme } from "../context/ThemeContext";

const Button = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <p>Theme: {theme}</p>
      <br></br>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Switch Theme
      </button>
    </div>
  );
};

export default Button;
