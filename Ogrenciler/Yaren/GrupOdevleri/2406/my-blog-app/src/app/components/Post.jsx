"use client";

import React, { useEffect, useState } from "react";
import { fetchPostById, fetchPhotos } from "../api";

const Post = ({ id }) => {
  const [post, setPost] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (id) {
      const getPost = async () => {
        const postData = await fetchPostById(id);
        const photosData = await fetchPhotos();
        const photoUrl = photosData[(id-1) % photosData.length].download_url;
        setPost(postData);
        setPhoto(photoUrl);
      };
      getPost();
    }
  }, [id]);

  if (!post) {
    return (
      <div className="loading-container">
           <img src="/loading.gif" alt="Loading..." className="loading-image" />
      </div>
    );
  }

  return (
    <div className="post-container">
      {photo && <img className="post-photo" src={photo} alt={post.title} />}
      <h1 className="post-title">{post.title}</h1>
      <p className="post-body">{post.body}</p>
    </div>
  );
};

export default Post;
