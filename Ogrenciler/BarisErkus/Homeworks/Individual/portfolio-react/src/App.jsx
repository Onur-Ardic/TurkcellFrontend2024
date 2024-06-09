import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
const LazyHome = React.lazy(() => import("./components/Home"));
const LazyAboutMe = React.lazy(() => import("./components/AboutMe"));
const LazyAcademicInfo = React.lazy(() => import("./components/Academic/Info"));
const LazyAcademicWorks = React.lazy(() =>
  import("./components/Academic/Works")
);

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
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHome socialMediaLinks={socialMediaLinks} />
        <LazyAboutMe />
        <LazyAcademicInfo />
        <LazyAcademicWorks />
      </Suspense>
    </>
  );
};

export default App;
