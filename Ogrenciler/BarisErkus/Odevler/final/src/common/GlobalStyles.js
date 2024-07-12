"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #fff;
        --secondary: #000;
        --tertiary: #f2f0f1;
        --quaternary: #f8f9fa;
        --filter-background: #fff;
        --filter-hover: #e0e0e0
    }

    [data-theme="dark"] {
        --primary: #000;
        --secondary: white;
        --tertiary: #1a1a1a;
        --quaternary: #171717;
        --filter-background: #171717;
        --filter-hover: #2a2a2a;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: var(--font-satoshi), sans-serif;
        background-color: var(--primary);
        color: var(--secondary);
    }
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    button {
        cursor: pointer;
    }
    ul {
        list-style: none;
        margin: 0;
    }
    h1, h2, h3, h4 {
        font-family: var(--font-integralFc), sans-serif;
    }
`;

export default GlobalStyles;
