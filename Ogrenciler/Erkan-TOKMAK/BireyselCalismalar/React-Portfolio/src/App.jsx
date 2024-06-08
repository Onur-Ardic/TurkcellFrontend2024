import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio'

function App() {

  return (
    <>
    <div className='container'>
      <Hero/>
      <AboutMe/>
      <Portfolio/>
    </div>
    </>
  )
}

export default App
