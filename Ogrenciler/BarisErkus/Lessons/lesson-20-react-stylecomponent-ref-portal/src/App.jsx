// import { useEffect, useRef } from "react";
import "./App.css";
// import Portal from "./components/Portal";
import styled from "styled-components";

function App() {
  const Button1 = styled.button`
    background-color: red;
    border-radius: 30px;
  `;
  // const divRef = useRef();

  // useEffect(() => {
  //   divRef.current.textContent = "red";
  // }, []);

  return (
    <>
      {/* <button onClick={() => console.log(divRef)}>Tıkla</button> */}
      {/* <div ref={divRef}>ref deneme yazısı</div> */}
      {/* <Portal text="Body'de bir yer" target={document.body} /> */}
      <button>Örnek 1</button>
      <Button1>Örnek 2</Button1>
    </>
  );
}

export default App;
