import React from 'react';
import styled from 'styled-components';
import Header from './components/Header.jsx';
import Router from './router/Router.jsx';

const PageContainer = styled.div`
  padding: 50px 100px;
  background: #F5F5F5;
  color: #003459;
`;

function App() {
  return (
    <>
      <Header />
      <PageContainer>
        <Router />
      </PageContainer>
    </>
  );
}

export default App;


 

  