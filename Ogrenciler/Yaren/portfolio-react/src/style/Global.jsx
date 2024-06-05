import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Reddit-Mono:wght@400;700&display=swap');

* {
    margin: 0;
    box-sizing: border-box;
}

body {  

    font-size: 1.1rem;
    font-family: 'Reddit-Mono', monospace;
}

p {
    line-height: 1.4;
  
}
`;
