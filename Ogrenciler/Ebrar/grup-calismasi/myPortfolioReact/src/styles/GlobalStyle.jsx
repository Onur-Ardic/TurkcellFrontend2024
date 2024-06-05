import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
  }

  html {
    font-size: 10px;
  }

  body {
    background: #141416;
     font-family: DM Sans;
    
  }

  .container {
    width: 100%;
    max-width: 1300px;
    padding: 0 24px;
    margin: 0 auto;
  }

`;

export default GlobalStyle;
