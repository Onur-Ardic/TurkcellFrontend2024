import { useParams } from "react-router-dom";

const NewDetail = () => {
  const { id } = useParams();
  return <div>Haber Detayları {id}</div>;
};

export default NewDetail;
