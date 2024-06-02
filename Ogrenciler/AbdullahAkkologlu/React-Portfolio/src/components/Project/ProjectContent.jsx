import { Col, ProjectName, ProjectDesc, UnderLineDiv } from "../../styles";
import Techs from "../Landing/Techs";

const ProjectContent = ({ name, techs, desc }) => {
  return (
    <Col width={55}>
      <UnderLineDiv>
        <ProjectName>{name}</ProjectName>
        <Techs techs={techs} />
      </UnderLineDiv>
      <ProjectDesc>{desc}</ProjectDesc>
    </Col>
  );
};

export default ProjectContent;
