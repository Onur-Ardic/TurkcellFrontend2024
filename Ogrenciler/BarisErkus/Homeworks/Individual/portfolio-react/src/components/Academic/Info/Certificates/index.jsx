import { Title } from "../../../../common/styled";
import AcademicCard from "../AcademicCard";
import { A } from "./styled";

const Certificates = () => {
  const certificates = [
    {
      company: "React 101 - 201 - 301 - 401",
      title: "Turkcell Writers of the Future",
    },
    {
      company: "React Native 101 - 201 - 301",
      title: "Turkcell Writers of the Future",
    },
    {
      company: "The Mobile App With React Native",
      title: "Patika.dev",
    },
    {
      company: "Web Programming with REACT",
      title: "BTK Academy",
    },
    {
      company: "Version Controls: Git and GitHub",
      title: "BTK Academy",
    },
    {
      company: "Software Design Patterns",
      title: "BTK Academy",
    },
    {
      company: "Project Management Fundamentals",
      title: "BTK Academy",
    },
    {
      company: "Every Aspect SQL Server",
      title: "BTK Academy",
    },
    {
      company: "C# - SQL - Javascript - React",
      title: "HackerRank",
    },
    {
      company: "Ways to Work Effectively and Efficiently at Home",
      title: "Udemy",
    },
    {
      company: (
        <A
          href="https://www.linkedin.com/in/bariserkus/details/certifications/"
          target="_blank"
        >
          You can access all my certificates from my LinkedIn profile.
        </A>
      ),
    },
  ];
  return (
    <>
      <Title as="h1" id="certificate-title" aria-labelledby="certificate-title">
        Certificates
      </Title>
      {certificates.map((certificate, index) => (
        <AcademicCard
          key={index}
          {...certificate}
          titlefs="1.25rem"
          direction="row"
        />
      ))}
    </>
  );
};

export default Certificates;
