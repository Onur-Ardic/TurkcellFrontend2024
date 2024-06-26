import React from "react";
import Post from "../../components/Post";

const BlogPost = ({ params }) => {
  const { id } = params;
  return <Post id={id} />;
};

export default BlogPost;
