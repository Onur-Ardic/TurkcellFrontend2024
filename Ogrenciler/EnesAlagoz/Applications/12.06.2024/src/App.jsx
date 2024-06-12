import { useEffect, useState } from "react";
import { MainContext } from "./components/context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [logoText, setLogoText] = useState("alagoz.net");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const data = {
    theme,
    setTheme,
    logoText,
    setLogoText,
  };

  return (
    <MainContext.Provider value={data}>
      <Header theme={theme} />
      <Footer theme={theme} setTheme={setTheme} />
    </MainContext.Provider>
  );
}

export default App;
