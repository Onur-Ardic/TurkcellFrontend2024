import { TechLi } from "../../styles";
const Tech = ({ tech }) => {
  return (
    <TechLi>
      <img src={`https://skillicons.dev/icons?i=${tech}`} alt={tech} />
    </TechLi>
  );
};

export default Tech;
