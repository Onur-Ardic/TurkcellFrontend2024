"use client";
import { useEffect, useState } from "react";
<<<<<<< Updated upstream
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
=======

const BlogPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
>>>>>>> Stashed changes
      });
  }, []);

  return (
    <div>
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
    </div>
  );
};

export default BlogPage;
