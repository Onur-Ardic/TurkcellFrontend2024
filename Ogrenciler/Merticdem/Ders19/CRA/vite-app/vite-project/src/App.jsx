import "./App.css";
import Deneme from "./components/Deneme";
import DenemeClass from "./components/DenemeClass";

function App() {
  return (
    <>
      <Deneme isim="Mert" yas={24} />
      <DenemeClass isim="Mert" />
    </>
  );
}

export default App;
