// import { useRef, useState } from 'react'
// import Portal from "./components/Portal";
import styled from 'styled-components';
import "./App.css"
function App() {
  const Button1 = styled.button`
  background-color: red;
  border-radius: 25px;
  `
  const Button2 = styled(Button1)`
  background-color: green;
  font-size: ${(props)=> props.size}px;
  `
  // const divRef = useRef(null)
  // let textPortal = "Body"
  // let [portalTarget, setPortalTarget] = useState(document.body)
  // const handlePortal = () => {
  //   setPortalTarget(divRef.current);
  //   textPortal = "divRef";
  // }
  return (
    <>
    {/* <button onClick={()=> console.log(divRef.current.textContent)}>Tıkla</button>
    <button onClick={()=> handlePortal()}>Tıkla</button>
     <div ref={divRef}>ref deneme yazısı</div>
     <div>benim uygulama</div>
     <Portal text={textPortal} target={portalTarget}/> */}
     <button>Örnek 1</button>
     <Button1>Örnek 2</Button1>
     <Button2 size="30">Örnek 3</Button2>
    </>
  )
}

export default App
