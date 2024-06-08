import { useParams } from "react-router-dom";

const NewDetail = () => {
    
  const { id } = useParams();
  return <div>ParametreView {id}</div>;
}

export default NewDetail