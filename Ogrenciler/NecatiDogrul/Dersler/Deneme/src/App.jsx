import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [vize1, setVize1] = useState();
  const [vize2, setVize2] = useState();

  const ortalamaAl = (vize1,vize2 ) =>{
    
  }

  return (
    <>
      <Input onChange={setVize1} value={vize1} />
      <Input onChange={setVize2} value={vize2} />
      <p>{vize1}</p>
      <p>{vize2}</p>
    </>
  );
}

export default App;
