import React, { useEffect, useState } from "react";

const Technology = () => {
  const [data, setData] = useState(null);
  async function getNews() {
    await fetch(
      `https://newsapi.org/v2/top-headlines?country=tr&category=technology`,
      {
        method: "GET",
        headers: {
          Authorization: "apikey 5c66f497a1074197b3d427400e130535",
        },
      }
    )
      .then((data) => data.json())
      .then((response) => {
        setData(response);
      })
      .catch((e) => alert(e.message));
  }
  useEffect(() => {
    getNews();
  }, []);

  return <div>technology {console.log(data)}</div>;
};

export default Technology;
