import "./App.css";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Project/Projects";
import Articles from "./components/Article/Articles";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <div className="container">
        <Navbar />
        <Landing />
        <Projects />
        <Articles />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
