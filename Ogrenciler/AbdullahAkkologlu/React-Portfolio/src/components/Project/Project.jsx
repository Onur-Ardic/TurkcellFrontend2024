import { RowBetween } from "../../styles";
import ProjectContent from "./ProjectContent";
import ProjectDemo from "./ProjectDemo";

const Project = ({ gif, name, techs, desc }) => {
  return (
    <RowBetween>
      <ProjectContent name={name} techs={techs} desc={desc} />
      <ProjectDemo gif={gif} />
    </RowBetween>
  );
};

export default Project;
