import { useEffect } from "react";
// import { getCategory, getSearch } from '../api/request';
import Card from "../components/card";
import { LoadingP, ShowContainer } from "../StyledComponent";

const ShowView = ({ showCategory, loading, error, data, setCategory }) => {
  useEffect(() => {
    setCategory(showCategory);
  }, [showCategory]);
  return (
    <ShowContainer>
      {loading ? (
        <LoadingP>Loading...</LoadingP>
      ) : error ? (
        <p>Error: {error}</p>
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
