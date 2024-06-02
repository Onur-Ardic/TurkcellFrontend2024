import { Col, Image } from "../../styles";

const ProjectDemo = ({ gif }) => {
  return (
    <Col width={35}>
      <Image src={gif} alt="" />
    </Col>
  );
};

export default ProjectDemo;
