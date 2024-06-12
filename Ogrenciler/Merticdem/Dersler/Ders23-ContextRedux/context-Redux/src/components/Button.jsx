import { useTheme } from "../context/ThemeContext";

const Button = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h2>Aktif tema;</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
};

export default Button;
