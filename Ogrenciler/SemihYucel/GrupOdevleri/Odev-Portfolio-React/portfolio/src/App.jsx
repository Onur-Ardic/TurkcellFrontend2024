import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: #000;
    color: #fff;
    overflow-x: hidden;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Header />
    <About />
    <Projects />
    <Contact />
  </>
);

export default App;
