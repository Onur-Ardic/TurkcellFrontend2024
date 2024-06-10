import React, { useEffect, useState } from "react";
import Card from "../components/card";
const Entertainment = () => {
  const [data, setData] = useState([]);
  async function getNews() {
    await fetch(
      `https://newsapi.org/v2/top-headlines?country=tr&category=general`,
      {
        method: "GET",
        headers: {
          Authorization: "apikey 5c66f497a1074197b3d427400e130535",
        },
      }
    )
      .then((data) => data.json())
      .then((response) => {
        setData(response.articles);
      })
      .catch((e) => alert(e.message));
  }
  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="row mx-0 gap-3 justify-content-center">
      {data.length > 0 ? (
        data.map((item, index) => <Card key={index} data={item} />)
      ) : (
        <p className="d-flex justify-content-center align-items-center vh-100 fs-1">
          Loading...
        </p>
      )}
    </div>
  );
};

export default Entertainment;
