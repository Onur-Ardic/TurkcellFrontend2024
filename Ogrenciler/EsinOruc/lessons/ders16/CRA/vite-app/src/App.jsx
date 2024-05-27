import { useState } from "react";
import "./App.css";
import Deneme from "./components/Deneme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Deneme isim="Varol" yas="23"></Deneme>
      <Deneme isim="Veli" />
      <Deneme isim="Erkan" />
    </div>
  );
}

export default App;
