import "./App.css";
import Deneme from "./components/Deneme";
// import DenemeClass from "./components/DenemeClass";

function App() {
  return (
    <>
      <Deneme isim="Buğra" yas="23" />
      <Deneme isim="Buğra" />
      <Deneme isim="bugra" yas="23" />
      {/* <DenemeClass isim="Buğra" /> */}
    </>
  );
}

export default App;
