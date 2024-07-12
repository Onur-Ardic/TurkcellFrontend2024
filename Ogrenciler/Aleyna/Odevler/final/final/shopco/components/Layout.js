// components/Layout.js

import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globals.scss';
import theme from '../styles/theme';

const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  min-height: 100vh;
  padding: 20px;
`;

const Layout = ({ children }) => {
  const currentTheme = useSelector((state) => state.theme.mode);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <LayoutContainer>
        <Head>
          <title>E-Ticaret Projesi</title>
        </Head>
        {children}
        <GlobalStyles />
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
