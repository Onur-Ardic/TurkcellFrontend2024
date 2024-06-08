// import { useRef, useState } from "react";
// import styled from "styled-components";
import "./App.css";
// import Portal from "./components/Portal";
import { Button1, Button2 } from "./styled";

function App() {
  // const Button1 = styled.button`
  //   background-color: red;
  //   border-radius: 25px;
  // `;
  // const Button2 = styled(Button1)`
  //   background-color: green;
  //   font-size: ${(props) => props.size}px;
  // `;
  // const divRef = useRef();
  // let [portalTarget, setPortalTarget] = useState(document.body);
  // let textPortal = "Body";
  // const handlePortal = () => {
  //   setPortalTarget(divRef.current);
  //   textPortal = "divRef";
  //   console.log(divRef.current.textContent);
  // };
  return (
    <>
      {/* <button onClick={() => handlePortal()}>Tıkla</button>
      <div ref={divRef}>ref Deneme Yazısı</div>
      <div>Benim Uygulama</div>
      <Portal text={textPortal} target={portalTarget} /> */}
      <button>Örnek 1</button>
      <Button1>Örnek 2</Button1>
      <Button2 size="30">Örnek 3</Button2>
    </>
  );
}

export default App;
