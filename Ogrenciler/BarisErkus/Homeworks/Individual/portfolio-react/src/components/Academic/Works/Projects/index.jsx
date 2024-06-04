import { Title } from "../../../../common/styled";
import WorksCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      img: "billboard.png",
      title: "Billboard Management System",
      desc: "This mobile application can be used by two different types of users. The first type of user is the billboard owner: he is offered an environment where he can easily track and rent the billboards he owns. The second type of user is an advertiser: The advertiser can see and rent rental-eligible billboards on the map. It can also track the billboards it rents. The main purpose of the project is to put all the works of billboards into digital.",
      techStack: "React Native, .Net (C#), SQL Server",
    },
    {
      img: "bookstore.png",
      title: "Bookstore",
      desc: "This mobile application allows you to create your own library. You upload the desired book, which is the pdf version, to the application and the book is now in your pocket! You can take individual notes on each page of the book and then study these notes. At the same time, if you wish, you can also share your books with other users and allow them to comment. Of course, books are much more valuable physically, but the main goal of this project is to create a collection of books that can fit in your pocket and be accessible at any time. You can also add physical purchase links of books if you want.",
      techStack: "React Native, TypeScript, ExpressJs, MySQL",
    },
    {
      img: "lotostandard.png",
      title: "Loto Standard",
      desc: "Using the Onion architecture and many design models, the backend of a mobile application was written that allows the creation of maintenance instructions for each machine in the factory.",
      techStack: ".Net Core (C#), SQL Server",
    },
    {
      img: "vardaservice.png",
      title: "Varda Service",
      desc: "A windows service that automatically transfers the requested fields in a defined database to the corresponding fields in a different database for a certain period of time.",
      techStack: "C#, SQL Server, Windows Services",
    },
    {
      img: "spa.png",
      title: "Standard Programming Assistant",
      desc: "It is a database maid that can automatically create a model, prepare a merge query, and create a procedure. The aim of the project is to automate and speed up the functions that the programmer often uses on the SQL side.",
      techStack: "C#, SQL Server, Windows Forms",
    },
  ];

  return (
    <>
      <Title>Projects</Title>
      {projects.map((project, index) => (
        <WorksCard
          key={index}
          img={project.img}
          title={project.title}
          desc={project.desc}
          techStack={project.techStack}
        />
      ))}
    </>
  );
};

export default Projects;
