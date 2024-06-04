import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyle from './components/GlobalStyle';


const AppContainer = styled.div`
  font-family: "Nunito", sans-serif;
  text-align: center;
  background-color: #f5f5f5;
`;

const MainContainer = styled.main`
position: relative;
  z-index: 1;

`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <MainContainer >
        <About />
        <Projects />
        <Contact />
        <Footer />
      </MainContainer>
    </AppContainer>
  );
}

export default App;
