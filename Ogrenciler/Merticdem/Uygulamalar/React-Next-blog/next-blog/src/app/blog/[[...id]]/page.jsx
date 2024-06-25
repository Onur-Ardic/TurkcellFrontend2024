"use client";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      BLogid
      {data.map((item) => (
        <div key={item.id}>
          <img
            src={`https://picsum.photos/id/${Math.floor(
              Math.random() * 1000
            )}/200/300`}
          />
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
