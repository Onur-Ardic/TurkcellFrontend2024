import React from "react";
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
