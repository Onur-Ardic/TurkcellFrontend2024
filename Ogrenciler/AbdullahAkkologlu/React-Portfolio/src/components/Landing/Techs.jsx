import Tech from "./Tech";
import { TechsUl } from "../../styles";

const Techs = ({ techs }) => {
  return (
    <div>
      <TechsUl className="justify-content-center justify-content-sm-start">
        {techs.map((tech, index) => (
          <Tech key={index} tech={tech} />
        ))}
      </TechsUl>
    </div>
  );
};

export default Techs;
