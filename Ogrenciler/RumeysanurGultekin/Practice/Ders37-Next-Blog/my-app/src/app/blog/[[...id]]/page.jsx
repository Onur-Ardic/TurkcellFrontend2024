'use client';

import { useEffect, useState } from "react";

const BlogItem = ({ params }) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  const readBlog = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
      if (!response.ok) {
        throw new Error('Post not found');
      }
      const data = await response.json();
      setPost(data);
      setError(null);
    } catch (error) {
      setPost(null);
      setError(error.message);
    }
  };

  useEffect(() => {
    readBlog();
  }, [params.id]);

  return (
    <div>
      {error && <p>{error}</p>}
      {post ? (
        <div>
          <img src={`https://picsum.photos/id/${params.id}/500/333`} alt="Blog Image"/>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogItem;
