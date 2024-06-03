import "./App.css";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./style/Global";

function App() {
  const theme = {
    colors: {
      pastelpink: "#FFC8DD",
      pastelblue: "#BDE0FE",
      footer: "#8a1c4a",
    },
    responsive: {
      medium: "768px",
      small: "500px",
    },
    icons: {
      default: {
        size: "2rem",
        color: "purple",
      },
      large: {
        size: "3rem",
        color: "red",
      },
      small: {
        size: "1.5rem",
        color: "blue",
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
