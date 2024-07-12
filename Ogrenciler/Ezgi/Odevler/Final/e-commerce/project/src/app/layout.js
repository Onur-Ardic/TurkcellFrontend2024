"use client";
import React from 'react';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import store from './redux/store';
import GlobalStyle from './components/styles/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import Footer from './components/Footer';


const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
      <GlobalStyle />
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
    </Provider>
  );
}
