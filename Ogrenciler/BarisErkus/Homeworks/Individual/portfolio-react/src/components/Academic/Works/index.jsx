import { secondary } from "../../../common/colors";
import { Col, Container } from "../../../common/styled";
import Projects from "./Projects";
import Articles from "./Articles";

const Works = () => {
  return (
    <Container id="projectsArticles" bgcolor={secondary}>
      <Col width="50%">
        <Projects />
      </Col>
      <Col width="50%">
        <Articles />
      </Col>
    </Container>
  );
};

export default Works;
