import { Title } from "../../../../common/styled";
import AcademicCard from "../AcademicCard";

const Experiences = () => {
  const experiences = [
    {
      company: "Tosyalı Holding",
      title: "Research And Development Intern",
      startDate: "February 2024",
      endDate: "May 2024",
      desc: "During this process, I improved my engineering skills. In the field of engineering, I learned about literature, patents, OPEX, R&D, and RPA. Additionally, in the field of computer engineering, I developed an application with artificial intelligence, created screen designs for a web application using Figma, and coded these designs using React.",
    },
    {
      company: "Freelance (Contract)",
      title: "Full Stack Engineer",
      startDate: "November 2023",
      endDate: "January 2024",
      desc: "I made improvements and optimizations to the front end, which was previously written in React Native. We also wrote the backend from scratch using ExpressJS. Additionally, I took part in the deployment processes.",
    },
    {
      company: "Vardabit Software",
      title: "Full Stack Engineer",
      startDate: "January 2023",
      endDate: "September 2023",
      desc: "I wrote a RESTful API from scratch using .NET on the backend. I also helped my colleagues with React on the frontend and React Native on mobile.",
    },
    {
      company: "Tosyalı Holding",
      title: "Software Engineer Intern",
      startDate: "July 2023",
      endDate: "August 2023",
      desc: "I designed the screens for the mobile applications developed by the software team, and we worked together using React Native.",
    },
    {
      company: "Vardabit Software",
      title: "Software Engineer Intern",
      startDate: "October 2022",
      endDate: "January 2023",
      desc: "I worked mostly on the backend. I contributed to a real project using C# (.NET) and SQL Server (EntityFramework).",
    },
    {
      company: "Net Informatics & Soft Services",
      title: "Software Engineer Intern",
      startDate: "September 2022",
      endDate: "July 2022",
      desc: "I trained myself in developing full stack applications using Angular, C# (.NET), and MSSQL (Dapper).",
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
