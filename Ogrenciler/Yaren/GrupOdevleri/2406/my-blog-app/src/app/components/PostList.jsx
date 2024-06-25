"use client";

import React, { useEffect, useState } from "react";
<<<<<<< Updated upstream
=======
import Link from "next/link";
>>>>>>> Stashed changes
import { fetchPosts, fetchPhotos } from "../api";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPostsAndPhotos = async () => {
      const postsData = await fetchPosts();
      const photosData = await fetchPhotos();
<<<<<<< Updated upstream
      setPosts(postsData.slice(0, 20)); 
=======
      setPosts(postsData);
>>>>>>> Stashed changes
      setPhotos(photosData);
    };
    getPostsAndPhotos();
  }, []);

  return (
    <div>
      <h1 className="title">Blog Posts</h1>
      <ul className="list-group">
        {posts.map((post, index) => (
          <li key={post.id} className="list-group-item">
            <img
              src={photos[index % photos.length].download_url}
              alt={post.title}
            />
<<<<<<< Updated upstream
            <a href={`/blog/${post.id}`} target="_blank" rel="noopener noreferrer">{post.title}</a>
=======
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
>>>>>>> Stashed changes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
