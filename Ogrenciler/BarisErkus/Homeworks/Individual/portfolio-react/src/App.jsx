import React, { lazy, Suspense } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import "./App.css";
import Hero from "./Components/Hero";
import Social from "./Components/Social";
import Navigation from "./Components/Navigation";
import Loader from "./Components/Loader";
import { Analytics } from "@vercel/analytics/react";

const Skills = lazy(() => import("./Components/Skills/Skills"));
const About = lazy(() => import("./Components/About"));
const Projects = lazy(() => import("./Components/Projects/Projects"));
const Experience = lazy(() => import("./Components/Experience/Experience"));
const Contact = lazy(() => import("./Components/Contact"));

function App() {
  return (
    <ThemeProvider>
      <div className="Hero">
        <Analytics />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Navigation />
      </div>
    </ThemeProvider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <App />,
    children: [
      { path: "/", exact: true, element: <Hero /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/skills", exact: true, element: <Skills /> },
      { path: "/projects", exact: true, element: <Projects /> },
      { path: "/experience", exact: true, element: <Experience /> },
      { path: "/contact", exact: true, element: <Contact /> },
    ],
  },
]);

const Root = () => {
  return <RouterProvider router={appRouter} />;
};

export default Root;
