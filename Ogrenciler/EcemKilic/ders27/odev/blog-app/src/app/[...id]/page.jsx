"use client";
import Image from "next/image";
import { useState } from "react";

const BlogItem = ({params}) => {

  const[blog, setBlog] = useState({})
  fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((response) => response.json()).then((data) => setBlog(data)).catch((err) => console.log(err))

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
      <Image src={"https://picsum.photos/200/300"} alt={blog.title} width={200} height={300}/>
    </div>
  )
}

export default BlogItem;