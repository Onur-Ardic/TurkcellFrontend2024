import React from "react";
import { useSelector } from "react-redux";
import Todos from "./components/Todos";
import { ThemeProvider } from "styled-components";
import { themes } from "./style/styled";
import Navbar from "./components/Navbar";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <ThemeProvider theme={themes[theme]}>
      <BrowserRouter>
        <div className={`app ${theme}`}>
          <Navbar />
          {/* <Todos /> */}
          <Router />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
