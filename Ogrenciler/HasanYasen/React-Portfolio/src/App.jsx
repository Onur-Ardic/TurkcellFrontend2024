import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Socials from "./components/Socials"
import Projects from "./components/Projects"

import "./App.css"

function App() {
  return (
    <>
      <Header />
      <section>
        <div className="container flex jc-sbetween" style={{ gap: "30px" }}>
          <div className="left">
            <Home />
          </div>
          <div className="right">
            <About />
            <Socials />
          </div>
        </div>
        <Projects />
      </section>
      <div className="body-circle"></div>
    </>
  )
}

export default App