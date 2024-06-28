import React from "react";
import { fetchPostById, fetchPhotos, fetchPosts } from "../api";
const Post = async ({ id }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const post = await fetchPostById(id);
  const photo = await fetchPhotos();
  const photourl = photo[(id - 1) % photo.length].download_url;

  return (
    <div className="post-container">
      {photo && <img className="post-photo" src={photourl} alt={post.title} />}
      <hr />
      <h1 className="post-title">{post.title}</h1>
      <p className="post-body">{post.body}</p>
    </div>
  );
};

export default Post;
