import { useEffect, useState } from "react";
import "./App.css";
import RingLoader from "react-spinners/RingLoader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <RingLoader
            color={"#2635C0"}
            loading={loading}
            override={override}
            size={125}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
