'use client';

import { useEffect } from "react";

const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`;

export const get = async () => {
  const response = await fetch(url, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error("404 not found");
  }
  const result = await response.json();
  return result;
};

const BlogItem = ({params}) => {
  const fetchData = async () => {
    try {
      const data = await get();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <img src={`https://picsum.photos/id/${params.id}/500/333`}/>
      <h1>başlık</h1>
    </div>
  )
}

export default BlogItem;