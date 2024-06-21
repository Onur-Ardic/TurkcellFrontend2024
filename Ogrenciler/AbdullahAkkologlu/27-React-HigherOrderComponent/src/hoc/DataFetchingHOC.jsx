import { useEffect, useState } from "react";

const DataFetchingHOC = (WrappedComponent, url) => {
  return function EnhancedComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      setLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, [url]);

    return <WrappedComponent data={data} loading={loading} error={error} />;
  };
};

export default DataFetchingHOC;
