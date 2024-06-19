import { Heading } from "../../styles";
import Project from "./Project";
import { data } from "../../data";

const Projects = () => {
  return (
    <>
      <Heading id="projectsHeading">— Projects —</Heading>
      {data.map((project, index) => (
        <Project
          key={index}
          gif={project.gif}
          name={project.name}
          techs={project.techs}
          desc={project.desc}
          demo={project.demo}
          code={project.code}
        />
      ))}
    </>
  );
};

export default Projects;
