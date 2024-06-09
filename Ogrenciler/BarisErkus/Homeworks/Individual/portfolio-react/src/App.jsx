import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Baris Erkus - Portfolio</title>
        <meta name="description" content="Baris Erkus's portfolio site." />
        {/* Other SEO meta tags */}
      </Helmet>
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
