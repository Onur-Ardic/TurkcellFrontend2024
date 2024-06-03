import "./App.css";
import AboutMe from "./components/AboutMe";
import AcademicInfo from "./components/AcademicInfo";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const email = "1bariserkus@gmail.com";

  const socialMediaLinks = {
    github: "https://github.com/1BarisErkus",
    linkedin: "https://www.linkedin.com/in/bariserkus/",
    medium: "https://medium.com/@baris.erkus",
  };

  return (
    <>
      <Navbar email={email} />
      <Home socialMediaLinks={socialMediaLinks} email={email} />
      <AboutMe />
      <AcademicInfo />
    </>
  );
}

export default App;
