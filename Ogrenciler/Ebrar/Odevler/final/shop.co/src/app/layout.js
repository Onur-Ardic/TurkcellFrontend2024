"use client"

import { Inter } from "next/font/google";
import "../../i18n";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Provider } from "react-redux";
import store from "../redux/store/index";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          {" "}
          <ToastContainer />
          {children}
        </body>
      </html>
    </Provider>
  );
}
