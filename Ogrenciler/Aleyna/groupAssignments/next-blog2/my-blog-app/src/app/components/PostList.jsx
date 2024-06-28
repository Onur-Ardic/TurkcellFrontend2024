import React from "react";
import { fetchPosts, fetchPhotos } from "../api";

const PostList = async ({}) => {
  const posts = await fetchPosts();
  const photos = await fetchPhotos();

  return (
    <div>
      <h1 className="title">Blog Posts</h1>
      <div className="list-group">
        {posts.slice(0, 20).map((post, index) => (
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
