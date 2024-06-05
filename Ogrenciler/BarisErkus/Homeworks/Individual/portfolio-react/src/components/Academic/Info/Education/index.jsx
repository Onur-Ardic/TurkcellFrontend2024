import { Title } from "../../../../common/styled";
import AcademicCard from "../AcademicCard";

const Education = () => {
  const educations = [
    {
      company: "Turkcell",
      title: "Frontend Bootcamp Trainee",
      startDate: "March 2024",
      endDate: "July 2024",
    },
    {
      company: "Iskenderun Technical University",
      title: "Computer Engineering",
      desc: "3.54 GPA - (Highest Ranked Student)",
      startDate: "September 2020",
      endDate: "May 2024",
    },
  ];
  return (
    <>
      <Title as="h1" id="education-title" aria-labelledby="education-title">
        Education
      </Title>
      {educations.map((education, index) => (
        <AcademicCard key={index} {...education} />
      ))}
    </>
  );
};

export default Education;
