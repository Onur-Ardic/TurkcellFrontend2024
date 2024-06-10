import { useTheme } from "../context/ThemeContext";

const Button = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <h>Theme: {theme}</h>
      <button className="btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Tema Değiştir
      </button>
    </div>
  );
};

export default Button;
