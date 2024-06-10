import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Arttır
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          if (count <= 0) {
            alert("Negatif değere gidemezsin.");
            return;
          }
          setCount(count - 1);
        }}
      >
        Azalt
      </button>
    </>
  );
}

export default App;
