import { Col, Container } from "../../../common/styled";
import Certificates from "./Certificates";
import Education from "./Education";
import Experiences from "./Experiences";

const AcademicInfo = () => {
  return (
    <Container id="worksEducations" direction="row" justifycontent="center">
      <Col width="50%">
        <Experiences />
      </Col>
      <Col width="50%">
        <Education />
        <Certificates />
      </Col>
    </Container>
  );
};

export default AcademicInfo;
