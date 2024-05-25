
import './App.css';
import Deneme from "./components/Deneme";
// import DenemeClass from "./components/DenemeClass";


function App() {

  return (
    <>
      <Deneme isim="Sevval" yas="24"/> 
      <Deneme isim="Sevval" /> 
      <Deneme isim="Esin" yas="24"/> 
      {/* <DenemeClass isim="Sevval"/> */}
    </>
  )
}

export default App;
