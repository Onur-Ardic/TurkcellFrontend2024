import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    box-sizing:border-box;
}

body{
   background-color: ${({theme}) => theme.colors.body };
   font-size:1.1rem;
}

p{
    line-height:1.5;
}





`