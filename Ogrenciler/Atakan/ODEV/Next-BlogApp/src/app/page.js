"use client";
import Request from "./request";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";


export default function Home() {
  const [posts,setPosts] = useState([]);
  const request =async () => {
    const response = await Request.get("https://jsonplaceholder.typicode.com/posts?_start=0&_end=10");
    return setPosts(response);
  }
  useEffect(()=>{
    request();
  },[]);

  return (
    <main className="bg-dark">
      <h1 className="text-center py-3 text-light">POSTS</h1>
      <div className="container mx-auto my-3 row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2">
        {
          posts && posts.map((post,index)=> (
            <PostCard className="col" key={index} post={post}></PostCard>
          ))
        }
      </div>
      
    </main>
  );
}
