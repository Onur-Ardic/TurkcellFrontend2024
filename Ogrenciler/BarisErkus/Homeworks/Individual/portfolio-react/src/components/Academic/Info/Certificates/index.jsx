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
      title: (
        <a href="https://www.linkedin.com/in/bariserkus/" target="_blank">
          You can access all my certificates from my LinkedIn profile.
        </a>
      ),
    },
  ];
  return (
    <>
      <Title>Certificates</Title>
      {certificates.map((certificate, index) => (
        <AcademicCard
          key={index}
          {...certificate}
          padding="30px 50px"
          br="200px"
        />
      ))}
    </>
  );
};

export default Certificates;
