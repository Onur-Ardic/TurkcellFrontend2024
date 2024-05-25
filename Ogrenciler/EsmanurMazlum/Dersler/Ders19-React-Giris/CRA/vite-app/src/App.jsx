import './App.css'
import Deneme from './components/Deneme'
// import DenemeClass from './components/DenemeClass';

function App() {

  return (
    <>
      <Deneme isim='Esmanur' yas='23'/>
      <Deneme isim='Varol'/>
      <Deneme isim='Serkan' yas='25'/>
      {/* <DenemeClass isim="Esmanur" /> */}
    </>
  )
}

export default App;
