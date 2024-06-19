import { Image } from "../../styles";

const ProjectDemo = ({ gif }) => {
  return (
    <div className="col-md-4 col-12">
      <Image src={gif} alt="" />
    </div>
  );
};

export default ProjectDemo;
