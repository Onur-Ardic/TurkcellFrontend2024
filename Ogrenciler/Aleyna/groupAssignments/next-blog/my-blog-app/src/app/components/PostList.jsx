"use client";

import React, { useEffect, useState } from "react";
import { fetchPosts, fetchPhotos } from "../api";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPostsAndPhotos = async () => {
      const postsData = await fetchPosts();
      const photosData = await fetchPhotos();
      setPosts(postsData.slice(0, 20));
      setPhotos(photosData);
    };
    getPostsAndPhotos();
  }, []);

  if (posts == "") {
    return (
      <div className="loading-container">
        <img src="/loading.gif" alt="Loading..." className="loading-image" />
      </div>
    );
  }

  return (
    <div>
      <h1 className="title">Blog Posts</h1>
      <div className="list-group">
        {posts.map((post, index) => (
          <div className="card" key={post.id}>
            <a href={`/blog/${post.id}`}>
              <img
                className="card-img"
                src={photos[index % photos.length].download_url}
                alt={post.title}
              />
              <div className="card-content">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-description">{post.body}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
