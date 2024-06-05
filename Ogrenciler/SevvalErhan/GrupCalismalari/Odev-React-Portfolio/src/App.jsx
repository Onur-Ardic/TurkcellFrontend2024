import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import { GlobalStyle } from './styled';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Hero/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
