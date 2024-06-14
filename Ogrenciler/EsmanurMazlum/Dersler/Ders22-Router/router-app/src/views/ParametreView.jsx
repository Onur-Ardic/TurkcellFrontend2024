import { useParams } from 'react-router-dom';

function ParametreView() {
    const {id} = useParams();
  return (
    <div>ParametreView {id}</div>
  )
}

export default ParametreView