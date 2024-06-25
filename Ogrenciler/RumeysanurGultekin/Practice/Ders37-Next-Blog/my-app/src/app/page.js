'use client';

import BlogCard from "./components/BlogCard";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const url = `https://jsonplaceholder.typicode.com/posts?_limit=20`;

export const get = async () => {
  const response = await fetch(url, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error("404 not found");
  }
  const result = await response.json();
  return result;
};

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await get();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div >
          {data.map(post => (
           <a href="/blog/`{post.id}`"> <BlogCard key={post.id} post={post} /></a>
          ))}
        </div>
      )}
    </main>
  );
}
