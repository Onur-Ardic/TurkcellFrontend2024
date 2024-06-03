
import Navbar from './component/Navbar.jsx'
import Skills from './component/Skills.jsx'
import Contact from './component/Contact.jsx'
import Projects from './component/Project.jsx'
import Aboutme from './component/Aboutme.jsx'

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Aboutme />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
      
    </>
  )
}

export default App
