import { RowBetween, PaddingY } from "../../styles";
import ProjectContent from "./ProjectContent";
import ProjectDemo from "./ProjectDemo";

const Project = ({ gif, name, techs, desc, demo, code }) => {
  return (
    <PaddingY>
      <RowBetween className="gap-5 gap-md-1">
        <ProjectContent
          name={name}
          techs={techs}
          desc={desc}
          demo={demo}
          code={code}
        />
        <ProjectDemo gif={gif} />
      </RowBetween>
    </PaddingY>
  );
};
export default Project;
