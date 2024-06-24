"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchPosts, fetchPhotos } from "../api";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPostsAndPhotos = async () => {
      const postsData = await fetchPosts();
      const photosData = await fetchPhotos();
      setPosts(postsData);
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
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
