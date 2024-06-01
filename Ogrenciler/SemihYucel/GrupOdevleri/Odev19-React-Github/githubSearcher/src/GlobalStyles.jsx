import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    background-image: url("https://img.freepik.com/free-vector/gradient-technology-background_23-2148884153.jpg");
    background-size: cover; /* Arka plan resminin kapsama alanını belirler */
    background-position: center; /* Resmi ortalar */
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
