import { useRef } from "react";
import "./App.css";
//import Portal from "./components/portal/Portal";
//import styled from "styled-components";

import { Button1, Button2 } from "./components/portal/styled";

function App() {
  //const divRef = useRef();
  // const Button1 = styled.button`
  //   background-color: red;
  //   border-radius: 25px;
  // `;
  // const Button2 = styled(Button1)`
  //   background-color: blue;
  //   font-size: ${(props) => props.size}px;
  // `;
  return (
    <>
      {/* <button onClick={() => console.log(divRef.current.textContent)}>
        Tıkla
      </button>
      <div ref={divRef}>REF DENEME YAZISI</div>
      <Portal text="Body de bir yer" target={divRef.current} /> */}

      <Button1>Örnek 1</Button1>
      <Button2>Örnek 2</Button2>
    </>
  );
}

export default App;
