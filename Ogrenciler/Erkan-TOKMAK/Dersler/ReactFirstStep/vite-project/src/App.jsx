import './App.css'
import Deneme from './components/Deneme';
import TestClass from './components/TestClass';

function App() {

  return (
    <>
      <Deneme isim="Erkan" yas={23}/>
      <Deneme isim="Waroi"/>
      <Deneme isim="Retr0ff" yas={30}/>
      <TestClass isim="Erkan" />
    </>
  )
}

export default App
