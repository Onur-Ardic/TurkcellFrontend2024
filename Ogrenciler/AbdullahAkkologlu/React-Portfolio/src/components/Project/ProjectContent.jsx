import {
  Col,
  ProjectName,
  ProjectDesc,
  UnderLineDiv,
  ConnectButton,
  RowBetween,
} from "../../styles";
import Techs from "../Landing/Techs";

const ProjectContent = ({ name, techs, desc, demo, code }) => {
  return (
    <Col width={55}>
      <UnderLineDiv>
        <ProjectName>{name}</ProjectName>
        <Techs techs={techs} />
      </UnderLineDiv>
      <ProjectDesc>{desc}</ProjectDesc>
      <RowBetween>
        <Col width={45}>
          <ConnectButton href={demo} target="_blank">
            Demo
          </ConnectButton>
        </Col>
        <Col width={45}>
          <ConnectButton href={code} target="_blank">
            Code
          </ConnectButton>
        </Col>
      </RowBetween>
    </Col>
  );
};

export default ProjectContent;
