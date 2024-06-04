import { Title } from "../../../../common/styled";
import AcademicCard from "../AcademicCard";

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
      title: (
        <a
          href="https://www.linkedin.com/in/bariserkus/"
          target="_blank"
          style={{ fontSize: "1.25rem" }}
        >
          You can access all my certificates from my LinkedIn profile.
        </a>
      ),
    },
  ];
  return (
    <>
      <Title>Certificates</Title>
      {certificates.map((certificate, index) => (
        <AcademicCard key={index} {...certificate} />
      ))}
    </>
  );
};

export default Certificates;
