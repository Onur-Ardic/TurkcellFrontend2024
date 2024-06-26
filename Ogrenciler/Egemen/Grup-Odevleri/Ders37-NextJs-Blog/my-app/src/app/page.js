'use client';

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillPosts } from "./redux/slices/blogSlice";

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

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  const fetchData = async () => {
    try {
      const data = await get();
      setData(data);
      dispatch(fillPosts(data));
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <main className={styles.main}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {data.map(post => (
            <li key={post.id}>
              <img src="https://picsum.photos/id/54/500/333" alt="Random" />
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
