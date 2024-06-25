"use client";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

const BlogPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data.slice(20, 40));
        console.log(data);
      });
  }, []);

  return (
    <div>
      BLogid
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <Link
              href={`/blog/${item.id}`}
              className="col-12 col-sm-6 col-md-3 card g-5 p-3"
              key={item.id}
            >
              <img src={`https://picsum.photos/id/${item.id}/200/300`} />
              <div className="text-center mt-3">{item.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
