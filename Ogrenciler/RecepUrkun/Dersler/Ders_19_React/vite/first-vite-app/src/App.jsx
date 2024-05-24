import "./App.css";
import Deneme from "./components/Deneme";
// import DenemeClass from "./components/DenemeClass";

function App() {
  return (
    <>
      <Deneme isim="Recep" yas="25" />
      <Deneme isim="Varol" />
      <Deneme isim="Alara" yas="32"  />
      {/* <DenemeClass isim="Recep" />  */}
    </>
  );
}

export default App;
