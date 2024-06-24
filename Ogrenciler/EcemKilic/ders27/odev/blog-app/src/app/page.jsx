"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import BlogCard from "@/components/BlogCard";

export default function Home() {


  const[blogs, setBlogs] = useState([])  

  fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then((data) => setBlogs(data)).catch((err) => console.log(err))


  return (
    <main className={styles.main}>
      {blogs.map(blog => <BlogCard blog={blog} key={blog.id} />)}
    </main>
  );
}
