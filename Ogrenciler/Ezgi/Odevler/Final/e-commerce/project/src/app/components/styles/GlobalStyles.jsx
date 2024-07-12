"use client";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
  }
   a{
    text-decoration: none;

    }
    li{
        list-style-type: none;
        
    }
   img{
        object-fit: cover
   }
  @font-face {
    font-family: 'Integral CF Bold';
    src: url('../assets/fonts/IntegralCF-Bold.ttf') 
    format('ttf');
    font-weight: normal;
    font-style: normal;
  }
    @font-face {
    font-family: 'Satoshi';
    src: url('../assets/fonts/Satoshi-Variable.otf') 
    format('opentype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalStyle;