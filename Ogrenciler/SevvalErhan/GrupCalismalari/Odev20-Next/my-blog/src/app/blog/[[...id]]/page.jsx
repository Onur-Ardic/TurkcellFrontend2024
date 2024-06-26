'use client';
import { useEffect, useState } from "react";
import { RequestById } from '@/api/request';
import Link from "next/link";

const BlogItem = ({ params }) => {
  const [postDetail, setPostDetail] = useState([]);

  const getPostDetails = async (id) => {
    try {
      const response = await RequestById(id);
      setPostDetail(response);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPostDetails(params.id);
  }, []);


  return (
    <>
    <Link href='/'>Back</Link>
    <img src={`https://picsum.photos/200/300?random=${postDetail.id}`} alt={postDetail.title} className='w-100 rounded-top' height={300} />
    <h1> {postDetail.title}</h1>
    <p>{postDetail.body}</p>
    </>
  )
}

export default BlogItem;