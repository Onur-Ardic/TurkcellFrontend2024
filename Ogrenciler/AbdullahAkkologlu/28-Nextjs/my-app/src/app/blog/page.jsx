import BlogCard from "@/components/BlogCard";
import React from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blogs = async () => {
  const data = await getData();
  return (
    <div>
      {data.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
export default Blogs;
