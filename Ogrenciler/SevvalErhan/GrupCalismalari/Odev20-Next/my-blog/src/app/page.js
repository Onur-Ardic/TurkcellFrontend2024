<<<<<<< Updated upstream
'use client';
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Request from "../api/request";
import Card from "../components/Card";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await Request();
      setPosts(response);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <main className={styles.main}>
      <h1>Blog</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
=======
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      
>>>>>>> Stashed changes
    </main>
  );
}
