import "./App.css";
import Deneme from "./components/Deneme";
// import DenemeClass from "./components/DenemeClass";
function App() {
  return (
    <>
      <Deneme isim="Aleyna" yas="24" />

      <Deneme isim="Ertok" />

      <Deneme isim="Aleyna" yas="24" />

      {/* <DenemeClass isim="Aleyna" /> */}
    </>
  );
}

export default App;
