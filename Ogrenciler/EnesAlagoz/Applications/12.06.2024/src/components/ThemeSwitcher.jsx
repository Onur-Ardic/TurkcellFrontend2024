import { MainContext, useContext } from "./context";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(MainContext);
  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return <button onClick={switchTheme}>Switch Theme</button>;
};

export default ThemeSwitcher;
