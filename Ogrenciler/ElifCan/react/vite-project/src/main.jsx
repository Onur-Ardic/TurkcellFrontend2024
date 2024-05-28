import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//StrictMode=anlamlı hatalar gösterir. 2 kez çalışıyor bazen ama bunda kullanmasan da olur.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
