import { Title } from "../../../../common/styled";
import AcademicCard from "../AcademicCard";

const Experiences = () => {
  const experiences = [
    {
      company: "Tosyalı Holding",
      title: "Research And Development Intern",
      startDate: "February 2024",
      endDate: "May 2024",
      desc: "In this process, I improved my engineering skills. In the field of engineering; I learned about literature, patents, OPEX, R&D and RPA. Also in the field of computer engineering; I developed an application with artificial intelligence, made screen drawings of a web application using figma and coded these drawings using react.",
    },
    {
      company: "Freelance (Contract)",
      title: "Full Stack Engineer",
      startDate: "November 2023",
      endDate: "January 2024",
      desc: "I made improvements and optimizations to the front end, which was previously written in React Native. We also wrote the backend from scratch using ExpressJS. I also took part in the deployment processes.",
    },
    {
      company: "Vardabit Software",
      title: "Full Stack Engineer",
      startDate: "January 2023",
      endDate: "September 2023",
      desc: "I wrote a Restful API from scratch using .Net on the backend. I also helped my colleagues with React on frontend and React Native on mobile.",
    },
    {
      company: "Tosyalı Holding",
      title: "Software Engineer Intern",
      startDate: "July 2023",
      endDate: "August 2023",
      desc: "I drew the screens of the Mobile Applications developed by the Software Team and We worked together on React-Native.",
    },
    {
      company: "Vardabit Software",
      title: "Software Engineer Intern",
      startDate: "October 2022",
      endDate: "January 2023",
      desc: "I worked generally on the backend. I worked on a real project using C# (.NET) and SQL Server (EntityFramework).",
    },
    {
      company: "Net Informatics & Soft Services",
      title: "Software Engineer Intern",
      startDate: "September 2022",
      endDate: "July 2022",
      desc: "I trained myself in developing Full Stack applications using Angular, C# (.NET), MSSQL (Dapper).",
    },
  ];
  return (
    <>
      <Title as="h1" id="experience-title" aria-labelledby="experience-title">
        Experiences
      </Title>
      {experiences.map((experience, index) => (
        <AcademicCard key={index} {...experience} />
      ))}
    </>
  );
};

export default Experiences;
