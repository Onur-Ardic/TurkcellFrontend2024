import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { courses } from "./components/Data";
import Course from "./components/Course";

function App() {
  return (
    <>
      {courses?.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
}

export default App;
