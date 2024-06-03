import { Col, Container } from "../../common/styled";
import Certificates from "./Certificates";
import Education from "./Education";
import Experiances from "./Experiances";

const AcademicInfo = () => {
  return (
    <Container id="worksEducations" direction="row" justifycontent="center">
      <Col width="50%">
        <Experiances />
      </Col>
      <Col width="50%">
        <Education />
        <Certificates />
      </Col>
    </Container>
  );
};

export default AcademicInfo;
