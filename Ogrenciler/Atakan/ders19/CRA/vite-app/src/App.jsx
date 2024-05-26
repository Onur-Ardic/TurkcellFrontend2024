import "./App.css";
import Deneme from "./components/Deneme";
import DenemeClass from "./components/DenemeClass";

function App() {
  return (
    <>
      <Deneme isim="Varol" yas="23" />
      <Deneme isim="Veli" />
      <Deneme isim="Erkan" yas="23" />
      {/* <DenemeClass isim="Varol"></DenemeClass> */}
    </>
  );
}

export default App;
