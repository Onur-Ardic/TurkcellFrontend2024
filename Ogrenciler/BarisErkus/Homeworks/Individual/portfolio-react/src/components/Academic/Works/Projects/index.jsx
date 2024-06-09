import { Title } from "../../../../common/styled";
import WorksCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      img: "billboard.png",
      title: "Billboard Management System",
      desc: "This mobile application can be used by two different types of users. The first type of user is the billboard owner, who is provided with an environment where they can easily track and rent the billboards they own. The second type of user is the advertiser, who can view and rent available billboards on the map and track the billboards they have rented. The main purpose of the project is to digitize all billboard operations.",
      techStack: "React Native, .Net (C#), SQL Server",
    },
    {
      img: "bookstore.png",
      title: "Bookstore",
      desc: "This mobile application allows you to create your own library. You can uploadthe desired book in PDF format to the application, and the book will be in yourpocket! You can take individual notes on each page of the book and study thesenotes later. Additionally, if you wish, you can share your books with other usersand allow them to comment. While physical books are much more valuable, themain goal of this project is to create a collection of books that can fit in yourpocket and be accessible at any time. You can also add physical purchase linksfor books if you want.",
      techStack: "React Native, TypeScript, ExpressJs, MySQL",
    },
    {
      img: "lotostandard.png",
      title: "Loto Standard",
      desc: "Using the Onion architecture and various design patterns, the backend of a mobile application was developed to allow the creation of maintenance instructions for each machine in the factory.",
      techStack: ".Net Core (C#), SQL Server",
    },
    {
      img: "vardaservice.png",
      title: "Varda Service",
      desc: "A Windows service that automatically transfers specified fields from a defined database to corresponding fields in another database for a specified period of time.",
      techStack: "C#, SQL Server, Windows Services",
    },
    {
      img: "spa.png",
      title: "Standard Programming Assistant",
      desc: "It is a database tool that can automatically create a model, prepare a merge query, and generate a procedure. The aim of the project is to automate and expedite the functions that programmers often use on the SQL side.",
      techStack: "C#, SQL Server, Windows Forms",
    },
  ];

  return (
    <section aria-labelledby="projects-title">
      <Title as="h1" id="projects-title">
        Projects
      </Title>
      {projects.map((project, index) => (
        <WorksCard
          key={index}
          img={project.img}
          title={project.title}
          desc={project.desc}
          techStack={project.techStack}
        />
      ))}
    </section>
  );
};

export default Projects;
