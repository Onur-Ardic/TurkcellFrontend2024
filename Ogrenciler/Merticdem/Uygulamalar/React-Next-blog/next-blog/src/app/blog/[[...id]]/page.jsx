"use client";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

const BlogPage = ({ params }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(params.id);
      });
  }, []);

  return (
    <div>
      <div className="container text-center mt-3">
        <Link href={"/"}>ANASAYFA</Link>
        <div className="imageContainer">
          <img src={`https://picsum.photos/id/${data.id}/200/300`} />
        </div>
        <div className="contentContainer">
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
