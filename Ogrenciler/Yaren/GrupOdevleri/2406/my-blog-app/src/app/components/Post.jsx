"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchPostById } from "../api";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const getPost = async () => {
        const postData = await fetchPostById(id);
        setPost(postData);
      };
      getPost();
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="title">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
