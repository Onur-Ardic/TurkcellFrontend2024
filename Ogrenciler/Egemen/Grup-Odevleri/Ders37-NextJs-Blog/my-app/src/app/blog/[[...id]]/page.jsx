'use client';

import { useEffect } from "react";
import { useSelector } from "react-redux";

const BlogItem = ({params}) => {
  const posts = useSelector((state) => state.post.posts);
  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <div>
      <img src={`https://picsum.photos/id/${params.id}/500/333`}/>
      <h1>{posts.title}</h1>
    </div>
  )
}

export default BlogItem;