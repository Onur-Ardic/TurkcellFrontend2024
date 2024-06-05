import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./style/Global";

function App() {
  const theme = {
    colors: {
      white: "#fff",
      black: "#000",
      pastelblue: "#bde0fe",
    },
    gradients: {
      gradientheader: "linear-gradient(90deg, #FFAFCC, #c68da3)",
      gradientfirst: "linear-gradient(135deg, #ffc8dd, #a2d2ff)",
      gradientsecond: "linear-gradient(135deg, #a2d2ff,#ffc8dd)",
      gradientthird: "linear-gradient(270deg, #ffc8dd, #a2d2ff)",
      gradientfour: "linear-gradient(135deg, #ffc8dd,#cdb4db)",
    },

    icons: {
      default: {
        size: "24px",
        color: "#9b7fab",
      },
    },
    responsive: {
      medium: "768px",
      small: "500px",
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
