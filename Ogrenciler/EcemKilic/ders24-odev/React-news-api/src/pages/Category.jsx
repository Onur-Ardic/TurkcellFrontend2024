import { useParams } from 'react-router-dom';
import NewsList from '../components/NewsList';

const Category = () => {

    const { category } = useParams();

  return (
    <div>
      <NewsList category={category} />
    </div>
  )
}

export default Category
