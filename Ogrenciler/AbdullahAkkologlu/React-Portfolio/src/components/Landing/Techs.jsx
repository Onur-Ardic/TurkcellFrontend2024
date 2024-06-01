import Tech from "./Tech";
import { TechsUl } from "../../styles";

const Techs = () => {
  return (
    <div>
      <TechsUl>
        <Tech tech="html" />
        <Tech tech="css" />
        <Tech tech="sass" />
        <Tech tech="bootstrap" />
        <Tech tech="tailwind" />
        <Tech tech="js" />
        <Tech tech="react" />
        <Tech tech="styledcomponents" />
      </TechsUl>
    </div>
  );
};

export default Techs;
