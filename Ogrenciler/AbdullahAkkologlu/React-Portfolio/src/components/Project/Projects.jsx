import { Container } from "../../styles";
import Project from "./Project";

const Projects = () => {
  return (
    <Container>
      <Project
        gif="assets/bookify.gif"
        name="Bookify"
        techs={["html", "css", "sass", "bootstrap", "js"]}
        desc="With the Bookify project, you can create your own library, use it as a
        wishlist or keep track of the books you read. In this project, I used
        Bootstrap and SCSS in the UI to create a modern design. I used
        JSON-Server to save the data and performed all frontend operations with
        Vanilla JavaScript."
      />
    </Container>
  );
};

export default Projects;
