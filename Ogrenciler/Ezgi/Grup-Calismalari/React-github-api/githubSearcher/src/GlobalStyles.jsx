import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-image: url("https://img.freepik.com/free-vector/gradient-technology-background_23-2148884153.jpg");
    background-size: cover;
    background-position: center;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
