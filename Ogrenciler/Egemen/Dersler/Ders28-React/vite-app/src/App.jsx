import './App.css'
import Deneme from "./components/Deneme";
// import DenemeClass from "./components/DenemeClass";

function App() {

  return (
    <>
      <Deneme isim="Egemen" yas={23}/>
      <Deneme isim="Haydar"/>
      <Deneme isim="Ege" yas={23}/>
      {/* <DenemeClass isim="Egemen" /> */}
    </>
  )
}

export default App
