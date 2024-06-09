import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import AcademicInfo from "./components/Academic/Info";
import AcademicWorks from "./components/Academic/Works";

const App = () => {
  const email = "1bariserkus@gmail.com";
  const socialMediaLinks = {
    github: "https://github.com/1BarisErkus",
    linkedin: "https://www.linkedin.com/in/bariserkus/",
    medium: "https://medium.com/@baris.erkus",
  };
  return (
    <>
      <Navbar email={email} />
      <Home socialMediaLinks={socialMediaLinks} />
      <AboutMe />
      <AcademicInfo />
      <AcademicWorks />
    </>
  );
};

export default App;
