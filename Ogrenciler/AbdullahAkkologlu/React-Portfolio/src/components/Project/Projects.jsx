import { Container } from "../../styles";
import Project from "./Project";
import { data } from "../../data";

const Projects = () => {
  return (
    <Container>
      {data.map((project, index) => (
        <Project
          key={index}
          gif={project.gif}
          name={project.name}
          techs={project.techs}
          desc={project.desc}
        />
      ))}
    </Container>
  );
};

export default Projects;
