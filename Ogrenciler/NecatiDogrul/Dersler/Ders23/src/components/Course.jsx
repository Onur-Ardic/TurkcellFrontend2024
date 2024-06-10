import React from "react";

const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.id}</h1>
      <h1>{course.title}</h1>
      <h1>{course.description}</h1>
      <h1>{course.price}</h1>
      <h1>{course.link}</h1>
      <h1>{course.image}</h1>
    </div>
  );
};

export default Course;
