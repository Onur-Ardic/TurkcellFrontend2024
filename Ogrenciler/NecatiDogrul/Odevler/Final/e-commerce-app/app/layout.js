"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}

export default RootLayout;
