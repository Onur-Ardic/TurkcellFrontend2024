import { RowBetween, PaddingY } from "../../styles";
import ProjectContent from "./ProjectContent";
import ProjectDemo from "./ProjectDemo";

const Project = ({ gif, name, techs, desc }) => {
  return (
    <PaddingY>
      <RowBetween>
        <ProjectContent name={name} techs={techs} desc={desc} />
        <ProjectDemo gif={gif} />
      </RowBetween>
    </PaddingY>
  );
};

export default Project;
