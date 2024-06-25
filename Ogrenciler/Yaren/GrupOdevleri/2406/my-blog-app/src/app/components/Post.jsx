"use client";

import React, { useEffect, useState } from "react";
<<<<<<< Updated upstream
import { fetchPostById, fetchPhotos } from "../api";

const Post = ({ id }) => {
  const [post, setPost] = useState(null);
  const [photo, setPhoto] = useState(null);
=======
import { useRouter } from "next/router";
import { fetchPostById } from "../api";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
>>>>>>> Stashed changes

  useEffect(() => {
    if (id) {
      const getPost = async () => {
        const postData = await fetchPostById(id);
<<<<<<< Updated upstream
        const photosData = await fetchPhotos();
        const photoUrl = photosData[id % photosData.length].download_url;
        setPost(postData);
        setPhoto(photoUrl);
=======
        setPost(postData);
>>>>>>> Stashed changes
      };
      getPost();
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
<<<<<<< Updated upstream
    <div className="post-container">
      {photo && <img className="post-photo" src={photo} alt={post.title} />}
      <h1 className="post-title">{post.title}</h1>
      <p className="post-body">{post.body}</p>
=======
    <div>
      <h1 className="title">{post.title}</h1>
      <p>{post.body}</p>
>>>>>>> Stashed changes
    </div>
  );
};

export default Post;
