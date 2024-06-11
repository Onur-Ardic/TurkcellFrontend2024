import { useTheme } from "../context/ThemeContext";

const Button = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Switch Theme
      </button>
    </div>
  );
};

export default Button;
