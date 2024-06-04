import "./App.css";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Articles from "./components/Project/Article/Articles";
import Projects from "./components/Project/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Projects />
      <Articles />
    </>
  );
}

export default App;
