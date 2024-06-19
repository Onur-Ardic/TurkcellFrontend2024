import {
  ProjectName,
  ProjectDesc,
  UnderLineDiv,
  ConnectButton,
  RowBetween,
} from "../../styles";
import Techs from "../Landing/Techs";

const ProjectContent = ({ name, techs, desc, demo, code }) => {
  return (
    <div className="col-md-7 col-12">
      <UnderLineDiv>
        <ProjectName>{name}</ProjectName>
        <Techs techs={techs} />
      </UnderLineDiv>
      <ProjectDesc>{desc}</ProjectDesc>
      <RowBetween>
        <div className="col-5">
          <ConnectButton href={demo} target="_blank">
            Demo
          </ConnectButton>
        </div>
        <div className="col-5">
          <ConnectButton href={code} target="_blank">
            Code
          </ConnectButton>
        </div>
      </RowBetween>
    </div>
  );
};

export default ProjectContent;
