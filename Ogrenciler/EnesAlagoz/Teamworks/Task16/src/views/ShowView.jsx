import { useEffect, useState } from "react";
import { readData } from "../api/request";
import Card from "../components/card";
import { LoadingP, ShowContainer } from "../StyledComponent";

const ShowView = ({ category }) => {
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
  };
  useEffect(() => {
    getNews();
  }, [category]);
  return (
    <ShowContainer>
      {loading ? (
        <LoadingP>Loading...</LoadingP>
      ) : (
        <>
          {data.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </>
      )}
    </ShowContainer>
  );
};

export default ShowView;
