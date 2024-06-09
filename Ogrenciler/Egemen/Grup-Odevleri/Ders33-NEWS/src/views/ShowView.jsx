import { useEffect, useState } from 'react'
import { readData } from '../api/request';
import Card from '../components/card';

const ShowView = ({category}) => {
    const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const getNews = async () => {
    try {
      setLoading(true);
      const result = await readData(category);
      setData(result.articles);
    } catch (error) {
    //   setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  // getNews();
  useEffect(() => {
    getNews();
  }, [category]);
  return (
    <div className="row mx-0 gap-3 justify-content-center">
      {loading? (
        <p className="d-flex justify-content-center align-items-center vh-100 fs-1">
          Loading...
        </p>
      ) : (<>{data.map((item, index) => <Card key={index} data={item} />)}</>)}
      
    </div>
  )
}

export default ShowView